//Van de // default
const xinSoDt = (callback) => {
  let soDt;
  console.log('first');

  setTimeout(() => {
    soDt = 123456;
    callback(soDt);
    console.log('completed 1');
  }, 1000);

  console.log('start 2');

  return soDt;
};

const resultCallBack = (resultSoDt) => {
  console.log(resultSoDt);
};

xinSoDt(resultCallBack);

// If many callback function

// const sacPin = (soDT, resultCallBack) => {
//     console.log("charge");

//     setTimeout(() => {
//         console.log("charge complete")
//         resultCallBack(soDT)
//     }, 2000);
// }
