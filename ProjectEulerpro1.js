var sum=0;
for (i = 0; i<1000 ;i ++ ){ // keep a counter to check all the numbers from one until 999, ( we need all the numbers bellow 1000)
  
  
  if(i%3===0 || i%5===0){ //check if the number are dividable with  or 5 
    sum= sum +i; // add the previouse sum with the number that is divaded with 3 or 5 
    console.log(i+ " is  devidable with either 3 or 5 "); // show all the numbers that included in the sum
  }
}
console.log("the sum is " + sum) 