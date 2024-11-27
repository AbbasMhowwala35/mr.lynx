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
import tushar from '../Assets/images/tushar.jpg'
import caret from '../Assets/images/icon.svg'
import caretOpen from '../Assets/images/icon-open.svg'
import GoogleIcon from '@mui/icons-material/Google';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { InputAdornment, TextField, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import './ProfileCard.css'
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
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(Array(4).fill(''));
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && !isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (newOtp.every((digit) => digit.length === 1)) {
        handleOtpSubmit(newOtp.join(''));
        setStep(3)
      } else {
        if (index < otp.length - 1 && value !== '') {
          const nextInput = document.querySelectorAll('.otp-input')[index + 1];
          nextInput.focus();
        }
      }
    }
  };

  const handleOtpSubmit = (otpValue) => {
    console.log("OTP Submitted: ", otpValue);
  };

  const handleLinkedinSubmit = (e) => {
    setLinkedinUrl(e.target.value);
    setStep(4)
  };

  const handleConfirm = (isConfirmed) => {
    console.log("Confirmation action");
    if (isConfirmed) {
      setStep(5);
    }
  };

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
    setStep(3)
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
    setStep(2)
  };

  const handleEditEmail = (e) => {
    alert('Helo')
  }

  const handleEditLinkedin = (e) => {
    alert('Helo')
  }
  return (
    <div className='main-container'>
      <div className='btn-section'>
        <Button variant="outlined" className="back-home-btn action-buttons">
          <ArrowBackIcon className="arrow-icon" /> Back Home
        </Button>
        <p className='info-section'> Send Tushar Chandorkar a Priority Message <SmsFailedIcon className='info-icon' /></p>
        <Button className="share-profile-btn action-buttons"><ShareIcon /> Share Profile</Button>
      </div>
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-details">
            <img src={tushar} alt="Tushar Chandorkar" className="profile-image" />
            <h2>
              Tushar Chandorkar
              {messages[0].isVerified && (
                <Image src={verify} className="verify-icon" alt="Verified" />
              )}
            </h2>
            <p className="role">Operations Manager</p>
            <p className="company"><Image src={microsoft} className='company-logos' alt='Company' /> Microsoft Corporation</p>
            <p className="location"><Image src={location} className='location-logo' alt='Location Name' /> California</p>
            <hr />
            <div className="btn-assistant">
              <Button className="assistant-btn">
                <MicIcon className='icon' />
              </Button>
              <span>Speak with my Assistant</span>
            </div>
            <hr />
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
          <hr />
            {isMessageSent ? (
              <div className="sent-message">
                <div className="sent-message-content">
                  <div className="edit-message">
                    {messages[messages.length - 1].text.slice(0, 40)}
                    {messages[messages.length - 1].text.length > 100 && '...'}
                  </div>
                  <div className='icons-sec'>
                    <IconButton
                      aria-label="edit"
                      onClick={handleEditMessage}
                      sx={{ borderRadius: '999px' }}
                      className="edit-message-btn"
                    >
                      <EditIcon />
                    </IconButton>
                    {messages[0].isVerified && (
                      <IconButton
                        sx={{ borderRadius: '999px' }}
                        className="verify-message-btn"
                      >
                        <TaskAltIcon color="success" />
                      </IconButton>
                    )}
                  </div>

                </div>
                <hr />
                <div className="email-or-linkedin">
                  {step === 1 && !isLinkedIn ? (
                    <>
                      <div className="email-heading">
                        <h4>Register to Access ContactMe</h4>
                        <p>You’ll be notified here when Tushar replies</p>
                      </div>
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
                              borderBottom: '2px solid #49454F',
                            },
                            '& .MuiInputAdornment-root': {
                              color: '#49454F',
                            },
                            '& .MuiInputBase-input::placeholder': {
                              color: '#1D1B20',
                            },
                            '& .MuiInputLabel-root': {
                              color: '#49454F',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: '#49454F', 
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
                  ) : step === 2 ? (
                    <>
                      <div className='otp-main'>
                        <div className="email-heading">
                          <h4>Verify OTP</h4>
                          <p>We’ve sent a 4 digit one time password to faiz@mail.com</p>
                        </div>
                        <Link href="#" className='change-email'>Change Email</Link>
                      </div>
                      <div className="otp-inputs">
                        {otp.map((value, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className="otp-input"
                          />
                        ))}
                      </div>
                    </>
                  ) : step === 3 ? (
                    <>
                      <div className='sent-message-content'>
                        <div className="edit-message">{userEmail}</div>
                        <IconButton
                          aria-label="edit"
                          onClick={handleEditEmail}
                          sx={{ borderRadius: '999px' }}
                          className="edit-message-btn"
                        >
                          <EditIcon />
                        </IconButton>
                      </div>
                      <hr />
                      <div className='otp-main'>
                        <div className="email-heading">
                          <h4>Final step, share your LinkedIn URL</h4>
                          <p>One last step and your message will be sent.</p>
                        </div>
                        <Link href="#" className='handle-links'>Find my URL <ArrowForwardIcon /></Link>
                      </div>
                      <TextField
                        fullWidth
                        label="Enter your LinkedIn URL"
                        id="email-field"
                        value={linkedinUrl}
                        onChange={handleLinkedinSubmit}
                        sx={{
                          m: 1,
                          width: '100%',
                          marginBottom: '50px',
                          backgroundColor: '#F3EDF7',
                          '& .MuiFilledInput-root': {
                            borderBottom: '2px solid #49454F',
                          },
                          '& .MuiInputAdornment-root': {
                            color: '#49454F',
                          },
                          '& .MuiInputBase-input::placeholder': {
                              color: '#1D1B20',
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: '#1D1B20',
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                              color: '#49454F', 
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
                    </>
                  ) : step === 4 ? (
                    <>
                      <div className='sent-message-content'>
                        <div className="edit-message">{userEmail}</div>
                        <div className='icons-sec'>
                          <IconButton
                            aria-label="edit"
                            onClick={handleEditEmail}
                            sx={{ borderRadius: '999px' }}
                            className="edit-message-btn"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            sx={{ borderRadius: '999px' }}
                            className="verify-message-btn"
                          >
                            <TaskAltIcon color="success" />
                          </IconButton>
                        </div>
                      </div>
                      <hr />
                      <div className='sent-message-content'>
                        <div className="edit-message">{linkedinUrl}</div>
                        <div className='icons-sec'>
                          <IconButton
                            aria-label="edit"
                            onClick={handleEditLinkedin}
                            sx={{ borderRadius: '999px' }}
                            className="edit-message-btn"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            sx={{ borderRadius: '999px' }}
                            className="verify-message-btn"
                          >
                            <TaskAltIcon color="success" />
                          </IconButton>
                        </div>
                      </div>
                      <hr />
                      <div className='otp-main'>
                        <div className="email-heading">
                          <h4>Is this your profile?</h4>
                          <p>Your message will be sent on confirmation.</p>
                        </div>
                      </div>
                      <div className='user-profile'>
                        <Image src={tushar} className='users-avatar' alt='User' />
                        <div className='user-profile-content'>
                          <h4>Tushar</h4>
                          <p>Founder at Microsoft Corporation</p>
                        </div>
                      </div>
                      <div className="confirmation-actions">
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleConfirm(false)}
                          className="theme-btn-outlined-gray"
                        >
                          That’s not me
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleConfirm(true)}
                          className="theme-btn-filled"
                        >
                          Yes, It's me
                        </Button>
                      </div>
                    </>
                  ) : step === 5 ? (
                    <>
                      <div className='sent-message-content'>
                        <div className="edit-message">{userEmail}</div>
                        <div className='icons-sec'>
                          <IconButton
                            aria-label="edit"
                            onClick={handleEditEmail}
                            sx={{ borderRadius: '999px' }}
                            className="edit-message-btn"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            sx={{ borderRadius: '999px' }}
                            className="verify-message-btn"
                          >
                            <TaskAltIcon color="success" />
                          </IconButton>
                        </div>
                      </div>
                      <hr />
                      <div className='sent-message-content'>
                        <div className="edit-message">{linkedinUrl}</div>
                        <div className='icons-sec'>
                          <IconButton
                            aria-label="edit"
                            onClick={handleEditLinkedin}
                            sx={{ borderRadius: '999px' }}
                            className="edit-message-btn"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            sx={{ borderRadius: '999px' }}
                            className="verify-message-btn"
                          >
                            <TaskAltIcon color="success" />
                          </IconButton>
                        </div>
                      </div>
                      <hr />
                      <div className='otp-main'>
                        <div className="email-heading">
                          <h4>Hi Tushar</h4>
                          <p>Your ContactME handle page is ready.</p>
                        </div>
                        <Link href="#" className='handle-links'>Handle Link <ArrowForwardIcon /></Link>
                      </div>
                      <div className="mb-20">
                        <Button disabled className="send-button">
                          Continue Chatting
                        </Button>
                      </div>
                    </>
                  ) : null}
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
                <div
                  className="text-wrapper"
                  ref={(el) => {
                    if (el) {
                      const textarea = el.querySelector('textarea');
                      if (textarea) {
                        const newHeight = Math.min(Math.max(textarea.scrollHeight, 90), 160);
                        el.style.height = `${newHeight}px`;
                      }
                    }
                  }}
                >
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
              <Button onClick={handleSendMessage} className="send-button">
                Send
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
