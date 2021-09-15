import './Mistake.scss'
import { useEffect } from "react";
import ReactDOM from 'react-dom';

function Mistake({mistakeLetters}){
  return(
    <div className = 'mistake'>
      <h2>Mistakes</h2>
      <p className = 'usedLetter'>
        {mistakeLetters.map(mistakeLetter => {
          return mistakeLetter + ' ';
        })}
      </p>
    </div>
  )
}
export default Mistake;