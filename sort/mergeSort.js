const readline = require('readline');
let arrLength, arr; 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`-----------------Merge sort-------------`);
console.log('Enter array with length to be sorted -------');
console.log('Enter ctrl + c to exit ')

const mergeSort = function (arr, p, r) {

    if (p < r) {
        
        let q = Math.floor(((p + r)/2));
        console.log("call -- p, q, r", p, q, r);
        mergeSort(arr,p, q)
        mergeSort(arr, q + 1, r);
        merge(arr, p, q ,r);
    } else {
        return arr;
    }
    
}

const merge = function (arr, p, q, r) {
    //console.log(" merge ----", p,q,r)
    let left = [];
    let right = [];
    for(let i = p; i < q; i++) {
        left.push(arr[i]); 
    }
    for(let i = q ; i < r; i++) {
        right.push(arr[i]); 
    }
    left.push(Infinity);
    right.push(Infinity);
    //console.log("left", left);
   /// console.log("right", right);
    let i = 0,j = 0;
    for (let k = p; k < r; k++) {
        if(left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
    }
    console.log("arr ", arr);
    return arr;
};

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
                console.log(`The array is ${arr}`);``
                console.log(`Sorted array is ${ mergeSort(arr, 0, arr.length)}`)
                arrLength = null,
                arr = null;
                console.log(`-----------------Merge sort-------------`);
                console.log('Enter array with length to be sorted -------');
                console.log('Enter ctrl + c to exit ')
            }
        }
    }
});