
var path = require('path');

let fs = require('fs')

let http = require('http');
const { dirname } = require('path');
let dirarr = [];
let filearr = [];

async function filetoview(path) {

    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {

        var path = require('path');
        console.log(path.extname(dirent.name));


        if (dirent.isDirectory()) {
            console.log("iam folder", dirent.name);
            dirarr.push(dirent.name)

        }
        else if (dirent.isFile()) {
            console.log("iam file", dirent.name, "of", path.extname(dirent.name))

            filearr.push(dirent.name)


        }

    }
    return dirarr, filearr
}
filetoview('./').catch(console.error);
filetoview("C:/testtype/programfileslogic/typescriptassign/agecalc");


http.createServer(function (req, res) {
    console.log(dirarr, filearr)
    res.writeHead(200, { 'content-type': "text/html" })
    res.write('<h2>File directory</h2>')
    dirarr.forEach((elem) => {
        res.write(`<h4>${elem},folder</h4><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOz-sleT5-4VYYKPzgRxBbtK7mvahkgl_vtg&usqp=CAU">`)
    })
    filearr.forEach((ele) => {
        console.log(path.extname(ele))
        switch (path.extname(ele)) {
            case ".ts":
                res.write(`<h4> ${ele},  typescript</h4> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgejJN-rCHaZV5fCYU-_CApY-VWTcC3xqqg&usqp=CAU">`)
                break;
            case ".js":
                res.write(`<h4>${ele},  javascript</h4> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9s_wEE7NQWzVNZz2kTc8RSa7Uj1-nHTdTPw&usqp=CAU">`)
                break;
            case ".txt":
                res.write(`<h4>${ele},  textfile</h4><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-poJc41RZVZrNhHag92WUeJgQrLXXuojPw&usqp=CAU">`)
                break;
            case ".html":
                res.write(`<h4>${ele},  html file</h4> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgejJN-rCHaZV5fCYU-_CApY-VWTcC3xqqg&usqp=CAU">`);
                break;
            default:
                res.write(`<h4>${ele} ,diff</h4> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fFoTuxyHw981yf0iT2TzHwwHb5D4obMgDg&usqp=CAU>`)
                break;



        }
    })
    // res.write(
    // res.write(`<h2>${dirarr} "and" ${filearr}</h2>`);
    //     })
    res.end();
}).listen(8000)