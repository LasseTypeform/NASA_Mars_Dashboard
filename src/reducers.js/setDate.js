const setDate = (state = '' , action) => {

    switch(action.type){
        case 'Opportunity':
            return state = '2018-02-11'
        case 'Spirit':
            return state = '2010-01-21'
        case 'Curiosity':
            return state = ''
        default:
            return state;
    }

};
export default setDate;