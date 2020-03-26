const http = require('http');
const bl = require('bl');

let results = [];
let count = 0;

function httpGet(index) {

    http.get(process.argv[2 + index], (response) => {

        response.pipe(bl(function (err, data) {
            if (err)
                console.log(err);

            results[index] = data.toString();
            count++;

            if (count === 3){

                printResults();
            }
        }))
    });
}

function printResults(){

    for (let i = 0; i < 3 ; i++) {
        console.log(results[i]);
    }
}

for (let i = 0; i < 3 ; i++) {
    httpGet(i);
}





