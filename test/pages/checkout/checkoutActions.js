const checkoutLocator=require("./checkoutLocators");
const utility=require("../utilities/utility");

class CheckoutActions{
    async btnCartIcon(){
        await checkoutLocator.cartButton.click();
    }
    async btnCheckout(){
        await checkoutLocator.checkoutButton.click();
    }
    async firstName(fName){
        await checkoutLocator.firstNameInput.setValue(fName);
    }
    async lastName(lName){
        await checkoutLocator.lastNameInput.setValue(lName)
    }
    async postalCode(postCode){
        await checkoutLocator.postalCodeInput.setValue(postCode);
    }
    async btnContinue(){
        await checkoutLocator.continueButton.click();
    }
    async cartItemName(itemIndex){
        return await checkoutLocator.cartItemName(itemIndex).getText();
    }
    async totalPrice(){
        const totalPriceText= await checkoutLocator.totalPrice.getText();
        const totalPriceNumber=await utility.convertTextToNumber(totalPriceText);
        return totalPriceNumber;
    }
    async btnFinish(){
        await checkoutLocator.finishButton.click();
    }
    async successMsg(){
        return await checkoutLocator.successMessage.getText();
    }
    async btnBackHome(){
        await checkoutLocator.backToHome.click();
    }

}
module.exports=new CheckoutActions();
