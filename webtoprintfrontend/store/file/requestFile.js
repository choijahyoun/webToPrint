import axios from "axios"
const fileRequest =(token,file,id)=>{
  const formData = new FormData();
  formData.append("filepdf", file);
    axios
    .post(`${process.env.apiurl}/file/upload/${id}`,
      formData,
      {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': `multipart/form-data; boundary=$<calculated when request is sent>`,
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
    .catch(error=>{
     

          console.log(error);
          throw error;
    });
}

const fileNameGet =(token,id)=>{
  formData.append("filepdf", file);
    axios
    .get(`${process.env.apiurl}/${id}`,
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
    .catch(error=>{
          console.log(error);
          throw error;
    });
}

export {fileRequest,fileNameGet} 