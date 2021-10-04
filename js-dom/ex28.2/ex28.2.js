const person = {
    name: "asad",
    printName() {
        console.log(this.name);
    },
    printNameInGevingSecond(ms) {
        setTimeout(function () {
            console.log(this.name);
        }.bind(this), ms);
    }

}
person.printName();
person.printNameInGevingSecond(1000);