import { BrowserRouter, Route, Routes } from "react-router-dom"
import {GlobalStyle} from "./estilo"
import TelaInicial from "./pages/telaInicial/telaInicial.tsx"
import TelaSaude from "./pages/saude/saude.tsx"
import TelaEduca from "./pages/educacao/educacao.tsx"
import TelaNaturaliza from "./pages/naturaliza/naturaliza.tsx"
import TelaAssistencia from "./pages/assistencia/assistencia.tsx"

function App() {

  return (
    <>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaInicial/>} />
            <Route path="/saude" element={<TelaSaude/>} />
            <Route path="/educa" element={<TelaEduca/>} />
            <Route path="/naturaliza" element={<TelaNaturaliza/>} />
            <Route path="/assistencia" element={<TelaAssistencia/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
