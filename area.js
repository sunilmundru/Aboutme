function Area() {
    var Base = document.getElementById("Base");
    var Height = document.getElementById("height");
    var basevalue = Base.value;
    var heightvalue = Height.value;
    var result = "Area is : " + (basevalue * heightvalue) / 2;
    var divresult = document.getElementById("divresult");
    divresult.innerHTML = result;
}
document.getElementById("quote").addEventListener('mouseover', function(){quoteHandler()});

/* global localStorage */
console.log('SCRIPT START')

console.log('Declare testable functions......................')
window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    if (localStorage.getItem('number1')) {
        document.getElementById('Base').value = parseInt(localStorage.number1)
        console.log(`  Stored num1 = ${localStorage.number1}`)
    }
    if (localStorage.getItem('number2')) {
        document.getElementById('Height').value = parseInt(localStorage.number2)
        console.log(`  Stored num2 = ${localStorage.number2}`)
    }
    console.log('  Finished initialization')
})

document.getElementById('clicker').addEventListener('click', () => {
    console.log('  Starting clicker click handler')
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    const i = parseInt(document.getElementById('Base').value)
    console.log('i=' + i)
    const j = parseInt(document.getElementById('height').value)
    console.log('j=' + j)
    const ct = origCount + 1
    const result = "Area is : " + (i * j) / 2;
    // const divresult = document.getElementById("divresult");
    const ans = 'your area is ' + result + '. This has been run ' + ct + ' times.'
    document.getElementById('divresult').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
    localStorage.setItem('number1', i)
    localStorage.setItem('number2', j)
    console.log('  Finished clicker click handler')
})
document.getElementById('wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    localStorage.removeItem('number1')
    localStorage.removeItem('number2')
    console.log('  Finished wiper click handler - localStorage entries removed')
})
console.log('SCRIPT END')
//based off Professor Case's example in the slides
function getQuote() {
    return new Promise(function (resolve, reject) {
        const req = new XMLHttpRequest();
        req.timeout = 1000;
        req.onreadystatechange = function (e) {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    const fact = req.response;
                    resolve(fact)
                } else {
                    reject(req.status)
                }
            }
        }
        req.ontimeout = function () {
            reject('Error - timed out: ' + req.time)
        }
        req.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes", true);
        
        req.send();
    })
}

async function quoteHandler() {
    const fact = await getQuote();
    console.log(fact);
    $("#quote").html(fact);
}
function findarea(b,h){
     base = b;
     height = h;
    var area;
    area = 0.5
    if(base < 0 || height < 0){
       area = 0;
    }
   else if(base > 0 || height > 0 ){
       area =  0.5 * base * height;
   }
    else if(base = "" ){
        area = 0;
    }
    else if(height = ""){
         area = 0;
    }
    
    else{
        area = 0.5 * base * height;
    }
    return area;
}