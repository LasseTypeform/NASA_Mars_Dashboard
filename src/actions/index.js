export const setStateRoverName = (name) => {

    const RoverName = name

    if(RoverName === 'Curiosity'){
        return {
            type: 'Curiosity'
        }
    } else if(RoverName === 'Opportunity'){
        return {
            type: 'Opportunity'
        }
    }
    else if(RoverName === 'Spirit'){
        return {
            type: 'Spirit'
        }
    }
}