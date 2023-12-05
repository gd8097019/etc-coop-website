<template>
    <img id="search" class="search-icon" src="@/assets/images/search.svg" @click="showModal"  />
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div id="autocomplete"></div>
                    <div id="autocomplete-results"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { h, ref, Fragment, render, onMounted } from 'vue';
import algoliasearch from 'algoliasearch/lite';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
export default {
    props: ['lang'],
    setup(props) {

        const showModal = () => {
            var els = document.querySelectorAll('.aa-Autocomplete');
            if (els.length > 1) els[0].remove();

            var el = document.getElementById('exampleModal');
            el.className += ' show';
            el.style.cssText = 'display: block;';
            document.body.style.cssText = 'overflow: hidden; padding-right: 0px;';
            var elemDiv = document.createElement('div');
            elemDiv.className = 'modal-backdrop fade show';
            document.body.appendChild(elemDiv);
            document.querySelector('.modal').onclick = (e) => {
                e.target.id == 'exampleModal' && hideModal();
            }
        }

        const hideModal = () => {
            var el = document.getElementById('exampleModal');
            el.className = 'modal fade';
            el.style.cssText = 'display: none;';
            document.body.style.cssText = '';
            document.querySelector('.modal-backdrop').remove()
        }

        onMounted(() => {
            const searchClient = algoliasearch('K9ZCQAPPB3', '0d9574ae209975445a641f2d58872daa');
            autocomplete({
                container: '#autocomplete',
                panelContainer: '#autocomplete-results',
                placeholder: 'Search by Title',
                openOnFocus: true,
                getSources({ query }) {
                    return [
                        {
                            sourceId: 'posts',
                            getItems() {
                                return getAlgoliaResults({
                                    searchClient,
                                    queries: [
                                        {
                                            indexName: `posts_${props.lang || 'en'}`,
                                            query,
                                            params: {
                                                hitsPerPage: 10,
                                                attributesToSnippet: ['title:10', 'description:35'],
                                                snippetEllipsisText: '…',
                                            },
                                        },
                                    ],
                                });
                            },
                            templates: {
                                item({ item, html }) {
                                    if (item.staticPages) {
                                        return html`
                                            <a href="/${item.alias}" class="removeUnderline">
                                                <div class="px-2 py-2 border" style="color: #1b1b1b;">
                                                    <div>
                                                        <div>${item.title}</div>
                                                    </div>
                                                    <div class="pt-2 font-small el">
                                                        ${item.description}
                                                    </div>
                                                </div>
                                            </a>
                                        `;
                                    }

                                    return html`
                                        <a href="/posts/${item.alias}" class="removeUnderline">
                                            <div class="px-2 py-2 border" style="color: #1b1b1b;">
                                                <div>
                                                    <div>${item.title}</div>
                                                </div>
                                                <div class="pt-2 font-small el">
                                                    ${item.description}
                                                </div>
                                            </div>
                                        </a>
                                    `;
                                },
                                noResults({ html }) {
                                    return html`
                                        <div class="sr-wrap">
                                            <div class="sr-content">
                                                <p class="sr-title-small">
                                                    No results found. Try searching something different.
                                                </p>
                                            </div>
                                        </div>
                                    `;
                                },
                            },
                            getItemUrl({ item }) {
                                return "/posts/" + item.alias;
                            },
                        }
                    ]
                },
            });
        });

        return {
            showModal, hideModal
        }
    }
}
</script>
