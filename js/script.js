var app = angular.module('myApp', [])

    .controller('mainCtrl', function ($scope) {

        $scope.folder = {
            naziv: 'angular-tour-of-heroes',
            isCollapsed: false,
            children: [
                { naziv: 'e2e' },
                { naziv: 'node_modules' },
                {
                    naziv: 'src',
                    children: [
                        {
                            naziv: 'app',
                            children: [
                                {
                                    naziv: 'heroes',
                                    children: [
                                        { naziv: 'heroes.component.css' },
                                        { naziv: 'heroes.component.html' },
                                        { naziv: 'heroes.component.spec.ts' },
                                        { naziv: 'heroes.component.ts' },
                                    ]
                                },
                                { naziv: 'app.component.css' },
                                { naziv: 'app.component.html' },
                                { naziv: 'app.component.spec.ts' },
                                { naziv: 'app.component.ts' },
                                { naziv: 'app.module.ts' },
                            ]
                        }
                    ]
                }
            ]
        };

        $scope.collapse = function (folder) {
            console.log("collapsed", folder);
            folder.isCollapsed = !folder.isCollapsed;
        }
    














        /* Tour of Heroes */
        /* 
        $scope.heroes = ["Magneta", "Whatever", "C-man"];


        $scope.addHero = function () {
            $scope.heroes.push($scope.newHero)
            console.log('Hero added');
        }; */



        /*        $scope.langs = [
                   {
                       naziv: 'C#',
                       price: 100,
                       datum: new Date(),
                       like:0,
                       dislike:0
                   },
                   {
                       naziv: 'PHP',
                       price: 300,
                       datum: new Date(),
                       like:0,
                       dislike:0
                   },
                   {
                       naziv: 'Java',
                       price: 400,
                       datum: new Date(),
                       like:0,
                       dislike:0
                   },
                   {
                       naziv: 'AngularJS',
                       price: 5000,
                       datum: new Date(),
                       like:0,
                       dislike:0
                   }
               ];

               $scope.likeLang = function (lang) {
                   console.log(lang);
                   lang.like++;
               };

               $scope.dislikeLang = function (lang) {
                   console.log(lang);
                   lang.dislike++;
               };

               
        */














        /*          
                    $scope.blogs = [
                    {
                        naziv: 'Prvi AngularJS blog',
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Possimus ipsa veritatis veniam facere aut delectus, repudiandae exercitationem odio 
                        beatae dolorum quibusdam modi corrupti velit doloribus. Qui architecto illo quisquam sapiente?
                        `,
                        comments: ['Ovaj blog je pravo dobar.', 'Meni se ne svidja!']
                    },
                    {
                        naziv: 'Drugi AngularJS blog',
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Possimus ipsa veritatis veniam facere aut delectus, repudiandae exercitationem odio 
                        beatae dolorum quibusdam modi corrupti velit doloribus. Qui architecto illo quisquam sapiente?
                        `
                    },
                    {
                        naziv: 'Treci AngularJS blog',
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Possimus ipsa veritatis veniam facere aut delectus, repudiandae exercitationem odio 
                        beatae dolorum quibusdam modi corrupti velit doloribus. Qui architecto illo quisquam sapiente?
                        `
                    }
                ];                  
                
                $scope.users = 
                [
                    {id:1, naziv:'Amir' },
                    {id:2, naziv:'Damir' },
                    {id:3, naziv:'Samir' },
                ];

                $scope.user = {
                    naziv: 'Haris',
                    lastnaziv: 'Lapo',
                    adress: 'GRB 82.',
                    image: 'https://cdn.vox-cdn.com/thumbor/0n6dqQfk9MuOBSiM39Pog2Bw39Y=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19341372/microsoftedgenewlogo.jpg'
                }; */
        /* 

         */

        /*         
        

        */
        /* 
                $scope.deleteBlog = function (index) {
                    console.log('Delete', index);
                    $scope.blogs.splice(index, 1);
                };
        
                $scope.updateBlog = function (blog) {
                    console.log('Update', blog);
        
                };
         */
    });


/* drugi zadatak */
/* var todos = [];

function addTodo() {
    var todo = {
        naziv: document.getElementById('todo').value,
        show: function (i) {
            return `
            <div>
            <input type="checkbox" id="check">
            <span>${todo.naziv}</span>
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