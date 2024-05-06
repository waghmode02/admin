import React from 'react'
import Header from "./components/Header.jsx"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Contact from './components/Contact.jsx'
import Project from "./components/Project.jsx"
import AddProject from "./components/AddProject.jsx"
import Skill from "./components/Skill.jsx"
import AddSkill from "./components/AddSkill.jsx"
import DeleteSkill from "./components/DeleteSkill.jsx"
import Footer from "./components/Footer.jsx"
const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
    <Route path='/add' element={<AddProject/>}/>
      <Route path="/" element={<Project/>} />
      <Route path='/skill' element={<Skill/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path='/addSkill' element={<AddSkill/>}/>
      <Route path='/deleteSkill' element={<DeleteSkill/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
