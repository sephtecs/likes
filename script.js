// var neilCount = 9;
// var countElement = document.querySelector("#count");

// console.log(countElement);

// function add1() {
//     neilCount++;
//     countElement.innerText = neilCount + " like(s)";
//     console.log(neilCount);
// }

// var nicholeCount = 12;
// var countElement = document.querySelector("#count-2");

// console.log(countElement);

// function add1() {
//     count++;
//     countElement.innerText = nicholeCount + " like(s)";
//     console.log(nicholeCount);
// }

// var jimCount = 9;
// var countElement = document.querySelector("#count-3");

// console.log(countElement);

// function add1() {
//     count++;
//     countElement.innerText = jimCount + " like(s)";
//     console.log(jimCount);
// }

var likes = [9, 12, 9];
var spans = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];
function add1(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id]+"like(s)";
}