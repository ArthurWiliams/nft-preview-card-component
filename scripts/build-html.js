"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const html_minifier_terser_1 = require("html-minifier-terser");
const paths_1 = require("./paths");
async function buildHtml(htmlPath, dest) {
    const HTML = await (0, fs_extra_1.readFile)(htmlPath);
    const MINIFIED_HTML = await (0, html_minifier_terser_1.minify)(HTML.toString(), {
        collapseWhitespace: true,
        removeComments: true
    });
    await (0, fs_extra_1.outputFile)(dest, MINIFIED_HTML);
}
if (require.main === module) {
    buildHtml(paths_1.HTML_ENTRY, paths_1.HTML_OUTPUT)
        .then(() => console.log("HTML Built"))
        .catch((error) => console.log(error));
}
exports.default = buildHtml;
