import React, {Component} from 'react';
import {List,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import TxtTag from './txtTag';

class IndexList extends Component {
    constructor(arg){
      super(arg)
      //console.log(this.props) //this is not allowed before super
      this.state = {
        page:1
      }
      this.getDate(this.props.tab);
    }

    shouldComponentUpdate(nextProps,nextState){
      //console.log(nextProps)
      if(this.props.tab !== nextProps.tab){
        this.getDate(nextProps.tab);
        return false;
      }
      return true;
    }

    getDate(tab){
      this.props.dispatch((dispatch)=>{ // 'dispatch' not 'dispath'
        dispatch({
          type: 'LIST_UPDATE',
        })
        axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
        .then((res)=>{
          // 这里设置的值对应 改变 在这个组件的 reducer，也就是 reducer/indexList 里面的function switch
          dispatch({ 
            type: 'LIST_UPDATE_SUCCESS',
            dataGet:res.data
          })
        })
        .catch((err)=>{
          dispatch({
            type: 'LIST_UPDATE_ERROR',
            data:err
          })
        })
      })
    }

    render(){
      //console.log(this.props)
      let {loading,data} = this.props;
        return(
            <List
            loading={loading}
            dataSource={data}
            renderItem={item => (
              <List.Item
                key={item.id} 
                actions={["回复:"+item.reply_count,"访问:"+item.visit_count]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.author.avatar_url} />}
                  title={<Link to={"/details/" + item.id}>
                  <TxtTag data={item} />
                  {item.title}</Link>}
                  description={<Link to={"/user/" + item.author.loginname}>{item.author.loginname} 发表于：{item.create_at.split("T")[0]}</Link>}
                />
              </List.Item>
            )}
          >
          </List>
        )
    }
}

export default connect(state=>state.list)(IndexList); // let state mounted to class(IndeList)