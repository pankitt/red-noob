export default function issuesReducer(state = [], action) {
    switch (action.type) {
        case 'ISSUES_LOADED':
            return action.data;
        default:
            return state;
    }
}