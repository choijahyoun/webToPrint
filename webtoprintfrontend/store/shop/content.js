
//주문페이지에서 주문 관련 
const PRINTING_PRODUCT_REQUEST = "PRINTING_PRODUCT_REQUEST";
const PRINTING_PRODUCT_ERROR = "PRINTING_PRODUCT_ERROR";
const PRINTING_PRODUCT_SUCCESS = "PRINTING_PRODUCT_SUCCESS";
//하나의 주문을 가져오는 컨텐츠
const PRINTING_PRODUCT_ONE_REQUEST ="PRINTING_PRODUCT_ONE_REQUEST";
const PRINTING_PRODUCT_ONE_ERROR = "PRINTING_PRODUCT_ONE_ERROR";
const PRINTING_PRODUCT_ONE_SUCCESS = "PRINTING_PRODUCT_ONE_SUCCESS";
const PRINTING_PRODUCT_ONE_UPDATE = "PRINTING_PRODUCT_ONE_UPDATE";
const PRINTING_PRODUCT_ONE_DELETE = "PRINTING_PRODUCT_ONE_DELETE";
//한 유저의 리스트 전체를 가져오는 컨텐츠 
const PRINTING_PRODUCT_LIST_REQUEST = "PRINTING_PRODUCT_LIST_REQUEST";
const PRINTING_PRODUCT_LIST_ERROR = "PRINTING_PRODUCT_LIST_ERROR";
const PRINTING_PRODUCT_LIST_SUCCESS = "PRINTING_PRODUCT_LIST_SUCCESS";
//관리자를 위한 리스트 전체를 가져오는 컨텐츠 
const PRINTING_PRODUCT_ADMIN_LIST_REQUEST ="PRINTING_PRODUCT_ADMIN_LIST_REQUEST";
const PRINTING_PRODUCT_ADMIN_LIST_ERROR="PRINTING_PRODUCT_ADMIN_LIST_ERROR";
const PRINTING_PRODUCT_ADMIN_LIST_SUCCESS="PRINTING_PRODUCT_ADMIN_LIST_SUCCESS";

// 한유저의 최근 주문을 가져오는 컨텐츠
const PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST ="PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST";
const PRINTING_PRODUCT_RESENTORDER_LIST_SUCCESS ="PRINTING_PRODUCT_RESENTORDER_LIST_SUCCESS";
const PRINTING_PRODUCT_RESENTORDER_LIST_ERROR = "PRINTING_PRODUCT_RESENTORDER_LIST_ERROR";

const PRINTING_API_SLIP_INSERT = "PRINTING_API_SLIP_INSERT";
const PRINTING_API_SLIP_INSERT_SUCCESS = "PRINTING_API_SLIP_INSERT_SUCCESS";
const PRINTING_API_SLIP_INSERT_ERROR = "PRINTING_API_SLIP_INSERT_ERROR";

const SELECT_ORDER_PAPER = "SELECT_ORDER_PAPER";
const SELECT_ORDER_DOCUSPEC = "SELECT_ORDER_DOCUSPEC";
const SELECT_ORDER_BINDING = "SELECT_ORDER_BINDING";

export {
    PRINTING_PRODUCT_REQUEST,
    PRINTING_PRODUCT_ERROR,
    PRINTING_PRODUCT_SUCCESS,
    
    PRINTING_PRODUCT_ONE_REQUEST,
    PRINTING_PRODUCT_ONE_ERROR,
    PRINTING_PRODUCT_ONE_SUCCESS,
    PRINTING_PRODUCT_ONE_UPDATE,
    PRINTING_PRODUCT_ONE_DELETE,

    PRINTING_PRODUCT_LIST_REQUEST,
    PRINTING_PRODUCT_LIST_ERROR,
    PRINTING_PRODUCT_LIST_SUCCESS,

    PRINTING_PRODUCT_ADMIN_LIST_REQUEST,
    PRINTING_PRODUCT_ADMIN_LIST_ERROR,
    PRINTING_PRODUCT_ADMIN_LIST_SUCCESS,

    PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST,
    PRINTING_PRODUCT_RESENTORDER_LIST_SUCCESS,
    PRINTING_PRODUCT_RESENTORDER_LIST_ERROR,

    PRINTING_API_SLIP_INSERT,
    PRINTING_API_SLIP_INSERT_SUCCESS, 
    PRINTING_API_SLIP_INSERT_ERROR,

    SELECT_ORDER_PAPER,
    SELECT_ORDER_DOCUSPEC,
    SELECT_ORDER_BINDING,

}