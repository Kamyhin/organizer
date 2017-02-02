import { List, Map } from 'immutable';

export default  List([
    Map({
        id: 17,
        title: 'Test test test 17',
        unread: true,
        datetime: new Date()
    }),
    Map({
        id: 16,
        title: 'Test test test 16',
        unread: true,
        datetime: new Date().setHours((new Date()).getHours() - 2)
    }),
    Map({
        id: 14,
        title: 'Test test test 14',
        unread: true,
        datetime: new Date().setDate((new Date()).getDate() - 1)
    }),
    Map({
        id: 13,
        title: 'Test test test 13',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 3)
    }),
    Map({
        id: 12,
        title: 'Test test test 12',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 8)
    }),
    Map({
        id: 11,
        title: 'Test test test 11',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 31)
    }),
    Map({
        id: 10,
        title: 'Test test test 10',
        unread: false,
        datetime: new Date().setDate((new Date()).getDate() - 160)
    })
]);
