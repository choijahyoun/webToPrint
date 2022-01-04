import axios from "axios";

const getLargeAdminCategoryRequest = () =>
    axios
    .get(`${process.env.apiurl}/product/largeCategory`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

const getMidiumAdminCategoryRequest = () =>
    axios
    .get(`${process.env.apiurl}/product/midiumCategory`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

const createLargeAdminCategoryRequest = (form,token) =>
    axios
    .post(`${process.env.apiurl}/product/largeCategory`,
    {
        name : form.name,
        code : form.code,
        // isShow : form.isShow
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
          },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(error);
        throw error;
    });

const createMidiumAdminCategoryRequest = (form, token) =>
    axios
    .post(`${process.env.apiurl}/product/midiumCategory`,
    {
        largeCategory : form.largeCategory,
        name : form.name,
        code : form.code
        // isShow : form.isShow
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
          },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(form, error);
        throw error;
    });

const deleteLargeAdminCetegoryRequest = (form, token) =>
    axios
    .delete(`${process.env.apiurl}/product/largeCategory`,
    {
        data : {
                name : form.name
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(form, error);
        throw error;
    });

const deleteMidiumAdminCetegoryRequest = (form, token) =>
    axios
    .delete(`${process.env.apiurl}/product/midiumCategory`,
    {
        data : {
                name : form.name
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(form, error);
        throw error;
    });

export {
    getLargeAdminCategoryRequest,
    getMidiumAdminCategoryRequest,
    createLargeAdminCategoryRequest,
    createMidiumAdminCategoryRequest,
    deleteLargeAdminCetegoryRequest,
    deleteMidiumAdminCetegoryRequest,
}