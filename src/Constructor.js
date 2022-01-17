import {Component} from 'react'

class Constructor extends Component{
    demo=()=>{
        alert();
    }
    render(){
        return(
            <div>
                <button onClick={this.demo}>Submit</button>
            </div>
        )
    }
}
export default Constructor