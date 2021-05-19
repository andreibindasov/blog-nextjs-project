// require('dotenv').config()

// module.exports ={
//     env: {
//         DB_SECRET: process.env.DB_SECRET
//     }
// }

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                MONGODB_USERNAME:'andrei',
                MONGODB_SECRET:'uL7QM7mYyp88MNG7',
                MONGODB_CLUSTERNAME:'cluster0',
                MONGODB_DATABASE:'myFirstDatabase-dev'
            }
        }
    }
    
    
    return {
        env: {
            MONGODB_USERNAME:'andrei',
            MONGODB_SECRET:'uL7QM7mYyp88MNG7',
            MONGODB_CLUSTERNAME:'cluster0',
            MONGODB_DATABASE:'blog-production'
        }
    }
}