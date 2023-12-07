import styles from './ButtonComplete.module.scss'

type Props = {
    name: string
}

export const ButtonComplete = (props: Props) =>{
    const {name} = props

    return(
        <input type='button' value={name} className={styles.buttonComplete}/>
    )
}