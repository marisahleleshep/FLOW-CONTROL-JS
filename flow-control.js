//Write a function that accepts an array of strings and console.logs each element using a for loop.
let str=["Batoto","Janet","Sammy","Lenah","Anto"]

for(let i=0;i<str.length;i++){
    console.log(str[i])

}
// Write a function that accepts an array of numbers and 
// uses the forEach() method to console.log each number multiplied by 2.
let nums=[1,2,12,5,7,3,8]
function result(nums){
nums.forEach((b)=>console.log(b*2)

)};
result(nums)


// Write a function that takes in an array of numbers and 
// consoles the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values

// let numbers=[1,2,3,4,5,6,7,8,9,10]
function multiplication(num) {
    for (let d = 0; d < 4; d++) {
      num[d] *= 8;
    }
    
    num[num.length - 1] += 5;
    num[num.length - 2] += 5;
    
    console.log(num);
  }
  let numbers=[1,2,3,4,5,6,7,8,9,10]
  multiplication(numbers)

  

//   Write a function that takes in the following array 
//   and use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function arrays(arr) {
  let i = 0;
  while (i < arr.length) {
    if (i === 4) {
      break;
    }
    console.log(arr[i]);
    i++;
  }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
arrays(arrNum)

// Write a function that takes in a an array of strings and 
// use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
for(let i=0; i<fruits.length;i++){
  if(i===3){
      continue;
  }
  console.log({"continue":fruits[i]})

}


