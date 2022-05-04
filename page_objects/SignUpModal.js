export class SignUpModal{
    constructor() {
        this.container = $('[id="signInModal"]');
    }

    get userName() { return $('[id="sign-username"]'); }
    get password() { return $('[id="sign-password"]'); }
    get signUp() { return this.container.$('button[class*=btn-primary]'); }

    isDisplayed() {
        return this.container.isDisplayed();
    }

    waitIsOpened() {
        return this.container.waitForDisplayed();
    }

    async fill(userName, password) {
        await this.userName.setValue(userName);
        return this.password.setValue(password);
    }
}
