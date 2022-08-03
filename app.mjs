function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    const regNumber = /^(\+\d{3}|[0-9])\d{10}$/;
const networkprovider = new Map([
  [
    [
      "0803",
      "0806",
      "0814",
      "0810",
      "0813",
      "0703",
      "0706",
      "0903",
      "0906",
      "0704",
      "0916",
      "0913",
      "0702",
    ],
    "MTN",
  ],
  [["0905", "0705", "0815", "0811", "0807", "0915", "0805"], "GLO",],
  [
    ["0802", "0808", "0812", "0708", "0701", "0902", "0912", "0904", "0907"],
    "AIRTEL",
  ],
  [["0909", "0809", "0817", "0818", "0908"], "ETISALAT"],
]);

function checkNetwork(number, network) {
  for (const [key, value] of network) {
    for (const prefix of key) {
      let sliceNumber = number.slice(0, 4);
      if (number.startsWith("+234")) sliceNumber = "0" + number.slice(4, 7);
      if (sliceNumber === prefix) {
        return value;
      }
    }
  }
}

const phoneNumber = document.querySelector("#number");
phoneNumber.addEventListener("keyup", (event) => {
  validate(event.target, regNumber);
  console.log(validate());
});

const networkImage = document.querySelector("#logo");
const validate = (e_target, regex) => {
  networkImage.src = "";
  if (regex.test(e_target.value)) {
    let valueOffunc = checkNetwork(e_target.value, networkprovider);
    if (valueOffunc) {
      switch (valueOffunc) {
        case "MTN":
          networkImage.src = "./mtn.png";
          break;
        case "ETISALAT":
          networkImage.src = "./etisalat.png";
          break;
        case "GLO":
          networkImage.src = "./glo.jpg";
          break;
        case "AIRTEL":
          networkImage.src = "./airtel.png";
          break;
      }
    }
  }
};
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //