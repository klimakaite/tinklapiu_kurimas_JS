const body=document.querySelector('body');
const h1=document.createElement('h1');
body.appendChild(h1);
document.querySelector('h1').innerText='Find. Connect. Enjoy.';
const h3=document.createElement('h3');
body.appendChild(h3);
document.querySelector('h3').innerText='new way to meet people';

const div=document.createElement('div');
body.appendChild(div);
div.classList.add('isdeliojimas')

const div1=document.createElement('div');
const div2=document.createElement('div');
const div3=document.createElement('div');
const div4=document.createElement('div');
const div5=document.createElement('div');
const div6=document.createElement('div');
const div7=document.createElement('div');
const div8=document.createElement('div');

div.appendChild(div1);
div1.classList.add('design');
div1.classList.add('third');
div.appendChild(div2);
div2.classList.add('design');
div2.classList.add('fourth');
div.appendChild(div3);
div3.classList.add('design');
div3.classList.add('second');
div.appendChild(div4);
div4.classList.add('design');
div4.classList.add('sixth');
div.appendChild(div5);
div5.classList.add('design');
div5.classList.add('fifth');
div.appendChild(div6);
div6.classList.add('design');
div6.classList.add('first');
div.appendChild(div7);
div7.classList.add('design');
div7.classList.add('seventh');
div.appendChild(div8);
div8.classList.add('design');
div8.classList.add('eighth');

const person=[
  {image: 'profile-images/17.jpg', name: 'Sammy M Stoll', location: 'Wellsville, New York(NY), 14895', location2: 'icons/location.svg',
   description: 'Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.', connection: 'Get connected'},
  {image: 'profile-images/46.jpg', name: 'James C Young', location: '2597 Meadowbrook Mall Road', location2: 'icons/location.svg',
  description: 'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.', connection: 'Get connected'},
  {image: 'profile-images/16.jpg', name: 'Deanna I Martin', location: 'Worthington, Ohio(OH), 43085', location2: 'icons/location.svg',
  description: 'Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer.', connection: 'Get connected'},
  {image: 'profile-images/55.jpg', name: 'Bruce K Collins', location: 'Westhampton Beach, New York(NY), 11978', location2: 'icons/location.svg',
  description: 'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.', connection: 'Get connected'},
  {image: 'profile-images/34.jpg', name: 'Claudette G Hann', location: 'Philadelphia, Pennsylvania(PA), 19108', location2: 'icons/location.svg',
  description: 'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.', connection: 'Get connected'},
  {image: 'profile-images/51.jpg', name: 'Robert Langdon', location: '15 Eagle Way. AL10 8RD', location2: 'icons/location.svg',
  description: 'Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.', connection: 'Get connected'},
  {image: 'profile-images/21.jpg', name: 'Amber C Pantoja', location: 'Nashville, Tennessee(TN), 37209', location2: 'icons/location.svg',
  description: 'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.', connection: 'Get connected'},
  {image: 'profile-images/23.jpg', name: 'Adriana E Hubert', location: 'Burlington, North Carolina(NC), 27215', location2: 'icons/location.svg',
  description: 'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker. Unapologetic social media buff. Beer fanatic.', connection: 'Get connected'},
]

const img1=document.createElement('img');
img1.classList.add('person');
img1.src=person[0].image;
img1.alt=person[0].name;
div1.appendChild(img1);
const img2=document.createElement('img');
img2.classList.add('person');
img2.src=person[1].image;
img2.alt=person[1].name;
div2.appendChild(img2);
const img3=document.createElement('img');
img3.classList.add('person');
img3.src=person[2].image;
img3.alt=person[2].name;
div3.appendChild(img3);
const img4=document.createElement('img');
img4.classList.add('person');
img4.src=person[3].image;
img4.alt=person[3].name;
div4.appendChild(img4);
const img5=document.createElement('img');
img5.classList.add('person');
img5.src=person[4].image;
img5.alt=person[4].name;
div5.appendChild(img5);
const img6=document.createElement('img');
img6.classList.add('person');
img6.src=person[5].image;
img6.alt=person[5].name;
div6.appendChild(img6);
const img7=document.createElement('img');
img7.classList.add('person');
img7.src=person[6].image;
img7.alt=person[6].name;
div7.appendChild(img7);
const img8=document.createElement('img');
img8.classList.add('person');
img8.src=person[7].image;
img8.alt=person[7].name;
div8.appendChild(img8);

const p1=document.createElement('p');
p1.classList.add('name');
div1.appendChild(p1);
p1.innerText=person[0].name;
const p2=document.createElement('p');
p2.classList.add('name');
div2.appendChild(p2);
p2.innerText=person[1].name;
const p3=document.createElement('p');
p3.classList.add('name');
div3.appendChild(p3);
p3.innerText=person[2].name;
const p4=document.createElement('p');
p4.classList.add('name');
div4.appendChild(p4);
p4.innerText=person[3].name;
const p5=document.createElement('p');
p5.classList.add('name');
div5.appendChild(p5);
p5.innerText=person[4].name;
const p6=document.createElement('p');
p6.classList.add('name');
div6.appendChild(p6);
p6.innerText=person[5].name;
const p7=document.createElement('p');
p7.classList.add('name');
div7.appendChild(p7);
p7.innerText=person[6].name;
const p8=document.createElement('p');
p8.classList.add('name');
div8.appendChild(p8);
p8.innerText=person[7].name;

const img11=document.createElement('img');
img11.classList.add('location');
img11.src=person[0].location2;
img11.alt=person[0].name;
div1.appendChild(img11);
const img22=document.createElement('img');
img22.classList.add('location');
img22.src=person[1].location2;
img22.alt=person[1].name;
div2.appendChild(img22);
const img33=document.createElement('img');
img33.classList.add('location');
img33.src=person[2].location2;
img33.alt=person[2].name;
div3.appendChild(img33);
const img44=document.createElement('img');
img44.classList.add('location');
img44.src=person[3].location2;
img44.alt=person[3].name;
div4.appendChild(img44);
const img55=document.createElement('img');
img55.classList.add('location');
img55.src=person[4].location2;
img55.alt=person[4].name;
div5.appendChild(img55);
const img66=document.createElement('img');
img66.classList.add('location');
img66.src=person[5].location2;
img66.alt=person[5].name;
div6.appendChild(img66);
const img77=document.createElement('img');
img77.classList.add('location');
img77.src=person[6].location2;
img77.alt=person[6].name;
div7.appendChild(img77);
const img88=document.createElement('img');
img88.classList.add('location');
img88.src=person[7].location2;
img88.alt=person[7].name;
div8.appendChild(img88);

const p11=document.createElement('p');
p11.classList.add('text');
div1.appendChild(p11);
p11.innerText=person[0].location;
const p22=document.createElement('p');
p22.classList.add('text');
div2.appendChild(p22);
p22.innerText=person[1].location;
const p33=document.createElement('p');
p33.classList.add('text');
div3.appendChild(p33);
p33.innerText=person[2].location;
const p44=document.createElement('p');
p44.classList.add('text');
div4.appendChild(p44);
p44.innerText=person[3].location;
const p55=document.createElement('p');
p55.classList.add('text');
div5.appendChild(p55);
p55.innerText=person[4].location;
const p66=document.createElement('p');
p66.classList.add('text');
div6.appendChild(p66);
p66.innerText=person[5].location;
const p77=document.createElement('p');
p77.classList.add('text');
div7.appendChild(p77);
p77.innerText=person[6].location;
const p88=document.createElement('p');
p88.classList.add('text');
div8.appendChild(p88);
p88.innerText=person[7].location;

const p111=document.createElement('p');
p111.classList.add('description');
div1.appendChild(p111);
p111.innerText=person[0].description;
const p222=document.createElement('p');
p222.classList.add('description');
div2.appendChild(p222);
p222.innerText=person[1].description;
const p333=document.createElement('p');
p333.classList.add('description');
div3.appendChild(p333);
p333.innerText=person[2].description;
const p444=document.createElement('p');
p444.classList.add('description');
div4.appendChild(p444);
p444.innerText=person[3].description;
const p555=document.createElement('p');
p555.classList.add('description');
div5.appendChild(p555);
p555.innerText=person[4].description;
const p666=document.createElement('p');
p666.classList.add('description');
div6.appendChild(p666);
p666.innerText=person[5].description;
const p777=document.createElement('p');
p777.classList.add('description');
div7.appendChild(p777);
p777.innerText=person[6].description;
const p888=document.createElement('p');
p888.classList.add('description');
div8.appendChild(p888);
p888.innerText=person[7].description;

const p1111=document.createElement('p');
p1111.classList.add('connection');
div1.appendChild(p1111);
p1111.innerText=person[0].connection;
const p2222=document.createElement('p');
p2222.classList.add('connection');
div2.appendChild(p2222);
p2222.innerText=person[1].connection;
const p3333=document.createElement('p');
p3333.classList.add('connection');
div3.appendChild(p3333);
p3333.innerText=person[2].connection;
const p4444=document.createElement('p');
p4444.classList.add('connection');
div4.appendChild(p4444);
p4444.innerText=person[3].connection;
const p5555=document.createElement('p');
p5555.classList.add('connection');
div5.appendChild(p5555);
p5555.innerText=person[4].connection;
const p6666=document.createElement('p');
p6666.classList.add('connection');
div6.appendChild(p6666);
p6666.innerText=person[5].connection;
const p7777=document.createElement('p');
p7777.classList.add('connection');
div7.appendChild(p7777);
p7777.innerText=person[6].connection;
const p8888=document.createElement('p');
p8888.classList.add('connection');
div8.appendChild(p8888);
p8888.innerText=person[7].connection;

const img1f=document.createElement('img');
img1f.src='icons/facebook-brands.svg';
img1f.alt='facebook';
div1.appendChild(img1f);
const img2f=document.createElement('img');
img2f.src='icons/facebook-brands.svg';
img2f.alt='facebook';
div2.appendChild(img2f);
const img3f=document.createElement('img');
img3f.src='icons/facebook-brands.svg';
img3f.alt='facebook';
div3.appendChild(img3f);
const img4f=document.createElement('img');
img4f.src='icons/facebook-brands.svg';
img4f.alt='facebook';
div4.appendChild(img4f);
const img5f=document.createElement('img');
img5f.src='icons/facebook-brands.svg';
img5f.alt='facebook';
div5.appendChild(img5f);
const img6f=document.createElement('img');
img6f.src='icons/facebook-brands.svg';
img6f.alt='facebook';
div6.appendChild(img6f);
const img7f=document.createElement('img');
img7f.src='icons/facebook-brands.svg';
img7f.alt='facebook';
div7.appendChild(img7f);
const img8f=document.createElement('img');
img8f.src='icons/facebook-brands.svg';
img8f.alt='facebook';
div8.appendChild(img8f);

const img1t=document.createElement('img');
img1t.src='icons/twitter-brands.svg';
img1t.alt='twitter';
div1.appendChild(img1t);
const img2t=document.createElement('img');
img2t.src='icons/twitter-brands.svg';
img2t.alt='twitter';
div2.appendChild(img2t);
const img3t=document.createElement('img');
img3t.src='icons/twitter-brands.svg';
img3t.alt='twitter';
div3.appendChild(img3t);
const img4t=document.createElement('img');
img4t.src='icons/twitter-brands.svg';
img4t.alt='twitter';
div4.appendChild(img4t);
const img5t=document.createElement('img');
img5t.src='icons/twitter-brands.svg';
img5t.alt='twitter';
div5.appendChild(img5t);
const img6t=document.createElement('img');
img6t.src='icons/twitter-brands.svg';
img6t.alt='twitter';
div6.appendChild(img6t);
const img7t=document.createElement('img');
img7t.src='icons/twitter-brands.svg';
img7t.alt='twitter';
div7.appendChild(img7t);
const img8t=document.createElement('img');
img8t.src='icons/twitter-brands.svg';
img8t.alt='twitter';
div8.appendChild(img8t);

const img1g=document.createElement('img');
img1g.src='icons/google-brands.svg';
img1g.alt='google';
div1.appendChild(img1g);
const img2g=document.createElement('img');
img2g.src='icons/google-brands.svg';
img2g.alt='google';
div2.appendChild(img2g);
const img3g=document.createElement('img');
img3g.src='icons/google-brands.svg';
img3g.alt='google';
div3.appendChild(img3g);
const img4g=document.createElement('img');
img4g.src='icons/google-brands.svg';
img4g.alt='google';
div4.appendChild(img4g);
const img5g=document.createElement('img');
img5g.src='icons/google-brands.svg';
img5g.alt='google';
div5.appendChild(img5g);
const img6g=document.createElement('img');
img6g.src='icons/google-brands.svg';
img6g.alt='google';
div6.appendChild(img6g);
const img7g=document.createElement('img');
img7g.src='icons/google-brands.svg';
img7g.alt='google';
div7.appendChild(img7g);
const img8g=document.createElement('img');
img8g.src='icons/google-brands.svg';
img8g.alt='google';
div8.appendChild(img8g);

const img1i=document.createElement('img');
img1i.src='icons/instagram-brands.svg';
img1i.alt='instagram';
div1.appendChild(img1i);
const img2i=document.createElement('img');
img2i.src='icons/instagram-brands.svg';
img2i.alt='instagram';
div2.appendChild(img2i);
const img3i=document.createElement('img');
img3i.src='icons/instagram-brands.svg';
img3i.alt='instagram';
div3.appendChild(img3i);
const img4i=document.createElement('img');
img4i.src='icons/instagram-brands.svg';
img4i.alt='instagram';
div4.appendChild(img4i);
const img5i=document.createElement('img');
img5i.src='icons/instagram-brands.svg';
img5i.alt='instagram';
div5.appendChild(img5i);
const img6i=document.createElement('img');
img6i.src='icons/instagram-brands.svg';
img6i.alt='instagram';
div6.appendChild(img6i);
const img7i=document.createElement('img');
img7i.src='icons/instagram-brands.svg';
img7i.alt='instagram';
div7.appendChild(img7i);
const img8i=document.createElement('img');
img8i.src='icons/instagram-brands.svg';
img8i.alt='instagram';
div8.appendChild(img8i);
