var formEl = document.getElementById("form");
var textareaEl = document.getElementById("textarea");



formEl.addEventListener("submit", function(e){
    e.preventDefault();
    var data = formEl.elements;
    console.log(data);
    var ytreD = data.ytreD.value;
    var indreD = data.indreD.value;
    var rorLengde = data.rorLengde.value;

    var del1 = Math.PI*(ytreD/2)*(ytreD/2);
    var del2 = Math.PI*(indreD/2)*(indreD/2);
    var ytreVolum = del1*rorLengde;
    var indreVolum = del2*rorLengde;
    var volum = ytreVolum - indreVolum; 

    console.log(volum)

    textareaEl.innerHTML = volum + "cm^3";


})
