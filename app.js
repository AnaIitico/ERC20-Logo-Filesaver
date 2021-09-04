
import fs from 'fs';
import request from 'request';
import fetch from "node-fetch";

var ERC20Tokens = [];

const getTokens = async () => {
        try{
                const url = 'https://api.coingecko.com/api/v3/coins/list?include_platform=true';
                const response = await fetch(url);
                const tokens = await response.json();
                // console.log(tokens);
                // console.log(tokens[31].platforms.ethereum);
                tokens.forEach(token => {
                        if(token.platforms.ethereum || token.id === "ethereum"){
                                // console.log(`It worked!`);
                                // console.log(`${token.id} ${token.platforms.ethereum}`)
                                ERC20Tokens.push(token.id);
                        }
                });
                // console.log(ERC20Tokens);
                // console.log(ERC20Tokens[0].id);

                let count = 0;
                const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

                (async function loop() {
                        for (let i = 0; i < ERC20Tokens.length; i++) {
                                try{
                                        const url1 = `https://api.coingecko.com/api/v3/coins/${ERC20Tokens[i]}`;
                                        const result = await fetch(url1);
                                        await delay(3000);
                                        const logos = await result.json();
                                        await delay(2000);
                                        // console.log(logos.image.small);
                                        // console.log(logos[i].image.small);
                                        const symbol = removeChar(logos.symbol);
                                        if(fs.existsSync(`./images/${symbol}.png`)){
                                                console.log(`${symbol} file present`);
                                                
                                        }
                                        else{
                                                download(logos.image.small, `./images/${symbol}.png`, function(){
                                                        // console.log('done');
                                                })
                                                console.log(`${symbol} file written`);
                                        }
                                }catch(err){
                                        console.log(`Error in for loop ${err}`)
                                }
                                console.log(`Count = ${count}`);
                                count ++;
                        }
                })();
        }catch(err){
                console.log(`There was an error ${err}`)
        }
}

const removeChar = (string, i = 0, res = "") => {
        if(i >= string.length)
            return res;
        else if(string[i] == "/")
            return removeChar(string, i + 1, res);
        else
            return removeChar(string, i + 1, res += string[i]);
    }

var download = function(uri, filename, callback){
        request.head(uri, function(err, res, body){
                // console.log('content-type:', res.headers['content-type']);
                // console.log('content-length:', res.headers['content-length']);
                
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
};

getTokens();