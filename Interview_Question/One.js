//Question number 1
//Ek Array ke under kuch Additional Properties hai 
//Ek Array hai uspe loop lagana hai uski original propeties ko display karwana hai
Array.prototype.extraProperty="rishab"
const myNewArray=[1,2,3,4,5,6];
// for(let singh in myNewArray){
//     console.log(singh);
// }


    //  for(let singh in myNewArray){
    //     if(myNewArray.hasOwnProperty(singh)){
    //         console.log(singh);
    //     }
    //  }

    //Other ways
    for(let i=0;i<myNewArray.length;i++){
        if(myNewArray.hasOwnProperty(i)){
            console.log(i);
        }
    }