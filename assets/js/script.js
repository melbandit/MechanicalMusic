/* ==========================
        .go-back
========================== */
$(".go-back.sectionTwo__item").on("click", function(){
    $(".sectionTwo").addClass('move-down');
});
$(".go-back.sectionOne__item").on("click", function(){
    $(".sectionOneOverlay.secondary").removeClass('move-up');
});
// $(".go-back.sectionOneOverlay.secondary").on("click", function(){
//     $(".sectionOneOverlay").removeClass('move-up');
// });

/* ==========================
        .pull-reveal
========================== */
$(".pull-reveal").on("click", function(){
    $(".sectionTwo").removeClass('move-down');
});

/* ==========================
        .open
========================== */
$(".open").on("click", function(){
    $(".primary").addClass('move-up');
});

var $open_container = document.getElementById("open-container");
var $openLogo= document.querySelector(".open");

$openLogo.addEventListener("mouseover", function(){
    
    if( $open_container.getAttribute("id")== "open-container"){
        $openLogo.src = "assets/img/open-Sign.png";
        $openLogo.style.transitionDuration = "1s";
    }
});

$openLogo.addEventListener("mouseout", function(){
    $openLogo.src = "assets/img/openSignBlank.png";
    $openLogo.style.transitionDuration = "1.5s";
});
/* ==========================
        .text
========================== */
$(".continue").on("click", function(){
    $(".secondary").addClass('move-up');
});


/* ==========================
        .continue
========================== */

var $continue_container = document.querySelector(".continue-container");
var $openArrowLogo= document.querySelector(".open-arrow");

$continue_container.addEventListener("mouseover", function(){
    
    if( $continue_container.getAttribute("class")== "continue-container"){
        $openArrowLogo.src = "assets/img/open-arrow.png";
        $openArrowLogo.style.transitionDuration = "1s";
    }
});

$continue_container.addEventListener("mouseout", function(){
    $openArrowLogo.src = "assets/img/openArrowBlank.png";
    $openArrowLogo.style.transitionDuration = "1.5s";
});

/* ==========================
        _waves
========================== */
//var value;
//var value = 0.6;
updateWaves = function(value){
    console.log(value);
    var element = document.getElementById("waves");
    if(value > 0.5){
        console.log("larger than 0.5");
        element.setAttribute("class", "parallax_slower parallax");
        element.setAttribute("class", "parallax");
        //below does not work
        // $('.waves').addClass('parallax');
        // $('.waves').removeClass('parallax_slower');
    }
    if(value < 0.5){
        console.log("less than 0.5");
        element.setAttribute("class", "parallax parallax_slower");
        element.setAttribute("class", "parallax_slower");
        // //below does not work
        // $('.waves').removeClass('parallax_slower');
        // $('.waves').addClass('parallax');
    }
};

// $('img#gear').on("click", function(){
//     $('.waves').addClass('parallax');
//     $('.waves').removeClass('parallax_slower');
// });

/*=================================================================
                            gear(s)
=================================================================*/
//Melissa Updating volume
updateVolumeArp = function(value) {
    //alert('before update volume:', arp.volume);
    arp.volume(value);
    //alert('after update volume:', arp.volume);
};
updateVolumeHats = function(value) {
    //alert('before update volume:', hats.volume);
    hats.volume(value);
    //alert('after update volume:', hats.volume);
};
updateVolumeBass = function(value) {
    //alert('before update volume:', bass.volume);
    bass.volume(value);
    //alert('after update volume:', bass.volume);
};
updateVolumePercussion = function(value) {
    //alert('before update volume:', bass.volume);
    percussion.volume(value);
    //alert('after update volume:', bass.volume);
};
updateVolumeSnare = function(value) {
    //alert('before update volume:', bass.volume);
    snare.volume(value);
    //alert('after update volume:', bass.volume);
};

//============ #gear ========

Draggable.create("#gear",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
    throwProps: true,
    onDrag:Calc , 
    onThrowUpdate: Calc 
});

function Calc(){
    //console.log( this.rotation/360 ); 
    var R = (this.rotation/360).toFixed(2) ;
    document.getElementById("myText").innerHTML= R ;
    updateVolumeArp(R);
    updateWaves(R);
};



//============ #gear2 ==========

Draggable.create("#gear2",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
    throwProps: true ,
    onDrag:Calc2 , 
    onThrowUpdate: Calc2 
});

function Calc2(){
    // console.log( this.rotation ) 
    var S = (this.rotation/360).toFixed(2) ;
    document.getElementById("myText2").innerHTML= S ; 
    updateVolumeHats(S);
};


//============ #gear3 =========

Draggable.create("#gear3",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
    throwProps: true,
    onDrag:Calc3 , 
    onThrowUpdate: Calc3
});

function Calc3(){
    //console.log( this.rotation/360 ); 
    var T = (this.rotation/360).toFixed(2) ;
    document.getElementById("myText3").innerHTML= T ;
    updateVolumeBass(T);
};


//============ #gear4 =========

Draggable.create("#gear4",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
    throwProps: true,
    onDrag:Calc4 , 
    onThrowUpdate: Calc4
});

function Calc4(){
    //console.log( this.rotation/360 ); 
    var U = (this.rotation/360).toFixed(2) ;
    document.getElementById("myText4").innerHTML= U;
    updateVolumePercussion(U);
};


//============ #gear5 =========

Draggable.create("#gear5",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
    throwProps: true,
    onDrag:Calc5 , 
    onThrowUpdate: Calc5
});

function Calc5(){
    //console.log( this.rotation/360 ); 
    var V = (this.rotation/360).toFixed(2) ;
    document.getElementById("myText5").innerHTML= V;
    updateVolumeSnare(V);
};
/*=================================================================
                           end of gear(s)
=================================================================*/



