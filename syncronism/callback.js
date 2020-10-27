//callback

function getUser(callback) {
  setTimeout(function() {
    return callback(null,{
      id: 1,
      name: 'Batman',
      birthDate: new Date(),
    })
  }, 1000);
}

function getTelephone(userId, callback) {
  setTimeout(function() {
    return callback(null, {
      telephone:'555-555-555',
    })
  },2000)
}

function getAddress(userId, callback) {
  setTimeout(function(){
    return callback(null, {
      address: 'Gotham City',
    })
  },3000)
}

getUser(function resolveUser(error, user) {
  // null || "" || 0 === false 
  if(error) {
    console.error(error);
    return;
  }
  getTelephone(user.id, function resolveTelephone(error, telephone){
    if(error) {
      console.error('Telephone error:',error);
      return;
    }
    getAddress(user.id, function resolveAddress(error, address){
      if(error) {
        console.error('address error: ',error);
      }
      console.log(`${user.name},${telephone.telephone},${address.address}`);
    })
  })
})
