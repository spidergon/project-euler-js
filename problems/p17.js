module.exports = () => {
  const one = 3;
  const two = 3;
  const three = 5;
  const four = 4;
  const five = 4;
  const six = 3;
  const seven = 5;
  const eight = 5;
  const nine = 4;
  const ten = 3;
  const eleven = 6;
  const twelve = 6;
  const thirteen = 8;
  const fourteen = 8;
  const fifteen = 7;
  const sixteen = 7;
  const seventeen = 9;
  const eighteen = 8;
  const nineteen = 8;
  const tenToNineteen =
    ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen;
  const twenty = 6;
  const thirty = 6;
  const forty = 5;
  const fifty = 5;
  const sixty = 5;
  const seventy = 7;
  const eighty = 6;
  const ninety = 6;
  const hundred = 7;
  const thousand = 8;
  const and = 3;
  const oneToNine = one + two + three + four + five + six + seven + eight + nine;
  const oneToNinetyNine =
    oneToNine +
    tenToNineteen +
    10 * (twenty + thirty + forty + fifty + sixty + seventy + eighty + ninety) +
    8 * oneToNine;
  return oneToNinetyNine + 100 * oneToNine + 900 * hundred + 9 * oneToNinetyNine + 99 * 9 * and + one + thousand;
};
