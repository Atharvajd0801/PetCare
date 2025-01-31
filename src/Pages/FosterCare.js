import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "./FosterCare.css";
const Nav = styled.nav`
  background-color: #012a4a;
  color: #fff !important;
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
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
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const Header = styled.header`
  background-color: #001f3f;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const Footer = styled.footer`
  position: unset;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #0b3954;
  color: #ffffff;
  padding: 30px 60px;
  text-align: right;
  margin-top: 20px; /* Add margin-top to increase space */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 50px;
  grid-template-columns: 1fr 3fr; /* Adjust column widths here */
  grid-gap: 20px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const Row = styled.div`
  display: inline-flex;
  grid-template-columns: repeat(4, 1fr); /* Adjust column count here */
  grid-gap: 20px; /* Adjust gap between items */
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: grey;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const PetCard = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const PetImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const PetInfo = styled.div`
  flex: 1;
`;

const FilterContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
`;

const FilterHeading = styled.h2`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const PetContainer = styled.div`
  flex: 1;
  width: 100%;
`;
const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Navbar = () => {
  const navigates = useNavigate();
  const [click, setClick] = useState(false);
  const [drop, setDrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileDrop, setShowProfileDrop] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 100) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };

  const logoutuser = () => {
    localStorage.removeItem('username');
    navigates('/');
    setIsOpen(!isOpen);
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 100) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  return (
    <Nav className="navbar navbar-expand-sm navbar-dark px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PetCare
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav gap-md-4">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                onClick={handleClick}
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </div>

              <ul
                className={`dropdown-menu ${drop ? 'show' : ''}`}
                onMouseLeave={() => setDrop(false)}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/foster-care"
                    onClick={closeMobileMenu}
                  >
                    Foster Care
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/doctor"
                    onClick={closeMobileMenu}
                  >
                    Veterinary
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/products"
                    onClick={closeMobileMenu}
                  >
                    Shopping
                  </Link>
                </li>
              </ul>
            </li>

            {!localStorage.getItem('username') && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/signup"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {localStorage.getItem('username') && (
              <li
                className="nav-item dropdown"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  to="/"
                  role="button"
                  onClick={() => setShowProfileDrop(!showProfileDrop)}
                >
                  {localStorage.getItem('username')}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    showProfileDrop ? 'show' : ''
                  }`}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/profile"
                      onClick={closeMobileMenu}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={logoutuser}
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Nav>
  );
};

const FosterCare = () => {
  const [petType, setPetType] = useState('all');
  const [searchCity, setSearchCity] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);

  const [fosteredPets, setFosteredPets] = useState([
    {
      id: 1,
      petName: 'Max',
      petType: 'Dog',
      petBreed: 'Golden Retriever',
      petAge: '3 years',
      petPhoto: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      city: 'Pune',
      availability: 'Fostering',
    },
    {
      id: 2,
      petName: 'Bella',
      petType: 'Dog',
      petBreed: 'Labrador Retriever',
      petAge: '2 years',
      petPhoto: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
      city: 'Jalna',
      availability: 'Adoption',
    },
    {
      id: 3,
      petName: 'Charlie',
      petType: 'Cat',
      petBreed: 'Persian',
      petAge: '4 years',
      petPhoto: 'https://cdn.pixabay.com/photo/2016/07/22/03/14/kittens-1534083_1280.jpg',
      city: 'Pune',
      availability: 'Fostering',
    },
    {
        id: 4,
        petName: 'Luna',
        petType: 'Dog',
        petBreed: 'German Shepherd',
        petAge: '1 year',
        petPhoto: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',

        availability: 'Sale',
      },
      {
        id: 5,
        petName: 'Simba',
        petType: 'Cat',
        petBreed: 'Siamese',
        petAge: '3 years',
        petPhoto: 'https://cdn.pixabay.com/photo/2016/07/22/03/14/kittens-1534083_1280.jpg',
        availability: 'Fostering',
      },
      {
        id: 6,
        petName: 'Rocky',
        petType: 'Dog',
        petBreed: 'Boxer',
        petAge: '5 years',
        petPhoto: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',

        availability: 'Adoption',
      },
  ]);

  useEffect(() => {
    setFilteredPets(fosteredPets);
  }, []);

  const applyFilter = () => {
    let filtered = [...fosteredPets];
  
    // Apply filters only if both petType and searchCity are selected
    if (petType !== 'all' && searchCity.trim() !== '') {
      filtered = fosteredPets.filter(
        pet =>
          pet.petType.toLowerCase() === petType &&
          pet.city.toLowerCase() === searchCity.toLowerCase()
      );
    } else if (petType !== 'all') {
      filtered = fosteredPets.filter(pet => pet.petType.toLowerCase() === petType);
    } else if (searchCity.trim() !== '') {
      filtered = fosteredPets.filter(
        pet => pet.city.toLowerCase() === searchCity.toLowerCase()
      );
    }
  
    // Update the state with filtered pets
    setFilteredPets(filtered);
  };
  
  // Call applyFilter when filters change
  useEffect(() => {
    applyFilter();
  }, [petType, searchCity]);

  return (
    <>
      <Navbar />
      <section>
      <Row>
            <Column>
              <FilterContainer>
                <FilterHeading>Filters</FilterHeading>
                <div>
                  <FilterLabel htmlFor="petType">Pet type</FilterLabel>
                  <FilterSelect id="petType" value={petType} onChange={(e) => setPetType(e.target.value)}>
                    <option value="">Select pet type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                  </FilterSelect>
                </div>
                <div>
                  <FilterLabel htmlFor="searchCity">Search by City</FilterLabel>
                  <FilterSelect
  id="searchCity"
  value={searchCity}
  onChange={(e) => setSearchCity(e.target.value)}
>

                    <option value="">Select city here...</option>
                    <option value="Pune">Pune</option>
                    <option value="Jalna">Jalna</option>
                  </FilterSelect>
                </div>
                <FilterButton onClick={applyFilter}>Apply Filter</FilterButton>
              </FilterContainer>
            </Column>
            <Column>
              <Header>Pets Available For Adoption</Header>
              <Row>
                {filteredPets.length > 0 ? (
                  filteredPets.map((pet) => (
                    <PetContainer key={pet.id}>
                      {/* Pet details card */}
                      <PetCard>
                        <PetImage src={pet.petPhoto} alt={pet.petName} />
                        <PetInfo>
                          <h3>{pet.petName}</h3>
                          <p>{pet.petType}</p>
                          <p>{pet.petBreed}</p>
                          <p>{pet.petAge}</p>
                          <p>Availability: {pet.availability}</p>
                        </PetInfo>
                      </PetCard>
                    </PetContainer>
                  ))
                ) : (
                  <p>No pets found.</p>
                )}
              </Row>
            </Column>
          </Row>
      </section>
      <Footer>
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <p>Provide high-quality services to our customers. Exceed customer expectations by delivering innovative solutions and fostering long-term relationships. Join us on our journey as we strive for excellence in everything we do.</p>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="mailto:info@example.com">info@example.com</FooterLink>
              <FooterLink href="https://www.example.com">www.example.com</FooterLink>
              <FooterLink href="tel:+1234567890">+1 (234) 567-890</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f"></i>
                <span style={{ padding: "10px" }}>Facebook</span>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram"></i>
                <span style={{ marginLeft: "10px", padding: "10px" }}>Instagram</span>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-whatsapp"></i>
                <span style={{ marginLeft: "10px", padding: "10px" }}>WhatsApp</span>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube"></i>
                <span style={{ marginLeft: "10px", padding: "10px" }}>Youtube</span>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default FosterCare;
