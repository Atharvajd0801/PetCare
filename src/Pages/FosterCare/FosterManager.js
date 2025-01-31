// import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import { Loading } from "../../components/loading/Loading";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Button } from "react-bootstrap";

// export const FosterManager = () => {
//   const [isLoading, setLoading] = useState(false);
//   const [fosterDetails, setFosterDetails] = useState(null);
// //   const { id } = useParams();

//   useEffect(() => {
//     const fetchFosterDetails = async () => {
//       setLoading(true);
//       try {
//         // Replace the URL with the actual endpoint to fetch foster details
//         const response = await axios.get(`api/foster/${id}`);
//         setFosterDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching foster details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFosterDetails();
//   }, [id]);

//   const handleAdoptClick = () => {
//     // Handle adopting the foster pet
//     console.log("Adopting foster pet:", fosterDetails);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <div className="loadingContainer">
//           <Loading />
//         </div>
//       ) : (
//         <>
//           <Navbar />
//           <div className="foster-details-container">
//             {fosterDetails && (
//               <>
//                 <div className="foster-image-container">
//                   <img
//                     src={fosterDetails.photos}
//                     alt={fosterDetails.fosterName}
//                     className="foster-image"
//                   />
//                 </div>
//                 <div className="foster-details">
//                   <h2>{fosterDetails.fosterName}</h2>
//                   <p>Age: {fosterDetails.age}</p>
//                   <p>Description: {fosterDetails.description}</p>
//                   <Button onClick={handleAdoptClick}>Adopt Now</Button>
//                 </div>
//               </>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };
