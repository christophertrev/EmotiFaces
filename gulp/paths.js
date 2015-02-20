var mui = './node_modules/material-ui/src';
var client = './client'


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
  },
  less: {
    src: client + '/styles/main.less',
    watch: [
      client + '/styles/**',
      mui + '/styles/**'
    ],
  dest: 'client/lib'
  },
};

