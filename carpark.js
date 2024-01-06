const totalspace=3;
let avaliblespace=totalspace;

const checkavalibily = () =>{
    return new Promise((resolve, request)=>{
        setTimeout(()=>{
            if(avaliblespace>0){
                avaliblespace--;
                resolve("car parked succesfully")
            }else{
                resolve("no avalible parking spaces");
            }
        }, 5000);
        
    });
};

const realeasespace = () =>{
    avaliblespace++;
    console.log("parking spaces avalible");
};

const carpark = () =>{
    checkavalibily()
    .then((val)=>{
        console.log(val);
    })
    .catch((error)=>{
        console.log("error".error);
    })
}
setTimeout(()=>{
    carpark();
}, 2000)

setTimeout(()=>{
    carpark();
}, 3000)

setTimeout(()=>{
    carpark();
}, 4000)

setTimeout(()=>{
    realeasespace();
    carpark();
}, 10000);