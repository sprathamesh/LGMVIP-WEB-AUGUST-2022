var addButton = document.getElementById("adder-button");
addButton.addEventListener("click", newElement);




// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



function newElement() {
  var li = document.createElement("li");

  var li_div = document.createElement("div");
  li_div.className = "li-item";

  var inputValue = document.getElementById("myInp").value;

  var txt_div = document.createElement("div");
  var t = document.createTextNode(inputValue);

  txt_div.className = "inpVal";


  txt_div.appendChild(t);
  li_div.appendChild(txt_div);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myul").appendChild(li);
  }
  document.getElementById("myInp").value = "";

  var clos = document.createElement("div");
  var txt = document.createTextNode("\u00D7");
  clos.className = "close";
  clos.appendChild(txt);
  li_div.appendChild(clos);

  var don = document.createElement("div");
  var txt = document.createTextNode("\u2713");
  don.className = "done";
  don.appendChild(txt);
  li_div.appendChild(don);

  li.appendChild(li_div);



  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      var div_div = div.parentElement;
      div_div.style.display = "none";
    }
  }

  var done = document.getElementsByClassName("done");
  var i;
  for (i = 0; i < close.length; i++) {
    done[i].onclick = function (e) {
      var div = this.parentElement;
      div.firstChild.style.textDecoration = "line-through";
      this.style.pointerEvents = "none";



    }
  }


}