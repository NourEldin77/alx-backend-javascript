export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'photo-profile-1',
    });
    reject();
  });
}
