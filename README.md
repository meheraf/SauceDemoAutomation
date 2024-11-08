# Sauce Demo Site Automation
[Sauce Demo](https://www.saucedemo.com/) website's login & add to cart & checkout journey Automation with some verifications. By using WebDriverIO framework with POM.

## User Stories
1. Login [Sauce Demo](https://www.saucedemo.com/) with locked_out_user
    - login with locked_out_user
    - verify the error message

2. Login [Sauce Demo](https://www.saucedemo.com/) with standard_user
    - login with standard_user
    - reset App State
    - add three items to the cart
    - navigate to the final checkout page
    - verify all the product's name
    - verify the total price
    - complete Checkout with Success Message
    - go back to home, clear app state then logout

3. Login [Sauce Demo](https://www.saucedemo.com/) with performance_glitch_user
    - login with performance_glitch_user
    - reset App State
    - filter product by name (Z to A)
    - add one items to the cart
    - navigate to the final checkout page
    - verify the product's name
    - verify the total price
    - complete Checkout with Success Message
    - go back to home, clear app state then logout

## Technology
WebDriverIO, POM, Allure Reporter, Mocha

## Dev Setup

### Environment Setup
Clone the repository to your local computer
```
git clone https://github.com/meheraf/SauceDemoAutomation.git
```
Navigate to SauceDemoSiteAutomation directory
```
cd SauceDemoAutomation
```
Use the package manager `npm` to install dependencies:
```
npm install
```

### Run Automation & Report Generate
Run test suite separately
```
npm run runSeperately
```
Run test suite altogether in sequential way
```
npm run runTogether
```
Generate Allure Report
```
npm run getReport
```

