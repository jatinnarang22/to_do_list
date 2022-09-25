let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.createElement("ul");
document.body.appendChild(list);
// -------------------------------------------------style-------------------------------
var style={
    // display:'flex',
    // backgroundColor:'#2fd29ed9',
    display: 'flex',
    backgroundColor:'#2fd29ed9',
    borderradius: '7px',
    width: '43vw',
    height: '7vh',

}
var listyle={
  borderradius:'50% ',
}
function addlistyle(element,style){
  for(id in style){
    element.style[id]=style[id];
  }
}
function addStyle(element,style){
    for(id in style){
        element.style[id]=style[id];
    }
}
// -------------------------------------------------style-------------------------------

btn.addEventListener("click", function () {
  //add a list

  let li = document.createElement("li");
  let div = document.createElement("div");
  let cross = document.createElement("button");
  let up = document.createElement("button");
  let down = document.createElement("button");
  let val = document.createElement("p");
  cross.innerText='X';
  up.innerText='up';
  down.innerText='down';
  val.innerText=input.value;
  div.appendChild(cross);
  div.appendChild(up);
  div.appendChild(down);
  div.appendChild(val);
  addStyle(div,style);

  li.style.marginBottom="5px";
//   div.style.display = "flex";
//   div.style.backgroundColor = "green";
  li.appendChild(div);
  list.appendChild(li);
  list
  {
    li.style.listStyleType='none';
    addlistyle(li,listyle);
  }
  list.style.display="flex";
  input.value = "";
});
