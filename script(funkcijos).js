// // 1.
// const n=2;
// const kuprine=[12, 5];
// const b=2;
//
// function kupriniuSvoris(){
//   let kb=0;
//   for(let i=0; i<n; i++){
//     kb+=kuprine[i];
//   }
//   return kb;
// }
// function kaina(){
//   let s=kupriniuSvoris()*b;
//   return s;
// }
// console.log(kupriniuSvoris(kuprine, n));
// console.log(kaina());
// // 1.a
// function vidurkis(){
//   let v=kupriniuSvoris()/n;
//   return v;
// }
// console.log(vidurkis());
//
// // 1.b
// function kiekis(){
//   let kiek=0;
//   for(let i=0; i<n; i++){
//     if(kuprine[i]<=10) kiek++;
//   }
//   return kiek;
// }
// console.log(kiekis());
//
// // 1.c
// function viskas(){
//   let kb=0;
//   let kiek=0;
//   for(item of kuprine){
//     if(item<=10){
//       kb+=item;
//       kiek++;
//     }
//   }
//   s=kb*b;
//   v=kb/kiek;
//   console.log(s);
//   console.log(v);
//   console.log(kiek);
// }
// viskas();

// // 2.
// let n=3;
// let u1=7;
// let u2=6;
// let u3=6;
// function kiekIssprende(){
//   return u1+u2+u3;
// }
// console.log(n+' olimpiadoje dalyvavę programuotojai išsprendė '+kiekIssprende()+' uždavinių');

// // 3.
// let n=3;
// let minutes=[18, 10, 10];
// function funkcija(){
//   let viso=0;
//   let kiek=0;
//   for(item of minutes){
//     viso+=item;
//     if(item>20) kiek++;
//   }
//   vidurkis=Math.round(viso/n*10)/10;
//   console.log('v = '+vidurkis+', k = '+kiek);
// }
// funkcija();

// // 4.
// let n=3;
// let v1=1;
// let m1=50;
// let k1=17;
// let v2=2;
// let m2=5;
// let k2=25;
// let v3=1;
// let m3=55;
// let k3=20;
// function kv(){
//   return k1+k2+k3;
// }
// function t(){
//   return Math.round((v1+v2+v3)/n*60+(m1+m2+m3)/n);
// }
// function k(){
//   let kiek=0;
//   if(k1<10) kiek=1;
//   if(k2<10) kiek+=1;
//   if(k3<10) kiek+=1;
//   return kiek;
// }
// console.log('kv = '+kv()+', t = '+t()+', k = '+k());

// // 5.
// let b=4;
// let d=5;
// let n=3;
// function k(){
//   let i;
//   let kiek=b;
//   let laikinas=b;
//   for(i=2; i<=n; i++){
//     kiek+=laikinas+d;
//     laikinas+=d;
//   }
//   return kiek;
// }
// console.log('Per '+n+' dienas prinoko '+k()+' braškės');

// // 6.
// let a=31;
// let b=62;
// function kiekReikia(){
//   let kiek=0;
//   for(let i=a; i<=b; i++){
//     if(i%6==0) kiek++;
//   }
//   return kiek;
// }
// console.log('Reikalingas porcijų skaičius: '+kiekReikia());

// // 7.
// let m=17;
// function funkcija(){
//   let kiek=0;
//   let perskaite=1;
//   let dienos=0;
//   while(kiek<=m){
//     kiek+=perskaite;
//     perskaite++;
//     dienos++;
//   }
//   console.log('Tadas visą knygą perskaitys per '+dienos+' dienas(-ų).');
//   console.log('Tadas vidutiniškai per dieną perskaitė '+Math.round(m/dienos*100)/100+' skyrius(-ių)');
// }
// funkcija();
