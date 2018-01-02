var somePromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('Hey, It worked successfully');
        reject('Sorry, an error occurred');    
    }, 2500);
    
});

somePromise.then((message)=>{           //First argument when Pormise work successfully and other one to handle reject..
    console.log(message);
},(errorMessage)=>{
    console.log(errorMessage);
})