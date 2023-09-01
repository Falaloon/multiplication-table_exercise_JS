let inputnum = document.getElementById("input-number");
let runbutton = document.getElementById("run-button");
let playresult = document.getElementById("display-result");
const run = document.getElementById('run-button');

function printmultiply () {
    let input = parseInt(inputnum.value);
    console.log(input);
    let output = '';
    if (input === 0){
        playresult.innerHTML = 'ศูนย์ คูณ อะไรก้ได้ ศูนย์'
        return;
    }
    for(let i = 1; i<=12; i++){
        output += '<p>';
        output += input + ' x ' + i + ' = ' + (input * i);
        output += '</p>';
    }
    playresult.innerHTML = output;
}

run.addEventListener('click', printmultiply);
