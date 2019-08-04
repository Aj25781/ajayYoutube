import React,{Component} from 'react'

class commentSection extends Component{
      render(){
          return(
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
          )
      }
}
export default commentSection;