const dotEnvResult = require('dotenv').config();
const prod = process.env.NODE_ENV === 'production'

if(dotEnvResult.error){
    throw dotEnvResult.error
}

module.exports = {
    target: 'serverless',

    env: {
        DAILYHACK_GITHUB_API: prod ? process.env.DAILYHACK_GITHUB_API : process.env.DAILYHACK_GITHUB_API
    }
}