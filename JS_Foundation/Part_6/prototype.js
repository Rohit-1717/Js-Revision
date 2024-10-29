let computer = {
    cpu: 12,
    gpu:14,
    ram : "16 GB",
    ssd : "512 GB"
}

let lenovo = {
    screen : "FHD" ,
    __proto__: computer
}

let tomHardware = {
    
};

// console.log(`lenovo:`, lenovo.__proto__); //! Dandar Prototype (__proto__)

let genericCar = {
    tyres: 4
}

let tesla = {
    driver : "AI",
}

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla :`, Object.getPrototypeOf(tesla));

