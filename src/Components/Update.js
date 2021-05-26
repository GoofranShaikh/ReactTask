import React, { Component } from 'react'
import axios from 'axios'

 class Update extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            address: '',
            CreatedBy: '',
            ModifiedBy: '',
            Gender: '',
            MobileNo: '',
        }
       // console.log(this.state.name)
    }


    changeHandler = e => {
       
       this.setState({ [e.target.name]: e.target.value })

        
      }
   updateData=(e)=>{
   // e.preventDefault()
    
    console.log(this.state)
console.log("inside updatedata")
 axios.put(`http://127.0.0.1:8000/Accounts/get/updateAccount/${this.props.updateId}/`,this.state)
.then(response=>{

console.log(response)
//form.reset()

     })
     
}    
render() {
     

       // const { name, CreatedDate, address, CreatedBy, ModifiedDate, ModifiedBy, Gender, Active, MobileNo } = this.state
        return (
          <div>


            <div className="modal fade" id="updateModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Update Form</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
    
                    <form onSubmit={this.updateData}>
    
                      <div className="mb-3" >
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" name="name" ref={this.nameRef} className="form-control" id="name" defaultValue={this.props.updateCustomer.name} onChange={this.changeHandler}></input>
                      </div>
                
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input className="form-control" type="text" name="address" id="address" placeholder="address" defaultValue={this.props.updateCustomer.address} onChange={this.changeHandler} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="createdBy" className="form-label">CreatedBy</label>
                        <input className="form-control" type="text" id="CreatedBy" name="CreatedBy" placeholder="createdBy" defaultValue={this.props.updateCustomer.CreatedBy} onChange={this.changeHandler} />
                      </div>
                
                      <div className="mb-3">
                        <label htmlFor="ModifiedBy" className="form-label">ModifiedBy</label>
                        <input className="form-control" type="text" id="ModifiedBy" name="ModifiedBy" placeholder="ModifiedBy" defaultValue={this.props.updateCustomer.ModifiedBy} onChange={this.changeHandler} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">male</label>
                        <input className="form-radio-control" type="radio" name="Gender" id="male" placeholder="Gender" defaultValue={'male'} onChange={this.changeHandler} />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">female</label>
                        <input className="form-radio-control" type="radio" name="Gender" id="female" placeholder="Gender" value={'female'} onChange={this.changeHandler} />
                      </div>
                   
                          <div className="mb-3">
                            <label htmlFor="MobileNo" className="form-label">MobileNo</label>
                            <input className="form-control" type="text" name="MobileNo" id="MobileNo" placeholder="MobileNo" defaultValue={this.props.updateCustomer.MobileNo} onChange={this.changeHandler} />
                          </div>
    
                          <div className="modal-footer">
                            <button type="Submit" className="btn btn-primary" >Submit</button>
                          </div>
                    </form>
                      </div>
    
    
                </div>
                  </div>
                </div>
    
              </div>
        )
    }
}

export default Update
