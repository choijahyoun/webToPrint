import axios from 'axios';

const shopRequestGet = (token)=>
    axios
    .get(`${process.env.apiurl}/make`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-jwt-token': token,
      },
    })
    .then(response=>
      {
        console.log(response.data);
        return response;
      }
    )
    .catch((error) => {
      console.log(token);
      console.log(error.response.data);
      throw error.response.data;
    });


const shopOneRequestGet = (token, id) =>
    axios
    .get(`${process.env.apiurl}/make/${id}`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-jwt-token': token,
      },
    })
    .then(response=>
      {
        console.log(response.data);
        return response;
      }
    )
    .catch((error) => {
      console.log(id);
      console.log(error.response.data);
      throw error.response.data;
    });

const shopAdminRequestGet = (token) =>
axios
    .get(`${process.env.apiurl}/make/admin`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-jwt-token': token,
      },
    })
    .then(response=>
      {
        console.log(response.data);
        return response;
      }
    )
    .catch((error) => {
      console.log(error.response.data);
      throw error.response.data;
    });

const shopResentOrderGet = (token)=>
    axios
    .get(`${process.env.apiurl}/make/resentorder`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-jwt-token': token,
      },
    })
    .then(response=>
      {
        console.log(response.data);
        return response;
      }
    )
    .catch((error) => {
      console.log(token);
      console.log(error.response.data);
      throw error.response.data;
    });

export {shopRequestGet, shopAdminRequestGet, shopOneRequestGet, shopResentOrderGet};
