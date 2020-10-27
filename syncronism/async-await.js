// Async Await

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

main();
async function main () {
  try {
    console.time('test');

    const user = await getUser();
    //const telephone = await getTelephone(user.id);
    const result = await Promise.all([
      getTelephone(user.id)
    ])

    console.log("user: ", user);
    console.log("telephone: ",result[0]);
  
    console.timeEnd('test');
  } catch (error) {
    console.error(error);
  }
}
