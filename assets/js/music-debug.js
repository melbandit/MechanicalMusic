//----------------------LOOP CONTROL----------------------------------//

// BASS (Master track that fires all other tracks together.)
var bass = new Howl({ 
  src: ['assets/audio/bass-mm.wav'],
 	html5:true,
 	// preload:true, //may need to remove later
 	// loop:1,
 		sprite:{
 			bass:[0,10000]//add true if broken
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
  src: ['assets/audio/snare-mm.wav'],
 	
 	html5:true,
 	// preload:true, //may need to remove later
    // loop:1,
        sprite:{
            snare:[0,10000]//add true if broken
        }
});
snare.on('load', function(){
  	playAll("snare"); //If "this" doesn't work, use "snare".
    console.log("snare loaded");
});

//KICK
var kick = new Howl({ 
  src: ['assets/audio/kick-mm.wav'],
    
    html5:true,
    // preload:true, //may need to remove later
    // loop:1,
        sprite:{
            kick:[0,10000]//add true if broken
        }
});
kick.on('load', function(){
    playAll("kick"); //If "this" doesn't work, use "kick".
    console.log("kick loaded");
});

//HATS
var hats = new Howl({ 
  src: ['assets/audio/hats-mm.wav'],
    
    html5:true,
    // preload:true, //may need to remove later
    // loop:1,
        sprite:{
            hats:[0,10000]//add true if broken
        }
});
hats.on('load', function(){
    playAll("hats"); //If "this" doesn't work, use "hats".
    console.log("hats loaded");
});

//PERCUSSION
var percussion = new Howl({ 
  src: ['assets/audio/percussion-mm.wav'],
    
    html5:true,
    // preload:true, //may need to remove later
    // loop:1,
        sprite:{
            percussion:[0,10000]//add true if broken
        }
});
percussion.on('load', function(){
    playAll("percussion"); //If "this" doesn't work, use "percussion".
    console.log("percussion loaded");
});

//ARPEGGIATOR
var arp = new Howl({ 
  src: ['assets/audio/arp-mm.wav'],
    
    html5:true,
    // preload:true, //may need to remove later
    // loop:1,
        sprite:{
            arp:[0,10000]//add true if broken
        }
});
arp.on('load', function(){
    playAll("arp"); //If "this" doesn't work, use "arp".
    console.log("arp loaded");
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
    if(Howl == "kick") {
        kick.hasLoaded = true;
    }
    if(Howl == "hats") {
        hats.hasLoaded = true;
    }
    if(Howl == "percussion") {
        percussion.hasLoaded = true;
    }
    if(Howl == "arp") {
        arp.hasLoaded = true;
    }

    //If you need to make your own object, use this bit instead
    // loadedHowls[howl] = true;
    if(snare.hasLoaded && bass.hasLoaded && kick.hasLoaded && hats.hasLoaded && percussion.hasLoaded && arp.hasLoaded){
        // var htmlItem = document.getElementByID("music-player");
        // htmlItem.setAttribute("play", true);
        console.log("playAll started");
        bass.play("bass");
        snare.play("snare");
        kick.play("kick");
        hats.play("hats");
        percussion.play("percussion");
        arp.play("arp");
        // restartAll(); //Same as declaring them individually above.
    }
}

function restartAll(){
	bass.play("bass");
    snare.play("snare");
    kick.play("kick");
    hats.play("hats");
    percussion.play("percussion");
    arp.play("arp");
    // kick.play("kick");
    // hats.play("hats");
    // arp.play("arp");
    // percussion.play("percussion");
}

//----------------------END LOOP CONTROL-------------------------------//