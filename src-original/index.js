import {employersNames} from './employers';
import {srl, rus, eu, money} from './sponsors';

class MakeBusiness {
  constructor(owner, director = 'Victor', money, employersNames) {
    this.owner = owner;
    this.director = director;
    this.money = money;
    this.employersNames = employersNames;
  }
  showInfo(){
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have sponsors: ');
        console.log([...eu, ...rus, 'unexpected sponsor'].join(', '));
        console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
    }
}
let make = new MakeBusiness(...['Sam', null, money, employersNames]);
    make.showInfo();

