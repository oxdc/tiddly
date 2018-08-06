# Tiddly

A Electron desktop application for [TiddlyWiki](https://tiddlywiki.com/) on Node.js

> TiddlyWiki
>
> A non-linear personal web notebook that anyone can use and keep forever, independently of any corporation.
>
> [Github repository](https://github.com/Jermolene/TiddlyWiki5)
>
> [Website](https://tiddlywiki.com/)

## Screenshots

![Screenshot 1](doc/Screenshot1.png)
![Screenshot 2](doc/Screenshot2.png)

## Getting Started

+ [Install Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm)
+ [Install TiddlyWiki on Node.js](https://github.com/Jermolene/TiddlyWiki5#installing-tiddlywiki-on-nodejs)
  
  ```bash
  npm install tiddlywiki -g
  ```

+ Check your installation
  
  ```bash
  tiddlywiki --version
  ```
  You can see installed version of TiddlyWiki if OK.

+ Create your Wiki, remember to change the name `mynewwiki` to what you want!
  
  ```bash
  cd /path/to/store/your/wiki
  tiddlywiki mynewwiki --init server
  ```

+ Optional: You can run your Wiki now if you want to try out.
  
  ```bash
  tiddlywiki mynewwiki --server
  ```
  Visit http://127.0.0.1:8080/ in your browser
  
+ [Install Electron globally](https://electronjs.org/docs/tutorial/installation)
  
  ```bash
  npm install electron -g
  ```

+ [Install electron-packager globally](https://github.com/electron-userland/electron-packager#installation)
  
  ```bash
  npm install electron-packager -g
  ```
  
+ [Install Git](https://git-scm.com/downloads)
+ Clone this repository
  
  ```bash
  cd /path/to/store
  git clone https://github.com/oxdc/tiddly
  cd tiddly
  ```

+ Install dependencies
  
  ```bash
  npm install
  ```

+ Copy the `config-example.js` as a new file called `config.js`
  
  ```bash
  cp ./config-example.js ./config.js
  ```

+ Edit the configuration attributes
  
  ```bash
  vim ./config.js
  ```

  ```javascript
  const configuration = {
    host: '127.0.0.1', // localhost or 0.0.0.0 for web access
    port: 8080, // server port
    wikiDir: '/absolute/path/to/your/wiki',
    /*
      You must change this path to your wiki's
      absolute path
    */
    username: 'user', // CHANGE ME OR DELETE !!
    password: 'passw0rd', // CHANGE ME  OR DELETE !!
    /*
      NOTE: If you delete two lines above,
      your wiki site will be open to all!
      Anyone can visit and edit without login!
    */
    autoLogin: true
    /*
      If true, you won't need to enter your
      password each time you open this application.
    */
  }
  ```

+ Run this application
  
  ```bash
  electron .
  ```

+ Build (pack) this application
  
  ```bash
  electron-packager .
  ```

+ Done! Enjoy!