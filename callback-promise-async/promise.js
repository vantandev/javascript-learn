//ES 6

//xin so dt
// const xinSoDt = () => {
//     console.log("call to friend and receive phone number");

//     const findAction = new Promise((resolve, reject) => {
//         let resultFindAction;

//         setTimeout(() => {
//             resultFindAction = false;

//             if (resultFindAction) {
//                 soDt = 123456;
//                 console.log(`so dt: ${soDt}`);
//                 resolve(soDt);
//             } else {
//                 reject("ko kiem thay");
//             }
//         }, 1000);

//         console.log("start 2");
//     });

//     return findAction;
// };

// xinSoDt()
//     .then((soDt) => {
//         console.log(`then: ${soDt}`);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//If many promise

const xinSoDt = () => {
  console.log('call to friend and receive phone number');

  const findAction = new Promise((resolve, reject) => {
    let resultFindAction;

    setTimeout(() => {
      resultFindAction = false;

      if (resultFindAction) {
        soDt = 123456;
        console.log(`so dt: ${soDt}`);
        resolve(soDt);
      } else {
        reject('ko kiem thay');
      }
    }, 1000);

    console.log('start 2');
  });

  return findAction;
};

//sac pin
const sacPin = (soDt) => {
  console.log('wait charge');
  let chargePinCompleted;

  const chargeAction = new Promise((resolve, reject) => {
    setTimeout(() => {
      chargePinCompleted = true;
      if (chargePinCompleted) {
        resolve(soDt);
      } else {
        reject('charge not completed');
      }
    }, 1500);
  });

  return chargeAction;
};

const callToNam = (soDt) => {
  console.log(`receive sdt and call to Nam ${soDt}`);
};

xinSoDt()
  .then((soDt) => {
    sacPin(soDt)
      .then((soDt) => callToNam(soDt))
      .catch((error) => console.log('sacpin:', error));
  })
  .catch((error) => {
    console.log('xin sdt:', error);
  });
