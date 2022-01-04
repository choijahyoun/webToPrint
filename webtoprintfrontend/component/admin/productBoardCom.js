
import { post } from 'jquery';
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react';
import { productDocuSpecGet } from '../../store/product/request';
import AdminBinding from './modules/productOption/binding';
import AdminDocsSpecModule from './modules/productOption/docspec';
import AdminOrderNameModule from './modules/productOption/orderName';
import AdminPageOptionModule from './modules/productOption/pageOption';
import AdminPaperModule from './modules/productOption/paper';
import AdminPrintMethodModule from './modules/productOption/printMethod';
import AdminProcessModule from './modules/productOption/process';
import AdminProductNum from './modules/productOption/productNum';

const EuiDragDropContext = dynamic(() => import('@elastic/eui/').then(module => module.EuiDragDropContext),{ssr:false})
const EuiFlexGroup = dynamic(() => import('@elastic/eui/').then(module => module.EuiFlexGroup),{ssr:false})
const EuiDraggable = dynamic(() => import('@elastic/eui/').then(module => module.EuiDraggable),{ssr:false})
const EuiDroppable = dynamic(() => import('@elastic/eui/').then(module => module.EuiDroppable),{ssr:false})
const EuiFlexItem = dynamic(() => import('@elastic/eui/').then(module => module.EuiFlexItem),{ssr:false})
const EuiPanel = dynamic(() => import('@elastic/eui/').then(module => module.EuiPanel),{ssr:false})
const EuiIcon = dynamic(() => import('@elastic/eui/').then(module => module.EuiIcon),{ssr:false})
const EuiButtonIcon = dynamic(() => import('@elastic/eui/').then(module => module.EuiButtonIcon),{ssr:false})
const ProductBoardCom = (props) =>
{
    const form = {
      name : "",
      sort : "",
    }
    const [list1, setList1] = useState(["주문명", "페이지옵션","용지","규격","수량","후가공","인쇄도수","제본"]);
    const [list2, setList2] = useState([]);
    const [isItemRemovable, setIsItemRemovable] = useState(false);
    const [testList, setTestList] = useState([]);
    const lists = {DROPPABLE_AREA_COPY_1 : testList , DROPPABLE_AREA_COPY_2 : list2}
    const actions = {
        DROPPABLE_AREA_COPY_1 : setList1 , DROPPABLE_AREA_COPY_2 : setList2,
    }
    const makeList = (list) =>
    {
        const result = [];
        for(var i=0; i< list.length ; i++)
        {
          result.push( {
            id : `item${i}`,
            content: list[i]
          })
        }
        return result;
    }

    useEffect(()=>
    {
      setTestList(makeList(list1));
      
    },[list1])

    useEffect(()=>
    {
      props.setForSort(list2);
    },[list2])

    const remove = (droppableId, index) =>
    {
        const list = Array.from(lists[droppableId]);
        list.splice(index, 1);
        actions[droppableId](list);
    }

    const reOrder = (list, startIndex, endIndex) =>
    {
        console.log(list,startIndex,endIndex)
        const result = Array.from(list);
        const [removed] = result.splice(startIndex,1);
        result.splice(endIndex, 0, removed);
        console.log(result);
        return result;
    }

    const save = (list1 , list2 , startIndex , endIndex) =>
    {
        const rand = Math.random();
        console.log(startIndex, endIndex);
        const result = Array.from(list2);
        var copySource = "";
        switch(list1[startIndex].id)
        {
          case 'item0':
            copySource = {id : `item${rand}`,name : "주문명", content : <AdminOrderNameModule isOrderName={true}/>}
            break;
          case 'item1':
            copySource = {id : `item${rand}`,name : "페이지옵션", content: <AdminPageOptionModule isPageOption={true}/>}
            break;
          case 'item2':
            copySource = {id : `item${rand}`,name : "용지", content : <AdminPaperModule isPaper={true}/>}
            break;
          case 'item3':
            copySource = {id : `item${rand}`,name : "규격", content : <AdminDocsSpecModule isDocsSpec={true} docuSpec={props.docuSpec} setDocuSpec={props.setDocuSpec}/>}
            break;
          case 'item4':
            copySource = {id : `item${rand}`,name : "수량", content : <AdminProductNum isProductNum={true}/>}
            break;
          case 'item5':
            copySource = {id : `item${rand}`,name : "후가공", content : <AdminProcessModule isProcess={true}/>}
            break;
          case 'item6':
            copySource = {id : `item${rand}`,name : "인쇄도수", content : <AdminPrintMethodModule isPrintMethod={true}/>}
            break;
          case 'item7':
            copySource = {id : `item${rand}`,name : "제본", content:<AdminBinding isBinding={true}/>}
            break;
        }
        console.log(copySource);
        result.splice(endIndex, 0 , copySource);
        return result;
    }

    const onDragUpdate = ({source, destination}) =>
    {
        console.log(source, destination);
        const shouldRemove = 
        !destination && source.droppableId === 'DROPPABLE_AREA_COPY_2';
        setIsItemRemovable(shouldRemove);
    }

    const onDragEnd = ({ source, destination }) => {
        console.log(source,destination)
        if(source && destination) {
            if(source.droppableId === destination.droppableId){
                const items = reOrder(
                    lists[destination.droppableId],
                    source.index,
                    destination.index
                );
                console.log('리오더');
                console.log(items);
                actions[destination.droppableId](items);
            }
            else{
                const sourceId = source.droppableId;
                const destinationId = destination.droppableId;
                console.log('세이브')
                const result = save(
                    lists[sourceId],
                    lists[destinationId],
                    source.index,
                    destination.index,
                )
                actions[destinationId](result);
            }
        }
        else if(!destination && source.droppableId === 'DROPPABLE_AREA_COPY_2'){
            console.log(source.droppableId,source.index)
            console.log('삭제');
            remove(source.droppableId, source.index);
        }
    };
    
    return (
      <>
      <EuiDragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiDroppable
              droppableId="DROPPABLE_AREA_COPY_1"
              cloneDraggables={true}
              spacing="m"
              withPanel
              grow={false}>
                {testList.length  ? (
                  testList.map( ({id,content },index) => (
                    <EuiDraggable spacing="m" key={id} index={index} draggableId={id}>
                          <EuiPanel >
                            {content}
                          </EuiPanel>
                    </EuiDraggable>
                  ))
                ) : (
                  <EuiFlexGroup
                    alignItems="center"
                    justifyContent="spaceAround"
                    gutterSize="none"
                    style={{ height: '100%' }}>
                    <EuiFlexItem grow={false}>
                      <EuiIcon type="faceSad" />
                    </EuiFlexItem>
                  </EuiFlexGroup>
                )}
            </EuiDroppable>
          </EuiFlexItem>
          <EuiFlexItem style={{width : '50%'}}>
            <EuiDroppable
              droppableId="DROPPABLE_AREA_COPY_2"
              spacing="m"
              withPanel
              isRemovable={isItemRemovable}
              >
              {list2.length ? (
                list2.map(({id,content },index) => (
                  <EuiDraggable spacing="m" key={id} index={index} draggableId={id}>
                      <EuiPanel >
                          <EuiFlexGroup gutterSize="none" alignItems="center">
                              <EuiFlexItem>{content}</EuiFlexItem>
                              <EuiFlexItem grow={false}>
                                  {isItemRemovable ? (<EuiIcon type="trash" color="danger"/>) : (
                                      <EuiButtonIcon 
                                      iconType="cross" aria-label="Remove" onClick={()=> remove('DROPPABLE_AREA_COPY_2', index)}
                                      />
                                  )}
                              </EuiFlexItem>
                          </EuiFlexGroup>
                      </EuiPanel>
                  </EuiDraggable>
                ))
              ) : (
                  <EuiFlexGroup
                  alignItems="center"
                  justifyContent="spaceAround"
                  gutterSize="none"
                  style={{ height: '300px' }}>
                  <EuiFlexItem grow={false}>여기에 드롭 해주세요</EuiFlexItem>
                </EuiFlexGroup>
              )}
            </EuiDroppable>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiDragDropContext>
    </>
    );
};

export default ProductBoardCom