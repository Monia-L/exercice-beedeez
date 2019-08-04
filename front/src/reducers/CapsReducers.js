
export function loading(state = false, action) {
    switch (action.type) {
        case 'LOADING':
            return action.loading;

        default:
            return state;
    }
}
export function showCapsules(state = [], action) {
    switch (action.type) {
        case 'SHOW_CAPSULES':
            return action.capsules;

        default:
            return state;
    }
}
export default { loading, showCapsules }