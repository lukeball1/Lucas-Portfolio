import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'


const MyWork = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => setSelectedProject(project);
    const closeProject = () => setSelectedProject(null);

    return(
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="Theme image"/>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index)=>{
                    return <img key={index} src={work.w_img} onClick={() => openProject(work)} alt="" style={{cursor: 'pointer'}}/>
                })}
            </div>
            <AnimatePresence>
                {selectedProject &&(
                    <motion.div 
                        className="modal-overlay"
                        initiall={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.3 }}
                        onClick={closeProject}>
                            <motion.div
                            className='modal-content'
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: "-100vh", opacity: 0}}
                            animate={{ y: "0", opacity: 1}}
                            exit={{y: "-100vh", opacity: 0}}
                            transition={{type: "spring", stiffness: 120, damping: 15 }}>
                                <div className="modal-content-title">
                                    <h1>{selectedProject.w_name}</h1>
                                </div>
                                <div className="modal-content-bottom">
                                    <div className="modal-content-left">
                                        <img src={selectedProject.w_img} alt=''/>
                                    </div>
                                    <div className="modal-content-right">
                                        <div className="modal-content-description">
                                            <p>{selectedProject.w_description}</p>
                                            <p> Source code: <a href={selectedProject.w_github}>{selectedProject.w_github}</a></p>
                                            {(selectedProject.w_devpost !== null)? <p>Devpost: <a href={selectedProject.w_devpost}>{selectedProject.w_devpost}</a></p>: <p></p>}
                                        </div>
                                    </div>
                                </div>
                                
                                <button onClick={closeProject}>Close</button>
                            </motion.div>
                        </motion.div>)}
            </AnimatePresence>
            {/* <div className="mywork-showmore">
                <p>Show More</p>
                
            </div> */}
        </div>
    )
}

export default MyWork