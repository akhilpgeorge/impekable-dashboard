import React from 'react';

import ReactPlayer from 'react-player';

import {Card} from 'react-bootstrap';

import './product-video.styles.scss';

export default class ProductVideo extends React.Component{
    render(){
        return(
            <Card className="col-12 mt-4 pt-3 pb-0">
                <div style={{marginBottom : "13px"}}>
                    <h5 className="heading mb-3">
                        Product Video
                        <span className="stripe point-stripe">
                        </span>
                    </h5>

                    <div>
                        <ReactPlayer url='https://www.youtube.com/watch?v=Oy6hk6Y7VHQ'
                        width="100%" height="191px"
                        style={{overflow: 'hidden'}}/>
                    </div>
                </div>
            </Card>
        )
    }
}