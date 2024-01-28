const { start } = require('apico/server');

start( 3000, function(){
    console.log(` The server is running on http://localhost:3000 `);

    // Alternative with "
    // console.log("Server is running on http://localhost:"${p_port})

})