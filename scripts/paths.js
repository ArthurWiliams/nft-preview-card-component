"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASSETS_OUTPUT = exports.CSS_OUTPUT = exports.CSS_ENTRY = exports.HTML_OUTPUT = exports.HTML_ENTRY = exports.ASSETS_DIRECTORY = exports.BUILD_DIRECTORY = void 0;
const path_1 = require("path");
const ROOT = (0, path_1.dirname)(__dirname);
const SOURCE_DIRECTORY = (0, path_1.join)(ROOT, "src");
const BUILD_DIRECTORY = (0, path_1.join)(ROOT, "dist");
exports.BUILD_DIRECTORY = BUILD_DIRECTORY;
const ASSETS_DIRECTORY = (0, path_1.join)(ROOT, "images");
exports.ASSETS_DIRECTORY = ASSETS_DIRECTORY;
const HTML_ENTRY = (0, path_1.join)(SOURCE_DIRECTORY, "index.html");
exports.HTML_ENTRY = HTML_ENTRY;
const HTML_OUTPUT = (0, path_1.join)(BUILD_DIRECTORY, "index.html");
exports.HTML_OUTPUT = HTML_OUTPUT;
const CSS_ENTRY = (0, path_1.join)(SOURCE_DIRECTORY, "css", "main.css");
exports.CSS_ENTRY = CSS_ENTRY;
const CSS_OUTPUT = (0, path_1.join)(BUILD_DIRECTORY, "css", "main.css");
exports.CSS_OUTPUT = CSS_OUTPUT;
const ASSETS_OUTPUT = (0, path_1.join)(BUILD_DIRECTORY, "images");
exports.ASSETS_OUTPUT = ASSETS_OUTPUT;
