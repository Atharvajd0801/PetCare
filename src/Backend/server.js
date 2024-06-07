const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
// Sample data
const doctors = [
  {
    id: "1",
    name: "Dr. John Doe",
    specialization: "Cardiology",
    years_of_experience: "15 years",
    languages_spoken: ["English", "Spanish"],
    certifications: ["Board Certified Cardiologist"],
    services_provided: ["Heart surgery", "Cardiac consultation"],
    clinic_name: "Heart Care Clinic",
    clinic_address: "123 Heart Street, Cardio City",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "2",
    name: "Dr. Jane Smith",
    specialization: "Pediatrics",
    years_of_experience: "10 years",
    languages_spoken: ["English", "French"],
    certifications: ["Board Certified Pediatrician"],
    services_provided: ["Child wellness checkups", "Vaccinations"],
    clinic_name: "Kids Clinic",
    clinic_address: "456 Child Avenue, Pediatric Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "3",
    name: "Dr. Emily Johnson",
    specialization: "Dermatology",
    years_of_experience: "12 years",
    languages_spoken: ["English", "German"],
    certifications: ["Board Certified Dermatologist"],
    services_provided: ["Skin examinations", "Acne treatments"],
    clinic_name: "Skin Care Center",
    clinic_address: "789 Dermatology Lane, Skin City",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "4",
    name: "Dr. Michael Brown",
    specialization: "Orthopedics",
    years_of_experience: "18 years",
    languages_spoken: ["English", "Chinese"],
    certifications: ["Board Certified Orthopedic Surgeon"],
    services_provided: ["Joint replacements", "Fracture treatments"],
    clinic_name: "Ortho Center",
    clinic_address: "101 Bone Street, Ortho Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "5",
    name: "Dr. Sarah Lee",
    specialization: "Ophthalmology",
    years_of_experience: "8 years",
    languages_spoken: ["English", "Korean"],
    certifications: ["Board Certified Ophthalmologist"],
    services_provided: ["Eye exams", "Cataract surgeries"],
    clinic_name: "Eye Care Clinic",
    clinic_address: "222 Vision Avenue, Eye Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "6",
    name: "Dr. David Wilson",
    specialization: "Neurology",
    years_of_experience: "20 years",
    languages_spoken: ["English", "Russian"],
    certifications: ["Board Certified Neurologist"],
    services_provided: ["Brain scans", "Stroke treatments"],
    clinic_name: "Neuro Center",
    clinic_address: "333 Brain Street, Neuro Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "7",
    name: "Dr. Maria Garcia",
    specialization: "Obstetrics and Gynecology",
    years_of_experience: "14 years",
    languages_spoken: ["English", "Spanish"],
    certifications: ["Board Certified OB/GYN"],
    services_provided: ["Prenatal care", "Labor and delivery"],
    clinic_name: "Women's Health Clinic",
    clinic_address: "444 Maternity Lane, Women's Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "8",
    name: "Dr. Andrew Martinez",
    specialization: "Psychiatry",
    years_of_experience: "16 years",
    languages_spoken: ["English", "Portuguese"],
    certifications: ["Board Certified Psychiatrist"],
    services_provided: ["Mental health counseling", "Medication management"],
    clinic_name: "Mental Wellness Center",
    clinic_address: "555 Mind Street, Psychiatry Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "9",
    name: "Dr. Lisa Thompson",
    specialization: "Dentistry",
    years_of_experience: "11 years",
    languages_spoken: ["English", "French"],
    certifications: ["Board Certified Dentist"],
    services_provided: ["Teeth cleaning", "Fillings", "Dental implants"],
    clinic_name: "Dental Care Clinic",
    clinic_address: "666 Smile Avenue, Dental Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  },
  {
    id: "10",
    name: "Dr. Kevin Harris",
    specialization: "Family Medicine",
    years_of_experience: "13 years",
    languages_spoken: ["English", "Spanish"],
    certifications: ["Board Certified Family Physician"],
    services_provided: ["General checkups", "Chronic disease management"],
    clinic_name: "Family Health Center",
    clinic_address: "777 Wellness Lane, Family Town",
    image: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
  }
];

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Doctor API');
});

// Doctors endpoint
app.get('/api/doctor', async (req, res) => {
    console.log(doctors)
    res.send(doctors);
  
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
