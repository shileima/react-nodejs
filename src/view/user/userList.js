import React, {Component} from 'react';
import {Card,List,Avatar} from 'antd';
import {Link} from 'react-router-dom';

class UserList extends Component {
    // constructor(arg){
    //   super(arg)
    //   //console.log(this.props) //this is not allowed before super
    //   this.state = {
    //     page:1
    //   }
    //   this.getDate(this.props.tab);
    // }

    render(){
      //console.log(this.props)
      let {loading,data,title} = this.props;
        return(
            <Card 
                title={title}
                loading={loading}
                type="inner"
            >
                <List
                    className="reply-list"
                    dataSource={data}
                    itemLayout = "vertical"
                    renderItem={item=>{
                        return (
                            <List.Item
                                key={item.id}
                                extra={<span>最后回复时间{item.last_reply_at}</span>}
                            >
                                <List.Item.Meta
                                  avatar = {<Avatar src={item.author.avatar_url}/>}
                                  
                                  description = {<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link></span>}
                                />
                                <div dangerouslySetInnerHTML={
                                    {
                                        __html: item.title
                                    }
                                }></div>
                            </List.Item>
                        )
                    }}>
                    
                </List>
                
            </Card>
        )
    }
}

export default UserList;