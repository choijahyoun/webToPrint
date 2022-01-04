
module.exports = {
    reactStrictMode: true,
  }
// next.config.js는 문제 없음 
// image 로더와 env환경변수 설정 
const withImages = require('next-images')
module.exports = () =>{
   const  env = {
        apiurl : 'http://localhost:5000',
        productApiUrl : 'http://localhost:8080/api/input',
    }
    return withImages({
        webpack: (config, options)=>{
            return config;
        },
        env,
    });
    
}
