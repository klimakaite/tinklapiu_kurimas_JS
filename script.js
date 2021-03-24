// 1. sukurti konstruktoriaus funkciją 'notebook'. 'notebook' turi 2 parametrus: totalPages, usedPages
function Notebook(totalPages, usedPages){
  this.totalPages=totalPages;
  this.usedPages=usedPages;
}

// 2. sukurti metodą use kuris panaudotus puslapius padidina nurodytu kiekiu puslapių ir naują panaudotų puslapių puslapių skaičių atspausdina konsolėje
Notebook.prototype.use=function(num){
  this.usedPages+=num;
  console.log(this.usedPages);
}

// 3. sukurti metodą leftPages kuris paskaičiuoja kiek laisvų puslapių liko ir atsakymą atspausdina konsolėje
Notebook.prototype.leftPages=function(){
  console.log(this.totalPages-this.usedPages);
}

// 4. sukurti du notebook objektus (instances): first ir second ir juos atspausdinti
const first= new Notebook(40, 10);
const second=new Notebook(45, 32);

// 5. su abiem objektais išbandyti use ir leftPages metodus su abiem objektais.
first.use(5);
second.use(2);
first.leftPages();
second.leftPages();
