let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString();
input = input.split("\n");
let arr=new Array(9);
for(let i=0;i<9;i++){
    arr[i]=Number(input[i])
}
function solution(arr){
    let max=0;
    let n;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
            n=i+1;
        }
    }
    console.log(max)
    console.log(n)
}
solution(arr)