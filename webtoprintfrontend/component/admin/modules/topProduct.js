import { useDropzone } from "react-dropzone";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
const EuiRadioGroup = dynamic(() => import('@elastic/eui/').then(module => module.EuiRadioGroup),{ssr:false});
const TestProduct = (props) =>
{
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop : files => props.setFiles(files)});

    const files = acceptedFiles.map(file=>(
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))
    
    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
      };
      
      const activeStyle = {
        borderColor: '#2196f3'
      };
      
      const acceptStyle = {
        borderColor: '#00e676'
      };
      
      const rejectStyle = {
        borderColor: '#ff1744'
      };

      const style = useMemo(() => ({
        ...baseStyle,
      }), []);

      const radios = [
          {
              id : '옵셋',
              label: '옵셋'
          },
          {
              id: '디지털',
              label: '디지털',
          }
      ]
  
      const onChange = (optionId) =>
      {
          props.setOffset(optionId)
      }

    return (
        <div style={{margin : '1em'}}>
            <h3>상품등록</h3>
            <h4 style={{display : 'inline'}}>카테고리</h4>
            <select value={props.selectLargeCategory} onChange={(e)=>{props.setSelectLargeCategory(e.target.value)}}>
                    {
                        props.largeCategory.map((list,key)=>(
                                <option key={key} value={list.name}>
                                    {list.name}
                                </option>
                            )
                        )
                    }
            </select>
            <select value={props.selectmidiumCategory} onChange={(e)=>{props.setSelectMidiumCategory(e.target.value)}}>
                {
                    props.midiumCategory.map((list,key)=>
                    (
                        <option key={key} value={list.name}>
                            {list.name}
                        </option>
                    ))
                }
            </select>
            <br/>
            <h4 style={{display : 'inline'}}>상품이름</h4>
            <input placeholder="상품이름" value={props.productName} onChange={(e)=>{props.setProductName(e.target.value)}}></input>
            <br/>
            <h4 style={{display : 'inline'}}>상품코드</h4>
            <input placeholder="상품코드" value={props.productCode} onChange={(e)=>{props.setProductCode(e.target.value)}}></input>
            <br/>
            <h4 style={{display : 'inline'}}>옵셋여부</h4>
            <EuiRadioGroup
            options={radios}
            idSelected={props.offset}
            onChange={id => onChange(id)}
            name="radio group"
            />
            
            <h4 style={{display : 'inline'}}>상품이미지</h4>
            <section>
                <div {...getRootProps({style})}>
                    <input {...getInputProps()}/>
                    <p>파일을 drag & drop을 해주세요</p>
                </div>
                <div className="">
                    <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside>
                </div>
            </section>
       </div>
    );
}
export default TestProduct;