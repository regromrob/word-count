const textArea = document.getElementById("words");
const wordCount = document.querySelector(".wordCount")
const characterCount = document.querySelector('.charCount')
const sentenceCount =document.querySelector('.sentenceCount')
const paraCount = document.querySelector('.paraCount')
const bigramsCount = document.querySelector('.bigramsCount')
const avgWordsPerPara =document.querySelector('.avgWordPerPara')
const getSpotify = document.querySelector('.getSpotify')
const hireForFellowship = document.querySelector('.hireMe')


const handleButtonClick = () => {

  const input = textArea.value 
  const characters = countCharacters(input)
  const getWords =countWords(input)
  const sentences =countSentence(input)
  const getParagraph = countPara(input)
  const bigrams = countNgram(input)
  const getAvgg = countWordAvg(input)
  const spotifyCount = findSpotify(input)
  const hireMe = hireRegina(input)
};

function countCharacters(str){
const getChar =  str.split('')
characterCount.innerHTML = getChar.length
}


function countWords(str){
  const removeLineBreaks = str.split('').map(x=>x.replace(/(\r\n|\n|\r)/gm, ' ')).join('')
  const getTotalWords=removeLineBreaks.split(' ')
  const removeStr= getTotalWords.filter(x=> x)
  wordCount.innerHTML = removeStr.length
}


function countSentence(str){
  const getTotalSentence = str.split(/[\.!?]+/).length-1
  sentenceCount.innerHTML = getTotalSentence
}


function countPara(str){
  const getParaCount = str.split('\n\n').length
  if(str===undefined || str ===''){
    paraCount.innerHTML = 0
  }else{
    paraCount.innerHTML = getParaCount
  }
  
}


function countWordAvg(str){
  const removeLineBreaks = str.split('').map(x=>x.replace(/(\r\n|\n|\r)/gm, ' ')).join('')
  const getTotalWords=removeLineBreaks.split(' ')
  const removeStr= getTotalWords.filter(x=> x)
  const getPara = str.split('\n\n').length
  const total= Math.floor(removeStr.length / getPara)
  avgWordsPerPara.innerHTML = total
}

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

