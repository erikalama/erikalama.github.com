(function(){
    'use strict';

    // document.getElementById("output").style.visibility = "hidden";

    const myForm = document.querySelector('#myForm');
    const madlibs = document.querySelector('#output');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const animal = document.querySelector('#animal').value;
        const verb = document.querySelector('#verb').value;
        const cartoon = document.querySelector('#cartoon').value;
        const adjective = document.querySelector('#adjective').value;

    

        ////// will add the story here (in the if statement)//////

        
        var myText ;
        var story 
        if (name && animal && verb && cartoon && adjective) {
            //  myText = `Here are the words: ${name}, ${animal}, ${verb}, ${cartoon}, ${adjective}`;
              story = "</br>Hello <strong>" + name + "</strong>, I know you love to sing, but why do you sound like <strong>" + animal +"</strong> Why don't you <strong>" + verb + "</strong> and sing with me like <strong>" + cartoon+ "</strong>, I bet you like that better. Okay okay, now let's keep <strong>"+ adjective + "</strong> until we get to the right note. Let's hit it up to D#!" ;

        }
        else { 
             myText = "Please give me words so I can make your Mad Lib!";
        }
        

        // madlibs.innerHTML = myText
        
          madlibs.innerHTML += story

        // document.getElementById("output").style.visibility = "visible";

    });

}());