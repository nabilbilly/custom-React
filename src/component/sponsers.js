import React, { useState, useEffect } from 'react';

const Chat = () => {
  const FirstDevToType = [ " Recently, I started to explore the world of React,I created a new React project using 'npx create-react-app' & it ended up in an Error. <span style='color:red;'>Error Message : ENOENT Error: npm is having trouble finding a directory/npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\your\AppData\Roaming\npm'</span>"];
  const SecondDevToType = ["The error message you’re seeing indicates that npm is having difficulty locating a directory, specifically, C:\Users\billy\appData\Roaming\npm. 1.Verify npm Installation: RUN 'node -v' next RUN 'npm -v' next RU 'npx -v'. install now.  2.Update npm:If you’re using an older version of npm, it’s recommended that you update to the latest version. RUN 'npm install -g npm@latest'"];
  const LastDevToType = [" Check Your Environment Variables: Ensure that your environment variables are correctly set. The PATH environment variable should include the path to npm. doc HERE,  2.Clear npm Cache:Run command :' npm cache clean -f' " ];
  const [text, setText] = useState(["", "", ""]);
  const [delta, setDelta] = useState(50);   // Means time taken to type the next text
 
  useEffect(() => {
    const ticker = setInterval(() => {
      loopTextEffect(0);
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const loopTextEffect = (commentIndex) => {
    if (commentIndex < 3) {
      const i = commentIndex % FirstDevToType.length;
      const fullText = (commentIndex === 0) ? FirstDevToType[i] : (commentIndex === 1) ? SecondDevToType[0] : LastDevToType[0];
      const updatedText = fullText.substring(0, text[commentIndex].length + 1);

      const newText = [...text];
      newText[commentIndex] = updatedText;
      setText(newText);

      if (updatedText === fullText) {
        setTimeout(() => loopTextEffect(commentIndex + 1), 100); // Delay before typing the next text
      }
    }
  };

  useEffect(() => {
    loopTextEffect(0); //Start typing the first text
  }, []);

  return (
    <>
      <div className="container">
          
          <div className='content-header'>
             <div className='headen'> 
               <div class="loader"><span></span></div>
               <h3>How Our Platform Works</h3>
             </div>  
             <div className='headen-content'>
              <div class="vertical-line"></div>
               <h2>Ask questions, sharing answers, and connecting with a vast community of experts. Navigate a wealth of information with ease, tailor your content, and stay up-to-date. Engage with an inclusive community dedicated to fostering collaboration, personal growth, and problem-solving.</h2>
             </div>
         </div>
        <div className="be-comment-block">
          <h1 className="comments-title">Problems </h1>
          <div className="be-comment">
            <div className="be-img-comment">
              <a href="blog-detail-2.html">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="dev-0" className="be-ava-comment" />
              📍
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                <a href="blog-detail-2.html">☑️ Ravi Sah, Dev's Dilemma🏳️‍🌈</a>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o"></i> May 27, 2023 at 3:18am
              </span>
              <p className="be-comment-text" dangerouslySetInnerHTML={{ __html: text[0] }} />
              {/* <p className="be-comment-text">
                {text[0]}
              </p> */}
            </div>
          </div>
          
          <hr></hr><h1 className="comments-title">Contributors 🌐 (2)</h1>
          <div className="be-comment">
            <div className="be-img-comment">
              <a href="blog-detail-2.html">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="dev-1" className="be-ava-comment" />
              📍
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                <a href="blog-detail-2.html">✅ Phoenix, senior Dev 🏁 </a>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o"></i> May 27, 2023 at 3:19am
              </span>
              <p className="be-comment-text">
                 {'waiting...'} {text[1]}
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="be-comment">
            <div className="be-img-comment">
              <a href="blog-detail-2.html">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="dev-2" className="be-ava-comment" />
                📍
              </a>
            </div>
            <div className="be-comment-content">
              <span className="be-comment-name">
                <a href="blog-detail-2.html">✅Küneit ŞUC, senior Dev 🏴‍☠️ </a>
              </span>
              <span className="be-comment-time">
                <i className="fa fa-clock-o"></i> May 27, 2023 at 3:22am
              </span>
              <p className="be-comment-text">  {'waiting...'}
                {text[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;


// Topic  🔖💎🪂🔖