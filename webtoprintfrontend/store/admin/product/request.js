import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import Cookies from "js-cookie";

// 모든 상품 가져오는 api
const getProductRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/product`,
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
        throw error;
    });

// 하나의 상품을 가져오는 api
const getOneProductRequest = (token,form) =>
    axios
    .get(`${process.env.apiurl}/product/getOneProduct/${form.code}`,
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
        throw error;
    });

// 단위를 가져오는 api (사용안함)
const getUnitRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/getUnit`,
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
        throw error;
    });

// 상품의 이미지를 생성해주는 api
const createProductImgRequest = (token,formData) =>
    axios
    .post(`${process.env.apiurl}/product/createProductImg`,
    formData,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': `multipart/form-data; boundary=$<calculated when request is sent>`,
            'x-jwt-token': token,
          },
    })
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

// 관리자가 상품을 생성해주는 api
const createProductRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/createProduct`,
    {
        name : form.productName,
        midiumCategory: form.midiumCategory,
        code : form.productCode,
        offset : form.offset,
        docuSpec : form.docuSpec,
        postProcess : form.process,
        pageOption : form.pageOption,
        paper : form.paperList,
        binding : form.binding,
        quantity : form.quantity,
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
        console.log(form);
        console.log(error);
        throw error;
    });

const createProductSortRequest = (token,form,id) =>
    axios
    .post(`${process.env.apiurl}/product/sort`,
    {
        id : id,
        sort : form,
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
        console.log(form);
        console.log(error);
        throw error;
    });

const deleteProductRequest = (token,form) =>
    axios
    .delete(`${process.env.apiurl}/product/deleteProduct`,
    {
        data : {
            checkItem : form
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
        console.log(form);
        console.log(error);
        throw error;
    });

// 관리자가 수량을 생성하는 api
const createQuantityRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/createQuantity`,
    {
        name : form.name,
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
        console.log(form);
        console.log(error);
        throw error;
    });
// 관리자가 수량을 삭제할 수 있는 api
const deleteQuantityRequest = (form) =>
    axios
    .post(`${process.env.apiurl}/product/deleteQuantity`,
    {
        name : form.name,
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
        console.log(form);
        console.log(error);
        throw error;
    });

// 제본의 마스터 정보를 가져오는 api(관리자용)
const getBindingRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/binding`,
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
        throw error;
    });

// 제본의 마스터 정보를 생성해주는 api(관리자용)
const createBindingRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/binding`,
    {
        direction : form.direction,
        method : form.method,
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
        console.log(form);
        console.log(error);
        throw error;
    });


const deleteBindingRequest = (token,id) =>
    axios
    .delete(`${process.env.apiurl}/product/binding/${id}`,
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

const updateBindingRequest = (token, id , form) =>
    axios
    .put(`${process.env.apiurl}/product/binding/${id}`,
    {
        method : form.method,
        direction : form.direction,
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
        throw error;
    });

const getPaperRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/paper`,
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
        throw error;
    });

const createPaperRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/paper`,
    {
       paperName : form.paperName,
       paperColor : form.paperColor,
       paperWeight : form.paperWeight,
       paperSize : form.paperSize,
       manufacturer : form.manufacturer,
       series : form.series,
       grain : form.grain,
       market_price : form.marketPrice,
       discount_rate : form.discountRate,
       purchase_unit_price : form.purchaseUnitPrice,
       margin_rate : form.marginRate,
       sales_unit_price : form.salesUnitPrice,
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
        console.log(form);
        console.log(error);
        throw error;
    });


const deletePaperRequest = (token,id) =>
    axios
    .delete(`${process.env.apiurl}/product/paper/${id}`,
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

const updatePaperRequest = (token,id, form) =>
    axios
    .put(`${process.env.apiurl}/product/paper/${id}`,
    {
        paperName : form.paperName,
        paperColor : form.paperColor,
        paperWeight : form.paperWeight,
        paperSize : form.paperSize,
        manufacturer : form.manufacturer,
        series : form.series,
        grain : form.grain,
        market_price : form.marketPrice,
        discount_rate : form.discountRate,
        purchase_unit_price : form.purchaseUnitPrice,
        margin_rate : form.marginRate,
        sales_unit_price : form.salesUnitPrice,
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

const getDocuSpecRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/docuspec`,
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
        throw error;
    });

const createDocuSpecRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/docuspec`,
    {
       size : form.size,
       name : form.name,
       series : form.series,
       cut : form.cut,
       grain : form.grain,
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
        console.log(form);
        console.log(error);
        throw error;
    });

const deleteDocuSpecRequest = (token, id) =>
    axios
    .delete(`${process.env.apiurl}/product/docuspec/${id}`,
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
        throw error;
    });

const updateDocuSpecRequest = (token, id , form) =>
    axios
    .put(`${process.env.apiurl}/product/docuspec/${id}`,
    {
        size : form.size,  
        name : form.name,
        series : form.series,
        cut : String(form.cut),
        grain : form.grain,
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(form);
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

const getPageOptionRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/pageOption`,
   
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
        throw error;
    });

    //페이지옵션
const createPageOptionRequest = (token, form) =>
    axios
    .post(`${process.env.apiurl}/product/pageOption`,
    {
        pageOption : form.pageOption,
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
        throw error;
    });

const deletePageOptionRequest = (token, id) =>
    axios
    .delete(`${process.env.apiurl}/product/pageOption/${id}`,
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
        throw error;
    });


const updatePageOptionRequest = (token, id, form) =>
    axios
    .put(`${process.env.apiurl}/product/pageOption/${id}`,
    {
        pageOption : form.pageOption,
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
        throw error;
    });

const getPostProcessRequest = (token) =>
    axios
    .get(`${process.env.apiurl}/product/postProcess`,
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
        throw error;
    });

const createPostProcessRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/postProcess`,
    {
        kind : form.kind,
        name : form.name,
        standard_circulation : form.standardCirculation,
        market_price : form.marketPrice,
        discount_rate : form.discountRate,
        purchase_unit_price : form.purchaseUnitPrice,
        margin_rate : form.marginRate,
        sales_unit_price : form.salesUnitPrice,
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
        console.log(form);
        console.log(error);
        throw error;
    });

const deletePostProcessRequest = (token, id) =>
    axios
    .delete(`${process.env.apiurl}/product/postProcess/${id}`,
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
        throw error;
    });

const updatePostProcessRequest = (token, id , form) =>
    axios
    .put(`${process.env.apiurl}/product/postProcess/${id}`,
    {
        kind : form.kind,
        name : form.name,
        standard_circulation : form.standardCirculation,
        market_price : form.marketPrice,
        discount_rate : form.discountRate,
        purchase_unit_price : form.purchaseUnitPrice,
        margin_rate : form.marginRate,
        sales_unit_price : form.salesUnitPrice,
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(form);
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

const createPrintMethodRequest = (token,form) =>
    axios
    .post(`${process.env.apiurl}/product/printMethod`,
    {
        name : form.name,
        plusColor : form.plusColor,
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(form);
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

const updatePrintMethodRequest = (token, id , form) =>
    axios
    .put(`${process.env.apiurl}/product/printMethod/${id}`,
    {
        name : form.name,
        plusColor : form.plusColor,
    },
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(form);
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

const deletePrintMethodRequest = (token, id , form) =>
    axios
    .delete(`${process.env.apiurl}/product/printMethod/${id}`,
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'x-jwt-token': token,
        },
    })
    .then((response) => {
        console.log(form);
        console.log(response);
        return response;
    })
    .catch((error) => {
        throw error;
    });

export {
    getProductRequest,
    getOneProductRequest,
    getUnitRequest,
    createProductSortRequest,
    createProductImgRequest,
    createProductRequest,
    deleteProductRequest,
    createQuantityRequest,
    deleteQuantityRequest,
    getBindingRequest,
    createBindingRequest,
    deleteBindingRequest,
    updateBindingRequest,
    getPaperRequest,
    createPaperRequest,
    deletePaperRequest,
    updatePaperRequest,
    getDocuSpecRequest,
    createDocuSpecRequest,
    deleteDocuSpecRequest,
    updateDocuSpecRequest,
    getPageOptionRequest,
    createPageOptionRequest,
    deletePageOptionRequest,
    updatePageOptionRequest,
    getPostProcessRequest,
    createPostProcessRequest,
    deletePostProcessRequest,
    updatePostProcessRequest,
    createPrintMethodRequest,
    updatePrintMethodRequest,
    deletePrintMethodRequest,
}