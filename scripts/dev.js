"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const browser_sync_1 = require("browser-sync");
const build_1 = __importDefault(require("./build"));
const build_css_1 = __importDefault(require("./build-css"));
const paths_1 = require("./paths");
async function cssCallBack(event) {
    if (event === "change") {
        await (0, build_css_1.default)(paths_1.CSS_ENTRY, paths_1.CSS_OUTPUT);
        SERVER.reload();
    }
}
const SERVER = (0, browser_sync_1.create)();
SERVER.watch(paths_1.HTML_ENTRY, undefined, async function (event) {
    if (event === "change") {
        await (0, build_1.default)();
        SERVER.reload();
    }
});
SERVER.watch(paths_1.CSS_ENTRY, undefined, cssCallBack);
SERVER.watch("./tailwind.config.js", undefined, cssCallBack);
(async function () {
    await (0, build_1.default)();
    SERVER.init({
        server: paths_1.BUILD_DIRECTORY,
        watchOptions: {
            awaitWriteFinish: true
        }
    });
})();
