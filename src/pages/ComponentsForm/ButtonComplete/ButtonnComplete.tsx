import { ReactNode } from 'react'
import styles from './ButtonComplete.module.scss'
import { Link } from 'react-router-dom'

type Props = {
    children?: ReactNode
    link: string
}

export const ButtonComplete = ({children, link}: Props) =>{

    return(
        <Link className={styles.buttonComplete} to={link}>{children}</Link>
    )
}