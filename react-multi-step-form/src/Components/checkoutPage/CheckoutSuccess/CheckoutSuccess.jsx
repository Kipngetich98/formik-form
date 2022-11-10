import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for booking a travel with us.
      </Typography>
      <Typography variant="subtitle1">
        Your booking number is #F192h. We have emailed your order confirmation with their travel details.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;