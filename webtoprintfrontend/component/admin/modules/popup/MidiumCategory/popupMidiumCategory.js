import { useState } from 'react';
import dynamic from 'next/dynamic'
import EmptyRow from './emptyRow';
import MidiumCategoryResult from './midiumCategoryResult';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const PopupMidiumCategory = (props) =>
{

    const [isModalVisiable, setIsModalVisiable] = useState(false);

    const closeModal = () =>
    {
        setIsModalVisiable(false);
    }

    const showModal = () =>
    {
        setIsModalVisiable(true);

    }

    const deleteSelectCategory = () =>
    {
        alert("정말로 삭제하시겠습니까?");
    }

    let modal;
    if(isModalVisiable) {
        modal =(
            <EuiModal onClose={closeModal}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        <h5>중분류 추가</h5>
                    </EuiModalHeaderTitle>
                </EuiModalHeader>
                <EuiModalBody>
                    <thead>
                        <tr>
                            <th/>
                            <th>카테고리 이름</th>
                            <th>카테고리 코드</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MidiumCategoryResult category={props.midiumCategoryList}/>
                        <EmptyRow largeCategory={props.largeCategory} category={props.midiumCategoryList}/>
                    </tbody>
                </EuiModalBody>
                <EuiModalFooter>
                    <EuiButton color="text" onClick={closeModal} fill>
                        닫기
                    </EuiButton>
                    <EuiButton color="danger" onClick={deleteSelectCategory} fill>
                        선택삭제
                    </EuiButton>
                    <EuiButton onClick={closeModal} fill>
                        확인
                    </EuiButton>
                </EuiModalFooter>
            </EuiModal>
        )
    }
    return (
        <>
            <EuiButton size="s" onClick={showModal} fill>추가</EuiButton>
            {modal}
        </>
    );
}
export default PopupMidiumCategory;