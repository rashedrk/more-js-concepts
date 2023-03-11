//Create
const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    if (num < 5) {
        resolve(1234456)
    } else {
        reject('No data available')
    }
})
//consume
getData
    .then(data => console.log(data))
    .catch(err => console.log('Error:' + err))