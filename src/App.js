import './App.scss';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import Mistake from './components/Mistake';
import JokerLaugh from './JokerLaugh.mp3';
import boneCrushing from './boneCrushing.mp3';
import closeDoor from './closeDoor.mp3';
import React, { useState, useEffect , useRef} from "react";

function App() {
  const [mistakeLetters,setMistakeLetters] = useState([]);
  const mistakeCount = useRef(0);
  const theWord = useRef('');
  const [correctLetters,setCorrectLetters] = useState([]);
  const [missingLetters, setMissingLetters] = useState([]);
  const [annoucement, setAnnouncement] = useState('Enjoy');
  const [hint,setHint] = useState('');
  const [theme,setTheme] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  function handleKeydown(event){
    if(!isPlaying){
      return;
    }
    const letter = event.key;
    if(!((/[a-zA-Z]/).test(letter))) return;
    else if(letter.length > 1) return; /* filter only character */
    setAnnouncement('');
    if(checkUsedLetter(letter)){
      setAnnouncement(`don't repeat yourself`);
      return;
    }
    else{
      if(theWord.current.includes(letter)){ /* if the letter is right */
        setCorrectLetters(correctLetters => [...correctLetters,letter]);
        if(checkIfWon([...correctLetters,letter])){
          endGame(1);
        }
      }
      else{ /* if it's wrong */
        if(mistakeCount.current > 5){
          endGame(2);
        }
        else{
          mistakeCount.current++;
          setMistakeLetters(mistakeLetters => [...mistakeLetters,letter]);
        }
      }
    }
  }

  useEffect(()=> {
    getWordAndHint();
    setIsPlaying(prevState => true);
  },[])

  useEffect(()=> {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  },[hint, correctLetters, mistakeLetters,missingLetters,isPlaying])

  async function getWordAndHint(){
    const responseWord = await fetch('https://random-word-api.herokuapp.com/word?number=1', {mode: 'cors'});
    const dataWord = await responseWord.json();
    const responseDefinition = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dataWord[0]}`, {mode: 'cors'});
    let dataDefinition = await responseDefinition.json();
    let hintData = '';
    try {
      hintData = dataDefinition[0].meanings[0].definitions[0].definition;
    } catch (error) {
      getWordAndHint();
    }
    theWord.current = dataWord[0];
    setHint(hintData);
    setMistakeLetters([]);
    mistakeCount.current = 0;
    setCorrectLetters([]);
    setMissingLetters([]);
    setIsPlaying(prevState => true);
  }

  
  function checkUsedLetter(letter){
    const usedLetter = [...correctLetters,...mistakeLetters];
    if(usedLetter.includes(letter)){
      return true;
    }
    return false;
  }
  function checkIfWon(letterHasFilled){
    const letterMustFilled = [...new Set(theWord.current.split(''))];
    if(letterHasFilled.length !== letterMustFilled.length){
      return false;
    }
    letterHasFilled.forEach(element => {
      if(!letterMustFilled.includes(element)) {
        return false;
      }
    });
    return true;
  }
  function endGame(code,letter){
    if(code === 1 ){
      setTheme('#38ff00');
      setAnnouncement(`You're not so stupid after all`);
      window.document.querySelector("audio[data-key = '1']").play();
    }
    else{
      setTheme('red');
      setAnnouncement('IDIOTs must be dead');
      setMissingLetters(missingLetter => {
        const temp = [];
        const letterMustFilled = [...new Set(theWord.current.split(''))];
        letterMustFilled.forEach(element => {
          if(![...correctLetters,letter].includes(element)){
            temp.push(element);
          }
        });
        return temp;
      });
      window.document.querySelector("audio[data-key = '2']").play();
    }
    setIsPlaying(prevState => false);
  }

  function playAgain(){
    theWord.current = '';
    setHint('');
    getWordAndHint();
    
    setAnnouncement('Enjoy');
    setTheme('#e0e0e0');
    window.document.querySelector("audio[data-key = '3']").play();
  }
  return (
    <div className="App">
      <Header theme = {theme}/>
      <span onClick={playAgain} className='playBtn'>PLAY AGAIN</span>
      <section className ='game_container'>
        <Figure mistakeCount = {mistakeCount.current} theme = {theme}/>
        <Mistake mistakeLetters = {mistakeLetters}/>
      </section>
      <Word annoucement = {annoucement}  hint = {hint} theWord = {theWord.current} correctLetters={correctLetters} missingLetters = {missingLetters}/>
      <audio data-key='1' src={JokerLaugh}></audio>
      <audio data-key='2' src={boneCrushing}></audio>
      <audio data-key='3' src={closeDoor}></audio>
    </div>
  );
}

export default App;
