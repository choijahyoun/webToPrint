
import axios from 'axios'

const userListRequest = (token) =>
    axios
      .get(`${process.env.apiurl}/admin/user`, 
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept' : '*/*',
            'x-jwt-token': token,
          },
        }
      )
      .then(response=>
        {
            
            return response;
        }
      )
      .catch(error=>{
            console.log(error.response);
            throw error;
      });


const userUpdateRequest = (token,form,id) =>
    axios
    .post(`${process.env.apiurl}/admin/user/update/${id}`,
      {
        userName : form.userName,
        userPhoneNumber : form.userPhoneNumber,
        role : form.role,
        Company : form.Company,
        BusinessPersonName : form.BusinessPersonName
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept' : '*/*',
          'x-jwt-token': token,
        },
      }
    )
    .then(response=>
      {
          
          return response;
      }
    )
    .catch(error=>{
          console.log(error.response);
          throw error;
    });


const userDeleteRequest = (token,id) =>
    axios
    .delete(`${process.env.apiurl}/admin/user/delete/${id}`, 
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept' : '*/*',
          'x-jwt-token': token,
        },
      }
    )
    .then(response=>
      {
          return response;
      }
    )
    .catch(error=>{
          console.log(error.response);
          throw error;
    });

export {userListRequest,userUpdateRequest,userDeleteRequest};