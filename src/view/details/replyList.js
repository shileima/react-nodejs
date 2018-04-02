import React, {Component} from 'react';
import {Card,Avatar,List} from 'antd';
import {Link} from 'react-router-dom';

class ReplyList extends Component {
    render(){
        let {replies,loading,replyCount} = this.props;
        replyCount = replyCount?replyCount+"回复":"";

        return (
            <Card 
                title={replyCount}
                loading={loading}
                type="inner"
            >
                <List
                    className="reply-list"
                    dataSource={replies}
                    itemLayout = "vertical"
                    renderItem={item=>{
                        return (
                            <List.Item
                                key={item.id}
                                extra={item.ups.length>0?(<span>有{item.ups.length}个人赞了这条回复</span>):""}
                            >
                                <List.Item.Meta
                                  avatar = {<Avatar src={item.author.avatar_url}/>}
                                  
                                  description = {<span><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link> 发表于: {item.create_at.split("T")[0]}</span> }
                                />
                                <div dangerouslySetInnerHTML={
                                    {
                                        __html: item.content
                                    }
                                }>
                                </div>
                            </List.Item>
                        )
                    }}
                    >
                    
                </List>
                
            </Card>
        )
    }
}

export default ReplyList;