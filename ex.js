const prompt = require('prompt-sync')();
let b = [3,5,3,3,5],count=1;
let c = [];
for(let i=0;i<b.length-1;i++){
    count = 1;
    for(let j=i+1;j<b.length;j++){
        if(b[i] == b[j]){
            count++;
            c[j] = 0;
        }
    }
    if(c[i] != 0){
       c[i] = count;
    }
}
for(let i=0;i<b.length;i++){
    console.log(`${b[i]} - ${c[i]}`); 
}

