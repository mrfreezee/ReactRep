import styles from './InputsAddPost.module.scss'

type Props = {
    lable: string
    ref1?: React.RefObject<HTMLInputElement>
}

export const InputTitle = ({lable, ref1}: Props) => {
    

    return (
        <>
            <label  className={styles.lableInput}>
                {lable}
            </label>
            <input type='text' 
            className={styles.inputTitle} 
            placeholder='Enter title' 
            ref={ref1} />
        </>
    )
}