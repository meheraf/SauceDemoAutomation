const loginLocator=require("./loginLocators");


class LoginAction{
    async enterUsername(username){
        await loginLocator.userNameInput.setValue(username);
    }
    async enterPassword(password){
        await loginLocator.passwordInput.setValue(password);
    }
    async clickLoginButton(){
        await loginLocator.loginButton.click();

    }
    async errorMessage(){
        const errorMsg = await loginLocator.errorMsg.getText();
        return errorMsg;
    }
    async clickLogoutButton(){
        await loginLocator.logoutButton.click();
    }

}
module.exports=new LoginAction();