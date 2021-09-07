
1. This app fetches the logo for Ethereum Tokens from the Coingecko API and saves them to the image folder in the repo. It does take time so you have to be patient. It's slow in order to prevent an unhandled promise rejection. You need to create a folder named image in your repo.

2. M.V.P
    *Provide the following:
    - Connect to API
    - Download all logos
    - Discriminate between Ethereum Token logos and all else
    - Change the name of the file to lowercase and remove unwanted characters
    - Save the Ethereum Token logos to your local storage by Symbol name

3. Color schemes 
- N/A

* Title ERC20 Logo Filesaver

* Overview
This app fetches the logo for Ethereum Tokens from the Coingecko API and saves them to the image folder in the repo. It does take time so you have to be patient. It's slow in order to prevent an unhandled promise rejection. You need to create a folder named image in your repo.

To make this work:
- Clone the repo and run npm install to install all the dependencies.
- Or install the below.
    - https://www.npmjs.com/package/fs
    - https://www.npmjs.com/package/request
    - https://www.npmjs.com/package/node-fetch
- On the terminal type 'node app.js' without the quotes

This will take several hours.  Its console logging the current array position as it writes the files.  If it stops, Simply change the beginning position for the 'for loop' on line 29 to start where it crashed. Right now i=0 is the current beginning position. you may need to do this until all logos are downloaded.

* Languages:  JS
    * Other: JSON, Postman
     
* Stretch Goals (Future)
    * I'm going to implement the results of this tool into my Crypto Whale Tracker app
     - https://github.com/AnaIitico/Crypto-Whale-Tracker

* Developer Team
    * Jose Tollinchi
    * https://github.com/AnaIitico

* Resources
    * https://www.coingecko.com/en/api
    * https://javascript.info/async
    * https://www.coingecko.com/en/api/documentation
    