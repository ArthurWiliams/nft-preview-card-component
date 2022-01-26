"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const postcss_1 = __importDefault(require("postcss"));
const paths_1 = require("./paths");
const IS_DEV_ENV = process.env.NODE_ENV === "production" ? false : true;
const PLUGINS = [
    require("tailwindcss"),
    require("postcss-preset-env"),
    require("autoprefixer")
];
if (!IS_DEV_ENV) {
    PLUGINS.push(require("cssnano"));
}
async function buildCss(cssPath, dest) {
    const CSS = await (0, fs_extra_1.readFile)(cssPath);
    const { css: PROCESSED_CSS } = await (0, postcss_1.default)(PLUGINS).process(CSS.toString(), {
        from: paths_1.CSS_ENTRY,
        to: paths_1.CSS_OUTPUT,
        map: IS_DEV_ENV ? true : false
    });
    await (0, fs_extra_1.outputFile)(dest, PROCESSED_CSS);
}
if (require.main === module) {
    buildCss(paths_1.CSS_ENTRY, paths_1.CSS_OUTPUT)
        .then(() => console.log("CSS built"))
        .catch((error) => console.log(error));
}
exports.default = buildCss;
