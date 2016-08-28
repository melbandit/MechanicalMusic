//----------------------LOOP CONTROL----------------------------------//

// BASS (Master track that fires all other tracks together.)
var bass = new Howl({ 
  src: ['assets/audio/bass-mm.mp3'],
 	html5:true,
    volume:0, 	
 		sprite:{
 			bass:[0,10000]
 		}
});
bass.on('load', function(){
  	playAll("bass"); // "bass".
    console.log("bass loaded");
});
bass.on('end', function(){
	restartAll();
});

//SNARE
var snare = new Howl({ 
  src: ['assets/audio/snare-mm.mp3'],
 	
 	html5:true,
    volume:0,
        sprite:{
            snare:[0,10000]
        }
});
snare.on('load', function(){
  	playAll("snare"); // "snare".
    console.log("snare loaded");
});

//KICK
var kick = new Howl({ 
  src: ['assets/audio/kick-mm.mp3'],
    html5:true,
        sprite:{
            kick:[0,10000]
        }
});
kick.on('load', function(){
    playAll("kick"); // "kick".
    console.log("kick loaded");
});

//HATS
var hats = new Howl({ 
  src: ['assets/audio/hats-mm.mp3'],
    html5:true,
    volume:0,
        sprite:{
            hats:[0,10000]
        }
});
hats.on('load', function(){
    playAll("hats"); // "hats".
    console.log("hats loaded");
});

//PERCUSSION
var percussion = new Howl({ 
  src: ['assets/audio/percussion-mm.mp3'],
    html5:true,
    volume:0,
        sprite:{
            percussion:[0,10000]
        }
});
percussion.on('load', function(){
    playAll("percussion"); // "percussion".
    console.log("percussion loaded");
});

//ARPEGGIATOR
var arp = new Howl({ 
  src: ['assets/audio/arp-mm.mp3'],
    html5:true,
    volume:0,
        sprite:{
            arp:[0,10000]
        }
});
arp.on('load', function(){
    playAll("arp"); // "arp".
    console.log("arp loaded");
});

function playAll(Howl){
    console.log("playAll");
    //this.hasLoaded = true;
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
        // console.log("playAll started");
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
}

//----------------------END LOOP CONTROL-------------------------------//