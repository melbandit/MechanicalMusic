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
  	playAll(this); //If "this" doesn't work, use "bass".
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
  	playAll(this); //If "this" doesn't work, use "snare".
});

function playAll(Howl){
    this.hasLoaded = true; //formerly .hasLoaded
    //if this doens't work
    //set that variable manually
    // if(howl == "bass") {
    //     bass.hasLoaded = true;
    // } //etc. for each howl name
    //If you need to make your own object, use this bit instead
    // loadedHowls[howl] = true;
    if(snare.hasLoaded && bass.hasLoaded){
        // var htmlItem = document.getElementByID("music-player");
        // htmlItem.setAttribute("play", true);
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