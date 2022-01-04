import Tree from "rc-tree"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// 트리에 키가 있어야 하고 컨텐츠가 있어야 한다 
const ProductCategory = () =>
{
    const [treeData, setTreeData] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const [expandedKeys, setExpandedKeys] = useState()
    const [gData, setGData] = useState([]);
    const [largeCategory , setLargeCategory] = useState([]);
    const [midiumCategory, setMidiumCategory] = useState([]);
    // 카테고리에서는 키가 필요하고 타이틀이 필요하고 자식이 필요하다 자식은 
    useEffect(()=>
    {
        const treeData = 
        [
            { key : '0-0', title: '상업인쇄', children: [{ key : '0-0-0', title: '명함' }] },
            { key : '0-1', title: '디지털인쇄', children: [{ key : '0-1-0', title: '디지털명함' }]},
            { key : '0-2', title: '명함', chidren: [{key : '0-2-0', title: 'test'}]}
        ]
        setTreeData(treeData);
    },[])

    useEffect(()=>
    {
        console.log(treeData);

    },[treeData])

    const handleCategoryAdd = () =>
    {
        
    }

    const handleDeleteButton = () =>
    {

    }

    const handleSaveButton = () =>
    {

    }

    const onExpand = (expanedKeys) =>{
        console.log('onExpend', expanedKeys);
        
    }

    const onDragEnter = info => {
        console.log(info);
        // expandedKeys 需要受控时设置
        // this.setState({
        //   expandedKeys: info.expandedKeys,
        // });
      };

    const onDrop = (info) => {
        console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const loop = (data, key, callback) => 
        {
            for (let i = 0; i < data.length; i++)
            {
                if (data[i].key === key)
                {
                    return callback(data[i], i, data);
                }
                if (data[i].children)
                {
                    loop(data[i].children, key, callback);
                }
            }
        };

        const data = [treeData];

        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            loop(data, dropKey, item => {
            item.children = item.children || [];
            item.children.unshift(dragObj);
            });
        } 
        else if 
        (
            (info.node.props.children || []).length > 0 && 
            info.node.props.expanded && 
            dropPosition === 1 
        )
        {
            loop(data, dropKey, item => {
            item.children = item.children || [];
            item.children.unshift(dragObj);
            });
        } 
        else {
            let ar;
            let i;
            loop(data, dropKey, (item, index, arr) => {
            ar = arr;
            i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
    };

    return (
        <div>
            <Tree
                className="draggable-tree"
                draggable
                onExpand={onExpand}
                blockable
                treeData={treeData}
                onDragEnter={onDragEnter}
                onDrop={onDrop}
                
            />
            <button type="button" onClick={handleCategoryAdd}>카테고리 추가</button>
            <button type="button" onClick={handleDeleteButton}>삭제</button>
            <button type="button" onClick={handleSaveButton}>저장</button>
        </div>
    );
}
export default ProductCategory;