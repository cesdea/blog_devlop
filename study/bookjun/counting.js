let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString().split('\n').map(x=>Number(x));

let counts=[];
for(let i=1;i<input.length;i++){
    if(!counts[input[i]]){
        counts[input[i]]=0;
    }
    counts[input[i]]++;
}
for(i in counts){
    while(counts[i]!=0){
        console.log(i)
        counts[i]--;
    }
}