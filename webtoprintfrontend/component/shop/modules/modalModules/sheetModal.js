


const SheetModal = (props) =>
{

    return (
        <>
            <button type="button" className="btn btn-primary orderButton1" data-toggle="modal" data-target="#exampleModal">
            견적서 출력
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">견적서</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"></span>
                    </button>
                </div>
                <div className="modal-body">
                    <table>
                        <tbody>
                            <tr>
                                <th>재질 및 규격</th>
                            </tr>
                            <tr> 
                                <th>품명</th>
                                <td> </td>
                            </tr>
                            <tr> 
                                <th>규격</th>
                                <td> </td>
                            </tr>
                            <tr> 
                                <th>수량</th>
                                <td> </td>
                            </tr>
                            <tr> 
                                <th>인쇄도수</th>
                                <td></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">닫기</button>
                    <button type="button" className="btn btn-primary ">견적서 출력</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default SheetModal;