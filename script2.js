// užduotis:

// 1. perkurti 1 užduoties kodą šį kartą naudojant ES6 klases
// 2. pridėti getter metodą getInfo kuris konsolėje atspausdina tokį sakinį: this notebook has total pages of \totalPages\. Used pages: \usedPages\ (pasvirieji brūkšniai žymi kur rašomos kintamojo rekšmės)
// 3. pridėti setter metodą add kuris leidžia į notebook prie esamų pridėti naujus tuščius puslapius (puslapių skaičius perduodamas parametru), bei atspausdina totalPages;
class Notebook{
  constructor(totalPages, usedPages){
    this.totalPages=totalPages;
    this.usedPages=usedPages;
  }
  use(num){
    this.usedPages+=num;
    console.log(this.usedPages);
  }
  leftPages(){
    console.log(this.totalPages-this.usedPages);
  }
  get getInfo(){
    console.log('this notebook has total pages of '+this.totalPages+'. Used pages: '+this.usedPages);
  }
  set add(numOfPages){
    this.totalPages+=numOfPages;
    console.log(this.totalPages);
  }
}

const first= new Notebook(40, 10);
const second=new Notebook(45, 32);

first.use(5);
second.use(2);
first.leftPages();
second.leftPages();
first.getInfo;
second.getInfo;
first.add=4;
second.add=90;

// papildoma:
// jei pavyko greitai įgyvendinti pirmąją dalį, papildoma užduotis:
// perkurti 1 užduoties (konstruktoriaus funkcijos) kodą su create.object
