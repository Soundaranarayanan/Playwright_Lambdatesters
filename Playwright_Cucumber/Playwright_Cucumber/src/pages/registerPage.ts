import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class RegisterPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private RegisterPageElements={
        registerLink:"//*[@id='column-right']/div/a[2]",    
        firstName:"//label[contains(text(),'First Name')]/following::input[1]",
        lastName:"//label[contains(text(),'Last Name')]/following::input[1]",
        registerEmail:"fieldset:first-of-type div > label[for='input-email'] ~ div > input",
        telephone:"//label[contains(text(), 'Telephone')]/ancestor::div[contains(@class, 'form-group')]//input",
        password:"fieldset:nth-of-type(2)>div >div>input",                  
        cofirmpass:"fieldset:nth-of-type(2)>div:nth-of-type(2) >div>input",
        newsRadioYes:"fieldset legend:contains('Newsletter') ~ div input[value='1']",
        newsRadioNo:"fieldset legend:contains('Newsletter') ~ div input[value='0']",
        // policyCheckBox:"//input[@type='checkbox' and @name='agree']",
        policyCheckBox:"#content > form > div > div > div > label",
        regiterSubmitButton:"//input[@type='submit' and @value='Continue']"
    }   
    


    async enterRegistrationDetails(firstName: string, lastName : string , email: string, telephone: string, password: string, confirmPassword: string){
        // const [firstName, lastName, email, telephone, password, confirmPassword] = arguments;
        await this.base.fill(this.RegisterPageElements.firstName, firstName);
        await this.base.fill(this.RegisterPageElements.lastName, lastName);
        await this.base.fill(this.RegisterPageElements.registerEmail, email);
        await this.base.fill(this.RegisterPageElements.telephone, telephone);
        await this.base.fill(this.RegisterPageElements.password, password);
        await this.base.fill(this.RegisterPageElements.cofirmpass, confirmPassword);
    }

    async clickOnRegister(){
        return this.base.waitAndClick(this.RegisterPageElements.registerLink);
    }

    async agreeToPrivacyPolicy(){
        return this.base.waitAndClick(this.RegisterPageElements.policyCheckBox);
    }

    async submitRegistrationForm(){
        return this.base.waitAndClick(this.RegisterPageElements.regiterSubmitButton);
    }

}