import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Card = () => {

const navigate = useNavigate();


  const [cardData, setCardData] = useState(null);
  // const loggedIn = true; // Replace with your login logic
  const loggedIn = localStorage.getItem("userData")
const userData = JSON.parse(loggedIn) 

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }

    if (userData.cardId !== "") {
      axios.get(`https://bit-stock-api.vercel.app/users/${userData.id}/cards/${userData.cardId}`)
        .then(function (response) {
          // Handle success
          setCardData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          // Handle error
          console.error(error);
        });
    }
  }, []);

  return (
    <div>
      {cardData && (

                    <div className="bank-card" >

<div className="card-num">
{cardData.cardNo}
</div>
<div style={{display:"flex",  height:'70px',justifyContent:"space-between"}}>
    <div className="card-name-info">
        <div className="cardholder">
          <span className="info-name">Card Holder</span>
          <div className="info-data">
            {cardData.firstName} {cardData.lastName}
          </div>
        </div>
        <div className="exp">
          <span className="info-name">Expires</span>
          <div className="info-data">
            {cardData.expMonth}/{cardData.expYear}
            </div>
        </div>
    </div>
    <div className="visa-logo" >
    <div className="red">

      </div>
      <div className="orange">

      </div>
    </div>
</div>

</div>













        // <table>
        //   <thead>
        //     <tr>
        //       <th>Card ID</th>
        //       <th>Card Number</th>
        //       <th>Card Holder</th>
        //       {/* Add more table headers for other card properties */}
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td>{cardData.cardNo}</td>
        //       <td>{cardData.firstName}</td>
        //       <td>{cardData.cardHolder}</td>
        //     </tr>
        //   </tbody>
        // </table>
      )}
    </div>
    
// // const [cardData, setCardData] = useState(null);



// const loggedIn = localStorage.getItem("userData")
// const userData = JSON.parse(loggedIn)

// useEffect(() => {
//   if (userData.cardId !== "") {
//         axios.get(`https://bit-stock-api.vercel.app/users/${userData.id}/cards/${userData.cardId}`)
//           .then(function (response) {
//             // Handle success
//             localStorage.setItem('cardData',  JSON.stringify(response.data));
//             // const reloadPage = setTimeout(() => {
//               // window.location.reload();
//             // }, 2000);
        
//             // return () => {
//             //   clearTimeout(reloadPage);
//             // };
//             // window.location.reload();
            
//           })
//           .catch(function (error) {
//             // Handle error
//             console.error(error);
//           });
//       }
// }, [])


// // const reloadPage = setTimeout(() => {
// //   window.location.reload();
// // }, 2000);

// // return () => {
// //   clearTimeout(reloadPage);
// // };

    


//       const cardAvailable = localStorage.getItem("cardData")
// const cardData = JSON.parse(cardAvailable)

//   return (
//     <div>

//     </div>
  )
}

export default Card