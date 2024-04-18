import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
import Search from "./Pages/Search"

function App() {
 

  return (
    <>
  <Router>
    <Layout>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="search" element={<Search/>} />
      </Routes>
    </Layout>
  </Router>
    </>
  )
}

export default App
