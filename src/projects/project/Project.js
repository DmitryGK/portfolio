import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <div className={style.button}>
                    <src>View the project</src>
                </div>
            </div>
            <div className={style.titleDescription}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

export default Project