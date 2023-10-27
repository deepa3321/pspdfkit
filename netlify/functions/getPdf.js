// netlify/functions/getPdf.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://www.paramounttpa.com/Home/Download/Standard_Discharge_Card.pdf');
    const data = await response.buffer();

    return {
      statusCode: 200,
      body: data.toString('base64'),
      isBase64Encoded: true,
      headers: {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    return { statusCode: 500, body: 'Error fetching the PDF' };
  }
};
