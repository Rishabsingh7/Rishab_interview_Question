console.log("Welcome Sir!")
//Question 2
//Implement a custom forEach in javaScript

//Basics
// Array.prototype.customForEachOne=function(callback){
//     for(let i=0;i<this.length;i++){
//         callback(this[i],i,this);
//     }
// }


//Others Ways
Array.prototype.forEachTwo=function(callback,thiscontext){
    if(typeof callback!=='function'){
        throw `not a function`
    }
    const length=this.length
    for(let i=0;i<length;i++){
        if(this.hasOwnProperty);
        callback.call(thiscontext,this[i],this);
    }
}