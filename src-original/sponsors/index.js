const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
const {cash, eu: [srl], rus} = sponsors;
const {eu} = sponsors;
const calcCash = (own, everyCash) => {
  if((isNaN(own) || own == '' || own == null)){
      own = 0;
  }
  let total = everyCash.reduce((a, b) => a + b);
  return total;
}

let money = calcCash(null, cash);

export {srl, rus, eu, money};