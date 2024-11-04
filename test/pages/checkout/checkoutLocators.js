class CheckoutLocators{

    get cartButton(){
        return $("//a[@class='shopping_cart_link']");
    }
    get checkoutButton(){
        return $("//button[@id='checkout']");
    }
    get firstNameInput(){
        return $("//input[@id='first-name']");
    }
    get lastNameInput(){
        return $("//input[@id='last-name']");
    }
    get postalCodeInput(){
        return $("//input[@id='postal-code']");
    }
    get continueButton(){
        return $("//input[@id='continue']");
    }
    cartItemName(itemIndex){
        return $(`(//div[@class='cart_item'])[${itemIndex}]//div[@class='inventory_item_name']`);
    }
    get totalPrice(){
        return $("//div[@class='summary_total_label']");
    }
    get finishButton(){
        return $("//button[@id='finish']");
    }
    get successMessage(){
        return $("//h2[@class='complete-header']");
    }
    get backToHome(){
        return $("//button[@id='back-to-products']");
    }

};
module.exports=new CheckoutLocators();
