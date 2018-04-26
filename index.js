'use strict';

//Dog with name, breed, and age
function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
//Cat with name, breed, and age
function Cat(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

//Ferret with name age foodRequirement
function Ferret(name, age, foodRequirements) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}
//Bird with name and breed
function Bird(name, breed) {
  this.name = name;
  this.breed = breed;
}
//Fish with name, species, and waterConditions

function Fish(name, species, waterConditions) {
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions;
}