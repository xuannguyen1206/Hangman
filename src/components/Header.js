import './Header.scss'
function Header({theme}){
  return (
    <header>
      <h1 style = {{color: theme}}>HANGMAN</h1>
      <div className='watermark'>
        <span>made by </span>
        <span style = {{color: theme}} id ='HXN'>HXN</span>
      </div>
    </header>
  )
}
export default Header;