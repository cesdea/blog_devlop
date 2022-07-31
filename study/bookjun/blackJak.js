let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString();
input=input.split("\n");
let deller=input[0].split(" ").map((x)=>Number(x));
let cards=input[1].split(" ").map((x)=>Number(x));

let max=0;
for(let i=0;i<cards.length-2;i++){
    for(let j=i+1;j<cards.length-1;j++){
        for(let g=j+1;g<cards.length;g++){
            let sum=cards[i]+cards[j]+cards[g];
            if(max<sum && sum<=deller[1]){
                max=sum;
            }
        }
    }
}
console.log(max)