import React,{Component} from 'react';
import './header.css';
import axios from  'axios';
import Homepage from './homepage';
import { async } from 'q';
import comment from './comment'
class Header extends Component
{
     constructor(props)
     {
         super(props);
         
         this.state={
             name:'',
             video:null,
             title:null,
             channelName:null,
             videolist:[]
         }
         
     }
    

     handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
     }

      handleClick=async ()=>{
        const response=await axios.get('https://www.googleapis.com/youtube/v3/search',
        {
            params:{
                part:"snippet",
                q:this.state.name,
                key:'AIzaSyDpgEUlYzR6L1giIuzWXXY5t4SnLhb3O48'
            },
            headers:{
                Authentication:'AIzaSyDpgEUlYzR6L1giIuzWXXY5t4SnLhb3O48'
            }
        })//.then((response)=>{console.log(response);
        console.log(response);
        this.setState({videoList:response.data.items[0]})
     }
     
     handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
     }

      handleClick=async ()=>{
        const response=await axios.get('https://www.googleapis.com/youtube/v3/search',
        {
            params:{
                part:"snippet",
                q:this.state.name,
                key:'AIzaSyDpgEUlYzR6L1giIuzWXXY5t4SnLhb3O48'
            },
            headers:{
                Authentication:'AIzaSyDpgEUlYzR6L1giIuzWXXY5t4SnLhb3O48'
            }
        })//.then((response)=>{console.log(response);
        console.log(response);
        this.setState({video:response.data.items[0].id.videoId})
        this.setState({title:response.data.items[0].snippet.title});
        this.setState({channelName:response.data.items[0].snippet.channelTitle});
        this.setState({videolist:response.data.items})
     }
      

     
  render(){
      return(
          <div>
                <div className="Header">
                    
                    <div className="inputField ui input">
                            <input type="text" placeholder="Search..." onChange={this.handleChange}/>
                    </div>
                    <div className="btn">
                           <button className="ui button" onClick={this.handleClick} >SEARCH</button>
                    </div>  
                   </div>
                   <div>
                       <Homepage videos={this.state.video} 
                       title={this.state.title}
                        channelName={this.state.channelName}
                        videolist={this.state.videolist}
                         />
                   </div>
          </div>
         
      )
  }

 async componentDidMount(){
         
 }
  
}
export default  Header;