import { POPOVERS_OPEN } from '../constants/ActionsType'

const initialState = false;

export function isOpen( state = initialState, action=[]) {
    switch( action.type )
    {
        case POPOVERS_OPEN:
            return !state;
        default:
            return state;
    }
}
