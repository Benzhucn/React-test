import {
    getListService
} from '../services/getList';

/**
 * 查询数量
 */
export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'GET_LIST_FAILURE';
export const getList = () => async (dispatch, getState) => {
    
    dispatch({
        type: GET_LIST_REQUEST
    });

    let res = await getListService().catch(err => {
        dispatch({
            type: GET_LIST_FAILURE
        })
        throw new Error(err);
    });

    console.log(res)
    dispatch({
        type: GET_LIST_SUCCESS,
        payload: res
    });

    return res;
}


export function addTodoAction(payload){
    return {
      type:'ADD_TODO',
      payload:payload
    };
};

