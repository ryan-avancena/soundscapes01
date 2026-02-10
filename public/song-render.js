
// function mousePressed() {
//   userStartAudio();

//   if (song.isLoaded()) { // check if fully loaded
//     if (song.isPlaying()) {
//       song.pause();
//     } else {
//       song.loop();
//     }
//   } else {
//     console.log("Song not loaded yet!");
//   }
  
// }

// function keyPressed() {
//   if (key === 'v') {
//     view = (view + 1) % 2;
//   }
// }

// function draw() {
//   background(0);

//   // camera(x, y, z, lookX, lookY, lookZ, upX, upY, upZ)
//   camera(0, 0, 400, 0, 0, 0, 0, 1, 0);

//   drawRoom();
//   drawWaveformOnBackWall();


//   clear();
//   fft.analyze();               // always analyze
//   let energy = fft.getEnergy("mid"); // always compute energy


//   if (view === 0) drawSpectrum();
//   if (view === 1) drawWaveformOnBackWall();

//   drawEnergyValue(energy);     
// }

// function drawEnergyValue(energy) {
//   fill(255);
//   noStroke();
//   textSize(18);
//   textAlign(LEFT, TOP);
//   text(`Energy: ${Math.floor(energy)}`, 20, 20);
// }


// function drawSpectrum() {
//   let spectrum = fft.analyze();

//   stroke(255);
//   strokeWeight(1);
//   noFill();

//   beginShape();
//   for (let i = 0; i < spectrum.length; i++) {
//     let x = map(i, 0, spectrum.length, 0, width);
//     let y = map(spectrum[i], 0, 255, height, 0);
//     vertex(x, y);
//   }
//   endShape();
// }


// function drawWaveformOnBackWall() {
//   let wave = fft.waveform();

//   push();
//   translate(0, 0, -299); // slightly in front of back wall
//   stroke(255);
//   noFill();

//   beginShape();
//   for (let i = 0; i < wave.length; i++) {
//     let x = map(i, 0, wave.length, -250, 250);
//     let y = map(wave[i], -1, 1, 100, -100);
//     vertex(x, y);
//   }
//   endShape();

//   pop();
// }


// function windowResized() {
//   resizeCanvas(windowWidth * 0.7, 300);
// }

