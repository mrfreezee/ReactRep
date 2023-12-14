import styles from '../StylesPages.module.scss'
import s from './AddPostPage.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputTitle } from './InputsAddPost/InputTitle'


export const AddPost = () => {

    return (<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Add post'} />
            <form className={s.addPostWrapper}>
                <InputTitle lable={'Title'}/>
            </form>
        </div>
    </>
    )
}