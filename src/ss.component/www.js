import React, {Component} from 'react'

import {Button, CardBody} from "reactstrap";

export default class Aaa extends Component{
    render() {
        return(
            <div style={{marginTop: 10 , height: '600px', position: 'right'}}><pre><br/><br/><br/>
                <label>                                              </label><Button><a href ="https://addlocation12.netlify.com/">Locations </a>  </Button>
                <label>                                              </label><Button><a href ="https://addhotel.netlify.com/">Hotels </a>  </Button><br/><br/><br/><br/>
                <label>                                              </label><Button><a href ="https://addtransport12.netlify.com/">Transport </a>  </Button>
                <label>                                              </label><Button><a href ="https://addpackage12.netlify.com/">Packages </a>  </Button></pre>
            </div>
        )
    }
}