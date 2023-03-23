const fs = require("fs");
const glob = require("glob");
const yaml = require("yaml");

const langs = ["en", "cn"];

const getMetaData = function (mdFile) {
	const buffer = fs.readFileSync(mdFile);
	const fileContent = buffer.toString();
	let metadata = {};

	const metas = /---(.*?)---/s.exec(fileContent);
	if (metas.length > 0) {
		const clearMeta = metas[0].replaceAll("---", "");
		try {
			metadata = yaml.parse(clearMeta);
		} catch ($e) {}
	}

	return metadata;
};

// main process

for (const lang of langs) {
	const folder = `./src/contents/posts/${lang}`;

	const postsJson = [];

	fs.readdirSync(folder)
		.reverse()
		.forEach((file) => {
			const mdFiles = glob.globSync(`${folder}/${file}/*.md`);
			if (mdFiles.length > 0) {
				const mdFile = mdFiles[0];

				const metadata = getMetaData(mdFile);

				const imgFiles = glob.globSync(`${folder}/${file}/*.{jpeg,jpg,png}`);

				if (imgFiles.length > 0) {
					featuredImgPath = imgFiles[0];
					const folderRelative = `${folder}/${file}/`.replace("./", "");
					const featuredImageName = featuredImgPath.replace(folderRelative, "");
					fs.copyFile(
						featuredImgPath,
						`public/img/posts/featuredImg/${featuredImageName}`,
						(err) => {}
					);
				}

				postsJson.push({
					title: metadata.title || "",
					author: metadata.author || "",
					tags: metadata.tags || [],
					alias: file,
					image: metadata.featuredImage,
				});
			}
		});

	fs.writeFileSync(
		`./src/contents/posts.${lang}.json`,
		JSON.stringify(postsJson, null, 2)
	);
}
