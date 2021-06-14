import React from 'react';

class Card extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
                <div className="cardTitle">
                    <span>{this.props.data.cardTitle}</span>
                    <button style={{float : "right"}}>X</button>
                </div>
                <div className="cardDescription">
                    <span>{this.props.data.cardDescription}</span>
                </div>
            </div>
        )
    }
}

export {Card};