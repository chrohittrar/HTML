const http = require(`http`);
const url = require(`url`);
const fs = require(`fs`);

http.createServer(function (req, res) {
    // const url_p = url.parse(req.url, true);
    // file path should be either in ./ fomat or without anything but our file is in /ab.txt format
    // const fpath = "." + url_p.pathname;

    fs.readFile("./visitCount.txt", function (err, data) {
        if (!err) {
            console.log("File opened Succesfully");
            var cnt = parseInt(data.toString());
            cnt++;
            res.end();
            fs.writeFile("./visitCount.txt", cnt+" ", function(err){
                if(!err){
                    
                    console.log("Value Updated Successfully");
                }
                else{
                    console.log("Error at Upating the Value")
                }
            })
            
        }
        else{
            console.log("Error at opening the File");
        }
        
    })
}).listen(9000, function () { console.log("Server is Running on port : 9000") });