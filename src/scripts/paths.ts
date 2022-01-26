import { dirname, join } from "path";

const ROOT = dirname(__dirname);

const SOURCE_DIRECTORY = join(ROOT, "src");
const BUILD_DIRECTORY = join(ROOT, "dist");
const ASSETS_DIRECTORY = join(ROOT, "images");

const HTML_ENTRY = join(SOURCE_DIRECTORY, "index.html");
const HTML_OUTPUT = join(BUILD_DIRECTORY, "index.html");

const CSS_ENTRY = join(SOURCE_DIRECTORY, "css", "main.css");
const CSS_OUTPUT = join(BUILD_DIRECTORY, "css", "main.css");

const ASSETS_OUTPUT = join(BUILD_DIRECTORY, "images");

export {
    BUILD_DIRECTORY,
    ASSETS_DIRECTORY,
    HTML_ENTRY,
    HTML_OUTPUT,
    CSS_ENTRY,
    CSS_OUTPUT,
    ASSETS_OUTPUT
};
