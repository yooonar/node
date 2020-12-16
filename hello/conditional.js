var args = process.argv;

console.log(args);
/*
❯ node conditional.js yoonar
[
  '/usr/local/bin/node',
  '/Users/yoonar/Documents/study/node/hello/conditional.js',
  'yoonar'
]
*/

console.log(args[2]); // yoonar