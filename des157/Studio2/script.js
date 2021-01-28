(function(){
    'use strict';

    const myForm = document.querySelector('#myForm');
    const madlibs = document.querySelector('#madlibs');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const animal = document.querySelector('#nanimal').value;
        const verb = document.querySelector('#verb').value;
        const cartoon = document.querySelector('#cartoon').value;
        const adjective = document.querySelector('#adjective').value;

        const myText = `here are the words: ${name}, ${animal}, ${verb}, ${cartoon}, ${adjective}`;

        if (name && animal && verb && cartoon && adjective) {
            const myText = `here are the words: ${name}, ${animal}, ${verb}, ${cartoon}, ${adjective}`;
        }
        else { 
            const myText = "Please give me words so I can make your Mad Lib!";
        }
        

        madlibs.innerHTML = myText

    
    });

}());