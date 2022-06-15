export function register(){
  if('serviceWorker' in navigator && process.env.NODE_ENV === 'production'){
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log("SerivceWorker is registered"))
    .catch(error => console.log("SerivceWorker is not registered ", error))
  }
}