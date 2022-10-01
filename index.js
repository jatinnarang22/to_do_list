let main = document.querySelector("main");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.createElement("ul");
main.appendChild(list);
// -------------------------------------------------style-------------------------------
// var style = {
//   // display:'flex',
//   // backgroundColor:'#2fd29ed9',
//   display: "flex",
//   // backgroundColor: "#2fd29ed9",
//   borderradius: "7px",
//   width: "43vw",
//   height: "7vh",
//   alignItems: "center",
// };

// function addStyle(element, style) {
//   for (id in style) {
//     element.style[id] = style[id];
//   }
// }
// -------------------------------------------------style-------------------------------

btn.addEventListener("click", function () {
  //add a list

  let li = document.createElement("li");
  let div = document.createElement("div");
  let cross = document.createElement("button");
  let up = document.createElement("button");
  let down = document.createElement("button");
  let val = document.createElement("p");
  cross.innerText = "X";
  cross.style.background = "#d60202";
  up.innerText = "up";
  up.style.background = "#089cdc";
  down.innerText = "down";
  down.style.background = "#cbcb01";
  val.innerText = input.value;
  div.appendChild(cross);
  div.appendChild(up);
  div.appendChild(down);
  div.appendChild(val);
  // addStyle(div, style);
  //   div.style.display = "flex";
  //   div.style.backgroundColor = "green";
  li.appendChild(div);
  if(val.innerHTML!="")
   list.appendChild(li);
  else
  alert("You have to type something before pressing ")
  input.value = "";

  cross.addEventListener("click", function () {
    li.remove();
  });
  down.addEventListener("click", function () {
    let l1 = li.nextSibling;
    if (l1) list.insertBefore(l1, li);
  });

  up.addEventListener("click", function () {
    let l1 = li.previousSibling;
    if (l1) list.insertBefore(li, l1);
  });
});
