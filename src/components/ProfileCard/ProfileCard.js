import React, { useEffect, useRef, useState } from 'react';
import verify from '../Assets/images/verified.svg';
import { Image } from 'react-bootstrap';
import microsoft from '../Assets/images/microsoft.svg';
import location from '../Assets/images/location.svg';
import MicIcon from '@mui/icons-material/Mic';
import ai from '../Assets/images/ai.svg';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import './ProfileCard.css'
import tushar from '../Assets/images/tushar.jpg'
import caret from '../Assets/images/icon.svg'
import caretOpen from '../Assets/images/icon-open.svg'
import GoogleIcon from '@mui/icons-material/Google';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { InputAdornment, TextField, Button, IconButton } from '@mui/material';

const ProfileCard = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text: (
        <>
          <p className="bold-text">Hi there 👋<br />
            I am Tushar Chandorkar Operations Manager at Microsoft Corporation.</p>
          <p>
            I struggle to manage my DMs over LinkedIn/Instagram and have created this channel to connect with people who want to get in touch.</p>
          <p>
            I am building 'The 1% Club' and always looking for super smart, hard-working, hungry people (Gen Z included) to join our team. If you are excited to solve for India's financial literacy, I can't wait to hear from you.</p>
          <p>If you wish to discuss a brand deal, share some details about your brand and I'll respond if there's a fit. Please avoid reaching out to me for college-events since I've stopped doing that a while back.</p>
        </>
      ),
      sender: 'Tushar Chandorkar',
      isVerified: true,
    },
  ]);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLinkedIn, setIsLinkedIn] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
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

  const options = [
    { value: '', label: 'Message Category' },
    { value: 'Business Enquiry', label: 'Business Enquiry' },
    { value: 'Work Opportunity', label: 'Work Opportunity' },
    { value: 'Investment & Funding Ask', label: 'Investment & Funding' },
    { value: 'Advisor Opportunity', label: 'Advisor Opportunity' },
  ];

  const handleSelect = (value, label) => {
    setSelectedValue(value);
    setIsOpen(false);

    if (dropdownRef.current) {
      dropdownRef.current.style.width = `${label.length * 10}px`;
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleGoogleLogin = (e) => {
  };

  const handleEmailContinue = (e) => {
  };

  return (
    <div className='main-container'>
      <div className='btn-section'>
        <Button variant="outlined" className="back-home-btn action-buttons">
          <ArrowBackIcon className="arrow-icon" /> Back Home
        </Button>
        <p className='info-section'> Send Tushar Chandorkar a Priority Message <SmsFailedIcon className='info-icon' /></p>
        <Button className="share-profile-btn action-buttons"><ShareIcon /> Share Profile</Button>
        {/* <div className='info-section'> */}
        {/* </div> */}
      </div>
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-details">
            <img src={tushar} alt="Tushar Chandorkar" className="profile-image" />
            <h2>
              Tushar Chandorkar{' '}
              {messages[0].isVerified && (
                <Image src={verify} className="verify-icon" alt="Verified" />
              )}
            </h2>
            <p className="role">Operations Manager</p>
            <p className="company"><Image src={microsoft} className='company-logos' alt='Company' /> Microsoft Corporation</p>
            <p className="location"><Image src={location} className='location-logo' alt='Location Name' /> California</p>
            <hr style={{ marginBottom: "20px", marginTop: "0px !important" }} />
            <div className="btn-assistant">
              <Button className="assistant-btn">
                <MicIcon className='icon' />
              </Button>
              <span>Speak with my Assistant</span>
            </div>
            <hr style={{ marginBottom: "20px", marginTop: "0px !important" }} />
          </div>
          <div className="claim-profile-container">
            <Button variant="text" color='error' sx={{ borderRadius: '999px' }}>Delete</Button>
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
                  <div className='edit-message'>{messages[messages.length - 1].text.slice(0, 40)}{messages[messages.length - 1].text.length > 100 && '...'}</div>
                  <IconButton aria-label="edit" onClick={handleEditMessage} sx={{ borderRadius: '999px' }} className="edit-message-btn">
                    <EditIcon />
                  </IconButton>
                </div>
                <hr />
                <div className="email-or-linkedin">
                  <div className='email-heading'>
                    <h4>Register to Access ContactMe</h4>
                    <p>You’ll be notified here when Tim replies</p>
                  </div>
                  {isLinkedIn ? (
                    <>
                      <hr />
                      <Button variant="contained">Continue with LinkedIn</Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        startIcon={<GoogleIcon />}
                        onClick={handleGoogleLogin}
                        className="google-login-btn"
                      >
                        Continue with Google
                      </Button>
                      <div className="or-separator">
                        <span>OR</span>
                      </div>
                      <div className="email-input-wrapper">
                        <TextField
                          fullWidth
                          label="Continue with mail"
                          id="email-field"
                          value={userEmail}
                          onChange={handleEmailChange}
                          sx={{
                            m: 1,
                            width: '100%',
                            marginBottom: '50px',
                            backgroundColor: '#F3EDF7',
                            '& .MuiFilledInput-root': {
                              borderBottom: '2px solid #49454F'
                            },
                            '& .MuiInputAdornment-root': {
                              color: '#49454F',
                            },
                            '& .MuiInputBase-input::placeholder': {
                              color: '##1D1B20',
                            },
                          }}
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment position="end">
                                  <ArrowForwardIcon />
                                </InputAdornment>
                              ),
                            },
                          }}
                          variant="filled"
                        />
                      </div>
                    </>
                  )}

                </div>
              </div>
            ) : (
              <div className="message-input-wrapper">
                <div className="message-input-btns">
                  <div className="dropdown-container">
                    <button
                      ref={buttonRef}
                      onClick={toggleDropdown}
                      className="dropdown-button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span className="dropdown-text">
                        {options.find((opt) => opt.value === selectedValue)?.label || options[1].label}
                      </span>
                      <span className="dropdown-icon">
                        {isOpen ? (
                          <Image src={caretOpen} className="caret-icon" />
                        ) : (
                          <Image src={caret} className="caret-icon" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div ref={dropdownRef} className="dropdown-content">
                        {options
                          .filter((option) => option.value)
                          .map((option) => (
                            <div
                              key={option.value}
                              onClick={() => handleSelect(option.value, option.label)}
                              className={`dropdown-item ${selectedValue === option.value ? 'active' : ''}`}
                            >
                              {option.label}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="contained"
                    className="auto-generate-btn"
                    onClick={handleAutoGenerateMessage}
                  >
                    <Image src={ai} className="ai-icon" alt="AI-Icon" />
                    Auto Generate
                  </Button>
                </div>
                <div className='text-wrapper' ref={(el) => {
                  if (el) {
                    const textarea = el.querySelector("textarea");
                    if (textarea) {
                      const newHeight = Math.min(Math.max(textarea.scrollHeight, 90), 160);
                      el.style.height = `${newHeight}px`;
                    }
                  }
                }}>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 500) {
                        handleMessageChange(e);
                        const element = e.target;
                        const newHeight = Math.min(Math.max(element.scrollHeight, 90), 160);
                        const parent = element.parentNode;
                        parent.style.height = `${newHeight}px`;
                      }
                    }}
                    placeholder="Type message"
                    className="message-input"
                  />
                </div>
                <div className="message-length">
                  <span>{message.length}/500</span>
                </div>
              </div>
            )}
            {!isMessageSent && (
              <Button onClick={handleSendMessage} className="send-button">Send</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
