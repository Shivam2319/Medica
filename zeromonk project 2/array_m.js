let data=[2,8,7,9,15,16,17,18,19,20,];
// // for loop for traversing data
// for(let i=0; i<data.length; i++) {
//     document.write(`array ${i} is ${data[i]} </br>`);
//     document.writeln(`</br>`);
// }

// // for loop for written 2 tables
// for(let i=1; i<=10; i++){
//     document.write(`2 x ${i} is ${2*[i]} </br>`);
// }
function getElement() {
    let el = document.getElementById('element').value;
    let header = document.getElementById('header');
    header.innerHTML = el;
}
