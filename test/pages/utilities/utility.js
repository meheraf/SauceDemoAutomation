class Utility {
    async convertTextToNumber(text) {
      const value = parseFloat(text.replace(/[$,abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ ]/g, ""));
      return value;
    }
  
    async randomNumber(max, min) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomValue;
    }
  
    async createRandomString(length) {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    }
    async vatCalculator(totalPrice){
        const vatAmount=(Math.ceil((totalPrice*0.08)*100))/100;
        return vatAmount;
    }
  }
  
 module.exports = new Utility();
