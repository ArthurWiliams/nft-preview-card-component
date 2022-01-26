import { readFile, outputFile } from "fs-extra";

import { minify } from "html-minifier-terser";

import { HTML_ENTRY, HTML_OUTPUT } from "./paths";

async function buildHtml(htmlPath: string, dest: string) {
    const HTML = await readFile(htmlPath);

    const MINIFIED_HTML = await minify(HTML.toString(), {
        collapseWhitespace: true,
        removeComments: true
    });

    await outputFile(dest, MINIFIED_HTML);
}

if (require.main === module) {
    buildHtml(HTML_ENTRY, HTML_OUTPUT)
        .then(() => console.log("HTML Built"))
        .catch((error) => console.log(error));
}

export default buildHtml;
