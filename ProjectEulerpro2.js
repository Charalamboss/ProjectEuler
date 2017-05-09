var fibona = []
sum=0;
fibona[0]=1;
fibona[1]=1

for (i=2;i<10 ; i++){
  console.log("this is a test");
  fibona[i]=fibona[i-1]+fibona[i-2];
  console.log(fibona[i]);
    if(fibona[i]%2===0){
    sum=sum+fibona[i]
    console.log("the sum is "+sum)
  }
    else {
    console.log( "the numbers did included in the calculation because are not even")
  }
  
 
}