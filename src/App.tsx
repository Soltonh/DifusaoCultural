import { BrowserRouter, Route, Routes } from "react-router-dom"
import {GlobalStyle} from "./estilo"
import TelaInicial from "./pages/telaInicial/telaInicial.jsx"

function App() {

  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaInicial/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
