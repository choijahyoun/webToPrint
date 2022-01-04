import axios from "axios"

const RegisterRequest =(form)=>{
    axios
    .post(`${process.env.apiurl}/user/register`,
      {
        userName : form.userName ,
        userEmail : form.useremail ,
        userPassword : form.userPassword ,
        userPhoneNumber : form.userPhoneNumber ,
        role : form.userKind,
        Company : form.company,
        BusinessPesonName : form.businessPesonName,
      },
      {
        headers: {
            'Content-Type': 'application/json',
          },
      }
    )
    .catch(error=>{
          
          console.log(error);
          throw error;
    });
    
}

export default RegisterRequest;