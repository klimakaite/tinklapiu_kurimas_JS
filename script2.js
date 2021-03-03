// I dalis
// 1. pasiimti MAIN elementą, jam priskirti klasę body
const mainQuery=document.querySelector('main');
mainQuery.classList.add('body');
// 2. pasiimti H1 elementą, jam priskirti klasę heading
const h1Query=document.querySelector('h1');
h1Query.classList.add('heading');
// 3. pasiimti FORM elementą, jam priskirti klasę form
const formById=document.getElementById('form');
formById.classList.add('form');
// 4. sukurti ir į UL elementą įterpti BENT vieną li elementą su klase list-item.
const ul=document.getElementById('todo');
const li=document.createElement('li');
li.classList.add('list-item');
li.innerText='blabla';
ul.appendChild(li);

//II dalis
li.addEventListener('click', function(){
  li.classList.toggle('done');
})
li.addEventListener('dblclick', function(){
  li.remove();
})

//III dalis
const btn=document.getElementById('button');
btn.addEventListener('click', function(){
  const ul=document.getElementById('todo');
  const li=document.createElement('li');
  li.classList.add('list-item');
  const input=document.getElementById('input');
  li.innerText=input.value;
  input.value='';
  ul.appendChild(li);
})
