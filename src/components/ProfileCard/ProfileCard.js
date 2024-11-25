import React, { useState } from 'react';
import tim from '../Assets/images/tim.png';
import verify from '../Assets/images/verified.svg';
import { Form, Image } from 'react-bootstrap';
import microsoft from '../Assets/images/microsoft.svg';
import location from '../Assets/images/location.svg';
import MicIcon from '@mui/icons-material/Mic';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ai from '../Assets/images/ai.svg';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import './ProfileCard.css'
import { SelectChangeEvent } from '@mui/material/Select';
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
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      <div className='btn-section'>
        <Button variant="outlined" className="back-home-btn action-buttons">
          <ArrowBackIcon className="arrow-icon" /> Back Home
        </Button>
        <Button className="share-profile-btn action-buttons"><ShareIcon /> Share Profile</Button>
        {/* <div className='info-section'> */}
          <p className='info-section'> Send Tim a Priority Message <SmsFailedIcon className='info-icon' /></p>
        {/* </div> */}
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
            <hr style={{ marginBottom: "20px" }} />
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
                  <FormControl className='select-box'>
                    <InputLabel id="demo-simple-select-label">Message Category <span className='star-icon'>*</span></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      className="custom-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Business Enquiry</MenuItem>
                      <MenuItem value={20}>Work Opportunity</MenuItem>
                      <MenuItem value={30}>Investment & Funding Ask</MenuItem>
                      <MenuItem value={30}>Advisor Opportunity</MenuItem>
                    </Select>
                  </FormControl>
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
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 500) {
                      handleMessageChange(e);
                      const element = e.target;
                      element.style.height = "90px";
                      element.style.height = Math.min(element.scrollHeight, 160) + "px";
                    }
                  }}
                  placeholder="Type message"
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
