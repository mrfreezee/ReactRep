import styles from './HeaderPages.module.scss'
import { BtnBack } from './btnBackToHome'

type Props = {
    name: string
}

export const HeaderPages = (props: Props) =>{
    const {name} = props

    return(
        <div className={styles.wrapperHeaderForm}>
                <BtnBack/>
                <div className={styles.formName}>
                    {name}
                </div>
        </div>
    )
}