import {employersNames} from './emp';
import {sponsors, money} from './money';

class Make {
    constructor(owner, director = 'Victor', money, employersNames) {
        this.owner = owner;
        this.director = director;
        this.money = money;
        this.employersNames = employersNames;
    }
    sumSponsors() {
        const {eu, rus} = sponsors;
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${money}. And our employers:
        ${employersNames}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
    }
}
const make = new Make();
make.sumSponsors(...['Sam', null, money, employersNames]);

// let makeBusiness = (owner,  director = 'Victor', money, employersNames) => {
//     const {eu, rus} = sponsors;
//     const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
//     console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${money}. And our employers:
//      ${employersNames}`);
//     console.log('And we have a sponsors: ');
//     console.log(...sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }



// makeBusiness(...['Sam', null, money, employersNames]);