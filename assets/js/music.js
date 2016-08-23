
// //<><><><><><>ALL SOUNDS IN THEIR BASIC FORM<><><><><><><><><><>//

// KICK
var kick = new Howl({ 
  src: ['assets/audio/kick-mm.mp3'],
 	html5:true,
 	preload:true,
		loop:1,
 		sprite:{
 			kick:[0,10000,true]
 		}
});
kick.play("kick");


//SNARE
var snare = new Howl({ 
  src: ['assets/audio/snare-mm.mp3'],
 	
 	html5:true,
 	preload:true,
 	loop:1,
 		sprite:{
 			snare:[0,10000,true]
 		}
});
snare.play("snare");

// HATS
var hats = new Howl({ 
  src: ['assets/audio/hats-mm.mp3'],
 	html5:true,
 	preload:true,
 	volume:0.4,
 	loop:1,
 		sprite:{
 			hats:[0,10000,true]
 		}
});
hats.play("hats");

//PERCUSSION
var percussion = new Howl({ 
  src: ['assets/audio/percussion-mm.mp3'],
 	html5:true,
 	preload:true,
 	loop:1,

 		sprite:{
 			percussion:[0,10000,true]
 		}
});
percussion.play("percussion");

// ARPEGIATOR
var arp = new Howl({ 
  src: ['assets/audio/arp-mm.mp3'],
 	html5:true,
 	preload:true,
 	volume:0.5,
 	loop:1,
 		sprite:{
 			arp:[0,10000,true]
 		}
});
arp.play("arp");

//BASS
var bass = new Howl({ 
  src: ['assets/audio/bass-mm.mp3'],
 	html5:true,
 	preload:true,
 	loop:1,
 		sprite:{
 			bass:[0,10000,true]
 		}
});
bass.play("bass");

// //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//


