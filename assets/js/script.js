//Melissa Updating volume
updateVolumeArp = function(value) {
  //alert('before update volume:', arp.volume);
  arp.volume(value);
  //alert('after update volume:', arp.volume);
};
updateVolumeHats = function(value) {
  //alert('before update volume:', Hats.volume);
  hats.volume(value);
  //alert('after update volume:', Hats.volume);
};


Draggable.create("#knob",{
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
};


Draggable.create("#knob2",{
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




// //HELP in CLASS WITH AMANDA
// //IF IT WONT LET YOU ADD hasLoaded to the objects, make an object to hole those values.
// var loadedHowls ={};
// var kick ={
//     //hasLoaded: true/false; //hasLoaded made up
//     //hasLoaded: false;
//     sprite: [0, 100000, true],
//     onLoad: playAll("kick"), //or playAll(this);
//     onEnd: restartAll();//write a function that watches this and when this one ends restart ALL at 0.
// }


// function playAll(howl){
//   if (kick.hasLoaded && bass.hasLoaded && arp.hasLoaded){
//     //this.hasLoaded = true; //if this doesn't work...
//     if(howl == "bass"){
//         bass.hasLoaded =true;
//     }//etc. for each howls name

//     loadedHowls[howl]=true;

//     var htmlItem = document.getElementById("music-player");
//     htmlItem.setAttribute("play", true);
//     bass.play();
//   }

// }

// function restartAll(){
//     bass.play();
//     arp.play();
//     kick.play();
// }


