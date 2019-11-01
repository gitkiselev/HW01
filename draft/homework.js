let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


let employersNames = employers.filter(emp => emp.length > 0).map(emp => emp.toLowerCase().trim())









const sponsors = {
cash: [40000, 5000, 30400, 12000],
eu: ['SRL', 'PLO', 'J&K'],
rus: ['RusAuto', 'SBO']
};
const {eu, rus, cash} = sponsors;
// 
const calcCash = (own, everyCash) => {
if((isNaN(own) || own == '' || own == null)){
own = 0;
}
let total = everyCash.reduce((a, b) => a + b);
return total;
}

let money = calcCash(null, cash);












let makeBusiness = (owner,  director = 'Victor', money, employersNames) => {
const {eu, rus} = sponsors;
const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${money}. And our employers:
${employersNames}`);
console.log('And we have a sponsors: ');
console.log(...sumSponsors);
console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}



makeBusiness(...['Sam', null, money, employersNames]);