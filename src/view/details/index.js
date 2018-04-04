import React, {Component} from 'react';
import {Card,Avatar} from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import TxtDetails from './txtDetails';
import TxtTag from '../index/txtTag';
import {Link} from 'react-router-dom';
import ReplyList from './replyList';

class Details extends Component {
    constructor(arg){
        super(arg)
        let id = this.props.match.params.id;
        this.getData(id)
    }

    // shouldComponentUpdate(nextProps,nextState){
        
    // }

    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type: "DETAILS_UPDATE"
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=>{
                    dispatch({
                        type: "DETAILS_UPDATE_SUCCESS",
                        data: res.data
                    })
                })
                .catch((error)=>{
                    dispatch({
                        type: "DETAILS_UPDATE_ERROR"
                    })
                })
        })
    }

    render(){
        
        let {loading,data} = this.props;
        return (<div className="wrap">
            <TxtDetails 
                loading={loading}
                data={data}
            />

            <ReplyList 
                loading={loading}
                replies={data.replies}
                replyCount={data.reply_count}
            />
        </div>
        )
    }
}

export default connect(state=>state.details)(Details);