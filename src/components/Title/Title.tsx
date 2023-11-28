import style from './Title.module.css'


type Props = {
    name: string
}

export const SignUp = (props: Props) =>{
    const {name} = props
    return(
        <button className={style.btn}>
            {name}
        </button>
    )
}