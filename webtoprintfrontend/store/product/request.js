import axios from "axios";

const productBindingGet = ()=>
    axios
    .get(`${process.env.productApiUrl}/binding/list`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    })
    .then(response=>
    {
        console.log(response.data);
        return response.data;
    }
    )
    .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
    });

const productDocuSpecGet = (id)=>
    axios
    .get(`${process.env.productApiUrl}/docu-spec/list/${id}`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    })
    .then(response=>
    {
        console.log(response.data);
        return response.data;
    }
    )
    .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
    });

const productPageOptionGet = (id)=>
    axios
    .get(`${process.env.productApiUrl}/page-option/list/${id}`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    })
    .then(response=>
    {
        console.log(response.data);
        return response.data;
    }
    )
    .catch((error) => {
       
        console.log(error.response.data);
        throw error.response.data;
    });


const productProcessGet = ()=>
    axios
    .get(`${process.env.productApiUrl}/process/list`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    })
    .then(response=>
    {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
     
        console.log(error.response.data);
        throw error.response.data;
    });

const productProcessInfoGet = (id) =>
    axios
    .get(`${process.env.productApiUrl}/process-info/list/${id}`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    })
    .then(response=>
    {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
    
        console.log(error.response.data);
        throw error.response.data;
    });

const productSlipTypeGet = ()=>
    axios
    .get(`${process.env.productApiUrl}/slip-type/list`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    })
    .then(response=>
    {
        console.log(response.data);
        return response.data;
    }
    )
    .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
    });



export {productBindingGet,productDocuSpecGet,productPageOptionGet,productProcessGet,productProcessInfoGet,productSlipTypeGet}