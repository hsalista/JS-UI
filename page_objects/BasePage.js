export class BasePage {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }

    open() {
        return browser.url(this.url);
    }
}
