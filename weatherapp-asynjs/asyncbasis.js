console.log('Starting app');
setTimeout(() => {
    console.log('Async way delay later');
}, 2000);
setTimeout(()=>{
    console.log('This should come immediately');
},0);

console.log('Finishing app');