var id = 0;
var cars = [];

function saveCar() {
    var car = {
        id: setID(),
        marka: getVal('marka'),
        model: getVal('model'),
        cijena: getVal('cijena'),
        godiste: getVal('godiste'),
        gorivo: getVal('gorivo'),
        stanje: getVal('stanje'),
    };
    console.log(cars);
    cars.push(car);
    prikazi();
}

function getVal(id) {
    return document.getElementById(id).value;
}

function setID() {
    return ++id;
}

function clearForm() {
    fields = ['marka', 'model', 'cijena', 'godiste', 'gorivo', 'stanje']
    for (const field of fields) {
        resetVal(field);
    }
}

function resetVal(id) {
    return document.getElementById(id).value = '';
}

function prikazi() {
    var res = document.getElementById('res');
    for (var i = 0; i < cars.length; i++) {
        var resItem = document.createElement('div');
        resItem.classList.add('result-item');
        var h3 = document.createElement('h3');
        h3.innerHTML = cars[i].marka;
        var h3 = document.createElement('img');
        img.src = cars[i].slika;
        img.width = 150;
        var h4 = document.createElement('h4');
        h4.innerHTML = 'Presao 240.000 km';
        resItem.appendChild(h4);
        resItem.appendChild(img);
        resItem.appendChild(h3);
        res.appendChild(resItem);
    }
}