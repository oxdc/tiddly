  const configuration = {
    host: '127.0.0.1', // localhost or 0.0.0.0 for web access
    port: 8080, // tiddlywiki server port
    /*
      You must change this path to your wiki's
      absolute path
    */
    wikiDir: '/absolute/path/to/your/wiki',
    /*
      NOTE: If you delete two lines below,
      your wiki site will be open to all!
      Anyone can visit and edit without login!
    */
    username: 'user', // CHANGE ME OR DELETE !!
    password: 'passw0rd', // CHANGE ME  OR DELETE !!
    /*
      If true, you won't need to enter your
      password each time you open this application.
    */
    autoLogin: true,
    /*
      Optional
      If true, Tiddly will launch the Content Server.
      You can access your files through it and never
      need to import all of them into your wiki.
    */
    enableContentServer: false,
    // default root directory of the Tiddly Content Server
    csRoot: 'contents',
    // Tiddly Content Server host address
    csHost: '127.0.0.1',
    // port of Tiddly Content Server
    csPort: 8081,
    /*
      White list defines a series of folders that you
      can access. If anyone is trying to access a folder
      that's not contained here, it will end up with a 403
      forbidden error.

      ! Remember: accessing root directory '/' is always forbidden
    */
    csWhiteList: [],
    /*
      MIME types of the Tiddly Content Server

      * See also:
      * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
    */
    mimeType: {
      '.ico': 'image/x-icon',
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.wav': 'audio/wav',
      '.mp3': 'audio/mpeg',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.doc': 'application/msword',
      '.eot': 'appliaction/vnd.ms-fontobject',
      '.ttf': 'aplication/font-sfnt'
    }
}

module.exports = configuration
