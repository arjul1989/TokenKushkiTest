document.getElementById('payment-form').addEventListener('submit', async(event) => {
    event.preventDefault()


kushki.requestSubscriptionToken({
    currency: "USD",
    card: {
      name: document.getElementById('name').value,
      number: document.getElementById('number').value,
      cvc: document.getElementById('cvc').value,
      expiryMonth: document.getElementById('expiry_month').value,
      expiryYear: document.getElementById('expiry_year').value
    },
  }, (response) => {
    if(!response.code){
      console.log(response.token);
      alert("El Token es ....... " + response.token);
      // Submit your code to your back-end



     //
    } else {
      console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
    }
  });
});
