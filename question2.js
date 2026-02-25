//1//
 function hello() {
  console.log("Hello World");
}
setInterval(hello, 2000);
//2//
let i = 1;
const id1 = setInterval(function () {
  console.log(i++);
  if (i > 10) clearInterval(id1);
}, 1000);
//3//
function showTime() {
  console.log(new Date().toLocaleTimeString());
}
setInterval(showTime, 1000);
//4//
let n = 2;
setInterval(function () {
  console.log(n);
  n += 2;
}, 2000);
//5//
let c = 10;
const id2 = setInterval(function () {
  console.log(c--);
  if (c < 0) clearInterval(id2);
}, 1000);