const loginAction =require("../pages/login/loginActions");

var username="";
var password="secret_sauce";

describe("sauce demo site locked_out_user journey for Q1",()=>{
    it("Should give error while try to login with locked_out_user", async ()=>{
        username="locked_out_user";
                
        await loginAction.enterUsername(username);
        await loginAction.enterPassword(password);
        await loginAction.clickLoginButton();
        await browser.pause(5000);
        const expectedErrorMsg="Epic sadface: Sorry, this user has been locked out.";
        const actualErrorMsg= await loginAction.errorMessage();
        expect(expectedErrorMsg).toEqual(actualErrorMsg);
        await browser.pause(4000);
    });
    
});