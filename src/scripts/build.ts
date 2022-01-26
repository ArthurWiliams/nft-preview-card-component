import { emptyDir, copy } from "fs-extra";

import buildCss from "./build-css";
import buildHtml from "./build-html";
import {
    HTML_ENTRY,
    HTML_OUTPUT,
    CSS_ENTRY,
    CSS_OUTPUT,
    ASSETS_DIRECTORY,
    ASSETS_OUTPUT,
    BUILD_DIRECTORY
} from "./paths";

async function build() {
    await emptyDir(BUILD_DIRECTORY);

    await copy(ASSETS_DIRECTORY, ASSETS_OUTPUT);

    Promise.all([
        buildHtml(HTML_ENTRY, HTML_OUTPUT),
        buildCss(CSS_ENTRY, CSS_OUTPUT)
    ]);
}

if (require.main === module) {
    build().catch((error) => console.log(error));
}

export default build;
