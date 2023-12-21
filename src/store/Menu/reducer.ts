import { MenuState, MenuAction } from "./types"

const themeInitState: MenuState = {
    isOpen: false
}

export const menuReducer = (state = themeInitState, action: MenuAction): MenuState => {
    switch(action.type){
        case 'close':
            return{
                isOpen: false
            }
        case 'open':
            return{
                isOpen: true
            }
        default:
            return state    
    }
}