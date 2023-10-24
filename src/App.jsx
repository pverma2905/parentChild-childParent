import './App.css'
import Button from './Button'

function App() {

  function checkAlert(x){
    alert(`Hello All ${x}`);
  }
  return (
    <>
     <Button fun={checkAlert}  />
    </>
  )
}

export default App
