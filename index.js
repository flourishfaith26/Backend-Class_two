const express = require('express');
const app = express()
const port = 4549;
const worldCup = [
    {
        Country: "Nigeria",
        Player: "Victor Oshinem",
        Coach: "Finidi George"
    },
    
    
    {
        Country: "England",
        Player: "Harry Kane",
        Coach: "Gareth Southgate"
    },

    {
        Country: "Brazil",
        Player: "Neymal Jr",
        Coach: "Finidi George"
    },
    {
        Country: "Germany",
        Player: "Toni Kroos",
        Coach: "Julian Spalter"
    },

    {
        Country: "Italy",
        Player: "Nicolo Barella",
        Coach: "Luciano Spalletti"
    },

    {
        Country: "France",
        Player: "Kylian Mbappe",
        Coach: "Finidi George"
    }

]


app.get('/', (request, response) => {
    response.send('Welcome to Backend Class')
    console.log('Welcome to my Backend Class');
    

    
});
app.listen(port, () => {
    console.log(`My first backend class ${port}`);
    

})

app.get('/worldcup', (request, response) => {
    response.send(worldCup)
});
