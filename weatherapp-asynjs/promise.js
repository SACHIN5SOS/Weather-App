var asyncPromise= (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b==='number'){
                resolve(a+b);
       
               }
               else{
                   reject('Both input are not Numbers');
               }    
        }, 2000);
        
    })
}

asyncPromise(5,6).then((message)=>{
    console.log(`Result: ${message}`);
    asyncPromise(message,33);

}).then((message)=>{
    console.log(`Result: ${message}`);

}).catch((errorMessage)=>{    //to catch error in promises
    console.log(errorMessage);
})



/* var somePromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('Hey, It worked successfully');
        reject('Sorry, an error occurred');    
    }, 2500);
    
});

somePromise.then((message)=>{           //First argument when Pormise work successfully and other one to handle reject..
    console.log(message);
},(errorMessage)=>{
    console.log(errorMessage);
}) */