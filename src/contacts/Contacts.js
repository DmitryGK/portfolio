import style from './Contacts.module.css'
import containerStyle from './../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${containerStyle.container} ${style.ContactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <div className={style.input}>
                        <input></input>
                    </div>
                    <div className={style.input}>
                        <input></input>
                    </div>
                    <div className={style.input}>
                        <textarea></textarea>
                    </div>



                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )
}

export default Contacts