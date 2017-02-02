export const getNewID = events =>  events.size ? events.max(obj => obj.id).get('id') + 1 : 1;
