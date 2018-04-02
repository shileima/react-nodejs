function users(state={
    data:{
        avatar_url:"",
        create_at:"",
        loginname:"",
        score:"",
        recent_replies:[],
        recent_topics:[]
    },
    loading:true
},action){
    switch(action.type){
        case "USER_UPDATE":
            return {
                data:state.data,
                loading:true
            }
        case "USER_UPDATE_SUCCESS":
            return {
                data:action.data.data,
                loading:false
            }
        case "USER_UPDATE_ERROR":
            return {
                data:state.data,
                loading:true
            }
        default:
            return state;
    }
}

export default users;