import style from './Projects.module.css'
import containerStyle from "../common/styles/Container.module.css";
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${containerStyle.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                        <Project title='Project title' description='Project description'/>
                        <Project title='Project title' description='Project description'/>
                </div>
            </div>
        </div>
    )
}

export default Projects