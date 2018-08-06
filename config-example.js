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

module.exports = configuration
