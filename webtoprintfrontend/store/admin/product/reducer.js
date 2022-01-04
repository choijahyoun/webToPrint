import { CREARE_ADMIN_PRINTMETHOD, CREATE_ADMIN_BINDING, CREATE_ADMIN_BINDING_SUCCESS, CREATE_ADMIN_DOCUSPEC, CREATE_ADMIN_DOCUSPEC_SUCCESS, CREATE_ADMIN_PAGEOPTION, CREATE_ADMIN_PAGEOPTION_PAGE, CREATE_ADMIN_PAGEOPTION_PAGEKIND, CREATE_ADMIN_PAGEOPTION_PAGEMETHOD, CREATE_ADMIN_PAGEOPTION_SUCCESS, CREATE_ADMIN_PAPER, CREATE_ADMIN_PAPER_SUCCESS, CREATE_ADMIN_POSTPROCESS, CREATE_ADMIN_POSTPROCESS_DETAIL, CREATE_ADMIN_POSTPROCESS_SUCCESS, CREATE_ADMIN_PRODUCT, CREATE_ADMIN_QUANTITY, DELETE_ADMIN_BINDING, DELETE_ADMIN_DOCUSPEC, DELETE_ADMIN_PAGEOPTION, DELETE_ADMIN_PAGEOPTION_PAGE, DELETE_ADMIN_PAGEOPTION_PAGEKIND, DELETE_ADMIN_PAGEOPTION_PAGEMETHOD, DELETE_ADMIN_PAPER, DELETE_ADMIN_POSTPROCESS, DELETE_ADMIN_POSTPROCESS_DETAIL, DELETE_ADMIN_PRINTMETHOD, DELETE_ADMIN_PRODUCT, DELETE_ADMIN_QUANTITY, GET_ADMIN_BINDING, GET_ADMIN_BINDING_ERROR, GET_ADMIN_BINDING_SUCCESS, GET_ADMIN_DOCUSPEC, GET_ADMIN_DOCUSPEC_ERROR, GET_ADMIN_DOCUSPEC_SUCCESS, GET_ADMIN_ONE_PRODUCT, GET_ADMIN_ONE_PRODUCT_ERROR, GET_ADMIN_ONE_PRODUCT_PROCESSDETAIL, GET_ADMIN_ONE_PRODUCT_SUCCESS, GET_ADMIN_PAGEOPTION, GET_ADMIN_PAGEOPTION_ERROR, GET_ADMIN_PAGEOPTION_SUCCESS, GET_ADMIN_PAPER, GET_ADMIN_PAPER_ERROR, GET_ADMIN_PAPER_SUCCESS, GET_ADMIN_POSTPROCESS, GET_ADMIN_POSTPROCESS_ERROR, GET_ADMIN_POSTPROCESS_SUCCESS, GET_ADMIN_PRINTMETHOD, GET_ADMIN_PRINTMETHOD_ERROR, GET_ADMIN_PRINTMETHOD_SUCCESS, GET_ADMIN_PRODUCT, GET_ADMIN_PRODUCT_ERROR, GET_ADMIN_PRODUCT_SUCCESS, GET_ADMIN_QUANTITY, GET_ADMIN_QUANTITY_ERROR, GET_ADMIN_QUANTITY_SUCCESS, GET_ADMIN_UNIT, GET_ADMIN_UNIT_ERROR, GET_ADMIN_UNIT_SUCCESS, SELECT_ADMIN_BINDING, SELECT_ADMIN_DOCUSPEC, SELECT_ADMIN_OFFSET, SELECT_ADMIN_PAGEOPTION, SELECT_ADMIN_PAPER, SELECT_ADMIN_POSTPROCESS, SELECT_ADMIN_QUANTITY, UPDATE_ADMIN_BINDING, UPDATE_ADMIN_DOCUSPEC, UPDATE_ADMIN_PAGEOPTION, UPDATE_ADMIN_PAPER, UPDATE_ADMIN_POSTPROCESS, UPDATE_ADMIN_POSTPROCESS_DETAIL, UPDATE_ADMIN_PRINTMETHOD, UPDATE_ADMIN_PRODUCT } from "./content";

import { HYDRATE } from "next-redux-wrapper";
export const initState = {
    form: {},
    id: "",
    productList: [],
    oneProduct: [],
    docuspecList: [],
    unitList: [],
    quantityList: [],
    paperList: [],
    pageOptionList: [],
    pageOption: {
        name: "",
        pageMethod: [],
        pageKind: [],
        page: [],
    },
    priceList: [],
    printMethodList: [],
    isOffset : "",
    bindingList: [],
    postProcessList: [],
    //  관리자가 정한 옵션 리스트
    selectBindingList: [],
    selectPaperList: [],
    selectDocuSpecList: [],
    selectPostProcessList: [],
    selectPageOptionList: [],
    selectProductNum : "",
    error: "",
}

function AdminProductReducer(state = initState, action) {
    switch (action.type) {
        case GET_ADMIN_PRODUCT:
            return {
                ...state,
            }
        case GET_ADMIN_PRODUCT_SUCCESS:
            return {
                ...state,
                productList: action.payload,
            }
        case GET_ADMIN_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case GET_ADMIN_ONE_PRODUCT:
            return {
                ...state,
                form: action.payload,
            }
        case GET_ADMIN_ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                oneProduct: action.payload,
            }
        case GET_ADMIN_ONE_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case GET_ADMIN_QUANTITY:
            return {
                ...state,
            }
        case GET_ADMIN_QUANTITY_SUCCESS:
            return {
                ...state,
                quantityList: action.payload,
            }
        case GET_ADMIN_QUANTITY_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case GET_ADMIN_UNIT:
            return {
                ...state,
            }
        case GET_ADMIN_UNIT_SUCCESS:
            return {
                ...state,
                unitList: action.payload,
            }
        case GET_ADMIN_UNIT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        // 상품생성 관련 리듀서 
        case CREATE_ADMIN_PRODUCT:
            return {
                ...state,
                form: action.payload,
            }
        case DELETE_ADMIN_PRODUCT:
            state.productList = state.productList.filter(item => !action.payload.includes(item))
            return {
                ...state,
                form: action.payload,
                productList : state.productList,
            }
        case UPDATE_ADMIN_PRODUCT:
            return {
                ...state,
                form: action.payload,
            }
        // 제본 관련 리듀서 
        case GET_ADMIN_BINDING:
            return {
                ...state,
            }
        case GET_ADMIN_BINDING_SUCCESS:
            return {
                ...state,
                bindingList: action.payload,
            }
        case GET_ADMIN_BINDING_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_ADMIN_BINDING:
            return {
                ...state,
                form: action.payload,
            }
        case CREATE_ADMIN_BINDING_SUCCESS:
            const bindingList = [];
            for (let i = 0; i < state.bindingList.length; i++) {
                bindingList.push(state.bindingList[i]);
            }
            bindingList.push(action.payload);
            return {
                ...state,
                bindingList: bindingList,
            }
        case DELETE_ADMIN_BINDING:
            console.log(action.payload);
            let deletebindingList = [];
            deletebindingList = state.bindingList.filter(function (bindingName) {
                return bindingName.id !== action.payload;
            })
            return {
                ...state,
                bindingList: deletebindingList,
                id: action.payload
            }
        case UPDATE_ADMIN_BINDING:
            const copyBindingList = state.bindingList;
            const updateBindingId = copyBindingList.findIndex(function (element) {
                if (element.id === action.payload.id) return true;
            })
            console.log(updateBindingId);
            console.log(action.payload);
            copyBindingList.splice(updateBindingId, 1, action.payload);
            console.log(copyBindingList);
            return {
                ...state,
                form: action.payload,
                bindingList: copyBindingList,
                id: action.payload.id,
            }
        case SELECT_ADMIN_BINDING:
            console.log(action.payload)
            const testBindingList = [];
            for (let i = 0; i < action.payload.length; i++) {
                testBindingList.push(action.payload[i])
            }
            return {
                ...state,
                selectBindingList: testBindingList,
            }
        // 수량 관련 리듀서 
        case CREATE_ADMIN_QUANTITY:
            const quantityList = [];
            for (let i = 0; i < state.quantityList.length; i++) {
                quantityList.push(state.quantityList[i]);
            }
            quantityList.push(action.payload);
            return {
                ...state,
                quantityList: quantityList,
            }
        case DELETE_ADMIN_QUANTITY:
            state.quantityList = state.quantityList.filter(function (quantityName) {
                return quantityName.name !== action.payload.name
            })
            return {
                ...state,
                quantityList: state.quantityList,
            }
        case SELECT_ADMIN_QUANTITY:
            console.log('수량 선택'); 
            return {
                ...state,
                selectProductNum : action.payload,
            }
        // 용지 관련 리듀서 
        case GET_ADMIN_PAPER:
            return {
                ...state
            }
        case GET_ADMIN_PAPER_SUCCESS:
            return {
                ...state,
                paperList: action.payload,
            }
        case GET_ADMIN_PAPER_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_ADMIN_PAPER:
            return {
                ...state,
                form: action.payload,
            }
        case CREATE_ADMIN_PAPER_SUCCESS:
            const paperList = [];
            for (let i = 0; i < state.paperList.length; i++) {
                paperList.push(state.paperList[i]);
            }
            paperList.push(action.payload);
            return {
                ...state,
                paperList: paperList,
            }
        case DELETE_ADMIN_PAPER:
            console.log(action.payload);
            let deletePaperList = [];
            deletePaperList = state.paperList.filter(function (paperName) {
                return paperName.id !== action.payload;
            })
            return {
                ...state,
                paperList: deletePaperList,
                id: action.payload
            }
        case UPDATE_ADMIN_PAPER:
            const updatePaperForm =
            {
                id: "",
                paperName: "",
                paperColor: "",
                paperWeight: "",
                paperSize: "",
                manufacturer: "",
                series: "",
                grain: "",
                market_price: "",
                discount_rate: "",
                purchase_unit_price: "",
                margin_rate: "",
                sales_unit_price: "",
            }
            updatePaperForm.id = action.payload.id;
            updatePaperForm.paperName = action.payload.paperName;
            updatePaperForm.paperColor = action.payload.paperColor;
            updatePaperForm.paperWeight = action.payload.paperWeight;
            updatePaperForm.paperSize = action.payload.paperSize;
            updatePaperForm.manufacturer = action.payload.manufacturer;
            updatePaperForm.series = action.payload.series;
            updatePaperForm.grain = action.payload.grain;
            updatePaperForm.market_price = action.payload.marketPrice;
            updatePaperForm.discount_rate = action.payload.discountRate;
            updatePaperForm.purchase_unit_price = action.payload.purchaseUnitPrice;
            updatePaperForm.margin_rate = action.payload.marginRate;
            updatePaperForm.sales_unit_price = action.payload.salesUnitPrice;

            const copyPaperList = state.paperList;
            const updatePaperId = copyPaperList.findIndex(function (element) {
                if (element.id === action.payload.id) return true;
            })
            console.log(updatePaperId);
            console.log(action.payload);
            copyPaperList.splice(updatePaperId, 1, updatePaperForm);
            console.log(copyPaperList);
            return {
                ...state,
                form: action.payload,
                paperList: copyPaperList,
                id: action.payload.id,
            }
        case SELECT_ADMIN_PAPER:
            return {
                ...state,
                selectPaperList: action.payload,
            }
        // 규격 리듀서
        case GET_ADMIN_DOCUSPEC:
            return {
                ...state,
            }
        case GET_ADMIN_DOCUSPEC_SUCCESS:
            return {
                ...state,
                docuspecList: action.payload,
            }
        case GET_ADMIN_DOCUSPEC_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_ADMIN_DOCUSPEC:
            return {
                ...state,
                form: action.payload,
            }
        case CREATE_ADMIN_DOCUSPEC_SUCCESS:
            const docuspecList = [];
            for (let i = 0; i < state.docuspecList.length; i++) {
                docuspecList.push(state.docuspecList[i]);
            }
            docuspecList.push(action.payload);
            return {
                ...state,
                docuspecList: docuspecList,
                form: action.payload,
            }
        case DELETE_ADMIN_DOCUSPEC:
            console.log(action.payload);
            let deleteDocuSpecList = [];
            deleteDocuSpecList = state.docuspecList.filter(function (docuSpec) {
                return docuSpec.id !== action.payload;
            })
            return {
                ...state,
                docuspecList: deleteDocuSpecList,
                id: action.payload
            }
        case UPDATE_ADMIN_DOCUSPEC:
            const copyDocuSpecList = state.docuspecList;
            const updatedocuSpecId = copyDocuSpecList.findIndex(function (element) {
                if (element.id === action.payload.id) return true;
            })
            console.log(updatedocuSpecId);
            console.log(action.payload);
            copyDocuSpecList.splice(updatedocuSpecId, 1, action.payload);
            console.log(copyDocuSpecList);
            return {
                ...state,
                form: action.payload,
                docuspecList: copyDocuSpecList,
                id: action.payload.id,
            }
        case SELECT_ADMIN_DOCUSPEC:
            console.log(action.payload);
            return {
                ...state,
                selectDocuSpecList: action.payload,
            }
        // 페이지 옵션 관련 리듀서 (생성,삭제,수정)
        case GET_ADMIN_PAGEOPTION:
            return {
                ...state,
            }
        case GET_ADMIN_PAGEOPTION_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                pageOptionList: action.payload,
            }
        case GET_ADMIN_PAGEOPTION_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case GET_ADMIN_POSTPROCESS:
            return {
                ...state,
            }
        case GET_ADMIN_POSTPROCESS_SUCCESS:
            return {
                ...state,
                postProcessList: action.payload,
            }
        case GET_ADMIN_POSTPROCESS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_ADMIN_PAGEOPTION:
            return {
                ...state,
                form: action.payload,
            }
        case CREATE_ADMIN_PAGEOPTION_SUCCESS:
            console.log(state.pageOptionList);
            const createPageOptionList = [];
            for (let i = 0; i < state.pageOptionList.length; i++) {
                createPageOptionList.push(state.pageOptionList[i]);
            }
            createPageOptionList.push(action.payload);

            console.log(createPageOptionList);
            return {
                ...state,
                pageOptionList: createPageOptionList,
                form: action.payload,
            }
        case DELETE_ADMIN_PAGEOPTION:
            console.log(action.payload);
            let deletePageOptionList = [];
            deletePageOptionList = state.pageOptionList.filter(function (pageOption) {
                return pageOption.id !== action.payload;
            })
            console.log(deletePageOptionList);
            return {
                ...state,
                pageOptionList: deletePageOptionList,
                id: action.payload
            }
        case UPDATE_ADMIN_PAGEOPTION:
            const copyPageOptionList = state.pageOptionList;
            const updatepageOptionId = copyPageOptionList.findIndex(function (element) {
                if (element.id === action.payload.id) return true;
            })
            console.log(updatepageOptionId);
            console.log(action.payload);
            copyPageOptionList.splice(updatepageOptionId, 1, action.payload);
            console.log(copyPageOptionList);
            return {
                ...state,
                form: action.payload,
                pageOptionList: copyPageOptionList,
                id: action.payload.id,
            }
        case SELECT_ADMIN_PAGEOPTION:
            return {
                ...state,
                selectPageOptionList: action.payload,
            }
        //공정 관련 리듀서 (생성,삭제,수정)
        case CREATE_ADMIN_POSTPROCESS:
            return {
                ...state,
                form: action.payload,
            }
        case CREATE_ADMIN_POSTPROCESS_SUCCESS:
            console.log(state.postProcessList);
            const createPostProcessList = [];
            for (let i = 0; i < state.postProcessList.length; i++) {
                createPostProcessList.push(state.postProcessList[i]);
            }
            createPostProcessList.push(action.payload);
            console.log(createPostProcessList);
            return {
                ...state,
                postProcessList: createPostProcessList,
                form: action.payload,
            }
        case UPDATE_ADMIN_POSTPROCESS:
            const updatePostProccessForm =
            {
                id: "",
                name: "",
                kind: "",
                standard_circulation: "",
                market_price: "",
                discount_rate: "",
                purchase_unit_price: "",
                margin_rate: "",
                sales_unit_price: "",
            }
            updatePostProccessForm.id = action.payload.id;
            updatePostProccessForm.name = action.payload.name;
            updatePostProccessForm.kind = action.payload.kind;
            updatePostProccessForm.standard_circulation = action.payload.standardCirculation;
            updatePostProccessForm.market_price = action.payload.marketPrice;
            updatePostProccessForm.discount_rate = action.payload.discountRate;
            updatePostProccessForm.purchase_unit_price = action.payload.purchaseUnitPrice;
            updatePostProccessForm.margin_rate = action.payload.marginRate;
            updatePostProccessForm.sales_unit_price = action.payload.salesUnitPrice;

            const copyPostProcessList = state.postProcessList;
            const updatePostProcessId = copyPostProcessList.findIndex(function (element) {
                if (element.id === action.payload.id) return true;
            })
            console.log(updatePostProcessId);
            console.log(action.payload);
            copyPostProcessList.splice(updatePostProcessId, 1, updatePostProccessForm);
            console.log(copyPostProcessList);
            return {
                ...state,
                form: action.payload,
                postProcessList: copyPostProcessList,
                id: action.payload.id,
            }
        case DELETE_ADMIN_POSTPROCESS:
            console.log(action.payload);
            let DeletepostProcessList = []
            DeletepostProcessList = state.postProcessList.filter(function (element) {
                console.log(element);
                return element.id !== action.payload;
            })
            console.log(state.postProcessList);
            return {
                ...state,
                postProcessList: DeletepostProcessList
            }
        case SELECT_ADMIN_POSTPROCESS:
            console.log(action.payload)
            const testPostProcessList = [];
            for (let i = 0; i < action.payload.length; i++) {
                testPostProcessList.push(action.payload[i])
            }
            return {
                ...state,
                selectPostProcessList: testPostProcessList,
            }
        case SELECT_ADMIN_OFFSET:
            console.log(action.payload);
            return {
                ...state,
                isOffset : action.payload,
            }
        case GET_ADMIN_PRINTMETHOD:
            return {
                ...state,
            }
        case GET_ADMIN_PRINTMETHOD_SUCCESS:
            return {
                ...state,
                printMethodList : action.payload,
            }
        case GET_ADMIN_PRINTMETHOD_ERROR:
            return {
                ...state,
                error : action.payload,
            }
        case CREARE_ADMIN_PRINTMETHOD:
            return {
                ...state,
                form : action.payload,
            }
        case UPDATE_ADMIN_PRINTMETHOD:
            return {
                ...state,
                form : action.payload,
                id : action.payload.id,
            }
        case DELETE_ADMIN_PRINTMETHOD:
            return {
                ...state,
                id : action.payload,
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return {
                ...state,
            }
    }
}
export default AdminProductReducer;