import style from './Skills.module.css'
import containerStyle from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title='JS' description='My skill My  My skill'/>
                    <Skill title='CSS' description='My skill My skill My skill'/>
                    <Skill title='React' description='My skill My skill My skill'/>
                </div>
            </div>
        </div>
    )
}

export default Skills