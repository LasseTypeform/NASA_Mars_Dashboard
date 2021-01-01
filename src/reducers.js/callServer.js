async function CallServer (){

    function checkData(data){

        const dataToCheck = Object.assign(data)
    
        // Since the data 
        if(Object.keys(dataToCheck.data) == 'latest_photos') {
            
            Object.defineProperty(data.data, 'photos', Object.getOwnPropertyDescriptor(data.data, "latest_photos"));
            delete Object.keys(data.data);
            console.log('dataToCheck22', dataToCheck)
            return dataToCheck
        } 
        else return dataToCheck
    }

    const res = await fetch(`http://localhost:3000/rovers?name=Curiosity&date=''`)

    // console.log('response from Call', res);
    const dataFromCall = await res.json()

    console.log('dataFromCall after call', dataFromCall)
    // Once the reponse has been received from the server (index.js) run the following function 
    // to make sure the state.data.photos is not []

    const data = Object.assign(checkData(dataFromCall)).data['photos']

    const cleanedData = [ 'data', data ]

    console.log('data', cleanedData)
 
    return cleanedData

};
export default CallServer