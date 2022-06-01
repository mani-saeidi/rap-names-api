// Need access to Express
const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage':{
    'age': 29,
    'birthname': 'Shéya Bin Abraham Joseph',
    'location': 'Los Angeles'
    },
    'chance the rapper':{
        'age': 25,
        'birthname': 'YOLO Bin Abraham Joseph',
        'location': 'Logeles'
    },
    'cdylan':{
        'age': 22,
        'birthname': 'YOLO Baham Joseph',
        'location': 'Los'
    }
}

// Get Request
app.get('/', (request,response)=>{
    // Need to Send the File to Client
    response.sendFile(__dirname + '/index.html')
})

// Get API Request a URL request
// The colon references the query
app.get('/api/:rapperName', (request,response)=>{
    //we want to request the query parameter: rapper name
    const rappersName = request.params.rapperName.toLowerCase()
    // If we request a specific rappername, we get the data for that rapper:
    // We use bracket notation because some rappers have spaces in their names, so we can't use dot notation
    if (rappers[rappersName]){
        // Respond with json object of the rapper's name
        response.json(rappers[rappersName]);}

    // Otherwise, respond with json object of CDYLAN's information
    else{
        response.json(rappers['CDYLAN']);
    }
    // Need to Respond with JSON To Client
    response.json(rappers);
})
// Server needs to listen for a port number from the client to access the file sent
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}!`)
})