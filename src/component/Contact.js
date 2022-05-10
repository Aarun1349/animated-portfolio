import React, { useState } from "react";
function Contact() {
  const [data, setData] = useState({
    name:"",
    number:"",
    email:"",
    message:""
  })

  const handleChange=(e)=>{
    e.preventDefault()
    const {name,value} = e.target;
    setData((preVal)=>{
      return{...preVal,
        [name]:value,
      }
    })
  }

  

  const handleSubmit=(e)=>{
    e.preventDefault();
      alert(`Hi my name is ${data.name} you can reach me out on  ${data.number} and message me on ${data.email} and my message to the world and more importantly to myself is not to forget " ${data.message} "`)
      setData({
        name:"",
        number:"",
        email:"",
        message:""
      })

  }
  return (
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
              <label for="nameControl" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameControl"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="May We know your good name? Please" required
              />
            </div>
            <div className="mb-3">
              <label for="contactControl" className="form-label">
                Your Contact Info
              </label>
              <input
                type="number"
                className="form-control"
                id="contactControl"
                name="number"
                value={data.number}
                onChange={handleChange}
                placeholder="How can we reach out to you?" required
              />
            </div>
            <div className="mb-3">
              <label for="emailControl" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailControl"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="What If we have something to share?" required
              />
            </div>
            <div className="mb-3">
              <label for="messageControl" className="form-label">
                Your words are precious to us:
              </label>
              <textarea
                className="form-control"
                id="messageControl"
                rows="3"
                name="message"
                value={data.message}
                onChange={handleChange} required
              ></textarea>
            </div>
            <div  align ="center" className="mb-3">
            <button  className="my-3 btn btn-outline-primary" onClick={(e)=>handleSubmit(e)}>
            Click to submit
          </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
