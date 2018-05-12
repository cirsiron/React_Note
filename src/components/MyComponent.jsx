import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
    }
    changeName(item, index) {
       return ()=>{
        const {changeName} = this.props;
        changeName && changeName(item, index);
       }
    }

    render() {
        const children = this.props.children;
        console.log(this.props)
        let list;
        if (children) {
        list = children.map((v, i) => {
            return(
            <li key={i}>
                {v.name}&nbsp;&nbsp;&nbsp;
                <button onClick={this.changeName(v, i)}>按钮</button>
                <MyComponent changeName={this.props.changeName} children={v.children} />
            </li>
            );
        });
        }
        return (
        <ul>
            {list}
        </ul>
        );
    }
}

export default MyComponent;