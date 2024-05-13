//Q1.Ans
// Array of states in India
const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];


const statesWithoutVowels = statesInIndia.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));

console.log(statesWithoutVowels);


//Q2.Ans
let str = "I love my India";

let words = str.split(" ");

let reverseWords = words.reverse();

let reverseString = reverseWords.join(" ");

console.log(reverseString);


//Q3.Ans
let stri = "INDIA";

let myArr = Array.from(stri);

myArr.splice(3, 0, "O", "N", "E", "S");

let output = myArr.join("");
console.log(output);


//Q4.Ans
let vowelCnt = 0;
let consonantCnt = 0;
const chcheck = (x) => {
  for (i in x) {
    if ("aeiou".includes(x[i])) {
      vowelCnt++;
    } else {
      consonantCnt++;
    }
  }
  return vowelCnt, consonantCnt;
};

chcheck("abcdefghijklmnopqrst");

console.log(vowelCnt, consonantCnt)


//Q5
function funcNew(string, wrong, correct) {
    let output;
    output = string.replace(wrong, correct);
    return output;
  }
  
  const text = funcNew("The time has come.", "time", "day");
  console.log(text);

//Q6
const arr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
function find(num) {
  return num > 5;
}

let ans = arr.filter(find);

console.log(ans);


//Q7
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const studentAverages = students.map(student => {
    const totalScore = student.scores.reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / student.scores.length;
    return { name: student.name, average: averageScore };
  });

  console.log(studentAverages);



//Q8
function repeatedSumOfDigits(number) {
 
    function sumOfDigits(num) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      return sum;
    }
  

    while (number >= 10) {
      number = sumOfDigits(number);
    }
  
    return number;
  }

  console.log(repeatedSumOfDigits(456)); // Output: 6
  



//Q9
function countWords(paragraph) {
   
    const words = paragraph.trim().split(/\s+/);

    return words.length;
  }
  
  const paragraph = "This is a sample paragraph with several words.";
  console.log("Number of words:", countWords(paragraph));
   // Output: 8
  


   //Q10
   function reverseString(inputString) {
    
    return inputString.split('').reverse().join('');
  }
  
  // Example usage:
  const input = "Hello";
  console.log(reverseString(input)); 