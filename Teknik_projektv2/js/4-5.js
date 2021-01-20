//selectors
const generator = document.getElementById('gen');

//Event Listeners 
generator.addEventListener('click', returnShuffle);


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
    let a = ["R ", "R' ", "R2 ","RW ", "RW' ", "RW2 ", "L ", "L' ", "L2 ","LW ", "LW' ", "LW2 ", "U ", "U' ", "U2 ","UW ", "UW' ", "UW2 ", "F ", "F' ", "F2 ","FW ", "FW' ", "FW2 ", "D ", "D' ", "D2 ","DW ", "DW' ", "DW2 ",];
    document.getElementById('output').innerHTML = shuffle(a);
    
}
//function 

