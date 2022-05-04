import {HomePage} from '../page_objects/HomePage';

let homePage = new HomePage();

describe('Product Store with Page Objects', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1680, 1024);
        return homePage.open();
    });

    it('Scenario 1 - Open Home page', async () => {
        const isCarouselDisplayed = await homePage.carousel.isDisplayed();
        await expect(isCarouselDisplayed).toBe(true);
        return browserPause();
    });

    it('Scenario 2 - Register user', async () => {
        // User id should be incremented before each test
        const username = 'zabielin.iegor+9886@gmail.com';
        const password = 'test1234';

        const signUpDialog = await homePage.clickSignUpLink();

        await signUpDialog.waitIsOpened();
        await signUpDialog.fill(username, password);
        await signUpDialog.signUp.click();
        await browserPause();

        await verifyAlertText('Sign up successful.');
        await browser.acceptAlert();

        await verifyAlertIsNotOpened();
        await expect(await signUpDialog.isDisplayed()).toBe(false);
        await browserPause();
    });
});

function browserPause(){ return browser.pause(4000); }

async function verifyAlertText(){
    await browser.pause(1000);
    let alert = await browser.getAlertText();
    return expect(alert).toEqual('Sign up successful.');
}

async function verifyAlertIsNotOpened(){
    await browser.pause(1000);
    const isAlertOpen = await browser.isAlertOpen();
    await expect(isAlertOpen).toBe(false);
}
