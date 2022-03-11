import React from "react";
import style from './Main.module.css'
import containerStyle from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={containerStyle.container}>
                <div className={style.info}>
                    <span>Hi there</span>
                    <h1>I am Dmitry Gulyackevich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}> </div>
            </div>
        </div>
    )
}

export default Main