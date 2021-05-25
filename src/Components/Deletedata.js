import React, { Component } from 'react'
import axios from 'axios'


 class Deletedata extends Component {
constructor(props) {
    super(props)

    this.state = {
        
         
    }
    
 
}



    



    render() {
       // console.log(this.setState({customerId:this.props}))
       if(this.props.deleteid!=null){
          
       axios.delete(`http://127.0.0.1:8000/Accounts/deleteAccount/${this.props.deleteid}/`)
       .then(response=>{
           
         
           console.log(response)
           window.location.reload();
          
       })
    
       .catch(error => {
           
           console.error('There was an error!', error);
       });
    }
       
        return (
            <div>
              
            </div>
        )
    }
}

export default Deletedata
