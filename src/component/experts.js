import React from "react";
import { Container,Row,Col } from "react-bootstrap";


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
                                        <span class="button_text"> Cloud &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text">Security &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text">Programming</span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text">Microsoft 360</span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text">Networking &nbsp; &nbsp; </span>
                                    </span>
                                </button>

                                <button class="button-field">
                                    <span class="button_lg">
                                        <span class="button_text">Database &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
                                    </span>
                                </button>
                            </div>

                        </Col>

                        <Col xs={12} md={6} xl={7}>
                            <div className="expert-frame">
                                <div class="task" draggable="true">
                                    <div class="tags">
                                        <span class="tag">Draggable</span>
                                        <button class="options">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
                                        </button>
                                    </div>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                                </div>
                                <div class="task" draggable="true">
                                    <div class="tags">
                                        <span class="tag">Draggable</span>
                                        <button class="options">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
                                        </button>
                                    </div>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                                </div>
                            </div>

                            <div className="expert-frame2">
                               <div class="task" draggable="true">
                                    <div class="tags">
                                        <span class="tag">Draggable</span>
                                        <button class="options">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
                                        </button>
                                    </div>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                                </div>
                                <div class="task" draggable="true">
                                    <div class="tags">
                                        <span class="tag">Draggable</span>
                                        <button class="options">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
                                        </button>
                                    </div>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                                </div>

                            </div>

                            <div className="expert-frame3">
                               <div class="task" draggable="true">
                                    <div class="tags">
                                        <span class="tag">Draggable</span>
                                        <button class="options">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
                                        </button>
                                    </div>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                                </div>
                                <div class="task" draggable="true">
                                    <div class="tags">
                                        <span class="tag">Draggable</span>
                                        <button class="options">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
                                        </button>
                                    </div>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown </p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}