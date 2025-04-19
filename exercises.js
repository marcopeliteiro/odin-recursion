//site: "https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion"

//exercise 4 my soultion
function all(arr, callb){
    if(arr.length==0){
       return true;
   }
   else{
       let firEl=arr.shift();
       if(callb(firEl)==false){
           return false;
       }
       else{
       return all(arr,callb);
   }
}}

let callba=function(num){
   return num<7;
};

console.log(all([1,2,7],callba));

//exercise 6 my solution
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(obj, val){
  for(value of Object.values(obj)){
    if(typeof value === 'object'){
        if(Object.values(value).includes(val)){
        return true;
        }
        else{
          return contains(value,val);
        }
      }
    else{
      return false;
    }
  }
}



let hasIt = contains(nestedObject,"foo");
console.log(hasIt);

//exercise7 mysolution
function totalIntegers(arr){
    let sum=0;
    if(arr.length==0){
        return 0;
    }
    else{
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                sum+=totalIntegers(arr[i]);
            }
            else if(Number.isInteger(arr[i])){
                sum+=1;
            }
            else{
                continue;
            }
        }
    }
    return sum;
}

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);

console.log(seven);

//exercise 8 my sol
  function sumSquares(arr){
    let sum = 0;
    
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
        sum += sumSquares(arr[i]);
        }
        else{
        sum+=arr[i]*arr[i];
        }
    }
    return sum;
    }

let l = [10,[[10],10],[10]] ;

console.log(sumSquares(l));

//exercise 9 mysol
function replicate(times,number){
    if(times<=0){
        return [];
    }
    else{
        return [number].concat(replicate(times-1,number));
    }
}

console.log(replicate(3, 5));
