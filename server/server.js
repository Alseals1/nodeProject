let path = require('path')
let fs = require('fs')
let request = require('request')

let chirps = [
    {
        name: "Alandis",
        comment: "Howdy"
    },
    {
        name: "Quinn",
        comment: "Hello World"
    },
    {
        name: "Garrett",
        comment: "What's Up"
    },
    {
        name: "Josh",
        comment: "Sup Guys"
    },
    {
        name: "Jake",
        comment: "So uhh, Sup guys"
    }
]

let chirpPath = path.join(__dirname, '../chirp.json')
let chirpData = JSON.stringify(chirps)

fs.writeFileSync( chirpPath, chirpData )




