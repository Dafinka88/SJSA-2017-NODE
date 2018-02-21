const fetch=require("node-fetch");


function sobiraj(a, b){
	console.log(a + b);
}

function sobiraj2(a, b){
	return a + b;
}
sobiraj2(2, 5);

var res= sobiraj2(4, 6);
console.log(res);

console.log(sobiraj2(4,6));



// ***********

var sobiraj3 = function(a, b){
	return a + b;

};
console.log(sobiraj3(4,11));

var calc = function(c, d, fn){
fn(c, d);
}

calc(6, 21, sobiraj3);

var res3 = calc(10, 43, function(a,b){
	return a * b;
});


// promise////

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(res){
// 	return res.json();
// })
// .then(function(data){
// 	console.log(data);
// });


// custom promise

var p1 = (a, b) => {
	return new Promise((success, fail)=>{
			var res = a + b;
			if(res<=10){
				return success(res);
			}else {
				return fail("Number is to big");
			}
	});
}


var p2 = (c) => {
	return new Promise((success, fail) => {
		var res = c/10;

		if(res <= 10){
			success(res);
		}else {
			fail("the final result is to big");
		}
	});
}

// p1(2,4)
// .then(
// 	(data) => {
// 	console.log("success! the result is:" + data);
// },
// (err) => {
// 	console.error(err);
// }
// );

p1(2,5)
.then(
	(data) => {
	
	return p2(data)
},
	(err) => {
	console.error(err);
}
)
	.then(
	(data) => {
	console.log("Final data:" + data);
},
(err) => {
	console.log(err);
}
);







var n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var n2 = n1.map((val)=>{
	return val* 10;
});


var n3 = n1.reduce((prev, cur) => {
	return prev + cur;
});


var n4 = n1.filter((val) => {
	return val % 2 == 0;
});


var n5 = n1.filter((val) => {
	return val %2 == 1;

}).map((val) => {
	return val * 2;
}).filter((val) => {
	return val < 10;
});

console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);