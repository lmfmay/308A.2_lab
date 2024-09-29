//Part 1: Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//     }

//     adventurer.roll();

// Part 2: Class Fantasy

//Here is what the basic Character class looks like so far, including a constructor function that allows us to create new characters with whatever name we would like:
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
//Every character should also be able to make rolls. Add the roll method to the Character class.
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
}

//Now, re-create Robin using the Character class!
// const robin = new Character(`Robin`);
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

//console.log(robin.companion.companion);

//Part 3: Class Features
class Adventurer extends Character {
    constructor (name, role) {
        super(name);
        //Adventurer have specialized roles
        this.role = role;
        //Every adventurer starts with a bed and 50 gold coins
        this.inventory.push(`bedroll`, `50 gold coins`);
    }
    //Adventurer have ability to scout ahead
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor (name, ability, type) {
        super(name);
        //Characters have special abilities
        this.ability = ability;
        this.type = type;
    }
    mood(){
        let mood = [`happy`, `sad`, `itchy`, `restless`, `hungry`, `sleepy`];
        console.log(`${this.name} is feeling ${mood[Math.floor(Math.random() * mood.length)]}.`)
    }
}

const frank = new Companion (`Frank`,`Healing`,`Flea`);
frank.mood();

const leo = new Companion (`Leo`,`Scratch`,`Cat`);
leo.companion = frank;
leo.mood();

const robin = new Adventurer (`Robin`, `Mage`);
robin.companion = leo;
console.log(robin);