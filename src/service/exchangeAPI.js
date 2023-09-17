var myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
export const fetchExchange = ({ to, from, amount }) => {
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};
