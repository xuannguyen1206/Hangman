import { Fragment } from "react/cjs/react.production.min";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import './Word.scss'
function Word({annoucement, hint, theWord, correctLetters,missingLetters}){
  
  return (
    <section className='word'>
      <div className='guessWord'>
        {theWord.split('').map((letter,i)=>{
          const classList = `${missingLetters.includes(letter) ? 'red-hightlight' : ''} ${correctLetters.length === [...new Set(theWord.split(''))].length ? 'green-highlight' : ''}`
          return (
            <span key = {i} className = {classList}>
              {correctLetters.includes(letter) ? letter : null } {/*if user enter right , render letter*/}
              {missingLetters.includes(letter) ? letter : null} {/*or if the game end*/}
            </span>
          )
        })}
      </div>
      <div className = 'notification'>{annoucement}</div>
      <div className = 'hint'>
        <h2>Hint</h2>
        <p>{hint}</p>
      </div>
    </section>
  )
}
export default Word;