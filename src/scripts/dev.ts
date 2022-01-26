import { create as createServer } from "browser-sync";

import build from "./build";
import buildCss from "./build-css";
import { HTML_ENTRY, CSS_ENTRY, CSS_OUTPUT, BUILD_DIRECTORY } from "./paths";

async function cssCallBack(event: string) {
    if (event === "change") {
        await buildCss(CSS_ENTRY, CSS_OUTPUT);

        SERVER.reload();
    }
}

const SERVER = createServer();

SERVER.watch(HTML_ENTRY, undefined, async function (event) {
    if (event === "change") {
        await build();

        SERVER.reload();
    }
});

SERVER.watch(CSS_ENTRY, undefined, cssCallBack);

SERVER.watch("./tailwind.config.js", undefined, cssCallBack);

(async function () {
    await build();

    SERVER.init({
        server: BUILD_DIRECTORY,
        watchOptions: {
            awaitWriteFinish: true
        }
    });
})();
