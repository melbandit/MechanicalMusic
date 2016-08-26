//------DEBUGGING ZONE----------------//
// var kick = new Howl({ 
//   src: ['assets/audio/kick-mm.mp3'],
//  	html5:true,
//  	preload:true, 
// 		loop:1,
//  		sprite:{
//  			kick:[0,10000,true]
//  		}
// });
// kick.play("kick");
// kick.on('end', function(){
//   console.log('Finished!');
// });
//-------END DEBUGGING ZONE-----------//


// //<><><><><><>ALL SOUNDS IN THEIR BASIC FORM<><><><><><><><><><>//

// // KICK
// var kick = new Howl({ 
//   src: ['assets/audio/kick-mm.mp3'],
//  	html5:true,
//  	preload:true,
// 		loop:1,
//  		sprite:{
//  			kick:[0,10000,true]
//  		}
// });
// kick.play("kick");


// // SNARE
// var snare = new Howl({ 
//   src: ['assets/audio/snare-mm.mp3'],
 	
//  	html5:true,
//  	preload:true,
//  	loop:1,
//  		sprite:{
//  			snare:[0,10000,true]
//  		}
// });
// snare.play("snare");

// // HATS
// var hats = new Howl({ 
//   src: ['assets/audio/hats-mm.mp3'],
//  	html5:true,
//  	preload:true,
//  	volume:0.4,
//  	loop:1,
//  		sprite:{
//  			hats:[0,10000,true]
//  		}
// });
// hats.play("hats");

// // PERCUSSION
// var percussion = new Howl({ 
//   src: ['assets/audio/percussion-mm.mp3'],
//  	html5:true,
//  	preload:true,
//  	loop:1,

//  		sprite:{
//  			percussion:[0,10000,true]
//  		}
// });
// percussion.play("percussion");

// // ARPEGIATOR
// var arp = new Howl({ 
//   src: ['assets/audio/arp-mm.mp3'],
//  	html5:true,
//  	preload:true,
//  	volume:0.3,
//  	loop:1,
//  		sprite:{
//  			arp:[0,10000,true]
//  		}
// });
// arp.play("arp");

// // BASS
// var bass = new Howl({ 
//   src: ['assets/audio/bass-mm.mp3'],
//  	html5:true,
//  	preload:true,
//  	loop:1,
//  		sprite:{
//  			bass:[0,10000,true]
//  		}
// });
// bass.play("bass");

// //<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//

// var bass = {
//     howlr: filename,
//     sprite: (0, 10000, true),
//     onLoad: playAll(this/"bass"),
//     onEnd: restartAll()// Write a function that watches this, and when THIS one ends, restart ALL at 0 (or whatever)
// }

// var arp = {
//     howlr: filename,
//     onLoad: playAll(this)
// }

// var kick = {
//     howlr: filename,
//     onLoad: playAll(this)
//     //hasLoaded: false,//Made up. 
// }

// //IF IT WON'T LET YOU ADD hasLoaded to the objects, make an object to hold those values.
// var loadedHowls = {};

// function playAll(howl){
//     this.hasLoaded = true;
//     //if this doens't work
//     //set that variable manually
//     if(howl == "bass") {
//         bass.hasLoaded = true;
//     } //etc. for each howl name
//     //If you need to make your own object, use this bit instead
//     loadedHowls[howl] = true;
//     if(kick.hasLoaded && bass.hasLoaded && arp.hasLoaded){
//         var htmlItem = document.getElementByID("music-player");
//         htmlItem.setAttribute("play", true);
//         bass.play();
//         arp.play();
//         kick.play();
//     }
// }
// function restartAll(){
//     kick.play("kick");
//     snare.play("snare");
//     hats.play("hats");
//     bass.play("bass");
//     arp.play("arp");
//     percussion.play("percussion");
// }



















































//Melissa Updating volume
// updateVolumeArp = function(value) {
//   //alert('before update volume:', sound.volume);
//   arp.volume(value);
//   //alert('after update volume:', sound.volume);
// }





