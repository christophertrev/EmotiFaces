module.exports = {
  scripts: [
  './server/**/*.js',
  './gulpfile.js',
  './client/**/*.js',
  './gulp/**/*.js'
  ],
  server : {
    js: ['./server/*.js'],
    specs: ['./server/test/*.js']
  },
  client : {
    src: ['./client/src'],
    lib: 'client/lib'
  }

};

