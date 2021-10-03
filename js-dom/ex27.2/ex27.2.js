class Pokemon {
    constructor(name, type, attacks) {
        this.name = name;
        this.type = type;
        this.attackList = attacks;
    }
    callPokemon() {
        console.log(`I choose you,${this.name}`);
    }
    attack(attackNumber) {
        if (attackNumber > this.attackList.length || attackNumber < 0) {
            console.log(`${this.name} does not have this attack`);
        } else {

            console.log(`${this.name} used ${this.attackList[attackNumber]}`);
        }

    }

}



let pokemon1 = new Pokemon('Ditto', 'Normal', ['Transform', 'Mirror']);
let pokemon2 = new Pokemon("picachu", "electric", ['Shock', 'Thunder']);
let pokemon3 = new Pokemon('Mewtwo', 'Psychic', ['Confusion', 'Psystrike']);
pokemon1.callPokemon();
pokemon2.callPokemon();
pokemon3.callPokemon();
pokemon1.attack(0);
pokemon2.attack(0);
pokemon3.attack(0);
