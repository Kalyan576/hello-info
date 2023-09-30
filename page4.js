
let http = require("http");

http.createServer( function(req, res){

    res.writeHead(200, {'Content-Type':'text/json'});
    
    let booklist = [
        {name:"HTML", price:300, author:"Harish"},
        {name:"CSS", price:200, author:"Gajendre"},
        {name:"Javascript", price:500, author:"Varun"},
        {name:"React", price:400, author:"Hemanth"},
        {name:"Node", price:500, author:"Nizz"},
        {name:"PHP", price:300, author:"Chethan"}
    ];

    let jsondata = JSON.stringify(booklist);

    res.write(jsondata);
    res.end();

}).listen(1111); 