function creat() {
 let tab = "";
 for (let i=1; i<9; i++) {
  tab += `<tr>`;
  for (let i=1; i<5; i++) {
   tab += `<td><td/>`;
  }
  tab += `<tr/>`;
 }




 document.getElementById("table").innerHTML = tab;

//  if(i % 2 == 0) {
//   tab.style.backgroundColor = 'black';
// }
//  else {
//  tab.style.backgroundColor = 'white';
// }
}