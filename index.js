




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    return amount * 0.10;
  }
  console.log(calculateTax(100)); // Should print 10

  function convertToUpperCase(text) {
    return text.toUpperCase();
  }
 
  function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
  }
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discount;
  }