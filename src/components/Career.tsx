import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development Learner</h4>
                <h5>Self-Learning & Practice Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built personal and demo websites. Learned HTML, CSS, JavaScript, React, and modern web design while developing UI/UX design skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Content Creator</h4>
                <h5>Independent AI Content Creator</h5>
              </div>
              <h3>2024–2025</h3>
            </div>
            <p>
              Created AI-generated videos and social media content. Managed content strategy, audience engagement, and edited videos for YouTube Shorts and Instagram Reels.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Designed and developed responsive websites for clients, including portfolio, business, and landing pages. Worked with AI tools to speed up design and content creation while handling client revisions and project delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
