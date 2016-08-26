Draggable.create("#knob",{
  type: "rotation",
  bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
  throwProps: true ,
  onDrag:Calc , 
  onThrowUpdate: Calc 
});

function Calc(){
  console.log( this.rotation ) 
 var R = (this.rotation/360).toFixed(2) ;
 document.getElementById("myText").innerHTML= R ; 
}


Draggable.create("#knob2",{
  type: "rotation",
  // bounds:{minRotation:0, maxRotation:360}, //bounds, gives the rotation a max of 1, when on. unlimited when off
  throwProps: true ,
  onDrag:Calc2 , 
  onThrowUpdate: Calc2 
});

function Calc2(){
  console.log( this.rotation ) 
 var S = (this.rotation/360).toFixed(2) ;
 document.getElementById("myText2").innerHTML= S ; 
}