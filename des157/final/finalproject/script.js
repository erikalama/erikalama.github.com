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
              story = "</br>Hello <strong>" + name + "</strong>, I know you love to sing, but I think you sound a bit like <strong>" + animal +"</strong>. it's all good tho, how about we sing <strong>" + verb + "</strong>. ~~Laa Luu Lay~~ <br> Wait wait! do you sound like <strong>" + cartoon+ "</strong> now, but I bet you like this better >< <br> Okay, how about you practice <strong>"+ adjective + "</strong>! Or just chill and sing with me <br> . <br> I like to move it, move it <br> You like to move it move it <br> I like to move it, move it <br> you like to <strong>MOVE IT</strong>" ;

        }
        else { 
             story = "Please give me words so I can make your Mad Lib!";
        }
        
        // madlibs.innerHTML = myText
        
          madlibs.innerHTML += story

        // document.getElementById("output").style.visibility = "visible";

    });
  

}());



$(document).ready(function(){
    $(".next-sec").click(function(){
        var current =$(this);
        current.parents(".box2").fadeOut(function(){
            current.parents(".box2").next(".box2").fadeIn();
        })
    });

    $(".play-music").click(function(){
        var audio = $("#audio_song");
        audio[0].play();
    });

    $(".sing-again").click(function(){
        location.reload();
    });
});