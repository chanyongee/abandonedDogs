import React, { useReducer } from 'react';

const initialState = {
    sido: {orgCd: null, orgdownNm: '전체'},
    sigungu: {orgCd: null, orgdownNm: '전체'},
    upkind: '전체',
    shelter: '전체',
    kind: '전체',
    sidoList: [],
    sigunguList: [],
    upkindList: [{orgCd: 417000, orgdownNm: '개'}, {orgCd: 422400, orgdownNm: '고양이'}, {orgCd: 429900, orgdownNm: '기타'}],
    kindList: [],
    shelterList: [],
    animalList: [],
    pageNo: 1
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET':
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state;
    }
}

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export function ContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}