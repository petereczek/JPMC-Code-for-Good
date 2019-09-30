import React from 'react';
import textImg from './images/pic.jpg';
import './messageBox.css';
class MessageBox extends React.Component
{
    render(){
        return(
            // <div className='messageBox'>
            //     <img src={textImg}/>
            //     <p> THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA THIS IS DUMMY DATA </p>
            // </div>

            <div class="container mb-4">
                <div class="row">
                    <div class="card rounded-0 col-sm-12 col-md-4">
                        <img class="img-fluid" width="100%" src={this.props.imgString}/>
                    </div>

                    <div class="card col-sm-12 col-md-8 rounded-0">
                      <div class="card-body">
                        <h2 class="card-title">{this.props.title}</h2>
                        <p class="card-text">{this.props.caption}</p>
                      </div>
                      <div class="card-footer text-muted">
                      {this.props.engagements} engagements
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MessageBox;
