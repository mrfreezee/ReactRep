import { ReactNode } from 'react'
import styles from './ButtonComplete.module.scss'

type Props = {
    children?: ReactNode
}

export const ButtonComplete = ({children}: Props) =>{

    return(
        <button className={styles.buttonComplete}>{children}</button>
    )
}