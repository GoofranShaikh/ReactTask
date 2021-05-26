

import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';

class PostData extends Component {
  constructor(props) {
    super(props)

    this.state = {

      name: '',
     // CreatedDate: '',
      address: '',
      CreatedBy: '',
    //  ModifiedDate: '',
      ModifiedBy: '',
      Gender: '',
    //  Active: '',
      MobileNo: ''


    }
  }
  changeHandler = e => {

    this.setState({ [e.target.name]: e.target.value })
  }

submitHandler = (e) => {

  e.preventDefault();
axios.post('http://127.0.0.1:8000/Accounts/create/',this.state)
.then(response=>{
console.log(response)

})


  


  

  }

  render() {
    const { name,  address, CreatedBy,  ModifiedBy, Gender,  MobileNo } = this.state
    return (
      <div>
        <button type="button" className="addbtn btn btn-primary mb-4" style={{ position: "fixed" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add User
</button>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <form onSubmit={this.submitHandler}>

                  <div className="mb-3" >
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" name="name" className="form-control" id="name" placeholder="name" value={name} onChange={this.changeHandler}></input>
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="CreatedDate" className="form-label">CreatedDate</label>
                    <input className="form-control" type="text" name="CreatedDate" id="CreatedDate" placeholder="Date" value={CreatedDate} onChange={this.changeHandler} />
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="Address" className="form-label">Address</label>
                    <input className="form-control" type="text" name="address" id="address" placeholder="address" value={address} onChange={this.changeHandler} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="createdBy" className="form-label">CreatedBy</label>
                    <input className="form-control" type="text" id="CreatedBy" name="CreatedBy" placeholder="createdBy" value={CreatedBy} onChange={this.changeHandler} />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="ModifiedDate" className="form-label">ModifiedDate</label>
                    <input className="form-control" type="text" id="ModifiedDate" name="ModifiedDate" placeholder="ModifiedDate" value={ModifiedDate} onChange={this.changeHandler} />
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="ModifiedBy" className="form-label">ModifiedBy</label>
                    <input className="form-control" type="text" id="ModifiedBy" name="ModifiedBy" placeholder="ModifiedBy" value={ModifiedBy} onChange={this.changeHandler} />
                  </div>
                  <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">male</label>
                        <input className="form-radio-control" type="radio" name="Gender" id="male" placeholder="Gender" value={'male'} onChange={this.changeHandler} />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">female</label>
                        <input className="form-radio-control" type="radio" name="Gender" id="female" placeholder="Gender" value={'female'} onChange={this.changeHandler} />
                      </div>
                 {/*  <div className="mb-3">
                    <label className="form-check-label" htmlFor="Active"> Active</label>
                       <input className="form-check-input" type="radio" name="Active" id="Active"  value={Active} onChange={this.changeHandler}/>
                      </div> */}
                      <div className="mb-3">
                        <label htmlFor="MobileNo" className="form-label">MobileNo</label>
                        <input className="form-control" type="tel" name="MobileNo" id="MobileNo" placeholder="MobileNo" value={MobileNo} onChange={this.changeHandler} />
                      </div>

                      <div className="modal-footer">
                        <button type="Submit" className="btn btn-primary">Submit</button>
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

export default PostData

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '' };
//   }

//   handleChange = (event) => {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   handleSubmit = (event) => {
//     alert('A form was submitted: ' + this.state);

//     fetch('https://your-node-server-here.com/api/endpoint', {
//         method: 'POST',
//         // We convert the React state to JSON and send it as the POST body
//         body: JSON.stringify(this.state)
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });

//     event.preventDefault();
// }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }