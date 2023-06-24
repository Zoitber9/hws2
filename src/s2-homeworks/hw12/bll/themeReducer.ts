const initState: StateType = {
    themeId: 1,
}
export type StateType = {themeId: number}

type changeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state = initState, action: changeThemeIdAT): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
