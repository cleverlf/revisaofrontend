var button = document.querySelector("button");
button.onclick = 
    function myFunction()
{
var x;

var idade=prompt("Digite sua idade:");

if (idade==24)
  {
  x="Idade: " + idade + " anos.";
  document.getElementById("demo").innerHTML=x;
  }
  else{
    x= "too old"
  }
}
