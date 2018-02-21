console.log("Hello World");

var string = "Test test test";
var string2= 'Test2 test2';
var string3 =`test3 test3`;

console.log(string);
console.log(string2);
console.log(string3);


var integer = 12;
console.log(integer);

var float = 3.14;

console.log(float);

var booleanT= true;
var booleanF= false;
console.log(booleanF);
console.log(booleanT); 

var niza1 = ['pero', 'janko', 'stanko'];
// console.log(niza1);

// console.log(niza1[0]);

// console.log(niza1[1]);

// console.log(niza1[2]);

niza1.push("Dafinka");
console.log(niza1.length);



for (let i = 0; i<niza1.length; i++) {
   console.log(niza1[i]);
}

for (let i in niza1){
	console.log(niza1[i]);
}

// == === <= != >= ! za sporedba operatori
// && -i 
// ||ili

var broevi = [3, 2, 6, 3, 8, 15, 34, 43, 5, 3, 5, 30, 4, 15, 9];

for (let i in broevi) {
   var o = '';

   if (broevi[i] %3 == 0) {
       o +='fizz';
   }
   if(broevi[i] % 5 == 0 ){
       o +='buzz';
   }
   console.log(broevi[i] + "\t = \t" + o);
}






var brojac = 0;
while(brojac<=10){
	console.log(brojac);
	brojac++;
}


do {
	console.log(brojac);
	brojac++;
}while(brojac<10);


