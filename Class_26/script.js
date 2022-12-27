function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
  }


async function asyncCall() {
    console.log('calling');
    for (let i = 0; i < 10; i++) {
        const result = await resolveAfter2Seconds();
        console.log(i);
      }
    }
    asyncCall();