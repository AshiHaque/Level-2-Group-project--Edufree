import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="footer">
                    <div class="container-fluid">
                        <div className="row">

                         
                            <div className="col">
                                <h5></h5>

                            </div>

                            <div className="col">
                                <h5></h5>

                            </div>

                            <div className="col">
                                <h5></h5>

                            </div>

                            <div className="col">
                                <h5></h5>

                            </div>

                        </div>

                        

                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} EDUFREE |    All rights reserved    
          </p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;