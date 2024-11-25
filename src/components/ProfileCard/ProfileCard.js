import React, { useState } from 'react';
import tim from '../Assets/images/tim.png';
import verify from '../Assets/images/verified.svg';
import { Form, Image } from 'react-bootstrap';
import microsoft from '../Assets/images/microsoft.svg';
import location from '../Assets/images/location.svg';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import ai from '../Assets/images/ai.svg';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import './ProfileCard.css'
const ProfileCard = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text: (
        <>
          <p className="bold-text">Hi there 👋<br />
            I am Selva Prakash, Operations Manager at Microsoft Corporation.</p>
          <p>
            I struggle to manage my DMs over LinkedIn/Instagram and have created this channel to connect with people who want to get in touch.</p>
          <p>
            I am building 'The 1% Club' and always looking for super smart, hard-working, hungry people (Gen Z included) to join our team. If you are excited to solve for India's financial literacy, I can't wait to hear from you.</p>
          <p>If you wish to discuss a brand deal, share some details about your brand and I'll respond if there's a fit. Please avoid reaching out to me for college-events since I've stopped doing that a while back.</p>
        </>
      ),
      sender: 'Tim Cook',
      isVerified: true,
    },
  ]);

  const [messageCategory, setMessageCategory] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLinkedIn, setIsLinkedIn] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageCategoryChange = (e) => {
    setMessageCategory(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'You', isBold: false }]);
      setMessage('');
      setIsMessageSent(true);
    }
  };

  const handleAutoGenerateMessage = () => {
    setMessage('This is an auto-generated message.');
  };

  const handleEditMessage = () => {
    setIsMessageSent(false);
    setMessage(messages[messages.length - 1].text);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleLinkedInToggle = () => {
    setIsLinkedIn(!isLinkedIn);
  };

  return (
    <div className='main-container'>
      <Button variant="outlined" className="back-home-btn action-buttons">
        <ArrowBackIcon className="arrow-icon" /> Back Home
      </Button>
      <Button className="share-profile-btn action-buttons"><ShareIcon /> Share Profile</Button>
      <div className='info-section'>
        <p> Send Tim a Priority Message <SmsFailedIcon className='info-icon' /></p>
      </div>
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-details">
            <img src={tim} alt="Tim Cook" className="profile-image" />
            <h2>
              Tim Cook{' '}
              {messages[0].isVerified && (
                <Image src={verify} className="verify-icon" alt="Verified" />
              )}
            </h2>
            <p className="role">Operations Manager</p>
            <p className="company"><Image src={microsoft} className='company-logos' alt='Company' /> Microsoft Corporation</p>
            <p className="location"><Image src={location} className='location-logo' alt='Location Name' /> California</p>
            <hr style={{ margin: "20px 0" }} />
            <div className="btn-assistant">
              <Button className="assistant-btn">
                <MicIcon className='icon' />
              </Button>
              <span>Speak with my Assistant</span>
            </div>
          </div>
          <div className="claim-profile-container">
            <Button variant="contained" className="claim-profile-btn">Claim Profile</Button>
          </div>
        </div>

        <div className="profile-main">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="message-footer">
            {isMessageSent ? (
              <div className="sent-message">
                <div className="sent-message-content">
                  <div>{messages[messages.length - 1].text}</div>
                  <Button onClick={handleEditMessage} className="edit-message-btn">
                    <EditIcon />
                  </Button>
                </div>
                <div className="email-or-linkedin">
                  {isLinkedIn ? (
                    <Button variant="contained">Continue with LinkedIn</Button>
                  ) : (
                    <>
                      <input
                        type="email"
                        value={userEmail}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        className="email-input"
                      />
                      <Button variant="contained" onClick={handleLinkedInToggle}>Continue with LinkedIn</Button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="message-input-wrapper">
                <div className="message-input-btns">
                  <Form.Group className="custom-select">
                    <div className="select-with-caret">
                      <Form.Select
                        value={messageCategory}
                        onChange={handleMessageCategoryChange}
                        className="custom-select-input"
                      >
                        <option value="Category">Message Category <span className='star-icon'>*</span></option>
                        <option value="General">General</option>
                        <option value="Inquiry">Inquiry</option>
                        <option value="Support">Support</option>
                      </Form.Select>
                      <span className="caret-icon"></span>
                    </div>
                  </Form.Group>
                  <Button
                    variant="contained"
                    className="auto-generate-btn"
                    onClick={handleAutoGenerateMessage}
                  >
                    <Image src={ai} className="ai-icon" alt="AI-Icon" />
                    Auto Generate
                  </Button>
                </div>

                <textarea
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type message here"
                  className="message-input"
                />
                <div className="message-length">
                  <span>{message.length}/500</span>
                </div>
              </div>
            )}
            {!isMessageSent && (
              <Button onClick={handleSendMessage} disabled className="send-button">Send</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
