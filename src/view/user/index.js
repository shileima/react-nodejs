import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Avatar,Row,Col} from 'antd';
import UserList from './userList';

class User extends Component {

    constructor(arg){
        super(arg)
        let id = this.props.match.params.id;
        this.getData(id)
    }

    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:'USER_UPDATE'
            })
            axios.get( `https://cnodejs.org/api/v1/user/${id}`)
            .then((res)=>{
                dispatch({
                    type:'USER_UPDATE_SUCCESS',
                    data:res.data
                })
            })
            .catch((err)=>{
                dispatch({
                    type:'USER_UPDATE_ERROR'
                })
            })
        })
    }

    render(){
        let {loading,data} = this.props;
        let {avatar_url,loginname,create_at,recent_replies,recent_topics,score} = data;
        return (<div className="wrap">
            <Avatar src={avatar_url} className="userAvatar"/>
            <Row className="userInfo">
                <Col md={8}>
                    用户名：{loginname}
                </Col>
                <Col md={8}>
                    积分：{score}
                </Col>
                <Col md={8}>
                    注册时间：{create_at.split('T')[0]}
                </Col>
            </Row>
            <UserList
                loading={loading}
                title="最近创建的话题"
                data={recent_topics}
            />
            <UserList 
                loading={loading}
                title="最近回复的话题"
                data={recent_replies}
            />
        </div>
        )
    }
}

export default connect(state=>(state.users))(User);