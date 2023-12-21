import styles from '../StylesPages.module.scss'
import s from './AddPostPage.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputsAddPost } from './InputsAddPost/InputTitle'
import { ButtonsAddPostPage } from './ButtonsAddPostPage/ButtonsAddPostPage'

export const AddPost = () => {

    return (<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Add post'} />
            <form className={s.addPostWrapper}>
                <InputsAddPost placeholder='Add your title' type='text' lable={'Title'} />
                <div className={s.inputlessonNumAndImg}>
                    <div className={s.inputLessonNum}>
                        <InputsAddPost placeholder='Add lesson number' type='text' lable='Lesson number' />
                    </div>
                    <div className={s.inputImg}>
                        <InputsAddPost placeholder='Add image' type='text' lable='Image' />
                    </div>
                </div>
                <InputsAddPost placeholder='Add your text' type='text' lable='Description' />
                <InputsAddPost placeholder='Add your text' type='text' lable='Text' />
                <ButtonsAddPostPage/>
            </form>
        </div>
    </>
    )
}