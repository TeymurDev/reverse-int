module.exports = function reverse (n) {
   let numberArray = n.toString().split('').map(Number);
   let reverseArray = [];

   for(let i = numberArray.length - 1; i >= 0; i = i - 1) {

      reverseArray.push(numberArray[i]);

   }

   let reverseNum = reverseArray.join('');

return Math.abs(parseInt(reverseNum) * Math.sign(n));

}