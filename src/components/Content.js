import React from 'react';
import { Button } from "@blueprintjs/core";
import { getNewID } from '../utils'

const style = {
    'width': {
        width: '30%'
    },
    'padding': {
        marginLeft: '10px'
    }
};

const Content = ({ events, addEvent, clearEventsList, readAll, popoverOpen }) => {

    let EventTitle = '';

    let isUnread = events.filter((obj) => obj.get('unread') === true).size;

    const onSubmit = () => {
        let value = EventTitle.value;

        if (value) {
            let id = getNewID(events);
            addEvent(id, value);
            EventTitle.value = "";
        }
        else {
            EventTitle.focus()
        }
    };

    return (
        <div className="pt-card pt-elevation-0">
            <p>
                <input className="pt-input" style={style.width} type="text" placeholder="Введите название события..."
                       dir="auto" ref={(input) => EventTitle = input}/>
                <Button onClick={onSubmit} style={style.padding} text='Отправить'/>
            </p>

            <p>
                <Button onClick={readAll} style={style.width} text='Пометить все события прочитанными'/>
            </p>

            <p>
                <Button onClick={clearEventsList} style={style.width} text='Удалить все события'/>
            </p>

            <p>
                <Button onClick={ isUnread ? popoverOpen : false } style={style.width} text='Скрыть/показать попап нотификаций'/>
            </p>
        </div>
    )
};

export default Content;