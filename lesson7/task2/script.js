function Human(name,age){
    this.name = name;
    this.age = age;
    this.Walk = function(){
        alert('I go!');
    }
    this.Eat = function(){
        alert('I eat!');
    }
    this.Drink = function(){
        alert('I drink!');
    }
    this.toString = function(){
        return `My name is ${this.name} and I am ${this.age}`;
    }
}

function Soldier(post){
    this.post = post;
    this.Shoot = function(){
        alert('I can shoot!');
    }
}

function Doctor(salery){
    this.salery = salery;
    this.Cure = function(){
        alert('I can cure!');
    }
}

Soldier.prototype = new Human('Sergey',20);
Doctor.prototype = new Human('Vlad',25);

let soldier = new Soldier('oficer');
let doctor1 = new Doctor(7000);
let doctor2 = new Doctor(1899);
doctor2.name = 'Valick';


soldier.Walk();
doctor1.Eat();

/*Part2*/

function Dentist(){
    this.Cure = function(){ 
        alert('Treat teeth!');
    }
}

function Surgeon(){
    this.Cure = function(){ 
        alert('Perform operations!');
    }
}

Dentist.prototype = doctor2;
Surgeon.prototype = doctor1;

let dantist = new Dentist();
let surgeon = new Surgeon();

function cure(d){
    if(d instanceof Doctor){
        d.Cure();
    }
}

cure(dantist);
cure(surgeon);

console.log(surgeon.toString());
console.log(dantist.toString());