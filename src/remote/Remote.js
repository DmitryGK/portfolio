import style from './Remote.module.css'
import containerStyle from "../common/styles/Container.module.css";

const Remote = () => {
    return (
        <div className={style.remote}>
            
            <div className={`${containerStyle.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>Looking for remote work options</h2>
                <button className={style.button}>Write to me</button>
            </div>
        </div>
    )
}

export default Remote