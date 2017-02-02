import { Toaster, Position, Intent } from "@blueprintjs/core";
import { ADD_EVENT, CLEAR_EVENTS_LIST, READ_ALL } from './constants/ActionsType'

const ToasterCreate = Toaster.create({
    position: Position.TOP
});

const ToasterShow = ({...agrs}) => {
    ToasterCreate.show(agrs)
};

export const ToasterMiddleware = store => next => action => {
    if(action.type === ADD_EVENT){
        ToasterShow({
            message:'Новое событие: ' + action.payload.title,
            intent: Intent.PRIMARY,
            iconName: 'pt-icon-add'
        });
        next(action);
    }
    else if(action.type === READ_ALL){
        ToasterShow(
            {
                message:'Все события помечены прочитанными...',
                intent: Intent.SUCCESS,
                iconName: "tick"
            }
        );
        next(action);
    }
    else if (action.type === CLEAR_EVENTS_LIST){
        ToasterShow(
            {
                message:'Все события удалены...',
                intent: Intent.DANGER,
                iconName: "warning-sign"
            }
        );
        next(action);
    }
    else {
        next(action);
    }
};