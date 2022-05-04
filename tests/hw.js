const { default: $$ } = require("webdriverio/build/commands/browser/$$");

describe('Product Store', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1680, 1024);
        return browser.url('https://www.demoblaze.com/index.html');
    });
    /* it('Scenario 1 - Open Home page', async () => {
        const isCarouselDisplayed = await $('//div[@class="carousel-inner"]').isDisplayed();
        await expect(isCarouselDisplayed).toBe(true);
        return browser.pause(4000);
    }); 

    it('Scenario 2 - Register user', async () => {
        // User id should be incremented before each test
        const username = 'annasally+1000122222211@gmail.com';
        const password = 'test1234';

        const button = await $ ('//*[@class="nav-link"][text()="Sign up"]').click();
        // show without this first
        let userNameField = $('//*[@id="sign-username"]');
        await userNameField.waitForDisplayed();
        //

        await $('//*[@id="sign-username"]').setValue(username);
        await $('//*[@id="sign-password"]').setValue(password);
        // Pay attention on AND + class specific
        await $('//*[@id="signInModal"]//div[@class="modal-footer"]//button[@class="btn btn-primary"]').click();

        await browser.pause(4000);

        let alert = await browser.getAlertText();
        await expect(alert).toEqual('Sign up successful.');

        await browser.acceptAlert();
        const isAlertOpen = await browser.isAlertOpen();

        await expect(isAlertOpen).toBe(false);
        const isSignUpDialogIsShown = await $('//*[@id="signInModalLabel"]').isDisplayed();
        await expect(isSignUpDialogIsShown).toBe(false);
        return browser.pause(6000);
    }); */

    it('Scenario 3 - Sign in as registered user', async () => {
        const userName = 'annasally+1000122222211@gmail.com';

        await $('//a[text()="Log in"]').click();

        // show without this
        let logInModal = $('//*[@id="logInModal"]');
        await logInModal.waitForDisplayed();
        // show without this

        await $('//*[@id="loginusername"]').setValue(userName);
        await $('//*[@id="loginpassword"]').setValue('test1234');
        // Pay attention on chaining
        await logInModal.$('//button[text()="Log in"]').click();

        const currentUserName = $('//*[@id="nameofuser"]');
        await currentUserName.waitForDisplayed({timeout: 4000});
        const currentUserNameText = await currentUserName.getText();
        return expect(currentUserNameText).toEqual('Welcome annasally+1000122222211@gmail.com');
    });

    /* it('Scenario 4 - Add product to cart', async () => {
        const productName = 'Samsung galaxy s6';

        await $(`=${productName}`).click();

        let productPicture = $('//*[@class="item active"]');
        await productPicture.waitForDisplayed();
        await $('//a[text()="Add to cart"]').click();

        await browser.pause(6000);
        let alert = await browser.getAlertText();
        await expect(alert).toEqual('Product added.');
        await browser.acceptAlert();

        await browser.pause(6000);
        await $('//a[text()="Cart"]').click();

        let productInCart = $('//tr[@class="success"]');
        await productInCart.waitForDisplayed();
        await browser.pause(2000);

        // Pay attention on table, which is loading more than rest of elements
        // Explain about the link text and tag with text
        
        const isProductInCartDisplayed = await $(`td=${productName}`).isDisplayed();
        await expect(isProductInCartDisplayed).toBe(true);
    }); */

    it('Scenario 1 - Open Home page', async () => {
        const ButtonName = 'Home';
        await $('//a[@href="index.html"]').click();

        const isCarouselDisplayed = await $('//*[@id="carouselExampleIndicators"]').isDisplayed();
        await expect(isCarouselDisplayed).toBe(true);
        return browser.pause(4000);
    });

    it('Scenario 2 - Add laptop to cart', async () => {
        const Link = ('https://www.demoblaze.com')
        await $('//a[@href="prod.html?idp_=9"]').click();


        let productPicture = $('//*[@id="imgp"]');
        await productPicture.waitForDisplayed();
        await $('//a[text()="Add to cart"]').click();
        
        await browser.pause(4000);
        let alert = await browser.getAlertText();
        await expect(alert).toEqual('Product added.');
        await browser.acceptAlert();
    
    });
    it('Scenario 3 - Add 2 products & make', async () => {
        const ButtonName = 'Home';
        await $('//a[@href="index.html"]').click();

        const isCarouselDisplayed = await $('//*[@id="carouselExampleIndicators"]').isDisplayed();
        await expect(isCarouselDisplayed).toBe(true);
        await browser.pause(4000);

        const productName = 'Nokia lumia 1520';
        await $(`=${productName}`).click();

        let productPicture = $('//*[@id="imgp"]');
        await productPicture.waitForDisplayed();
        await $('//a[text()="Add to cart"]').click();

        await browser.pause(4000);
        let alert = await browser.getAlertText();
        await expect(alert).toEqual('Product added.');
        await browser.acceptAlert();

        await browser.pause(4000);
        await $('//a[text()="Cart"]').click();

        let productInCart = $('//tr[@class="success"]');
        await productInCart.waitForDisplayed();
        await browser.pause(2000);

    });

    


});