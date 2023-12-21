import { preProcessFile } from 'typescript'
import styles from './Inputs.module.scss'
import { useEffect, useRef } from 'react'

type Props = {
    lable: string
    ref1?: React.RefObject<HTMLInputElement>
}

export const InputEmail = ({lable, ref1}: Props) => {
    

    return (
        <>
            <label  className={styles.lableInput}>
                {lable}
            </label>
            <input type='email' 
            className={styles.emailInput} 
            placeholder='Your email' 
            ref={ref1} />
        </>
    )
}