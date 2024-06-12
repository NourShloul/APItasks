const url = "https://66681676f53957909ff67af8.mockapi.io/users/Students";
async function getData() {
  const response = await fetch(url);
  console.log("reponse", response);
  const dataToJSON = await response.json();
  console.log("dataToJSON", dataToJSON);

  let x = document.getElementById("exampleInputID1");
  x.value = dataToJSON[4].id;

  let y = document.getElementById("exampleInputName1");
  y.value = dataToJSON[4].name;
}
getData();
