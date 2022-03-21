import style from './footer.module.css'
import containerStyle from "../common/styles/Container.module.css";



const Footer = () => {
    return (
        <div className={style.footer}>
        <div className={`${containerStyle.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Gulyakecich Dmitry</h2>
            <div className={style.icons}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
            </div>
            <div>© 2022 All rights reserved</div>
        </div>
        </div>
    )
}

export default Footer