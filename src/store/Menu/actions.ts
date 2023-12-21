import { MenuAction } from "./types"

export const setOpenMenuAction = (): MenuAction => ({
    type: 'open'
})

export const setCloseMenuAction = (): MenuAction => ({
    type: 'close'
})