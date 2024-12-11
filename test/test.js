import { money } from '../shared/utils.js';

if (money(2095) === '20.95') {
    console.log('pass');
    console.log(money(2095));
}
else {
    console.log('Fail');
}

if (money(0) === '0.00') {
    console.log('pass');
    console.log(money(0));
}
else {
    console.log('Fail');
    console.log(money(0));
}

if (money(2000.9) === '20.01') {
    console.log('pass');

}
else {
    console.log('Fail');
}
console.log(money(2000.));
