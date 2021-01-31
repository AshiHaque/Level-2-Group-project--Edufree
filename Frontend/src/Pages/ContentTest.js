import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboard from "../images/clipboard.png";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";

class Content extends React.Component {
    state = {
        file: '',
        error: '',
        msg: '',
        fileName:''
      }
    
      uploadFile = (event) => {
        event.preventDefault();
        this.setState({error: '', msg: ''});
    
        if(!this.state.file) {
          this.setState({error: 'Please upload a file.'})
          return;
        }
    
        if(this.state.file.size >= 2000000) {
          this.setState({error: 'File size exceeds limit of 2MB.'})
          return;
        }
    
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('name', this.state.file.name);
    
        fetch('http://localhost:8080/uploadFile', {
          method: 'POST',
          body: data
        }).then(response => {
          this.setState({error: '', msg: 'Sucessfully uploaded file'});
        }).catch(err => {
          console.error('Error:', err)
        });
    
      }

      handleChangeFileName = event => {
        this.setState({ fileName: event.target.value });
      }
    
      downloadRandomImage = () => {
        fetch('http://localhost:8080/downloadFile/'+this.state.fileName)
          .then(response => {
            response.blob().then(blob => {
              let url = window.URL.createObjectURL(blob);
	            let a = document.createElement('a');
            	a.href = url;
            	a.download = this.state.fileName;
	            a.click();
            });
        });
      }
    
      onFileChange = (event) => {
        this.setState({
          file: event.target.files[0]
        });
      }

  render() {
    return (
        <div>
        <div className>
          <h3>Upload a file</h3>
          <h4 style={{color: 'red'}}>{this.state.error}</h4>
          <h4 style={{color: 'green'}}>{this.state.msg}</h4>
          <input onChange={this.onFileChange} type="file"></input>
          <button onClick={this.uploadFile}>Upload</button>   
        </div>
        <div className="App-intro">
          <h3>Download file</h3>
          <h2>Type the file thet you want to download</h2>
          <input type="text" id="fileName" className="form-control" placeholder="File name" onChange={this.handleChangeFileName}/>
          <button onClick={this.downloadRandomImage}>Download</button>
        </div>
      </div>
    );
  }
}
export default Content;
