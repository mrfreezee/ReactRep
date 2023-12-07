import { preProcessFile } from 'typescript'
import styles from './Inputs.module.scss'

type Props = {
    lable: string
}

export const InputEmail = (props: Props) => {
    const {lable} = props

    return (
        <>
            <label  className={styles.lableInput}>
                {lable}
            </label>
            <input type='email' className={styles.emailInput} placeholder='Your email' />
        </>
    )
}