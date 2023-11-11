import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Verify from '../images/img/sponsers/store-verified-shopping-svgrepo-com.svg'
import Cloud from '../images/img/sponsers/cloud-computing-svgrepo-com.svg'
import Microsoft from '../images/img/sponsers/microsoft-svgrepo-com.svg'
import Progrmming from '../images/img/sponsers/programming-svgrepo-com.svg'
import Security from '../images/img/sponsers/security-open-access-unlock-svgrepo-com.svg'
import Database from '../images/img/sponsers/database-svgrepo-com.svg'
import Networking from '../images/img/sponsers/network-share-svgrepo-com.svg'
import image2 from '../images/img/cs15.webp'
import image3 from '../images/img/cs3.webp'
import image4 from '../images/img/cs9.png'
import image5 from '../images/img/cs11.jpg'
import image6 from '../images/img/cs12.jpg'
import image7 from '../images/img/cs14.webp'

// import AI from '../images/img/sponsers/robots-robot-svgrepo-com.svg'

export default function expect (){

    return(
        <>
            <section className="choice-field">
                <Container>
                    <Row>
                        <Col xs={12} md={6} xl={5}>
                            <div  className="title">
                                <h2> <span> People Powered</span> Problems Solving</h2> <br></br>
                                <h6> Get personalized and specific answers to your toughest question and fix your bugs by connection with real experts avialable in your field. </h6>
                            </div>
                            <br></br>
                            <div className="field">
                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"> <img src={Cloud} alt="verify" className="field-image"></img> Cloud &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"><img src={Security} alt="verify" className="field-image"></img> Security &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"><img src={Progrmming} alt="verify" className="field-image"></img> Programming</span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"><img src={Microsoft} alt="verify" className="field-image"></img> Microsoft 360</span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"><img src={Networking} alt="verify" className="field-image"></img> Networking&nbsp; &nbsp; </span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"><img src={Database} alt="verify" className="field-image"></img> Database &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
                                    </span>
                                </button>

                                {/* <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text"> <img src={AI} alt="verify" className="field-image"></img> AI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                    </span>
                                </button>*/}
                            </div> 

                        </Col>

                        <Col xs={12} md={6} xl={7}>
                            <div className="expert-frame">
                                <div class="task" draggable="true">
                                    <div className="expert-name">
                                        <h6>Sophie Wilson<br></br>Full-stack developer /  Security analyst</h6>
                                        <img src={image2} alt="dev-0" className="" />
                                    </div><br></br>

                                    <div className="expert-btn">
                                        <button >
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> MERN Stack developer</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Mobile application developer</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Information security analyst</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="task" draggable="true">
                                    <div className="expert-name">
                                            <h6>Niklaus Wirth<br></br>Software engineer / Software developer </h6>
                                            <img src={image3} alt="dev-0" className="" />
                                    </div><br></br>
                                    <div className="expert-btn">
                                        <button >
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img>Software tester </span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Network architect expert &nbsp; &nbsp;</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Full-stack developer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                                {/* **********************************Expert two 2********************************************************************************************************************** */}
                           
                            <div className="expert-frame2">
                                <div class="task" draggable="true">
                                    <div className="expert-name">
                                        <h6>Michael Widenius<br></br>Information technology specialist </h6>
                                        <img src={image7} alt="dev-0" className="" />
                                    </div><br></br>

                                    <div className="expert-btn">
                                        <button >
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img>Chief information security officer </span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Cloud computing engineer</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Computer science professor</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="task" draggable="true">
                                    <div className="expert-name">
                                            <h6>Carl Sassenrath<br></br> Mobile application designer or developer</h6>
                                            <img src={image4} alt="dev-0" className="" />
                                    </div><br></br>
                                    <div className="expert-btn">
                                        <button >
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img>Senior Software developer</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img>User interface designer </span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img>Engineering manager </span>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* **********************************Expert two 2********************************************************************************************************************** */}
                           
                            <div className="expert-frame3">
                                <div class="task" draggable="true">
                                    <div className="expert-name">
                                        <h6>Jason Fried<br></br>AI and machine learning engineer </h6>
                                        <img src={image5} alt="dev-0" className="" />
                                    </div><br></br>

                                    <div className="expert-btn">
                                        <button >
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Computer science professor</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Artificial intelligence Expect</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> (R&D) scientist </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="task" draggable="true">
                                    <div className="expert-name">
                                            <h6>Rasmus Lerdorf<br></br>Computer scientist & Data scientist</h6>
                                            <img src={image6} alt="dev-0" className="" />
                                    </div><br></br>
                                    <div className="expert-btn">
                                        <button >
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Network architect</span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img>Database administrator </span>
                                        </button>
                                        <button>
                                            <span class="tag"><img src={Verify} alt="verify" className="verify"></img> Microsoft 360 Expect </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}