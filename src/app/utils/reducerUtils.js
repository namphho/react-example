export const createReducer = (initialData, fnMap) => {
    return (state = initialData, {type, payload}) => {
        const handler = fnMap[type];
        return handler ? handler(state, payload) : state;
    }
}