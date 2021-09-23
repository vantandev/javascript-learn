// es 8
const xinSoDt = () => {
  console.log('call to friend and receive phone number');

  const findAction = new Promise((resolve, reject) => {
    let resultFindAction;

    setTimeout(() => {
      resultFindAction = true;

      if (resultFindAction) {
        soDt = 123456;
        console.log(`phone number: ${soDt}`);
        resolve(soDt);
      } else {
        reject('not found');
      }
    }, 1000);

    console.log('start 2');
  });

  return findAction;
};

//sac pin
const sacPin = () => {
  console.log('wait charge');
  let chargePinCompleted;

  const chargeAction = new Promise((resolve, reject) => {
    setTimeout(() => {
      chargePinCompleted = true;
      if (chargePinCompleted) {
        resolve('charge completed');
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

//action
const action = async () => {
  try {
    const sdt = await xinSoDt();
    try {
      await sacPin();
      callToNam(sdt);
    } catch (error) {
      console.log('sacpin: ', error);
    }
  } catch (error) {
    console.log('error: ', error);
  }
};

action();
