// Funkcijos, ciklai ir sąlyginiai sakiniai

// // funkcijos deklaracija
// function hello() {
//   console.log(`hello`);
// }
// // iškvietimas
// hello();

// const name='John';
// function hello(a){
//   console.log(`Hello, ${a}`);
// }
// hello('John');

// const hello=function(){
//   console.log('hello');
// }
// // iškvietimo pvz
// arr.forEach(hello);

// function sum(x, y){
//   return x+y;
// }
// const sum2=sum(10, 20);
// console.log(sum2);

// let sum = (x, y) => x + y;
// const sum2 = sum(10, 20);
// console.log(sum2);

// // lyginimas
// == vienoda reikšmė
// === vienoda reikšmė, ir tipas
// = ar lygu
// !== ar nelygi reikšmė ir tipas
// > daugiau
// < mažiau
// <= daugiau arba lygu
// <= mažiau arba lygu

// // loginiai
// $$ AND ir
// || OR arba
// ! NOT ne

// // skaiciavimas
// a+=b / a=a+b

// // salyginiai sakiniai
// const num=15;
// if(sum==15){
//   console.log('true');
// } else if (num<15) {
//   console.log('less');
// } else {
//   console.log('false');
// }

// const num=15;
// num === 15 ? console.log('true') : console.log('false');

// const weatherIsNice=true;
// const quarantine=true;
// if(weatherIsNice || !quarantine){
//   console.log('meet with friends');
// } else {
//   console.log('stay at home');
// }

// const color = 'green';
// switch (color) {
//   case 'red':
//     console.log('red');
//     break;
//   case 'green':
//     console.log('green');
//     break;
//   case 'blue':
//     console.log('blue');
//     break;
//   default:
//
// }

// pagrindiniai: while, do..while, for, for of, for inspect
// higher order methods forEach, filter, map

// let i=1;
// while(i<=10){
//   console.log(i);
//   i++;
// }

// let j=1;
// do{
//   console.log(j);
//   j++;
// }while(j<=10)

// for(let i=1; i<=10; i++){
//   console.log(i);
// }

// const items=['item', 'item2', 'item3', 'item4'];
// for(let i =0; i<items.length; i++){
//   console.log(items[i]);
// }

// for(item of items){   // letesnis nei for'as
//   console.log(item);
// }

// for(index in items){   // spausdina indeksus
//   console.log(index);
// }

// const person = {
//   name: 'John',
//   surname: 'Doe',
//   age: 26
// }

// for(key in person){
//   console.log(person[key]);
// }

// items.forEach(function(item, index, array){
//   console.log(index, item, array);
// });

// function logItems(items, index, array){
//   console.log(index, item, array);
// }
// items.forEach(logItems);

// const age=[15, 20, 65, 14, 7, 36];
// const canDrink=age.filter(function(age){
//   if (age>=20) {
//     return true;
//   }
// });
// console.log(canDrink);

// const canDrink=age.filter((age) => age =>20);
// console.log(canDrink);


// const people=[
// {
//   name: 'John',
//   surname: 'Doe',
//   age: 26
// }
// {
//   name: 'Ana',
//   surname: 'Karenina',
//   age: 18
// }
// {
//   name: 'Lisa',
//   surname: 'Kudrov',
//   age: 30
// }
// ];
// const names=people.map(function(person){
//   return person.name;
// });
// console.log(names);
