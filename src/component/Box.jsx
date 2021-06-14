import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import {Card} from './input'


class BoxComponent extends React.Component {


    constructor(props){
        super(props)
        this.state={

        }
    }

    

    render(){
        return(
            <div className="box" style={{background : "red"}}>
                    <div className="header">
                        <span className="headerTitle">{this.props.data.title}</span>
                        <button className="closeButton">x</button>
                    </div>
                    {this.props.data.cardList.map((val)=>{
                        return(
                            <Card data={val}></Card>
                        )
                    })}
                    <div className="plusButtonStyle">
                        <button className="plusButton">+</button>
                    </div>
            </div>
        )
    }

}

export {BoxComponent};