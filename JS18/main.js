class pizza
{
    constructor(pizzatype)
    {
        this.type = pizzatype;
        this.name = "Erick";
        this.surname = "Elnino";
        this.toppinds = [];

    }

    getSurname()
    {
        return this.surname;
    }

    setSurname(currentSurname)
    {
        this.surname = currentSurname;
    }


    getToppings()
    {
        return this.toppinds;
    }

    setToppings(myToppings)
    {
        this.toppinds.push(myToppings);
    }

    myidentity()
    {
        return `My name is ${this.name} \nMy surname is : ${this.surname} \nThe pizza I am eating is ${this.type}`;
    }


}


const myPizza = new pizza("Pepperoni");


console.log(myPizza.myidentity());
console.log(myPizza.sizePizza);

myPizza.setSurname("Jackpot Ichimoku");


myPizza.setToppings("Marijuana!!!");
myPizza.setToppings("Danjuma!!!");
myPizza.setToppings("Mailord of crazy town!!!");
myPizza.setToppings("Jackpot!!!");

let data = myPizza.getToppings();

console.log(data);

console.log(myPizza.getSurname());

class SpezziaPizza extends pizza
{
    constructor(pizzasize)
    {
        super(pizzasize);
        this.pizzaname = "Chiken Mayo";
        this.size = pizzasize;
    }

    display()
    {
        return `I am eating ${this.pizzaname} and my name is ${this.name} \nThe size of the pizza u eating is ${this.size}`;
    }
}

const erickelnino = new SpezziaPizza("thin Base");

console.log(erickelnino.display());

function pizzafactory(pizzabase)
{
    const crust = "Original size";
    const size = pizzabase;

    return
    {
       base: () => 
        {
            console.log(`I am eating pizza if ${crust} of base ${size}`);
        };
    }
}

pizzafactory("Thin");