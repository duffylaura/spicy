const morseKey = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '/': ' ',
    '-.-.--': '!',
    '.-.-.-': '.',
    '--..--': ',',
    '...---...': 'SOS', //because SOS has no spaces between letters like when typing out other words 
  };
  
  const decodeMorse = function(morseCode) {
    console.log(morseCode);
    let words = morseCode.trim().split('   '); // split the input by word gaps
    console.log(words); 
    let decodedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let letters = words[i].split(' '); // split each word into individual characters
      console.log(letters); 
      let decodedWord = '';
  
      for (let j = 0; j < letters.length; j++) {
        if (morseKey[letters[j]]) {
          decodedWord += morseKey[letters[j]]; // lookup the decoded character and add it to the decoded word
          console.log(decodedWord); 
        }
      }

        decodedWords.push(decodedWord);
    }
  
    return decodedWords.join(' ');
  };

  decodeMorse('.... . -.--   .--- ..- -.. .')
  //should return "HEY JUDE"

  decodeMorse("...---..."); 
  //should equal SOS 

decodeMorse("      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "); 
//Should equal SOS! The quick brown ... 