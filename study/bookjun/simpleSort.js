let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString().split('\n').map(x=>Number(x));
let min_arr=new Array(input[0])
for(let i=0;i<min_arr.length;i++){
    min_arr[i]=input[i+1]
}
for(let i=0;i<min_arr.length;i++){
    if(min_arr[i]>min_arr[i+1]){
        [min_arr[i+1],min_arr[i]]=[min_arr[i],min_arr[i+1]]
        i=-1;
    }
}
//n^2
console.log(min_arr.join('\n'))