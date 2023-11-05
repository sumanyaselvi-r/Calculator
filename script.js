const container = ` 
<h4>Create a Calculator Using DOM</h4>
<div class="container">

<div class="calculator">
  <h1 id = "result">0</h1>
  <div class ="input-field">
      <h3 id="write"></h3>
  </div>
  <div class="numbers">
    <button id="clear">AC</button>
    <button id="back-space">DEL</button>
    <button id="dot">.</button>
    <button id="multi">x</button>
    <button id="seven">7</button>
    <button id="eight">8</button>
    <button id="nine">9</button>
    <button id="slash">/</button>
    <button id="four">4</button>
    <button id="five">5</button>
    <button id="six">6</button>
    <button id="minus">-</button>
    <button id="one">1</button>
    <button id="two">2</button>
    <button id="three">3</button>
    <button id="plus">+</button>
    <button id="zero">0</button>
    <button id="modulus">%</button>
    <button id="equal">=</button>
   
  </div>
</div>
</div>
`
document.body.innerHTML = container

var clear = document.querySelector('#clear')
var answer = document.querySelector('#equal')

var btn0 = document.querySelector('#zero')
var btn1 = document.querySelector('#one')
var btn2 = document.querySelector('#two')
var btn3 = document.querySelector('#three')
var btn4 = document.querySelector('#four')
var btn5 = document.querySelector('#five')
var btn6 = document.querySelector('#six')
var btn7 = document.querySelector('#seven')
var btn8 = document.querySelector('#eight')
var btn9 = document.querySelector('#nine')

var dot = document.querySelector('#dot')
var backSpace = document.querySelector('#back-space')
var multi = document.querySelector('#multi')
var minus = document.querySelector('#minus')
var plus = document.querySelector('#plus')
var modulus = document.querySelector('#modulus')
var slash = document.querySelector('#slash')

var write = document.querySelector('#write')
var result = document.querySelector('#result')
var equal = document.querySelector('#equal')

btn0.onclick = () => {
  typeNum (0);
}
btn1.onclick = () => {
  typeNum (1);
}

btn2.onclick = () => {
  typeNum (2);
}

btn3.onclick = () => {
  typeNum (3);
}

btn4.onclick = () => {
  typeNum (4);
}

btn5.onclick = () => {
  typeNum (5);
}

btn6.onclick = () => {
  typeNum (6);
}

btn7.onclick = () => {
  typeNum (7);
}

btn8.onclick = () => {
  typeNum (8);
}

btn9.onclick = () => {
  typeNum (9);
}

dot.onclick = () => {
  typeNum (".");
}

multi.onclick = () => {
  typeNum ("*");
}

minus.onclick = () => {
  typeNum ("-");
}
plus.onclick = () => {
  typeNum ("+");
}
modulus.onclick = () => {
  typeNum ("%");
}
slash.onclick = () => {
  typeNum ("/");
}
backSpace.onclick = () => {
  eraseNum ();
}
clear.onclick = () => {
  clearRes ();
}

equal.onclick = () => {
  calc()
}

document.onkeyup = e => {
  if(e.key == "0" || e.key == "num0"){
    typeNum (0);
  }
  else if (e.key == "1" || e.key == 'num1') {
    typeNum (1);
  }
  else if (e.key == "2" || e.key == "num2") {
    typeNum (2);
  }
  else if (e.key == "3" || e.key == "num3") {
    typeNum (3);
  }
  else if (e.key == "4" || e.key == "num4") {
    typeNum (4);
  }
  else if (e.key == "5" || e.key == "num5") {
    typeNum (5);
  }
  else if (e.key == "6" || e.key == "num6") {
    typeNum (6);
  }
  else if (e.key == "7" || e.key == "num7") {
    typeNum (7);
  }
  else if (e.key == "8"|| e.key == "num8") {
    typeNum (8);
  }
  else if (e.key == "9" || e.key == "num9") {
    typeNum (9);
  }
  else if (e.key == "+" || e.key == "num+") {
    typeNum ("+");
  }
  else if (e.key == "-" || e.key == "num-") {
    typeNum ("-");
  }
  else if (e.key == "/" || e.key == "num/") {
    typeNum ("/");
  }
  else if (e.key == "*" || e.key == "num*") {
    typeNum ("*");
  }
  else if (e.key == "." || e.key == "num.") {
    typeNum (".");
  }
  else if (e.key == "%" || e.key == "num%") {
    typeNum ("%");
  }
  else if (e.key == "Enter" || e.key == "numenter") {
     calc();
  }
  else if (e.key == "Backspace" || e.key == "Escape") {
     eraseNum();
  }
  else if (e.key == "Delete") {
     clearRes();
  }
}

var typeNum = Text => {
  if (write.innerText == "") {
    write.innerText = Text
  } 
  else if (write.innerText.length <=20){
    var operators = ["+", "-", "*", "/", ".",]
    var lastCharac = write.innerText[write.innerText.length-1]
    if(!operators.includes(lastCharac) || !operators.includes(Text)) {
      write.innerText += Text
    }
  } else {
    alert("Limit Reached")
  }
  
}

var calc = () => {
  result.innerText = eval(write.innerText)
}

var clearRes = () => {
  write.innerText = ""
  result.innerText="0"
}
var eraseNum = () => {
  write.innerText = write.innerText.substr(0, write.innerText.length-1)
}