// console.log('Hello, Project 00!');

const art = require('ascii-art');

art.font('Hello, Word!!!', 'Doom', (err, renderredText)=>{
    if(err) {
        return;
    }
    console.log(renderredText);
});