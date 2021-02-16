(function(){
    'use strict';

// this is for the each Heading that will 
// appear when clicked on the hovor box

const head1="3 Main Buddha";
const head2="21 Tara (Mother)";
const head3="Chorten";
const head4="Bowls";


// this is for the each Paragraph that will 
// appear when clicked on the hovor box
const para1="1. Chenrezig <br> 2. Buddha Shakyamuni <br> 3. Guru Padmasambhava. <br> <br> Chenrezig is the embodiment of boundless loving-kindness and compassion. Love and compassion are the true signs revealing the presence of Chenrezi. <br> <br> Buddha Shakyamuni (Siddhartha Gautama Buddha) was born in Nepal as the crown prince of the great Shakya Kingdom. However, he left his kingdom, and later became a philosopher, mendicant, meditator, spiritual teacher, and religious leader. <br> <br> Guru Padmasambhava is generally referred to as Guru Rinpoche, which means 'precious master.' Guru Rinpoche is a totally enlightened being, a buddha. Guru Padmasambhava is associated with transforming negative energy into more peaceful and compassionate forms.";
const para2="Tara, a female Buddha 'Mother'. It is Tara who reveals herself in 21 different forms and qualities of the enlightened mind, helping us to overcome all fears and difficulties on the way. <br> <br> As shown in the 2nd box, Tara in the middle is the main mother, and her different forms are placed on both sides of the cabinet. It took us over twenty years to collect all statues.";
const para3="Shrine or Monument. The middle stupa itself is a symbol of the Buddha, and more accurately, of his enlightened mind and presence. The mound itself is said to represent the form of the seated Buddha, meditating and striving towards enlightenment. <br> <br> Chorten is also used as a memorial monument 'cemetery', this is primarily made for great grandparents and grandparents.";
const para4="Set of 7 water offering Bowls known as 'Dintsar' are traditionally placed on Buddhist shrines and filled with water every morning as a way of collecting merit and virtue. We offer water every morning and collect them before the sunsets. ";


// this is for the each box that will 
// appear when clicked on the image
const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");

const overlay=document.getElementById("overlay1");
const headVal=document.getElementById("head");
const para=document.getElementById("para");


// Here I created functions (when CLICKED on the box on the image) h1 and p overlay pop-up on the right side of the page. 
b1.addEventListener("click",function(){
    headVal.innerHTML=head1;
    para.innerHTML=para1;
    overlay.style.display="block";
});

b2.addEventListener("click",function(){
    headVal.innerHTML=head2;
    para.innerHTML=para2;
    overlay.style.display="block";
});
b3.addEventListener("click",function(){
    headVal.innerHTML=head3;
    para.innerHTML=para3;
    overlay.style.display="block";
});
b4.addEventListener("click",function(){
    headVal.innerHTML=head4;
    para.innerHTML=para4;
    overlay.style.display="block";
});

}());