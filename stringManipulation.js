function stringManipulation(str1, str2) {
  let finalWord = "";
  let firstHalf = str1.charAt(0).toUpperCase() + str1.slice(1);
  let secondHalf = str2.charAt(0).toUpperCase() + str2.slice(1);
  secondHalf = str2.replace("%", "").split("").reverse().join("");
  secondHalf = secondHalf.charAt(0).toUpperCase() + secondHalf.slice(1);

  console.log("firstHald = ", firstHalf);
  console.log("secondHalf = ", secondHalf);

  finalWord = firstHalf + secondHalf;

  //   finalWord = firstHalf.join(secondHalf);
  return finalWord;
}

const word1 = "java";
const word2 = "tpi%rcs";

console.log(stringManipulation(word1, word2));
