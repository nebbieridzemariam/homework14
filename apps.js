const numbers = [10, 15, 20, 25, 30];
console.log(numbers);

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

const personalData = [ {name: 'Mariam', age: '23', address: 'Tbilisi' }, 
{name: 'Nino', age: '24', address: 'Prague' }, 
{name: 'Lika', age: '25', address: 'Berlin' }];

console.log(personalData);
console.log('My Name is', personalData[0].name);
console.log('My Age is', personalData[0].age);
console.log('My Address is', personalData[0].address);

if (personalData[0].age > 19) {
    console.log('I am an adult');
}
    else {
        console.log('I am a teenager');
    }
