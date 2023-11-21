<template>
    <img id="search" class="search-icon" src="@/assets/images/search.svg" data-bs-toggle="modal" data-bs-target="#exampleModal" />
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
import { h, Fragment, render, onMounted } from 'vue';
import algoliasearch from 'algoliasearch/lite';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
export default {
    props: ['lang'],
    setup(props) {
        onMounted(() => {
            const searchClient = algoliasearch('7PCCLM6OLI', '5a455e80c51bc83e6b2b38611176c993');
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
                                    return html`
                                        <a href="/posts/${item.alias}" class="removeUnderline">
                                            <div class="px-2 py-2 border">
                                                ${item.title}
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
    }
}
</script>
