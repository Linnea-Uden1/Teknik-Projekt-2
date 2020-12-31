document.getElementById('gen').addEventListener("click", returnShuffle);

//Fisher-Yates shuffle function
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function returnShuffle(){
    let a = ["R ", "R' ", "R2 ", "L ", "L' ", "L2 ", "U ", "U' ", "U2 ", "F ", "F' ", "F2 ", "D ", "D' ", "D2 "];
    document.getElementById('output').innerHTML = shuffle(a);
    
}

const timeList = document.querySelector('.time-list');
// A function that crates a li to the userInput when enter a new time and then  
function addTime(){
    var time = document.getElementById("userInput").value;
    var node = document.createElement('li');
node.appendChild(document.createTextNode(time));
document.querySelector('ul').appendChild(node);
document.getElementById('userInput').value = '';
// localStorage.setItem("tid", time);
// document.getElementById("result").innerHTML = localStorage.getItem("tid");
}
//Clear list if press button 
function RemoveAll(){
    document.querySelector(".time-list").innerHTML = "";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
        
// Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
}
}
}
}
