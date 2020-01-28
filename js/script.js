

var app = angular.module('myApp', [])

    .controller('mainCtrl', function ($scope) {
        /*  
        $scope.user = {
             name: 'Haris',
             lastName: 'Lapo',
             adress: 'GRB 82.',
             image: 'https://cdn.vox-cdn.com/thumbor/0n6dqQfk9MuOBSiM39Pog2Bw39Y=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19341372/microsoftedgenewlogo.jpg'
         }; */

         $scope.users = [
             {id:1, name:'Amir' },
             {id:2, name:'Damir' },
             {id:3, name:'Samir' },
         ]

        $scope.blogs = [
            {
                name: 'Prvi AngularJS blog',
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Possimus ipsa veritatis veniam facere aut delectus, repudiandae exercitationem odio 
                beatae dolorum quibusdam modi corrupti velit doloribus. Qui architecto illo quisquam sapiente?
                `,
                comments: ['Ovaj blog je pravo dobar.', 'Meni se ne svidja!']
            },
            {
                name: 'Drugi AngularJS blog',
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Possimus ipsa veritatis veniam facere aut delectus, repudiandae exercitationem odio 
                beatae dolorum quibusdam modi corrupti velit doloribus. Qui architecto illo quisquam sapiente?
                `
            },
            {
                name: 'Treci AngularJS blog',
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Possimus ipsa veritatis veniam facere aut delectus, repudiandae exercitationem odio 
                beatae dolorum quibusdam modi corrupti velit doloribus. Qui architecto illo quisquam sapiente?
                `
            }
        ];

        $scope.deleteBlog = function(index){
            console.log('Delete', index);
            $scope.blogs.splice(index, 1);
        };

        $scope.updateBlog = function(blog){
            console.log('Update', blog);
            
        };

    });
















/* drugi zadatak */
/* var todos = [];

function addTodo() {
    var todo = {
        name: document.getElementById('todo').value,
        show: function (i) {
            return `
            <div>
            <input type="checkbox" id="check">
            <span>${todo.name}</span>
            <button onclick="deleteTodo(${i})">Delete</button>
            </div>
            `
        }
    };
    todos.push(todo);
    document.getElementById('todo').value = ' ';
    showAll();
    console.log(todos);
}

function showAll() {
    document.getElementById('todos').innerHTML = ' ';
    for (let i = 0; i < todos.length; i++) {
        document.getElementById('todos').innerHTML += todos[i].show(i);
    }
}

function addOnEnter(evt){
    if(evt.keyCode == 13){
        addTodo();
    }
}

var deleteAll = function () {
    todos = [];
    showAll();
    console.log(todos);
}

function deleteTodo(index) {
    console.log('Delete todo...' + index);
    todos.splice(index, 1);
    showAll();
}



 */
/* prvi zadatak */
/* var id = 0;
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
} */
