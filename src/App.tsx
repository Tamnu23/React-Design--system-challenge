
import Button from './components/atoms/Button'

function App() {


  return (
<div style={{padding:'2rem'}}>
  <Button text="Click Me" onClick={() => alert('Button Clicked!')} />
</div>
  )
}

export default App
