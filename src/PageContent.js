import React, { Component } from 'react';

class PageContent extends Component {
    render() {
        const styles = {
             backgroundColor: 'red',
             height:'100vh',
             width: '100vw'
        }
        return (
            <div styles= {styles}>
                {this.props.children}
            </div>
        );
    }
}

export default PageContent;