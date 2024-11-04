const loginAction =require("../pages/login/loginActions");
const navAction=require("../pages/nav/navActions");
const cartAction=require("../pages/cart/cartActions");
const checkoutAction=require("../pages/checkout/checkoutActions");
const utility=require("../pages/utilities/utility");

var username="";
var password="secret_sauce";
var productInfo=[];
var fName="";
var lName="";
var postCode=0;
var totalPriceWithoutVat=0;
describe("sauce demo site standard_user journey for Q2",()=>{
    
    it("Should login with standard_user", async ()=>{
            username="standard_user";
                    
            await loginAction.enterUsername(username);
            await loginAction.enterPassword(password);
            await loginAction.clickLoginButton();          
    });
    it ("Should navigate to pages", async ()=>{
        await navAction.btnMenu();
        await navAction.btnAppState();
        await navAction.btnMenuClose();
    });
    it ("should add products to cart", async ()=>{
        for (let i=0; i<3;i++){
            productInfo[i]={};
            productInfo[i].name=await cartAction.selectProductName(i+1);
            productInfo[i].price=await cartAction.selectProductPrice(i+1);
            await cartAction.btnAddToCart(i+1);
        }
        await browser.pause(2000);
        
        
    });
    it ("Should Navigate to checkout pages", async ()=>{
        await checkoutAction.btnCartIcon();
        await checkoutAction.btnCheckout();
        await browser.pause(2000);
        fName= await utility.createRandomString(7);
        lName= await utility.createRandomString(4);
        postCode= await utility.randomNumber(9999,1111)
        await checkoutAction.firstName(fName);
        await checkoutAction.lastName(lName);
        await checkoutAction.postalCode(postCode);
        await browser.pause(2000);
        await checkoutAction.btnContinue();
        
    });
    it ("Should Verify Product Name", async ()=>{
        for (let i=0; i<3;i++){
            var expectedProductName=productInfo[i].name;
            var actualProductName=await checkoutAction.cartItemName(i+1)
            expect(expectedProductName).toEqual(actualProductName);
            totalPriceWithoutVat += await productInfo[i].price;
        }
    });
    it ("Should Verify Total Price", async ()=>{
        const vat = await utility.vatCalculator(totalPriceWithoutVat);
        const expectedTotalPrice=totalPriceWithoutVat+vat;
        const actualTotalPrice=await checkoutAction.totalPrice();
        expect(expectedTotalPrice).toEqual(actualTotalPrice);
    });
    it ("Should complete Checkout with Success Message", async ()=>{
        await checkoutAction.btnFinish();
        await browser.pause(2000);
        const expectedSuccessMsg="Thank you for your order!";
        const actualSuccessMsg= await checkoutAction.successMsg();
        expect(expectedSuccessMsg).toEqual(actualSuccessMsg);
    });
    it ("Should go back to home, clear app state, logout", async ()=>{
        await checkoutAction.btnBackHome();
        await navAction.btnMenu();
        await navAction.btnAppState();
        await navAction.btnLogOut();
        await browser.pause(2000);
        
    });
});