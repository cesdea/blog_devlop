let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString();
// let input = fs.readFileSync('/dev/stdin').toString();
let num = Number(input)
let result=[]
function solution(n,start,end){
    if(n==1){
        result.push(`${start+1} ${end+1}`);
        return;
    }
    let end2=3-start-end;
    solution(n-1,start,end2)
    result.push(`${start+1} ${end+1}`);
    solution(n-1,end2,end);
    return;
}
solution(num,0,2)
console.log(BigInt(Math.pow(2,num)-1).toString())
console.log(result.join('\n'))