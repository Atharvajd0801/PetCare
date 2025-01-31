import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const AddPetForm = ({ onClose, onAdd }) => {
  const [petData, setPetData] = useState({
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    petPhoto: '',
    adoptionOption: 'foster', // Default to fostering
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(petData);
    onClose();
  };

  return (
    <ModalBackground>
      <ModalContent>
        <h2>Add New Pet</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="petName">Pet Name:</Label>
            <Input type="text" id="petName" name="petName" value={petData.petName} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="petType">Pet Type:</Label>
            <Input type="text" id="petType" name="petType" value={petData.petType} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="petBreed">Pet Breed:</Label>
            <Input type="text" id="petBreed" name="petBreed" value={petData.petBreed} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="petAge">Pet Age:</Label>
            <Input type="text" id="petAge" name="petAge" value={petData.petAge} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="petPhoto">Pet Photo:</Label>
            <Input type="text" id="petPhoto" name="petPhoto" value={petData.petPhoto} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="adoptionOption">Adoption/Sale Option:</Label>
            <Select id="adoptionOption" name="adoptionOption" value={petData.adoptionOption} onChange={handleChange}>
              <option value="foster">Fostering</option>
              <option value="adoption">Adoption/Sale</option>
            </Select>
          </FormGroup>
          <ButtonGroup>
            <Button type="submit">Add Pet</Button>
            <Button type="button" onClick={onClose}>Cancel</Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalBackground>
  );
};

export default AddPetForm;
