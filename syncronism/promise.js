//promises

function getUser() {
  return new Promise( function resolvePromise(resolve,reject) {
    setTimeout( () => {
      return resolve({
        id: 1,
        name: 'Batman'
      }, 2000)
    })
  })
}

function getTelephone(userId) {
  return new Promise( function resolvePormise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telephone: '555-555-555'
      })
    }, 3000)
  })
}

const user = getUser();
user
  .then( result => { 
    return getTelephone(result.id).then(res => {
      return {
        user: {
          id: result.id,
          name: result.name,
          contacts : {
            telephone: res.telephone
          }
        }
      }
    })
  })
  .then(data => console.log(data))
  .catch( error => console.error(error));
