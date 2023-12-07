import styles from './Success.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { Header } from '../../components/Header/Header'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
// import { FooterForm } from '../../components/Footer/Footer'


export const Success = () =>{
    return(
        <>
        <div className={styles.wrapperSuccess}>
            <HeaderPages name={'Success'}/>
            <div className={styles.confirmedBlock}>
                <p>Email confirmed.<br/>
                    Your registration is now completed
                </p>
                <ButtonComplete name={'Go to home'}/>
            </div>
        </div>
        </>
    )
}