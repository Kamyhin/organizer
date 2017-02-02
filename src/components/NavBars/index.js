import React from 'react';
import moment from 'moment';
import { SVGPopover , PopoverInteractionKind, Position } from "@blueprintjs/core";

import './NavBars.css'

const style = {
    marginBottom: '10px'
};

const byPassedTimeText = (date) => {
    if (typeof date === 'object') {
        date.getTime();
    }

    moment.locale('ru');

    return moment(date).fromNow();
};

const popoverContent = (events) => {

    return (
        <div>
            {
                events.slice(0,5).map(event => (
                    <div className="pt-card pt-elevation-1" style={style} key={ event.get('id') }>
                        <h5>{ event.get('title') }</h5>
                        <h7>{ byPassedTimeText(event.get('datetime')) }</h7>
                    </div>
                ))
            }
            <p>
                <button className="pt-button pt-popover-dismiss pt-minimal">посмотреть все ...</button>
            </p>
        </div>
    )
};

const NavBars = (props) => {

    const events = props.events.filter((obj) => obj.get('unread') === true);
    const popoverOpen = props.popoverOpen;

    return (
        <nav className="pt-navbar">
            <div className="pt-navbar-group pt-align-left">
                <div className="pt-navbar-heading">Журнал событий</div>
            </div>
            <div className="pt-navbar-group pt-align-right">
                <span className="pt-navbar-divider"></span>
                <SVGPopover content={events.size ? popoverContent(events): null}
                            interactionKind={PopoverInteractionKind.CLICK_TARGET_ONLY}
                            isOpen={props.isOpen}
                            onInteraction={events.size ? popoverOpen : false}
                            popoverClassName="pt-popover-content-sizing"
                            position={Position.BOTTOM_RIGHT}
                            useSmartPositioning={false}>
                    <button className="pt-button pt-minimal pt-icon-notifications"></button>

                </SVGPopover >
                { events.size ? <span className='badge'>{ events.size }</span> : null }
                <span className="pt-navbar-divider"></span>
            </div>
        </nav>
    )
};

export default NavBars;