import React from 'react';
import styled from 'styled-components';

// Styled components for FosterCare component
const BackgroundSection = styled.section`
  background-color: #ffffff; /* White background color */
`;

const StyledHeader = styled.header`
  background-color: #001f3f; /* Navy blue background color */
  color: #ffffff; /* Text color */
  padding: 1rem; /* Padding */
  text-align: center; /* Center align text */
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 45%; /* Set max-width to 45% */
  margin: auto; /* Center align the container */
`;

const StyledCard = styled.div`
  background-color: #ffffff; /* Card background color */
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a light shadow */
`;

const StyledCardBody = styled.div`
  padding: 1rem; /* Adjusted padding */
`;

const StyledTitle = styled.h1`
  font-weight: bold; /* Bold font weight */
  color: #ffc107; /* Yellow color */
  text-align: center; /* Center align text */
`;

const StyledFormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const StyledFormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

const FosterCare = () => {
  return (
    <BackgroundSection>
      <StyledHeader>
        <h1>PetCare</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </nav>
      </StyledHeader>
      <StyledContainer className="container py-3">
        <div className="row justify-content-center">
          <div className="col">
            <StyledCard>
              <StyledCardBody>
                <StyledTitle>Foster Care</StyledTitle>
                <form>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="ownerName">Owner Name</StyledFormLabel>
                    <StyledFormInput type="text" id="ownerName" name="ownerName" />
                  </div>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="ownerContact">Owner Contact</StyledFormLabel>
                    <StyledFormInput type="text" id="ownerContact" name="ownerContact" />
                  </div>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="petType">Pet Type</StyledFormLabel>
                    <StyledSelect id="petType" name="petType">
                      <option value="">Select Pet Type</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Bird">Bird</option>
                      <option value="Fish">Fish</option>
                      <option value="Other">Other</option>
                    </StyledSelect>
                  </div>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="petBreed">Pet Breed</StyledFormLabel>
                    <StyledSelect id="petBreed" name="petBreed">
                      <option value="">Select Pet Breed</option>
                      {/* You can populate breed options based on the selected pet type using JavaScript */}
                    </StyledSelect>
                  </div>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="petName">Pet Name</StyledFormLabel>
                    <StyledFormInput type="text" id="petName" name="petName" />
                  </div>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="petAge">Pet Age</StyledFormLabel>
                    <StyledSelect id="petAge" name="petAge">
                      <option value="">Select Pet Age</option>
                      {/* You can generate age options dynamically using JavaScript */}
                    </StyledSelect>
                  </div>
                  <div className="mb-3">
                    <StyledFormLabel htmlFor="petPhoto">Upload Photo or Video</StyledFormLabel>
                    <StyledFormInput type="file" id="petPhoto" name="petPhoto" accept="image/*, video/*" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </StyledCardBody>
            </StyledCard>
          </div>
        </div>
      </StyledContainer>
    </BackgroundSection>
  );
};

export default FosterCare;
