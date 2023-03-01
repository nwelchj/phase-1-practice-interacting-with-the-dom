
let count = 0
let intervalID;
const pause = document.getElementById("pause");

pause.addEventListener ('click', function(){
    clearInterval(intervalID);
})

function startcounter (){
   let sec = document.querySelector('#counter')
   document.addEventListener('DOMContentLoaded' ,(event) => {
    intervalID = setInterval(startcounter, 1000);
   });

   console.log (sec)

}
startcounter()

function pauseCounter (){
    const pause = document.getElementById("pause");
    count += 1;
    timmerText.textContent = count;

}

const getbuttons = document.getElementsByTagName ('button');
let buttonArry = []

for(let i =0; i<buttonArry.length; i++){
    if (buttons[i].id === 'pause'){
        buttonArry.push(buttons[i])

    }
}

console.log (buttonArry);

function disableButtons (button){
    button.setAttribute('disable', true)
};
function  engagedbutton (button){
    button.removeAttribute ('disabled');
};
// function cahngeButtonNames (button){
//     if (!paused){
//         pause.textContent = 'resume'};
//     if (paused){
//         pause.textContent = 'pause'
//     }
//     }



pause.addEventListener('click', function(){
    clearInterval(intervalID);
    buttonArry.forEach( button => disableButtons(button));

});

function resume (){
    pause.textContent = "resume"
};

pause.addEventListener ("click", function(){
    clearInterval (intervalID);
    buttonArry.forEach( button => disableButtons(button));
    resume()
});

function  engagedbutton (){
    button.removeAttribute ('disabled');
}

pause.addEventListener ("click", function(){
    if (pause  == false){
        clearInterval(intervalID)
        buttonArry.forEach (button => {
            disableButtons(button);
        })
        cahngeButtonNames()
        
    }
    if (pause){
        console.log ('here we go agian')
        startcounter()
        cahngeButtonNames()
        buttonArry.forEach(button => engagedbutton (button) )
    }
    pause = !pause
})

function cahngeButtonNames (button){
    if (!pause == true  ){
        pause.textContent = 'resume'};
    if (pause == true){
        pause.textContent = 'pause';
    }
}
console.log (cahngeButtonNames)

// I tired with the timner having trouble with the button switch 
