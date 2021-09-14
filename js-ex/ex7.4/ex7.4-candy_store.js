const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}



function getCandy(candyStore, id) {
    let wantedCandie={};
   candyStore.candies.forEach(candie => {
       if(candie.id.toString() === id){
           wantedCandie=candie;
       }
   });
   return wantedCandie;
}

console.log(getCandy(candyStore, "as12f"));

const getPrice=(candyStore,id) => {
    let wantedPrice = 0;
    candyStore.candies.forEach(candie => {
        if (candie.id === id) {
            wantedPrice = candie.price;
        }
    });
    return wantedPrice;
}

console.log("price of the candie is ",getPrice(candyStore, "as12f"));



const addCandy = (candyStore, id, name, price) => {

    candyStore.candies =[...candyStore.candies,{name:name,id:id,price:price,amount:1}];
}

addCandy(candyStore,"132f1","bonbon",5);
console.log(candyStore);



const buy =(candyStore,id)=>{
    let purchesedCandy ={};
    candyStore.candies.forEach( (candy)=>{
        if(candy.id=== id){
            purchesedCandy=candy;
    }
    
})
purchesedCandy.amount -=1;
candyStore.cashRegister+=purchesedCandy.price;
}
buy(candyStore,"132f1");
console.log(candyStore);

