import axios from "axios";

// 주문생성 api 
const shopRequestPost =(form,token) =>
    axios
    .post(`${process.env.apiurl}/order`,
      {
        //test
        productName : form.productName,
        orderName : form.orderName,
        orderNum : form.orderNum,
        price : form.price,
        userSize : form.userSize,
        requirement : form.requirement,
        isOffset : form.isOffset,
        docuSpec : form.docuSpec,
        binding : form.binding,
        paper : form.paper,
        postProcess : form.postProcess,
        pageOptionPaperOrder : form.pageOptionPaperOrder,
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
      console.log(error);
        throw error.response.data;
    });

const shopRequestImgPost = (token,id,formData) =>
    axios
    .post(`${process.env.apiurl}/file/upload/${id}`,
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

// erp에 온라인 주문을 보내는 api
const shopApiRequest = (form) =>
      axios
      .post(`${process.env.productApiUrl}/slip/insert`,
      {
        companyId: 1,
        customer: {
          id: 2,
        },
        jobInfo: {
          binding: {
            id: form.bindingId
          },
          docuSpec: {
            id: form.docuSpecId,
          },
          name: form.title,
          pageOptionList: form.pageOptionList,
          processInfoList : [
            {
              id : 1,
              processInfo : {
                id : 1,
              }
            }
          ],
          quantity: form.makeNum, 
        },
        publishedDate: form.publishedDate,
        slipNo: 0,
        slipType: {
          id: 1,
        },
        supplyPrice: 0,
        unitPrice: 0,
        vat: 0
      }
      )
      .then(response=>
        {
          console.log
          console.log(response);
            return response;
        }
      )
      .catch((error) => {
          console.log(form);
          console.log(error);
          throw error;
      });

// 한 유저 주문 수정 api
const shopRequestUpdatePost =(token,form,id) =>
    axios
    .post(`${process.env.apiurl}/make/update/${id}`,
      {
          //test
          productName : form.productName,
          orderName : form.orderName,
          orderNum : form.orderNum,
          price : form.price,
          userSize : form.userSize,
          requirement : form.requirement,
          isOffset : form.isOffset,
          docuSpec : form.docuSpec,
          binding : form.binding,
          paper : form.paper,
          postProcess : form.postProcess,
          pageOptionPaperOrder : form.pageOptionPaperOrder,
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
      console.log(error);
        throw error.response.data;
    });

// 한 유저 주문 삭제 api
const shopRequestDeletePost =(token,id) =>
    axios
    .post(`${process.env.apiurl}/make/delete/${id}`,
      {
          isDelete : true,
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
      console.log(error);
        throw error.response.data;
    });

const shopRequestPurchasePost =(token,id) =>
    axios
    .post(`${process.env.apiurl}/order/purchase/${id}`,
      {
          isPurchase : true,
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
      console.log(error);
        throw error.response.data;
    }); 


export {shopRequestPost,shopRequestUpdatePost,shopRequestDeletePost, shopApiRequest,shopRequestPurchasePost,shopRequestImgPost};