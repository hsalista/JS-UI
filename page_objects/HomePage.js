import {BasePage} from './BasePage';
import { SignUpModal } from './SignUpModal';

export class HomePage extends BasePage{
    constructor() {
        super('Home Page', 'index.html');
    }

    get carousel() { return $('[id="carouselExampleIndicators"]'); }
    get signUpLink() { return $('=Sign up'); }

    async clickSignUpLink() {
        await this.signUpLink.click();
        return new SignUpModal();
    }
}
