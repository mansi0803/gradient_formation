let but1_val = document.getElementById("class1");
let but2_val = document.getElementById("class2");
let content = document.getElementById("copy_text");

let a = "#fff";
let b = "#000";
let copy_val = "the gradient colour is ";

but1_val.innerHTML = a;
but2_val.innerHTML = b;
content.innerHTML = `the gradient colour for first is ${a}, for second is ${b}`;

let s = "0123456789ABCDEF";

let first = a;
let second = b;
function find_first() {
  first = "#";
  for (let i = 0; i < 6; i++) {
    let ch = Math.floor((Math.random() * 16));
    first = first + s[ch];
  }

  but1_val.innerHTML = first;
  content.innerHTML = `the gradient colour for first is ${first}, for second is ${second}`;
  document.getElementById("main_div").style.background = `linear-gradient(90deg in oklab, ${first}, ${second})`;
}

function find_second() {
  second = "#";
  for (let i = 0; i < 6; i++) {
    let ch = Math.floor((Math.random() * 16));
    second = second + s[ch];
  }

  but2_val.innerHTML = second;
  content.innerHTML = `the gradient colour for first is ${first}, for second is ${second}`;
  document.getElementById("main_div").style.background = `linear-gradient(90deg in oklab, ${first}, ${second})`;
}
// find_first();
console.log(first);

but1_val.addEventListener("click", find_first);
but2_val.addEventListener("click", find_second);
