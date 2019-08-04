import React,{Component} from 'react';
import { loadPartialConfig } from '@babel/core';
import './homepage.css';
import commentSection from './commentSection';


class homepage extends Component{

     constructor(props){
            super(props);
            this.state={
                flag:false,
                idSugg:null,
                fcomment:null,
                lcomment:null,
                flag1:false
            }
     }

     myLink=(id)=>{
            this.setState({flag:true,
                idSugg:id
            })
     }
   
   
    render(){
        return(<div>
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

                              <div className="commentSection">
                                   <h3>Comments</h3>
                                  <div className="ui input focus">
                                      <input type="text" name="fname" placeholder="Your name" ></input>
                                      <input type="text" name="lname" placeholder="Your comment" ></input>
                                       </div>
                                  <div className="btn">
                                      <button className="ui button" >Comment</button>
                                      <button className="ui button">Cancel</button>
                                      </div>
                                      
                                        
                                  
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
              

        </div>
               
                 
                
                
              
                 
                    
              

        )
    }
}
export default  homepage;