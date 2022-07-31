let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString();
let num = Number(input);
let count=0;
for(let i=666;count<=num;i++){
    if(i.toString().includes('666')){
        count++;
    }
    if(count==num){
        console.log(i);
        break;
    }
}