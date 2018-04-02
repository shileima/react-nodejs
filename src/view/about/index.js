import React, {Component} from 'react';
import PublicCard from '../publicCard';
import data from './data';

class About extends Component {
    render(){
        return (
            <PublicCard data={data} />
        )
    }
}

export default About;