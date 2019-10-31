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

export {sponsors, money};