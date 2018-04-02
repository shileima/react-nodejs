import React, {Component} from 'react';
import {Card,Avatar} from 'antd';
import TxtTag from '../index/txtTag';
import {Link} from 'react-router-dom';

class TxtDetails extends Component {
    render(){
        let {data} = this.props;
        //console.log(data.good)
        const title = <div>
            <h1>{data.title}</h1>
            <div>
                <TxtTag data={data} />
                <Avatar src={data.author.avatar_url} />
                <Link to={"/user/" + data.author.loginname}>{data.author.loginname}</Link>
                发表于：{data.create_at.split("T")[0]}
            </div>
        </div>

        return (<div className="wrap">
            <Card title={title}>
                <div dangerouslySetInnerHTML={{
                        __html:data.content
                    }}>
                </div>
            </Card>
        </div>
        )
    }
}

export default TxtDetails;