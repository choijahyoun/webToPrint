import axios from "axios";


const PaymentRequest = (token, id)=>
    axios
    .post(`${process.env.apiurl}/payment/${id}`,
    {
        
    },
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
export {PaymentRequest}