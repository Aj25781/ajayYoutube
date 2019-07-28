import React,{Component} from 'react';
import { loadPartialConfig } from '@babel/core';
import './homepage.css';
import comment from './comment';


class homepage extends Component{

     constructor(props){
            super(props);
            this.state={
                flag:false,
                idSugg:null
            }
     }

     myLink=(id)=>{
            this.setState({flag:true,
                idSugg:id
            })
     }
   
   
    render(){
        return(
               <div className="ui grid">
                 <div class="twelve wide column">
                       {(this.state.flag==false)?<iframe  width="100%"  height="500px"
                        src={"https://www.youtube.com/embed/"+this.props.videos}>
                        </iframe> :<iframe  width="100%"  height="500px"
                        src={"https://www.youtube.com/embed/"+this.state.idSugg}>
                        </iframe> 
                        }
                        
                   

                        <div className="ui items">
                            <div className="item">
                                <div className="content">
                                <a className="header">{this.props.title}</a>
                                <div className="description">
                                    <p>{this.props.channelName}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                     
                        </div>

                        <div className="four wide column">
                              {this.props.videolist.map((list)=>{
                                  return <div className="imageOr" >
                                      <img src={list.snippet.thumbnails.medium.url} alt="loading..."className="image"/>
                                    
                                      <h5>{list.snippet.title}
                                         <div>  
                                          <p>{list.snippet.channelTitle}</p>
                                          </div>
                                        </h5>
                                         
                                          
                                      </div>
                                   
                                       
                              })
                              }
                         </div>
                </div>
                
                    
              

        )
    }
}
export default  homepage;