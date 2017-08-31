require("./css/css.css");
var ku = require("./src/ku.js");
console.log(ku);
ku.$.each([1,2,3],function(i,index){
  console.log(i,index)
})
