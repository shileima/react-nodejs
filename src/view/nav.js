import React, {Component} from 'react';
import {Menu,Icon} from 'antd';
import {Link,withRouter} from 'react-router-dom';

class Nav extends Component{
    constructor(arg){
        super(arg)
        this.state = {
            now: this.getNow()
        }
    }
    getNow(){
        return this.props.location.pathname.split('/')[1];
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.location.pathname.split('/')[1] != this.state.now){
            this.setState({
                now: this.getNow()
            })
            return false;
        }
        return true;
    }

    render(){
        let {mode,id} = this.props;
        return(<Menu theme="light" mode={mode} id={id} selectedKeys={[this.state.now]}>
        <Menu.Item key='index'><Link to="/index/all"><Icon type="home"/>首页</Link></Menu.Item>
        <Menu.Item key='book'><Link to="/book"><Icon type="book"/>教程</Link></Menu.Item>
        <Menu.Item key='about'><Link to="/about"><Icon type="info-circle-o"/>关于</Link></Menu.Item>
        
    </Menu> )
    }
}

export default withRouter((props)=>{
    let {mode,id,location} = props;
    return <Nav // 相当于父组件
        mode={mode}
        id={id}
        location={location} // 把路由里带的参数放进了 this.props
    />
});