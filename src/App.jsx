import './App.css'
import Left from "./Components/Left.jsx"
import Center from "./Components/Center.jsx"
import Right from "./Components/Right.jsx"

function App() {

  return (
    <>
    <div className="container bg-white flex w-[98vw] sm:w-[90vw] mx-auto">
      <Left />
      <Center />
      <Right />
    </div>
    </>
  )
}

export default App
