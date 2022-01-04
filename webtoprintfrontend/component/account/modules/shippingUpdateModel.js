import { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDispatch, useSelector } from 'react-redux';
import { shippingAddList, shippingListUpdate, shippingRequest } from '../../../store/mypage/shipping/action';
import { shippingListSelecotor } from '../../../store/mypage/shipping/selector';
import DaumApi from './daumApi';

const ShippingUpdateModel = (props) =>
{
    const form = {
        id : "",
        shippingName : " ",
        recipient : "",
        cellNumber : "",
        phoneNumber : "",
        zoneCode : "",
        shippingAddress : "",
        shippingAddressEct : "",
        basicShippingAddress : "",
      }
      const [id ,setId] =useState();
      const [shippingName, setShippingName] = useState();
      const [recipient , setRecipient] = useState();
      const [isOpenPost , setIsOpenPost] = useState(false);
      const [shippingAddress, setShippingAddress] = useState();
      const [shippingAddressEct, setShippingAddressEct]= useState();
      const [zoneCode, setZoneCode]= useState();
      const [cellNumber, setCellNumber] = useState();
      const [phoneNumber, setPhoneNumber] = useState();
      const [basicShippingAddress, setBasicShippingAddress] = useState(false);
    // AceCounter eCommerce (cart_Inout) 
      const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        let zoneCode = data.zonecode;
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setShippingAddress(fullAddress);
        setZoneCode(zoneCode);
      }
      
      const handleOpenPost = () =>
      {
        setIsOpenPost(true);
      }
      const dispatch = useDispatch();
        
      useEffect(()=>
      {
        setIsOpenPost(false);
    
      },[shippingAddress])
    
      const handleCloseButton = () =>
      {
        setShippingAddress("");
        setZoneCode("");
      }
      const updateShipping = (form) =>
      {
            dispatch(shippingListUpdate(form));
      }
      const handleUpdate = () =>{
        form.id = id;
        form.shippingName = shippingName;
        form.recipient = recipient;
        form.cellNumber = cellNumber;
        form.phoneNumber = phoneNumber;
        form.zoneCode = zoneCode;
        form.shippingAddress = shippingAddress;
        form.shippingAddressEct= shippingAddressEct;
        form.basicShippingAddress = basicShippingAddress;
        alert("수정되었습니다.");
        updateShipping(form);
      }
    
      const setRowData = (list) =>
      {
        setId(list.id)
        setShippingName(list.pickupLoca);
        setRecipient(list.recipient);
        setCellNumber(list.cellNumber);
        setPhoneNumber(list.phoneNumber);
        setZoneCode(list.zoneCode);
        setShippingAddress(list.shippingAddress);
        setShippingAddressEct(list.shippingAddressEtc);
      }

      useEffect(()=>
      { 
        setRowData(props.shipping);
      },[])
      
     //부트스트랩의 모달을 참고 
      return (
          <div>
              <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">배송지</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                      </button>
                  </div>
                    <div className="modal-body">
                      <div className="myList1 mgb20">
                      
                      </div>
                      <div className="myList2 mgb20">
                        <table>
                          <tbody>
                            <tr>
                              <th>배송지 명</th>
                              <td>
                                <input type="text" value={shippingName} onChange={(e)=>{setShippingName(e.target.value)}} placeholder="배송지 명" style={{width: "100%"}} required></input>
                              </td>
                            </tr>
                            <tr>
                              <th>받으실 분</th>
                              <td>
                                <input type="text" value={recipient} onChange={(e)=>{setRecipient(e.target.value)}} placeholder="받으실 분" style={{width : "30%"}} required></input>
                              </td>
                            </tr>
                            <tr>
                              <th>휴대폰번호(필수)</th>
                              <td><input type="text" value={cellNumber} onChange={(e)=>{setCellNumber(e.target.value)}} style={{width : "30%"}} required></input></td>
                            </tr>
                            <tr>
                              <th>전화번호(선택)</th>
                              <td><input type="text" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} style={{width : "30%"}}></input></td>
                            </tr>
                            <tr>
                              <th>배송지주소</th>
                                <td>
                                  <input type="text"  value={zoneCode} style={{width : "25%"}} disabled></input>
                                  <button type="button" onClick={handleOpenPost}>우편번호로 찾기</button>
                                  {
                                    isOpenPost ?
                                      // <DaumApi setShippingAddress={setShippingAddress} setZoneCode={setZoneCode}/>
                                    <DaumPostcode
                                      onComplete={handleComplete}
                                      autoClose
                                      />
                                      : null
                                  }
                                  <br></br>
                                  <input type="text" value={shippingAddress} style={{width : "100%"}} disabled required></input>
                                  <input type="text" value={shippingAddressEct} style={{width : "100%"}} onChange={(e)=>{setShippingAddressEct(e.target.value)}} required></input>
                                </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="modal-footer">
                        <div >
                          <button type="button" className="btn btn-light shippingButton1">기본 배송지로 변경</button>
                        </div>
                        <div>
                          <button type="button" className="btn btn-secondary shippingButton2" data-dismiss="modal" onClick={handleCloseButton}>닫기</button>
                          <button type="button" className="btn btn-primary shippingButton2" onClick={handleUpdate}>배송지수정</button>
                        </div>
                    </div>
                  </div> 
                </div>
              </div>
          </div>
      )
}

export default ShippingUpdateModel;