var id = 0;
var cars = [];

function saveCar() {
    var car = {
        id: setID(),
        manufacturer: getVal('manufacturer'),
        model: getVal('model'),
        price: getVal('price'),
        year: getVal('year'),
        fuel: getVal('fuel'),
        condition: getVal('condition'),
        picture: getVal('picture')
    };
    console.log(car);
    cars.push(car);
}

function getVal(id) {
    return document.getElementById(id).value;
}

function setID() {
    return ++id;
}

function clearForm() {
    fields = ['manufacturer', 'model', 'price', 'year', 'fuel', 'condition', 'picture']
    for (const field of fields) {
        resetVal(field);
    }
}

function resetVal(id) {
    return document.getElementById(id).value = '';
}

function show() {
    
}