import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link,withRouter} from 'react-router-dom';

class IndexMenu extends Component {
    constructor(arg){
        super(arg)
        this.state = {
            nowTab: this.props.selectedKeys
        }
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.selectedKeys !== this.state.nowTab){
            this.setState({
                nowTab: nextProps.selectedKeys
            })
            return false;
        }
        return true;
    }

    render(){
        //console.log(this.state.nowTab)
        return(
            <Menu 
            id={this.props.id}
            mode={this.props.mode}
            selectedKeys={[this.state.nowTab]}
            >
                <Menu.Item key='all'>
                    <Link to="/index/all">全部</Link>
                </Menu.Item>
                <Menu.Item key='good'>
                    <Link to="/index/good">精华</Link>
                </Menu.Item>
                <Menu.Item key='ask'>
                    <Link to="/index/ask">问答</Link>
                </Menu.Item>
                <Menu.Item key='share'>
                    <Link to="/index/share">分享</Link>
                </Menu.Item>
                <Menu.Item key='job'>
                    <Link to="/index/job">招聘</Link>
                </Menu.Item>
                <Menu.Item key='dev'>
                    <Link to="/index/dev">测试</Link>
                </Menu.Item>
            </Menu>
        )
    }
};

export default withRouter((props)=>{
    let {id,mode,match} = props;
    return <IndexMenu
        id={id}
        mode={mode}
        selectedKeys={match.params.id}
    />
})

