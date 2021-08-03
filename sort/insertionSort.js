const readline = require('readline');
let arrLength, arr; 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`-----------------Insertion sort-------------`);
console.log('Enter array with length to be sorted -------');
console.log('Enter ctrl + c to exit ')

const insertionSort = function (arr) {
    
    for(let j = 1; j< arr.length; j++) {
        let key = arr[j];
        let i = j - 1;
        while(i > -1 && arr[i] > key) {
            arr[i + 1] = arr[i];
            i = i - 1; 
        }
        arr[i + 1] = key;
        console.log("round --------- ", j, "----------",  " \narr --", arr);
        console.log("-----------------------------------------------------")
    }
    return arr;
}

rl.on("line", (ln) => {
    let values = ln.split(" ");
    if (!arrLength || isNaN(arrLength)) {
        arrLength = parseInt(values[0]);
        if (isNaN(arrLength)) {
            console.log(`The value entered ${ln}is invalid`);
            console.log('Pleae enter the array length again');
        } else {
            console.log(`The array length is ${arrLength}`);
            console.log('Please enter the array with space seprted values----');
        }
    } else {

        if (values.length != arrLength) {
            console.log(`The array must be of length ${arrLength}.`);
            console.log('Pleae enter the array again');
        } else {
            arr = values.map(x => parseInt(x));
            if(arr.some(x => isNaN(x))) {
                console.log(`The value entered in array is ${ln} which is invalid`);
                console.log('Pleae enter the array again');
            } else {
                console.log(`The array is ${arr}`);
                console.log(`Sorted array is ${ insertionSort(arr)}`)
                arrLength = null,
                arr = null;
                console.log(`-----------------Insertion sort-------------`);
                console.log('Enter array with length to be sorted -------');
                console.log('Enter ctrl + c to exit ')
            }
        }
    }
});