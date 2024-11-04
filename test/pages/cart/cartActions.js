const cartLocator=require("./cartLocators");
const utility=require("../utilities/utility");

class CartActions{
    async selectProductName(itemIndex){
        return await cartLocator.selectProductName(itemIndex).getText();
    }
    async selectProductPrice(itemIndex){
        const productPriceText= await cartLocator.selectProductPrice(itemIndex).getText();
        const productPriceNumber=await utility.convertTextToNumber(productPriceText);
        return productPriceNumber;
    }
    async btnAddToCart(itemIndex){
        await cartLocator.addToCart(itemIndex).click();
    }

};
module.exports=new CartActions();
