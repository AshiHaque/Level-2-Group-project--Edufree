import React from "react";
import img from "../images/photo.jpeg";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class UserProfile extends React.Component {

    



  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="small-12 medium-2 large-2 columns">
            <div className="circle">
              <img className="profile-pic" src={img}></img>
            </div>
            <div className="p-image">
              <button className="upload-button">Upload Image</button>

              {/* <input className="file-upload" type="file" accept="image/*"/> */}
            </div>
          </div>
        </div>

        <div className="myForm">
          <Form>
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Change Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Change Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <span> </span>
            <Button variant="danger" type="submit">
              Log out
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default UserProfile;
