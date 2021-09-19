const obj1={
    name:"asad"
}
const obj2={
    name:"hmeed"
}
const obj3={
    name:"waleed"
}
const map = new Map();
map.set(obj1 ,1)
map.set(obj2 ,2)
map.set(obj3 ,3)
for (const i of map) {
    console.log(`name: ${i[0].name} id: ${i[1]}`);
}



