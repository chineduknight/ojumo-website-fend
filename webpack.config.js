const common = require('./webpack.common');
const merge = require('webpack-merge');
module.exports = env =>{
    let config = !env.mode
        ? require(`webpack.development`)
        : require(`./webpack.${env.mode}`);

    return merge({mode: env.mode}, common, config)
};

