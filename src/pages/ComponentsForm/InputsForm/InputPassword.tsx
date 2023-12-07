import styles from './Inputs.module.scss'


type Props = {
    lable: string
}

export const InputPassword = (props: Props) => {
    const {lable} = props

    return (
        <>
            <label className={styles.lableInput}>
                {lable}
            </label>
            <input type='password' className={styles.passwordInput} placeholder='Your password' />
        </>
    )
}