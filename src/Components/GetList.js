import React, { Component } from 'react'
import axios from 'axios'
import Deletedata from './Deletedata'
import  Update  from './Update'


class GetList extends Component {
    constructor(props){
        super(props)
        this.state={
            customerList:[],
            DeleteId:null,
            UpdateId:"",
            updateCustomer:[],

            name: '',
            CreatedDate: '',
            address: '',
            CreatedBy: '',
            ModifiedDate: '',
            ModifiedBy: '',
            Gender: '',
            Active: '',
            MobileNo: '',

        }
    }
    componentDidMount(){
      
        axios.get('http://127.0.0.1:8000/Accounts/')
        .then(response=>{
            
            this.setState({customerList:response.data})
           // console.log(customerList)
           
        })
        .catch(error => {
            
            console.error('There was an error!', error);
        });
 
        
    }

     onUpdate(id){
      var update=id
      this.setState({UpdateId:id})
      console.log(this.state.UpdateId)
      
 axios.get(`http://127.0.0.1:8000/Accounts/get/${update}/`)
        .then(response=>{
 


            // })
          
           //this.setState({updateCustomer:response.data})
           
          this.setState({
            name: response.data.name,
          
            Address: response.data.address,
            CreatedBy: response.data.CreatedBy,
        
            ModifiedBy: response.data.ModifiedBy,
            Gender: response.data.Gender,
    
            MobileNo: response.data.MobileNo,
          })
          console.log(this.state.name)
           
        })
        .catch(error => {
            
            console.error('There was an error!', error);
        });
    }

    

     onDelete(id){
        
   this.setState({DeleteId:id})
  
  console.log(this.state.DeleteId)
    }

    render() {
       
        const { onUpdate,UpdateId, DeleteId, customerList}=this.state
        console.log(customerList)
        
        return (
            
            <div className="container  " >
                  

                  

                
                <table className="table table-striped">
  <thead>
    <tr>

      <th >Name</th>

      <th >Address</th>
      <th>CreatedBy</th>

      <th>ModifiedBy</th>
      <th>Gender</th>

      <th>MobileNo</th>
      <th>Action</th>
    </tr>
  </thead>
                {    customerList.length?
                
                    customerList.map(customers=>  <tbody key={customers.id}>   


    <tr>
     
      <td>{customers.name}</td>

      <td >{customers.address}</td>
      <td>{customers.CreatedBy}</td>

      <td>{customers.ModifiedBy}</td>
      <td>{customers.Gender}</td>
      
      <td>{customers.MobileNo}</td>
      <td><button type ="button" className="btn btn-danger btn-sm" onClick={()=>{this.onDelete(customers.id)}} >Delete</button></td>
      <td><button type ="button" className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={()=>{this.onUpdate(customers.id)}}>update</button></td>
   
    </tr>

  </tbody> ):
    null
                }

                </table>
                <Update updateId={UpdateId} onUpdate={onUpdate} updateCustomer={this.state} />
                <Deletedata deleteid={DeleteId}/>
            </div>
            

        )
        
        
        
    }
}

export default GetList
