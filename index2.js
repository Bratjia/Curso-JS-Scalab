'use strinct'

// - objetos 

var studentName = 'Pepe';
var studentLastName = 'Potz';
var studentCourse = 'DiseÃ±o';

var student = {
  name: 'Pepe',
  lastName: 'Potz',
  course: 'DiseÃ±o'
}

console.log(studentName, studentLastName, studentCourse);

student.name = 'Pepa';
student.firstName = 'Didi';
student.lastname = 'Perez';
console.log(student.name, student.lastName);
console.log(student.grades);
console.log(student);

var studentFullName = student.name + ' ' + student.lastName;

console.log(studentFullName);

student.key = 123;
// [studentName, studentLastName, studentCourse]
for (var key in student) {
  console.log(key, student[key]);
}

var vocals = ['a', 'e', 'i', 'o', 'u'];
for (var elem in vocals) {
  console.log(elem, vocals[elem]);
}

var studentValues = Object.values(student);
console.log(studentValues);

student.assistance = 0.8;

var studentKeys = Object.keys(student);
console.log(studentKeys);

var studentEntries = Object.entries(student);
console.log(studentEntries);

console.log(studentKeys.includes('firstName'));

console.log(student.__proto__);

console.log(vocals.__proto__);


var user = {
  name: 'Pepe',
  lastname: 'Papa',
  email: 'pepe@papa.com',
  permissions: {
    canWrite: true,
    showUserRights() {
      console.log(this, this.name);
    }
  },
  fullname(inUpperCase) {
    console.log('esto es un mÃ©todo');
    // return this.name + ' ' + this.lastname;
    var full = this.name + ' ' + this.lastname;
    if (inUpperCase) {
      return full.toUpperCase();
    }
    return full;
  },
  showThis() {
    console.log(this);
  }
}

console.log(user.fullname(true));

console.log(this);
user.showThis();

var showThis = user.showThis;
showThis();

user.permissions.showUserRights();

var user1 = {
  name: 'Juan',
  lastname: 'Donoso',
  salute() {
    console.log('Hola, me llamo ' + this.name + ' ' + this.lastname);
  }
}

var user2 = {
  name: 'Teresa',
  lastname: 'Martinez',
  salute() {
    console.log('Hola, me llamo ' + this.name + ' ' + this.lastname);
  }
}

user1.salute();
user2.salute();

function saluteFn(init) {
  console.log(this);
  var initDefault = init || 'Hola';
  console.log('Â¡' + initDefault + ', me llamo ' + this.name + ' ' + this.lastname + '!');
}

saluteFn();

var user1Salute = saluteFn.bind(user1);
console.log(user1Salute);
user1Salute();

var user2Salute = saluteFn.bind(user2);
user2Salute();

saluteFn.call(user1, 'Hola');
saluteFn.apply(user2, ['Hello']);


function createUser(name, lastname, email) {
  return {
    name: name,
    lastname: lastname,
    email: email
  }
}

var user3 = createUser('Luis', 'Zapata', 'luis@zapata.com');
var user4 = createUser('Javiera', 'Carrasco', 'javiera@carrasco.com');

saluteFn.call(user3);
saluteFn.apply(user4);

var userData = [
  ['Luis', 'Zapata', 'luis@zapata.com'],
  ['Javiera', 'Carrasco', 'javiera@carrasco.com']
];

var userList = [];

for(var data of userData) {
  console.log(data);
  var newUser = createUser(data[0], data[1], data[2]);
  userList.push(newUser);
}

console.log(userList);

for (var userModel of userList) {
  saluteFn.call(userModel);
}

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var add = document.getElementById('btn');
var form = document.getElementById('form');

function showInputValues(evt){
  evt.preventDefault();
  console.log(nombre, apellido.value, email);
  var userFromForm = createUser(nombre.value, apellido.value, email.value);
  userList.push(userFromForm);
  // window.localStorage.add('users', userList);
  localStorage.setItem('users', JSON.stringify(userList));
  console.log(userList);
  var usersFromStorage = JSON.parse(localStorage.getItem('users'));
  console.log(usersFromStorage);
}

// showInputValues();

form.addEventListener('submit', showInputValues);






