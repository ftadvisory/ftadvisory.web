var words = ['change ... lead or respond',
             'domain ... capital markets and fintech', 
             'signal or noise ... cdm, defi, cloud, smart contracts',
             'solution ... strategy',
             'solution ... product definition',
             'solution ... technology architecture',
             'solution ... implementation',
             'execution ... in production',
             'realize ... revenue and efficiency',
             'FT Advisory LLC'],
  part,
  i         = 0, // current word
  lastChar  = 1, // end character in the word
  skipping  = false;
  skipCount = 0,
  skipDelay = 8,
  speed     = 70;
  
intervalId = null;
function displaySplash() {
  showWord();
  intervalId = setInterval(iterateDisplay, speed);
}
function showWord () {
  part = words[i].substring(0, lastChar);
  document.getElementById('word').innerHTML = part
}
function iterateDisplay() {
  showWord ();
  // advance the processs
  if (skipping) { // hold on the complete word for skip count
    ++skipCount;
    if (skipCount > skipDelay) {
      skipping = false;
      lastChar = 0;
      i++; // advance to the next word
      if (i >= words.length) { // at the last word in the list
        clearInterval(intervalId);
        init();
      }
    }
  } else { // advance to the next character
    ++lastChar;
    if (lastChar > words[i].length) { // at the last character in this word, start skipping
      skipping  = true;
      skipCount = 0;
    }
  }
}