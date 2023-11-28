import style from './User.module.scss'

export const UserComponent = () =>{
    return(
        <div className={style.userComponent}>
            <div className={style.userWrapper}>
                <div className={style.userInitial}>
                    MN
                </div>
                <div className={style.userName}>
                    Malendo Nikita
                </div>
            </div>
        </div>
    )
}