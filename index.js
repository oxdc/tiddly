const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')
const open = require("open")
const spawn = require('child_process').spawn
const fs = require('fs')
const configuration = require('./config.js')

let child

if (configuration.wikiDir) {
    fs.exists(configuration.wikiDir, (exists) => {
        if (exists) {
            child = spawn('tiddlywiki', [
                configuration.wikiDir,
                '--server',
                configuration.port,
                '$:/core/save/all',
                'text/plain',
                'text/html',
                configuration.username ? configuration.username : '',
                configuration.password ? configuration.password : '',
                configuration.host
            ])

            child.stdout.on('data', (data) => {
                console.log(`tiddlywiki: ${data}`)
            })

            child.stderr.on('data', (data) => {
                console.log(`tiddlywiki ERROR: ${data}`)
            })
        }
    })
}

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1500,
        height: 800,
        minWidth: 1133,
        minHeight: 700,
        center: true,
        title: 'Tiddly',
        webPreferences: {
            plugins: true
        }
    })

    win.loadURL('file://'+ __dirname +'/index.html')

    win.on('page-title-updated', function(event) {
        event.preventDefault();
    });
      
    win.on('closed', () => {
        if (child) {
            process.kill(child.pid + 1, 'SIGHUP')
        }
        win = null
    })

    win.webContents.on('new-window', function (event, url) {
        event.preventDefault()
        open(url)
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

var loginInfo = {
    username: null,
    password: null
}

app.on('login', (event, webContents, request, authInfo, callback) => {
    event.preventDefault()
    if (configuration.username && configuration.password && configuration.autoLogin) {
        callback(configuration.username, configuration.password)
    } else if (loginInfo.username && loginInfo.password) {
        callback(loginInfo.username, loginInfo.password)
    } else {
        webContents.send('login-request', true, authInfo.realm ? authInfo.realm : '')
    }
    if (!authInfo.realm) {
        webContents.send('login-request', false)
    } else {
        webContents.send('login-request', true, authInfo.realm)
    }
})

ipcMain.on('user-login', (event, arg) => {
    if (arg.username) {
        loginInfo.username = arg.username
    }
    if (arg.password) {
        loginInfo.password = arg.password
    }
})