const pickRover = (state = '' , action) => {

    switch(action.type){
        case 'Curiosity':
            return state = 'Curiosity'
        case 'Opportunity':
            return state = 'Opportunity'
        case 'Spirit':
            return state = 'Spirit'
        default:
            return state;
    }

};
export default pickRover;