if(process.env.NODE_ENV === 'production'){
    module.exports = reqire('./prod');
}else{
    module.exports = require('./dev');
}