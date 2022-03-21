import style from './Contacts.module.css'
import containerStyle from './../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${containerStyle.container} ${style.ContactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input></input>
                    <input></input>
                    <textarea></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )
}

export default Contacts