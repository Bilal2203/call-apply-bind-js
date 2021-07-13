// №1.call() деген функцияны кошкула. value деген жерге инпуттун значениясы чыгыш учун.

// let elem = document.getElementById('elem');
// elem.value = 'Hello';
// document.body.prepend = (elem);

// function func() {
// alert(elem.value);
// }

// let funcUser = func.call(elem,'value'); //тут должно вывести value инпута

// №2

// let elem = document.getElementById('elem');
// elem.value = 'Привет';
// document.body.prepend = (elem);

// function func(surname, name) {
// alert(this.value + ',  '+ surname + ' ' + name);
// }

// func.call(elem, 'Акбалаев', 'Билал' );

// №3

// let elem = document.getElementById('elem');
// elem.value = 'Привет';
// document.body.prepend = (elem);

// function func(surname, name) {
// alert(elem.value + ','+ surname + " " +name);
// }

// func.apply(elem,['Акбалаев', 'Билал'] );

// 4 task

let elem = document.getElementById('elem');
elem.value = 'Hello';
document.body.prepend = (elem);

function func(surname, name) {
alert(this.value + ', '+ surname + ' ' + name);
}
let funcUser = func.bind(elem);
funcUser("Akbalaev", "Bilal");