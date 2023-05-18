import { Route, Routes } from "react-router-dom"
import{ Home,About, Projects,Contact} from "../../Componant"

const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default Router
