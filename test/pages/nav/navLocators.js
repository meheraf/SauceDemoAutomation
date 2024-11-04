class NavLocators{

    get hamburgerIcon(){
        return $("//button[@id='react-burger-menu-btn']")
    }
    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get menuClose(){
        return $("//button[@id='react-burger-cross-btn']");
    }
    get sortByZtoA(){
        return $("//select[@class='product_sort_container']//option[@value='za']")
    }
    get logOut(){
        return $("//a[@id='logout_sidebar_link']");
    }
    
};
module.exports=new NavLocators();
