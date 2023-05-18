import React from 'react'
import {Project} from '../Componant'
import { NavLink } from 'react-router-dom'


const Projects = () => {
  return (
<>
<div className="cover-page">
	<div className="tit">
	<h1>Project</h1>
	<ul className="breadcrumb">
  <li><NavLink to="/home" className={(props)=>props.isActive ? "active" :''}> Home</NavLink></li>
  <li><a href="#" className="active">project</a></li>
  
</ul>
</div>
</div>
<Project/>
</>
  )
}

export default Projects
