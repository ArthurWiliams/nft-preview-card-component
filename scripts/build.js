"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const build_css_1 = __importDefault(require("./build-css"));
const build_html_1 = __importDefault(require("./build-html"));
const paths_1 = require("./paths");
async function build() {
    await (0, fs_extra_1.emptyDir)(paths_1.BUILD_DIRECTORY);
    await (0, fs_extra_1.copy)(paths_1.ASSETS_DIRECTORY, paths_1.ASSETS_OUTPUT);
    Promise.all([
        (0, build_html_1.default)(paths_1.HTML_ENTRY, paths_1.HTML_OUTPUT),
        (0, build_css_1.default)(paths_1.CSS_ENTRY, paths_1.CSS_OUTPUT)
    ]);
}
if (require.main === module) {
    build().catch((error) => console.log(error));
}
exports.default = build;
