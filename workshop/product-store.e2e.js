describe('Product Store', () => {
    beforeEach(async () => {
        await browser.setWindowSize(1680, 1024);
        return browser.url('https://www.demoblaze.com/index.html');
    });
    it('Scenario 1 - Open Home page', async () => {
        const isCarouselDisplayed = await $('[id="carouselExampleIndicators"]').isDisplayed();
        await expect(isCarouselDisplayed).toBe(true);
        return browser.pause(4000);
    });

    it('Scenario 2 - Register user', async () => {
        // User id should be incremented before each test
        const username = 'zabielin.iegor+9886@gmail.com';
        const password = 'test1234';

        await $('=Sign up').click();
        // show without this first
        let userNameField = $('[id="sign-username"]');
        await userNameField.waitForDisplayed();
        //

        await $('[id="sign-username"]').setValue(username);
        await $('[id="sign-password"]').setValue(password);
        // Pay attention on AND + class specific
        await $('button[class*=btn-primary][onclick*=register]').click();

        await browser.pause(1000);

        let alert = await browser.getAlertText();
        await expect(alert).toEqual('Sign up successful.');

        await browser.acceptAlert();
        const isAlertOpen = await browser.isAlertOpen();

        await expect(isAlertOpen).toBe(false);
        const isSignUpDialogIsShown = await $('[id="signInModal"]').isDisplayed();
        await expect(isSignUpDialogIsShown).toBe(false);
        return browser.pause(4000);
    });

    it('Scenario 3 - Sign in as registered user', async () => {
        const userName = 'zabielin.iegor+9881@gmail.com';

        await $('=Log in').click();

        // show without this
        let logInModal = $('[id="logInModal"]');
        await logInModal.waitForDisplayed();
        // show without this

        await $('[id="loginusername"]').setValue(userName);
        await $('[id="loginpassword"]').setValue('test1234');
        // Pay attention on chaining
        await logInModal.$('button.btn-primary').click();

        const currentUserName = $('[id="//*[@id="nameofuser"]');
        await currentUserName.waitForDisplayed({timeout: 4000});
        const currentUserNameText = await currentUserName.getText();
        return expect(currentUserNameText).toEqual('Welcome zabielin.iegor+9881@gmail.com');
    });

    it('Scenario 4 - Add product to cart', async () => {
        const productName = 'Samsung galaxy s6';

        await $(`=${productName}`).click();

        let productPicture = $('[id="myCarousel-2"]');
        await productPicture.waitForDisplayed();
        await $('.btn-success').click();

        await browser.pause(4000);
        let alert = await browser.getAlertText();
        await expect(alert).toEqual('Product added.');
        await browser.acceptAlert();

        await browser.pause(4000);
        await $('=Cart').click();

        let productInCart = $('tr.success');
        await productInCart.waitForDisplayed();

        // Pay attention on table, which is loading more than rest of elements
        // Explain about the link text and tag with text
        const isProductInCartDisplayed = await $(`td=${productName}`).isDisplayed();
        await expect(isProductInCartDisplayed).toBe(true);
    });
});
