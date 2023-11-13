import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Verify from '../images/img/sponsers/store-verified-shopping-svgrepo-com.svg'
import Cloud from '../images/img/sponsers/cloud-computing-svgrepo-com.svg'
import Microsoft from '../images/img/sponsers/microsoft-svgrepo-com.svg'
import Progrmming from '../images/img/sponsers/programming-svgrepo-com.svg'
import Security from '../images/img/sponsers/security-open-access-unlock-svgrepo-com.svg'
import Database from '../images/img/sponsers/database-svgrepo-com.svg'
import Networking from '../images/img/sponsers/network-share-svgrepo-com.svg'

import { Data, Data2, Data3 } from './ExpertframeData';

// import AI from '../images/img/sponsers/robots-robot-svgrepo-com.svg'

export default function List(){
    
    // Col 2 Return value and this represent the Expert Frame  section
    const ListItems = Data.map((data) => (
        <div className="task" draggable="true" >
          <div className="expert-name" key={data.id}>
                <h6>{data.name}<br></br>{data.career}</h6>
                <img src={data.image} alt="dev-0" className="" />
          </div><br></br>
    
          <div className="expert-btn">
                <button>
                <span className="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment1}</span>
                </button>
                <button>
                <span className="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment2}</span>
                </button>
                <button>
                <span className="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment3}</span>
                </button>
           </div>
        </div>
      ));

         // Col 2 Return value and this represent the Expert Frame2  section
    const ExpertFrame2 = Data2.map((data) => (
        <div class="task" draggable="true" key={data.id}>
            <div className="expert-name">
                <h6>{data.name}<br></br>{data.career} </h6>
                <img src={data.image} alt="dev-0" className="" />
            </div><br></br>

            <div className="expert-btn">
                <button >
                    <span class="tag"><img src={Verify} alt="verify" className="verify"></img>{data.accomplishment1}</span>
                </button>
                <button>
                    <span class="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment2}</span>
                </button>
                <button>
                    <span class="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment3}</span>
                </button>
            </div>
       </div>
    ));


     // Col 2 Return value and this represent the Expert Frame3  section
    const ExpertFrame3 = Data3.map((data)=> (
        <div class="task" draggable="true"  key={data.id}>
            <div className="expert-name">
                <h6>{data.name}<br></br>{data.career}</h6>
                <img src={data.image} alt="dev-0" className="" />
            </div><br></br>

            <div className="expert-btn">
                <button >
                    <span class="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment1}</span>
                </button>
                <button>
                    <span class="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment2}</span>
                </button>
                <button>
                    <span class="tag"><img src={Verify} alt="verify" className="verify"></img> {data.accomplishment3} </span>
                </button>
            </div>
        </div>

    ));

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
                              {ListItems}
                            </div>
                                {/* **********************************Expert two 2********************************************************************************************************************** */}
                           
                            <div className="expert-frame2">
                              {ExpertFrame2}
                            </div>


                            {/* **********************************Expert two 2********************************************************************************************************************** */}
                           
                            <div className="expert-frame3">
                              {ExpertFrame3}
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}