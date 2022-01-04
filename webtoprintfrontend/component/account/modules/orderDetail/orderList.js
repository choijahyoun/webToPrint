

const OrderList = (props) =>{
    return (
        <div>
            <div className="myList3 mgb20">
            <table id="table1">
              {/* <colgroup>
                <col style="width: 8%">
                <col style="width: 15%">
                <col style="width: *">
                <col style="width: 12%">
                <col style="width: 12%">
              </colgroup> */}
              <thead>
                <tr id="myorder_view_head">
                  <th style={{width: "8%"}}>번호</th>
                  <th style={{width: "15%"}}>상품명</th>
                  <th>주문명</th>
                  <th style={{width: "12%"}}>상세보기</th>
                </tr>
              </thead>
              <tbody id="myorder_view_list">
                  <tr>
                      <td>1</td>
                      <td>책만들기</td>
                      <td className="a_l">책만들기 - 테스트</td>
                      <td>
                          <a style={{cursor:'pointer'}} className="myBtn2 btnview">보기</a>
                      </td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
    );
}

export default OrderList;