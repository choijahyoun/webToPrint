import DaumPostcode from "react-daum-postcode"

const DaumApi = (props) => 
{
    
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
        props.setShippingAddress(fullAddress);
        props.setZoneCode(zoneCode);
        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
      }
    return (
        <div>
              <DaumPostcode
                onComplete={handleComplete}
                { ...props }/>
        </div>
    );
}

export default DaumApi;