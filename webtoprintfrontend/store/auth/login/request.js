import axios from 'axios'

const LoginRequest = (form) =>
    axios
      .post(`${process.env.apiurl}/user/login`,
        {
          userEmail : form.UserEmail ,
          userPassword : form.UserPassword ,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      .then(response=>
        {
            console.log(response);
            return response.data;
        }
      )
      .catch(error=>{
            console.log(error.response.data);
            throw error.response.data;
      });


export default LoginRequest;