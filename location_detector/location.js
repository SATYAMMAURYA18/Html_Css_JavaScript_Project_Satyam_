const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    // if browser support geolocation api
    //geolocation.getCurrentPosition method is used to get current position of the device
    //it take three parameters successs ,error,options. If everything is right then success
    //callback function will call else error callback function will call.
    // we don't need third parameter fot this projrct.

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    btn.innerText = "Your Browser not support the api";
  }
});

async function onSuccess(position) {
  let { latitude, longitude } = position.coords;
  console.log(latitude);
  console.log(longitude);
  let response = await fetch(
    ` https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a985d5b5eb8a4862a040020cb5b208e5`
  );
  let data = response.json();
  console.log(data);
  //safety check
  if (!data.results || data.results.length == 0) {
    console.log("No Result Found");
    btn.innerText = "No Result Found";
    return;
  }

  let allDetails = data.results[0].components;
  console.log(allDetails);
  let { city, country, postCode } = allDetails;
  console.log(`City:${city}`);
  console.log(`Country:${country}`);
  console.log(`PostCode:${postCode}`);
  btn.innerText = `${city}, ${country}, ${postCode}`;
}
function onError(error) {
  if (error.code == 1) {
    // if user denied the request
    btn.innerText = "You denied the request";
  } else if (error.code == 2) {
    // if location is not available
    btn.innerText = "You denied the request";
  } else {
    // if any other error occured.
    btn.innerText = "Something went wrong";
  }
  btn.setAttribute("disabled", "true"); //if user denied the request then button will be daisabled
}
