const textArea = document.getElementById("words");
const wordCount = document.querySelector(".wordCount")
const characterCount = document.querySelector('.charCount')
const sentenceCount =document.querySelector('.sentenceCount')
const paraCount = document.querySelector('.paraCount')
const bigramsCount = document.querySelector('.bigramsCount')
const avgWordsPerPara =document.querySelector('.avgWordPerPara')
const getSpotify = document.querySelector('.getSpotify')
const hireForFellowship = document.querySelector('.hireMe')



const handleInputChange = (value) => {
  console.log("Current Inputed Text:", value);
};

const handleButtonClick = () => {

  const input = textArea.value 
  const characters = countCharacters(input)
  const getWords =countWords(input)
  const sentences =countSentence(input)
  const getParagraph = countPara(input)
  const bigrams = countNgram(input)
  const getAvgg = countParaAvg(input)
  const spotifyCount = findSpotify(input)
  const hireMe = hireRegina(input)

  console.log(hireMe)
  
 console.log(characters)
  
  console.log(getWords)

  console.log(sentences)

  //paragraph
console.log(getParagraph)
  //bigrams
  console.log(bigrams) 

  console.log(getAvgg)

console.log(spotifyCount)


};

function countCharacters(str){
const getChar =  str.split('')
characterCount.innerHTML = getChar.length
}


// find words
function countWords(str){
  const removeLineBreaks = str.split('').map(x=>x.replace(/(\r\n|\n|\r)/gm, ' ')).join('')
  const getTotalWords=removeLineBreaks.split(' ')
  const removeStr= getTotalWords.filter(x=> x)
  wordCount.innerHTML = removeStr.length
}

//find sentence
function countSentence(str){
  const getTotalSentence = str.split(/[\.!?]+/).length-1
sentenceCount.innerHTML = getTotalSentence
}

// find paragraph
function countPara(str){
  const getParaCount = str.split('\n\n').length
  paraCount.innerHTML = 0
  paraCount.innerHTML = getParaCount
}

//paraave = add all words in para 1/ # of para
function countParaAvg(str){
  const removeLineBreaks = str.split('').map(x=>x.replace(/(\r\n|\n|\r)/gm, ' ')).join('')
  const getTotalWords=removeLineBreaks.split(' ')
  const removeStr= getTotalWords.filter(x=> x)
const getPara = str.split('\n\n').length
const total= Math.floor(removeStr.length / getPara)
 avgWordsPerPara.innerHTML = total
}

//bigrams
function countNgram(str, gramLength = 2) {
  const gettingBigrams= str.toLowerCase().split(' ').reduce((memo, word) => {
    for (let i = 0; i + gramLength - 1 < word.length; i++) {
      const ngram = word.substring(i, i + gramLength);
      if (memo[ngram] === undefined) {
        memo[ngram] = 0;
      }
      memo[ngram]++;
    }
    return memo;
    
  }, {});
bigramsCount.innerHTML= Object.keys(gettingBigrams).length
}

//find spotify
function findSpotify(str){
  const checkWords = str.split(' ')
  const spotifyCount = checkWords.filter(word=>word.includes('spotify')).length
  getSpotify.innerHTML = spotifyCount
}

function hireRegina(str){
  const hireReg= str.match(/hire Regina/ig)
  if(hireReg){
    hireForFellowship.innerHTML = hireReg.length
  }else{
    hireForFellowship.innerHTML = 0
  }
  
  
}

/*

function countNgram(str, gramLength = 2) {//
  // str = 'hello world the'
  // gramLength = 2

  // str.split = ['hello', 'world', 'the']
  return str.split(' ').reduce((memo, word) => {//
    // word = 'world'
    // for (i=0, 0 + 2 - 1 < 5)
    // for (i=0, 1, < 5)

    for (let i = 0; i + (gramLength - 1) < word.length; i++) {//
    // we don't want any unpaird/grouped letters less than gramLength

      const ngram = word.substring(i, i + gramLength);
      // 'world'.substring(0, 2) => ngram = 'wo'
      // memo = {}

      // memo['he'] = 1
      if (memo[ngram] === undefined) {
        memo[ngram] = 0;
      // memo['wo'] = 0
      }
      // memo.wo++ => memo.wo = 1
      memo[ngram]++;
    }

    return memo;
  }, {}); 

}

/* 'Hello World' => 
he: 2
el: 3
lo: 1
wo: 1
or: 1
rl: 1
ld: 1
*/

