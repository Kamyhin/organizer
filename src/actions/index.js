import { ADD_EVENT, CLEAR_EVENTS_LIST, READ_ALL, POPOVERS_OPEN } from '../constants/ActionsType'

export const addEvent = (id, title) => {
    return {
        type   : ADD_EVENT,
        payload: {
            id: id,
            title: title,
            unread: true,
            datetime  : Date.now()
        }
    };
};

export const clearEventsList = () => {
    return {
        type: CLEAR_EVENTS_LIST
    };
};

export const readAll = () => {
    return {
        type: READ_ALL
    };
};

export const isOpen = () => {
    return {
        type: POPOVERS_OPEN
    };
};