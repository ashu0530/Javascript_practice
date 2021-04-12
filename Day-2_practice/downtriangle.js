

let n = 6;  //let n =6 

let row = 0;    // let row = 0 means 0 value
while(row < n){   // while loop if row  < n 

    let col = 0;    //assign column variable = 0 
    while(col < n - row){    // while col <= row or row+!
        process.stdout.write("* ");  //print *  
        col +=1;  //till col<=row and here we increment col value by col=col+1  so it will print * one columns
}
process.stdout.write("\n");  //giving  new line 

row +=1;  //here another increment of row by row=row+1 it will run untill row<n so another ****** print in second line
}