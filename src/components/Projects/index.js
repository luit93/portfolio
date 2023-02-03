import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Letters from '../Letters'
import './index.scss'
import projectData from "../../data/projects.json"
const Projects=()=>{
    const [letterClass, setLetterClass] = useState('text-animate')

     
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
      }, [])

    const renderProjects = (project)=>{
        return (
            <div className='img-container'>
                {
                    project.map((p,i)=>{
                        return(
                            <div className='img-box' key={i}>
                                <img src={p.cover}
                                className='project-image'
                                alt='project'/>
                                <div className='content'>
                                    <p className='title'>{p.title}</p>
                                    <h4 className='description'>{p.description}</h4>
                                    <button className='btn'
                                    onClick={()=> window.open(p.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
        <div className='container projects'>
            
            <h1 className='page-title'>
                <Letters letterClass={letterClass} strArray={'Projects'.split('')} 
            idx={15}/>
            </h1>
            <div>{renderProjects(projectData.project)}</div>
           
        </div>
        <Loader type='ball-grid-beat'/>
        </>
    )
}

export default Projects