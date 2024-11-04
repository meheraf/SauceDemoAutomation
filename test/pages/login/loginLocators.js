class LoginLocators{

    get userNameInput(){
        return $("//input[@id='user-name']");
    }
    get passwordInput(){
        return $("//input[@id='password']");
    }
    get loginButton(){
        return $("//input[@id='login-button']");
    }
    get errorMsg(){
        return $("//h3[@data-test='error']");
    }
    get logoutButton(){
        return $("//a[@id='logout_sidebar_link']");
    }
}
module.exports=new LoginLocators();