import "./App.css"
import { Pages } from "./components/pages/Pages"
import { useEffect } from "react"
import { BubbleChat } from 'flowise-embed-react'


//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
      <BubbleChat
            chatflowid="11999498-2d92-4a14-9baa-54db37b1eb14"
            apiHost="https://flowise-1buf.onrender.com"
        />
    </>
  )
}

export default App
