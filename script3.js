// naudojant ES6 klases

// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h),
class Vehicle{
  constructor(wheelCount, speed){
    this.wheelCount=wheelCount;
    this.speed=speed;
  }
  // 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
  addSpeed(){
    this.speed+=10;
    console.log(this.speed);
  }
  // 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)
  break(){
    this.speed-=5;
  }
}
// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus
class Car extends Vehicle{
  constructor(wheelCount, speed){
    super(wheelCount, speed)
  }
  // 5. 'car' pridėti metodą 'blink' kuris konsolėje atspausdina 'blink blink'
  blink(){
    console.log('blink blink');
  }
}
class Bicycle extends Vehicle{
  constructor(wheelCount, speed){
    super(wheelCount, speed)
  }
  // 6. 'bicycle' pridėti metodą 'beep' kuris konsolėje atsapaudina 'beep beep'
  beep(){
    console.log('beep beep');
  }
}
