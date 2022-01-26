import { readFile, outputFile } from "fs-extra";

import postcss from "postcss";

import { CSS_ENTRY, CSS_OUTPUT } from "./paths";

const IS_DEV_ENV = process.env.NODE_ENV === "production" ? false : true;

const PLUGINS = [
    require("tailwindcss"),
    require("postcss-preset-env"),
    require("autoprefixer")
];

if (!IS_DEV_ENV) {
    PLUGINS.push(require("cssnano"));
}

async function buildCss(cssPath: string, dest: string) {
    const CSS = await readFile(cssPath);

    const { css: PROCESSED_CSS } = await postcss(PLUGINS).process(
        CSS.toString(),
        {
            from: CSS_ENTRY,
            to: CSS_OUTPUT,
            map: IS_DEV_ENV ? true : false
        }
    );

    await outputFile(dest, PROCESSED_CSS);
}

if (require.main === module) {
    buildCss(CSS_ENTRY, CSS_OUTPUT)
        .then(() => console.log("CSS built"))
        .catch((error) => console.log(error));
}

export default buildCss;
