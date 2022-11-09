function init(){
//add your javascrip between these two lines of code

}



function clickToAlert(){
  var input = document.getElementById('entryinput').value;
  alert("John Fabrycky: "+input);
  textoutput.innerHTML = input;
}



window.addEventListener('load', init);
entrybutton.addEventListener('click', clickToAlert)
