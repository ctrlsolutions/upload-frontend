<template>
    <div class="signup-container">
      <h1 class="title">Sign up</h1>
      <p class="subtitle">New here? Create a new account below.</p>
  
      <!-- Scrollable container -->
      <div class="form-wrapper">
        <form class="signup-form">
          <input type="email" placeholder="Email" class="input-field" />
          <input type="password" placeholder="Password" class="input-field" />
          <input type="password" placeholder="Re-enter password" class="input-field" />
  
          <!-- Red horizontal line -->
          <div class="separator"></div>
  
          <div class="name-fields">
            <input type="text" placeholder="First name" class="input-field" />
            <input type="text" placeholder="Middle name" class="input-field" />
          </div>
  
          <input type="text" placeholder="Last name" class="input-field" />
  
          <!-- Sex Radio Buttons (Hidden until scrolled down) -->
          <div class="radio-group">
            <label class="label">Sex</label>
            <label class="radio-option">
              <input type="radio" name="sex" value="male" class="radio-input" checked />
              Male
            </label>
            <label class="radio-option">
              <input type="radio" name="sex" value="female" class="radio-input" />
              Female
            </label>
          </div>
  
          <!-- Date of Birth Input -->
          <div class="dob-group">
            <label class="label">Date of Birth</label>
            <input type="date" class="dob-input" />
          </div>
        </form>
      </div>
  
      <!-- Fixed Buttons -->
      <div class="button-group">
        <button type="button" class="cancel-btn">CANCEL</button>
        <button type="submit" class="signup-btn">SIGN UP</button>
      </div>
  
      <p class="or-text">OR</p>
  
      <button type="button" class="google-btn">CONTINUE WITH GOOGLE</button>
    </div>
  </template>
  
  <style scoped>
  /* Main Container */
  .signup-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }
  
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 0;
  }
  /* Shorter Scrollable Form */
  .form-wrapper {
    max-height: 300px; /* Increased so Last Name is visible */
    overflow-y: auto;
    padding-right: 10px;
    margin-bottom: 10px;
    }
  
  /* Form Fields */
  .signup-form {
    display: flex;
    flex-direction: column;
  }
  
  .label {
    text-align: left;
    margin: 10px 0;
    color: #6f6f6f;
    font-weight: bold;
  }

  .input-field {
    width: 100%;
    padding: 12px;
    margin: 6px 0;
    border: 1px solid #800000;
    border-radius: 20px; /* Rounded corners */
    font-size: 1rem;
  }
  
  /* Red horizontal line */
  .separator {
    align-self: center;
    width: 95%;
    height: 1px;
    background-color: #800000;
    margin: 10px 0;
  }
  
  /* Name Fields */
  .name-fields {
    display: flex;
    gap: 10px;
  }
  
  /* Radio Button Group */
  .radio-group {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 10px 0;
  }
  
  .radio-option {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1rem;
    color: #7d030391;
    font-weight: bold;
  }
  
  .radio-input {
    accent-color: #800000;
  }
  
  /* Date of Birth */
  .dob-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
  
  .dob-input {
    width: 70%;
    padding: 12px;
    border: 1px solid #800000;
    border-radius: 20px; /* Rounded corners */
    font-size: 1rem;
    color: #800000;
  }
  
  /* Fixed Buttons */
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    position: sticky;
    bottom: 0;
    background: white;
    padding: 10px 0;
  }
  
  .cancel-btn, .signup-btn, .google-btn {
    flex: 1;
    padding: 12px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .cancel-btn {
    background-color: black;
    color: white;
    margin-right: 5px;
  }
  
  .signup-btn {
    background-color: #800000;
    color: white;
    margin-left: 5px;
  }
  
  .or-text {
    margin: 10px 0;
    font-weight: bold;
  }
  
  .google-btn {
    background-color: #800000;
    color: white;
    width: 100%;
    margin-top: 10px;
  }
  </style>
  