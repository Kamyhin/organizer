import { Map } from 'immutable';
import { ADD_EVENT, CLEAR_EVENTS_LIST, READ_ALL } from '../constants/ActionsType'
import DummyEvents from '../constants/DummyEvents'

//const initialAction = List( [] );

export function events( state=DummyEvents, action=[] ) {
    switch( action.type )
    {
        case ADD_EVENT:
            return state.unshift(Map(action.payload));
        case CLEAR_EVENTS_LIST:
            return state.clear();
        case READ_ALL:
            return state.map(event => event.update('unread', unread => false));
        default:
            return state;
    }
}