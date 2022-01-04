
import axios from "axios"

const shippingPostRequest = (form,token) =>
    axios
    .post(`${process.env.apiurl}/dilivery`,
      {
          //test
        pickupLoca : form.shippingName,
        recipient  : form.recipient, 
        cellNumber : form.cellNumber, 
        phoneNumber  : form.phoneNumber, 
        zoneCode : form.zoneCode,
        shippingAddress  : form.shippingAddress, 
        shippingAddressEtc : form.shippingAddressEct, 
        basicShippingAddress : form.basicShippingAddress,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'x-jwt-token': token,
          },
      }
    )
    .then(response=>
      {
        console.log(response);
          return response;
      }
    )
    .catch((error) => {
        console.log("에러발생");
        console.log(form);
      console.log(error);
        throw error.response.data;
    });


const shippingGetRequest = (token) =>
  axios
  .get(`${process.env.apiurl}/dilivery`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-jwt-token': token,
        },
    }
  )
  .then(response=>
    {
        console.log(response);
        return response;
    }
  )
  .catch((error) => {
      console.log("에러발생");
      console.log(error);
      throw error.response.data;
  });

const shippingUpdate = (token,id,form) =>
  axios
    .post(`${process.env.apiurl}/dilivery/update/${id}`,
      {
        pickupLoca : form.shippingName,
        recipient  : form.recipient, 
        cellNumber : form.cellNumber, 
        phoneNumber  : form.phoneNumber, 
        zoneCode : form.zoneCode,
        shippingAddress  : form.shippingAddress, 
        shippingAddressEtc : form.shippingAddressEct, 
        basicShippingAddress : form.basicShippingAddress,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'x-jwt-token': token,
          },
      }
    )
    .then(response=>
      {
        console.log(response);
          return response;
      }
    )
    .catch((error) => {
        console.log("에러발생");
        console.log(form);
      console.log(error);
        throw error.response.data;
    });

const shippingDelete = (token,id)=>
    axios
    .delete(`${process.env.apiurl}/dilivery/delete/${id}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'x-jwt-token': token,
          },
      }
    )
    .then(response=>
      {
        console.log("배송지 삭제 완료");
        console.log(response);
          return response;
      }
    )
    .catch((error) => {
        console.log("에러발생");
        console.log(error);
        throw error.response.data;
    });


export {shippingPostRequest, shippingGetRequest, shippingUpdate, shippingDelete};


