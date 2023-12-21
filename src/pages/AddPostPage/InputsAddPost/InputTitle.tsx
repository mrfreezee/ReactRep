import styles from './InputsAddPost.module.scss'

type Props = {
    lable: string
    ref1?: React.RefObject<HTMLInputElement>
    type: string
    placeholder: string
}

export const InputsAddPost = ({lable, ref1, type, placeholder}: Props) => {
    

    return (
        <>
            <label  className={styles.lableInput}>
                {lable}
            </label>
            <input type={type} 
            className={styles.inputsAddPost} 
            placeholder={placeholder} 
            ref={ref1} />
        </>
    )
}