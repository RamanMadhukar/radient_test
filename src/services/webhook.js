import axios from 'axios';

const WEBHOOK_URL = 'https://webhook.site/03284045-17ac-42ca-8570-839903293860';

export const sendPurchaseData = async (userData, cartItems, total) => {
    const response = await axios.post(WEBHOOK_URL, JSON.stringify({
      user: userData,
      items: cartItems,
      total: total
    })).then(response => {
        console.log('Purchase data sent successfully:', response);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Error Response:', error.response);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error', error.message);
        }
      });
  
};