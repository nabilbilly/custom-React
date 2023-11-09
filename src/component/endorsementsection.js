import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col,Container,Row } from "react-bootstrap";
import Apple from '../images/img/sponsers/apple-svgrepo-com.svg';
import Behance from '../images/img/sponsers/behance-svgrepo-com.svg';
import Dribbble from '../images/img/sponsers/dribbble-svgrepo-com.svg';
import Dropbox from '../images/img/sponsers/dropbox-svgrepo-com (1).svg';
import Digg from '../images/img/sponsers/digg-svgrepo-com1.svg';
import Github from '../images/img/sponsers/github-svgrepo-com (2).svg';
import Lastfm from '../images/img/sponsers/lastfm-svgrepo-com.svg';
import Pinterest from '../images/img/sponsers/pinterest-svgrepo-com.svg';
import Reactt from '../images/img/sponsers/reactjs-svgrepo-com.svg';
import Airtable from '../images/img/sponsers/airtable-svgrepo-com.svg';
import Vs from '../images/img/sponsers/vscode-insiders-svgrepo-com (1).svg';



function Endorse() {
    // When screen gets larger or smaller the item display is shown here 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <> 
            <section className="endorse" id="endorse">
                <Container>
                    <Row>
                        <Col >
                            <div className="endorse-feild">
                                <h5>Endorsed by the world's foremost organizations</h5>
                                <br></br>
                                <Carousel responsive={responsive} infinite={true}>
                                    <div className="item">
                                        <img src={Airtable} alt="Apple"></img>
                                        <h4>Airtable</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Pinterest} alt="Apple"></img>
                                        <h4>Pinterest</h4>
                                    </div>
                                     <div className="item">
                                        <img src={Apple} alt="Apple"></img>
                                        <h4>Apple</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Reactt} alt="Apple"></img>
                                        <h4>React</h4>
                                    </div>
                                   
                                    <div className="item">
                                        <img src={Behance} alt="Apple"></img>
                                        <h4>Behance</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Github} alt="Apple"></img>
                                        <h4>Github</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Digg} alt="Apple"></img>
                                        <h4>Digg</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Dribbble} alt="Apple"></img>
                                        <h4>Dribbble</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Dropbox} alt="Apple"></img>
                                        <h4>Dropbox</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Vs} alt="Apple"></img>
                                        <h4>VS Code</h4>
                                    </div>
                                    <div className="item">
                                        <img src={Lastfm} alt="Apple"></img>
                                        <h4>Lastfm</h4>
                                    </div>
                            </Carousel>
                            </div> 
                        </Col>
                    </Row> 
                </Container>
            </section>   
       </>
    ) 
}
export default Endorse




// Section  
//        Contianer
//                 Row
//                    Col