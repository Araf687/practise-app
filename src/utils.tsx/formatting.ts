const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand", "Million", "Billion"];

const numberToWords = (num: number): string => {
  if (num === 0) return "Zero";

  let word = "";

  let i = 0;
  while (num > 0) {
    if (num % 1000 !== 0) {
      word = helper(num % 1000) + thousands[i] + " " + word;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return word.trim();
};

const helper = (num: number): string => {
  if (num === 0) return "";
  else if (num < 10) return units[num] + " ";
  else if (num < 20) return teens[num - 10] + " ";
  else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
  else return units[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
};

export  {numberToWords};
