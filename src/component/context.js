// import React from "react";
// import { useState,useEffect } from "react";
import React, { useState,useEffect }  from 'react';
import { Row,Container,Col } from "react-bootstrap";
import Headerimage from '../images/img/header-img.svg';



function Context() {
    const[loopNum,SetLoopNum]=useState(0);                                                                        // This state deals with loop and iteration and  will indicat the index of the string as to which word is currently displayed
    const[isDelating,SetIsDeleting]=useState(false);                                                              // This state detect if a word is deleted or not
    const toRotate = ["Find Answers to Errors","Share Your Experience","Help Jr Dev's","join Open conversations"]; // list of words that we will be displaying 
    const[text,setText]=useState("");                                                                              // this state will locate the potion of the word(text) that is been displayed.
    const[ Delta,SetDelta] = useState(300 - Math.random() * 100);                                                 // The time inteval between each words
    const period = 1000;                                                                                          // indicate how much time between one letter is been typed out as example 'dev' d comes followed by e in 2s folowed by v in the next two seconds.

    //UesEffect is responsible or typing or deleting 
    useEffect(() =>{
        let ticker = setInterval(() => {
            loopTextEffect();
        },Delta)

        return () => {
            clearInterval(ticker)
        };

    },[text])

    const loopTextEffect = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateOfText = isDelating ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updateOfText);

        if (isDelating){
            SetDelta(prevDelta => prevDelta /2)
        }


        if (!isDelating && updateOfText === fullText){
            SetIsDeleting(true);
            SetDelta(period);
        }

       else if (isDelating && updateOfText === ''){
            SetIsDeleting(false);
            SetLoopNum(loopNum + 1);
            SetDelta(500);

        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> We Welcome your Errors</span>
                        <h1>{" Hi! Let's build from here "} <br></br> <span className="wrap">{text} </span></h1>
                        <p>Our platform,fosters knowledge sharing and collaboration through questions, expertise sharing, and learning opportunities...</p>
                        <br></br><br></br>
                        <button className="button" onClick={() => (console.log('connect'))}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Create&nbsp;Post</span>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <img src={Headerimage} alt="header img"></img>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )

}

export default Context;