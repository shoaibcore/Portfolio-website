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
                <h4>B.Tech in Computer Engineering</h4>
                <h5>Presidency University</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>
            <p>
              Focusing on core engineering concepts including Data Structures & Algorithms, Database Management Systems, Operating Systems, and Computer Networks. Building a strong foundation in backend engineering and IoT integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EduNexus Academic Platform</h4>
                <h5>Modular Academic Engagement Platform</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered a role-based academic portal using MongoDB, Express.js, React, and Node.js. Built secure backend services for authentication, user interactions, events, and dynamic routing with Postman-tested REST APIs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>RFID Laundry Management System</h4>
                <h5>IoT Linen Tracking System</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a contactless linen tracking system using ESP32, RFID (RC522), and Firebase Realtime Database. Created a Flask dashboard with live compliance alerts, improving tracking accuracy by 98% and reducing errors by 80%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
