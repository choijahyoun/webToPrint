const SheetPostProccessPart =(props)=>
{
    return(
        <>       
            {
                props.checkedEfoxy===true &&(
                    <td>에폭시</td>
                )
            }
            {
                props.checkedCoating===true &&(
                    <td>{props.kindCoating}</td>
                )
            }
            {
                props.checkedLeaf===true &&(
                    <td>{props.kindLeaf}</td>
                )
            }
        </>
    );
}

export default SheetPostProccessPart;