function indexList(state={
    data:[],
    loading:'true'
},action){
    switch(action.type){
        case 'LIST_UPDATE': // case 的选项关联class组件中 dispatch 的 type 值
            return {
                loading:true,
                data:state.data // 这里的 dataGet 关联class组件中 dispatch 的 dataGet 值
            }
        case 'LIST_UPDATE_SUCCESS': // case 的选项关联class组件中 dispatch 的 type 值
            return {
                loading:false,
                data:action.dataGet.data // 这里的 dataGet 关联class组件中 dispatch 的 dataGet 值
            }
        case 'LIST_UPDATE_ERROR': // case 的选项关联class组件中 dispatch 的 type 值
            return {
                loading:false,
                data:[] // 获取数据失败的状态
            }
        default:
            return state;
    }
}

export default indexList;