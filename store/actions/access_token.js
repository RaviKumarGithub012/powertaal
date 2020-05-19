import AsyncStorage from '@react-native-community/async-storage';

export const AccessToken = () => {

  fetch('http://powertaal.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=password&username=Rajeev&password=12345678'
  })
    .then(res => res.json())
    .then(token => AsyncStorage.setItem('accessToken', token.access_token))
    .catch(err => console.error(err));
}