var has=function(term1,term2) {
    return term1.content.includes(term2);
};
var getRandomInt=function(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

module.exports= {has,getRandomInt};
