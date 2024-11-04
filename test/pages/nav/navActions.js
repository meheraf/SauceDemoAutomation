const navLocator=require("./navLocators");


class NavActions{
    async btnMenu(){
        await navLocator.hamburgerIcon.click();
    }
    async btnAppState(){
        await navLocator.resetAppState.click();
    }
    async btnMenuClose(){
        await navLocator.menuClose.click();
    }
    async btnSortByZtoA(){
        await navLocator.sortByZtoA.click();
    }
    async btnLogOut(){
        await navLocator.logOut.click();
    }
    
}
module.exports=new NavActions();
