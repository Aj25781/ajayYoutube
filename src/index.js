import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Homepage from './homepage'

class App extends Component
{
    constructor(props) {

        super(props);
        
        this.state = {
           
        }
    }

    render(){
        return(
         <div>
             <Header/>
          
         </div>

        )
    }

}
ReactDom.render(<App/>,document.getElementById("root"));