var status = function(response){
    if (response.status !== 200){
        return Promise.reject(new Error(response.statusTest));
    }
    return Promise.resolve(response);
}
var json = function(response){
    return response.json();
}

// api in http://www.mocky.io add some json cod
fetch('http://www.mocky.io/v2/5bb9f6093100004c003ed9df')  // past href
.then(status)
.then(json)

.then(function(data){
    console.log('data', data)
})
.catch(function(error){
    console.log('error', error)
})
      
    
