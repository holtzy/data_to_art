import { HTML_LIMITED_BOT_UA_RE } from './html-bots';
// Bot crawler that will spin up a headless browser and execute JS.
// By default, only googlebots are considered as DOM bots. Blow is where the regex is computed from:
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
const HEADLESS_BROWSER_BOT_UA_RE = /google/i;
export const HTML_LIMITED_BOT_UA_RE_STRING = HTML_LIMITED_BOT_UA_RE.source;
export { HTML_LIMITED_BOT_UA_RE };
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return HTML_LIMITED_BOT_UA_RE.test(userAgent);
}
export function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
export function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
}

//# sourceMappingURL=is-bot.js.map