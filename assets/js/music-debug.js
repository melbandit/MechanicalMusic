//----------------------LOOP CONTROL----------------------------------//

// BASS (Master track that fires all other tracks together.)
var bass = new Howl({ 
  src: ['assets/audio/bass-mm.mp3'],
 	html5:true,
 	// preload:true, //may need to remove later
 	loop:1,
 		sprite:{
 			bass:[0,10000,true]
 		}
});
bass.on('load', function(){
  	playAll("bass"); //If "this" doesn't work, use "bass".
    console.log("bass loaded");
});
bass.on('end', function(){
	restartAll();
});

//SNARE
var snare = new Howl({ 
  src: ['assets/audio/snare-mm.mp3'],
 	
 	html5:true,
 	// preload:true, //may need to remove later
 	loop:1,
 		sprite:{
 			snare:[0,10000,true]
 		}
});
snare.on('load', function(){
  	playAll("snare"); //If "this" doesn't work, use "snare".
    console.log("snare loaded");
});

function playAll(Howl){
    console.log("playAll");
    //this.hasLoaded = true; //formerly .hasLoaded
    //if this doens't work
    //set that variable manually
    if(Howl == "bass") {
        bass.hasLoaded = true;
    } //etc. for each howl name
    if(Howl == "snare") {
        snare.hasLoaded = true;
    }
    //If you need to make your own object, use this bit instead
    // loadedHowls[howl] = true;
    if(snare.hasLoaded && bass.hasLoaded){
        // var htmlItem = document.getElementByID("music-player");
        // htmlItem.setAttribute("play", true);
        console.log("playAll started");
        bass.play("bass");
        snare.play("snare");
    }
}

function restartAll(){
	bass.play("bass");
    snare.play("snare");
    // kick.play("kick");
    // hats.play("hats");
    // arp.play("arp");
    // percussion.play("percussion");
}

//----------------------END LOOP CONTROL-------------------------------//