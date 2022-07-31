const { SlowBuffer } = require('buffer');
let fs = require('fs');
let input = fs.readFileSync('ex.txt').toString().split('\n').map(x=>Number(x));
let min_arr=new Array(input[0])

for(let i=0;i<min_arr.length;i++){
    min_arr[i]=input[i+1]
}

function sort(arr){
    if(arr.length==2){
        if(arr[0]>arr[1]){
            [arr[0],arr[1]]=[arr[1],arr[0]]
        }
        return arr;
    }else if(arr.length==1){
        return arr;
    }
    


    let arr1=[]
    for(let i=0;i<arr.length/2;i++){
        arr1.push(arr[i])
    }
    let arr2=[];
    for(let i=Math.ceil(arr.length/2);i<arr.length;i++){
        arr2.push(arr[i])
    }
    arr1=sort(arr1)
    arr2=sort(arr2)
    let a=0;b=0;
    for(let i=0; i<arr.length;i++){
        if(a>=arr1.length){
            arr[i]=arr2[b];
            b++;
        }else if(b>=arr2.length){
            arr[i]=arr1[a]
            a++;
        }
        else if(arr1[a]<arr2[b] ){
            arr[i]=arr1[a];
            a++;
        }else{
            arr[i]=arr2[b];
            b++;
        }
    }
    return arr;
}
console.log(sort(min_arr).join('\n'));