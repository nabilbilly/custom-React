import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Globe from '../images/img/sponsers/globe-svgrepo-com.svg'
import Monitor from '../images/img/sponsers/monitor.svg'
import Leadership from '../images/img/sponsers/trophy-svgrepo-com.svg'
import LevelUp from '../images/img/sponsers/ipo-svgrepo-com.svg'

const boxVariant = {
        visible: { opacity: 1, scale: 1,x:0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, scale: 0,x: -20 ,transition: { duration: 0.6, ease: "easeInOut" }}
      };

export default function Expectation(){
    const control = useAnimation();
    const [ref, inView] = useInView();
    
        useEffect(() => {
          if (inView) {
            control.start("visible");
          } else {
            control.start("hidden");
          }
        }, [control, inView]);


    return(
        <>
            <motion.div className="expectation"  ref={ref} variants={boxVariant} initial="hidden" animate={control}>
                <h4 className="expectations-h4">Explore with benefit as we bring to you all 1,000+ features for free!</h4>
                <div className="expectations">
                    
                    <div className="resource">
                        <ul>
                            <li><img src={Monitor}  alt="" className="resource-img"></img></li>
                            <li><h4>Resource</h4></li><br></br>
                            <li> <h5>Explore  millions of dev's <br></br> tools and resources that will<br></br> save you tomorrow.</h5></li><br></br>
                            <li><h6 id="mix-color">Explore resources</h6></li>
                        </ul>
                    <hr></hr>  
                    </div>
                
                    <div className="resource">
                        <ul>
                            <li> <img src={Globe} alt="" className="resource-img"></img></li>
                            <li><h4>Community</h4></li><br></br>
                            <li><h5>Join or Build your community<br></br> with local networks and global <br></br>technical tracks on our Platform</h5></li><br></br>
                            <li><h6 id="mix-color">Find a community</h6></li>
                        </ul>
                        <hr></hr>  
                    </div>

                    <div className="resource">
                        <ul>
                            <li><img src={Leadership}   alt="" className="resource-img"></img></li>
                            <li><h4>Leadership</h4></li><br></br>
                            <li><h5>Elevate your leadership skills <br></br> as a volunteer,speaker,or<br></br> community lead.</h5></li><br></br>
                            <li><h6 id="mix-color">Get involved</h6></li>
                        </ul>
                        <hr></hr>  
                    </div>

                    <div className="resource">
                        <ul>
                            <li><img src={LevelUp}  alt="" className="resource-img "></img></li>
                            <li><h4>Level Up</h4></li><br></br>
                            <li><h5>level up you  technical skill<br></br> with questions, answers, videos<br></br> tutoral and boostcamp.</h5></li><br></br>
                            <li><h6 id="mix-color">More meetups</h6></li>
                        </ul>
                        <hr></hr>  
                    </div>
                   
                </div>
                 <div className="whereabout">
                    <div className="percentage" >
                        <h3 id="mix-color">18%</h3>
                        <h5>of top Tech Fortune Company use <br></br> This Platform</h5>
                    </div>

                    <div className="percentage" >
                        <h3 id="mix-color">6.3 million</h3>
                        <h5>questions answered by Our Contributors <br></br> since 2000</h5>
                    </div>

                    <div className="percentage" >
                        <h3 id="mix-color">500+</h3>
                        <h5>Different technology topic areas with<br></br>expert contributors</h5>
                    </div>

                 </div>
            </motion.div>
        </>
    )
}