let moduleFn = require('./myModule');

let dir = process.argv[2];
let ext = process.argv[3];

moduleFn(dir,ext,(err, str) =>{

   if (err){
       return console.error('There was an error' ,err);
   }

   str.forEach(function (file) {
       console.log(file);
   })
});