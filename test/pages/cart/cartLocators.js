class CartLocators{
    selectProductName(itemIndex){
        return $(`(//div[@class='inventory_item'])[${itemIndex}]//div[@class='inventory_item_name ']`);
    }
    selectProductPrice(itemIndex){
        return $(`(//div[@class='inventory_item'])[${itemIndex}]//div[@class='inventory_item_price']`);
    }
    addToCart(itemIndex){
        return $(`(//div[@class='inventory_item'])[${itemIndex}]//button[contains(@text,'')]`);
    }

};
module.exports=new CartLocators();
