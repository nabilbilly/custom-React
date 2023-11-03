import React, { useState, useEffect } from 'react';

const App = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Pellentesque gravida tristique ultrices. Sed blandit varius mauris, vel volutpat urna hendrerit id. Curabitur rutrum dolor gravida turpis tristique efficitur.vel volutpat urna hendrerit id. Curabitur rutrum dolor gravida turpis tristique efficitur."
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      loopTextEffect();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const loopTextEffect = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length + 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
        <div class="container">
            <div class="be-comment-block">
                <h1 class="comments-title">Comments (3)</h1>
                <div class="be-comment">
                    <div class="be-img-comment">
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt class="be-ava-comment"/>
                        </a>
                    </div>
                    <div class="be-comment-content">
                        <span class="be-comment-name">
                            <a href="blog-detail-2.html">Ravi Sah</a>
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>
                            May 27, 2015 at 3:14am
                        </span>
                        <p class="be-comment-text">
                            {text}
                        </p>
                    </div>
                </div>
                <div class="be-comment">
                    <div class="be-img-comment">
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt class="be-ava-comment"/>
                        </a>
                    </div>
                    <div class="be-comment-content">
                        <span class="be-comment-name">
                            <a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>
                            May 27, 2015 at 3:14am
                        </span>
                        <p class="be-comment-text">
                             Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
                        </p>
                    </div>
                </div>
                <div class="be-comment">
                    <div class="be-img-comment">
                        <a href="blog-detail-2.html">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt class="be-ava-comment"/>
                        </a>
                    </div>
                    <div class="be-comment-content">
                        <span class="be-comment-name">
                            <a href="blog-detail-2.html">Cüneyt ŞEN</a>
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>
                            May 27, 2015 at 3:14am
                        </span>
                        <p class="be-comment-text">
                            Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default App;
