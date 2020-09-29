name = "Zach"
var name;
console.log(name); //console logs the var name which is set to "Zach"


setName();
function setName() {
    var name = "Zach";
    console.log(name)
  }
console.log('some text');
let avg = findAvg(2,2);   // passes 2,2 through a,b using let variable
console.log('some text', avg)
  function findAvg(a,b) {
      console.log('some text');
      var answer = (a + b) / 2; //math
      return answer;
    }

let fruits = ["apples","blueberries","oranges",]
// let favFruit;
let leastFav = fruits[1]; //sets value of leastFav to blueberries
function printFruits() {
   let favFruit = fruits[2]; //sets value of favFruit to oranges
 console.log(fruits[0]);   //logs apples
 function favPrint() {
     console.log(favFruit); //logs favFruit
   }
   favPrint();
   console.log(leastFav); //logs leastFav
}printFruits();
// favPrint();

someFunc(); 
function someFunc() {
console.log("hello");
  }
  let uncle = function () {  
      console.log("hello uncle");
    }
    uncle(); // must be caled after function due to let variable




