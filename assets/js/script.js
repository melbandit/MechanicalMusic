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

//============ gear ========

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
};



//============ gear2 ==========

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


//============ gear3 =========

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
    updateVolumeArp(T);
};






