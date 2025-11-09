import { BrowserRouter, Route, Routes } from "react-router-dom"
import {GlobalStyle} from "./estilo"
import TelaInicial from "./pages/telaInicial/telaInicial.tsx"
import TelaSaude from "./pages/saude/saude.tsx"

function App() {

  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaInicial/>} />
            <Route path="/saude" element={<TelaSaude/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
