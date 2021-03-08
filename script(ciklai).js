// CIKLAS FOR

// 1.
// let n=4;
// let array=[15, 12, 13, 20];
// let t=0;
// for (var i = 0; i < n; i++) {
//     t+=array[i];
// }
// v=t/n;
// console.log('Per '+n+' dienas Zinas buvo dresuojamas '+t+' minučių. Vidutiniškai per dieną katinas buvo dresuojamas '+v);

// // 2.
// let b=4;
// let d=5;
// let n=3;
// let i;
// let kiek=b;
// let laikinas=b;
// for(i=2; i<=n; i++){
//   kiek+=laikinas+d;
//   laikinas+=d;
// }
// console.log('Per '+n+' dienas prinoko '+kiek+' braškės');

// // 3.
// let kp=100;
// let n=4;
// let d=[5, 7, 5, 5];
// let kg=kp;
// for (var i = 0; i < n; i++) {
//   kg+=d[i];
// }
// console.log('Galutinė prekės kaina bus '+kg+' litai.');

// // 4.
// let skaicius=28;
// let sk=0;
// for (var i = 1; i < skaicius; i++) {
//   if(skaicius%i==0) sk+=i;
// }
// if(sk==skaicius) console.log('Skaičius yra tobulasis');
// else console.log('Skaičius nėra tobulasis');

// // 5.
// let s=7;
// let N=5;
// let skaicius=0;
// let suma=0;
// for (var i = 0; i < N; i++) {
//   skaicius+=s*Math.pow(10, i);
//   suma+=skaicius;
// }
// console.log(suma);


// CIKLAS WHILE

 // // 1. nezinau kaip skaiciuot
 // let n=5;
 // let m=3;

// // 2.
// let atlyginimas={x: 1000, y: 100};
// let men=12;
// let pinigai=atlyginimas.x;
// while(men>0){
//   men--;
//   pinigai+=atlyginimas.y;
// }
// console.log('Po 1 metų atlyginimas bus '+pinigai+' eurų');
// pinigai=atlyginimas.x;
// men=3
// while(men>0){
//   men--;
//   pinigai+=atlyginimas.y;
// }
// console.log('Po trijų mėnesių atlyginimas bus '+pinigai+' eurų');
// men=0;
// pinigai=atlyginimas.x;
// while(pinigai<=atlyginimas.x*2){
//   men++;
//   pinigai+=atlyginimas.y;
// }
// console.log('Po '+men+' mėnesių atlyginimas bus daugiau nei dvugubai didesnis');
// men=0;
// pinigai=atlyginimas.x;
// while(pinigai<4000){
//   men++;
//   pinigai+=atlyginimas.y;
// }
// console.log('Po '+men+' mėnesių atlyginimas bus mažesnis nei 4000 eurų');

// // 3.
// let n=123456;
// let array=[];
// let kiekSkaitmenu=0;
// while(n>0) {
//   array[kiekSkaitmenu]=n%10;
//   n=Math.trunc(n/10);
//   kiekSkaitmenu++;
// }
// let skaicius=0;
// let kiek=0;
// while(kiekSkaitmenu>0){
//   kiekSkaitmenu--;
//   skaicius+=array[kiek]*Math.pow(10, kiekSkaitmenu);
//   kiek++;
// }
// console.log(skaicius);

// // 4.
// let N=6;
// let array=[];
// let kiek=0;
// let skaicius=0;
// let skaicius2=0;
// while(skaicius2!=N){
//   skaicius++;
//   array[kiek++]=skaicius;
//   skaicius2+=skaicius;
// }
// for(item of array) console.log(item+' ');

// // 5. nežinau, ką reiškia TARPUSAVY pirminiia/ sudėtiniai
// let n=2;
// let m=5;

// // 6.
// let n=24;
// let sk=0;
// sk2=1;
// while(sk2<n){
//   sk++;
//   sk2*=sk;
//   if(sk2==n) console.log('Faktorialas');
// }

// CIKLAI + MASYVAI

//  // 1.
// let array=[1, 5, 2, 4, 10, 8, 1, 10, 0.2, 4];
// let did=0;
// let kiek=0;
// for (var i = 0; i < array.length; i++) {
//   if(array[i]>did) did=array[i];
// }
// for (var i = 0; i < array.length; i++) {
//   if(array[i]==did) kiek++;
// }
// console.log(kiek);

// // 2.
// let A=[900, 1200, 400, 600, 1500, 1200, 1200, 500, 400, 2000];
// let kiek=0;
// for (var i = 0; i < A.length; i++) {
//   if(A[i]>1000) kiek++;
// }
// console.log(kiek);

// // 3.
// let A=[10, 2, 4, 5, 12, 0, 2, 3, 4, 7, 3];
// let temp;
// for (var i = 0; i < A.length-1; i++) {
//   for (var j = i; j < A.length; j++) {
//     if(A[i]<A[j]){
//       temp=A[i];
//       A[i]=A[j];
//       A[j]=temp;
//     }
//   }
// }
// for(item of A) console.log(item);

// // 4.
// let A=[2, 40, 23, 3, 5, 9, 11, 10, 2, 10, 4];
// for (var i = 0; i < A.length; i++) {
//   if((i+1)%2==0) A[i]+=i+1;
// }
// for(item of A) console.log(item);

// // 5.
// let mok=[10, 2, 5, 4, 3, 7];
// let suma=0;
// for (var i = 0; i < mok.length; i++) {
//   suma+=mok[i];
// }
// let vidurkis=suma/mok.length;
// console.log(vidurkis);
