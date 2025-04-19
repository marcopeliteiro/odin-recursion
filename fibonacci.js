function fib(n){
    if(n==0){
        return [0]
    }
    else if(n==1){
        return [0,1]
    }
    else{
        let arr=fib(n-1);
        let res=arr[arr.length-1]+arr[arr.length-2];
        arr.push(res)
        return arr;
    }
}

console.log(fib(8))
