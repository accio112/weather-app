var asyncAdd =(a,b) =>{
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
        if(typeof a ==='number' && typeof b==='number'){
            resolve(a+b);
        }
        else{
            reject('Arguments must be numbers');
        }
    },1500);
    });
};

asyncAdd(5,'6').then((res)=>{
    console.log('Result: ', res);
    return asyncAdd(res, 9);
}).then((res)=>{
    console.log('should be 20', res);
}).catch((errorMessage) =>{
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) =>{
//        setTimeout(() =>{
//     //resolve('Hey it worked'); //promise fulfilled
//     reject('unable to fulfil promise');
// },2500);
//
// });
//
// somePromise.then((message) => {
//     console.log('Success:' , message);
// }, (errorMessage) =>{
//     console.log('Error: ', errorMessage);
// });