let submit = document.getElementById("submit");
const ans = document.getElementById("carbonvalue");
let carbonFp;
console.log("hello");
function carbon() {
  event.preventDefault();
  let users = document.getElementById("users").value;
  let electricity = document.getElementById("el_bill").value;
  let gas = document.getElementById("gas_bill").value;
  let oil = document.getElementById("oil_bill").value;
  let flight = document.getElementById("flight").value;
  let newspaper = document.getElementById("newspaper").value;
  let metal = document.getElementById("metal").value;

  if (users == null || electricity == null) {
    alert("enter values");
  } else {
    carbonFp =
      Number(electricity) +
      Number(gas) +
      Number(oil) +
      Number(flight) +
      Number(newspaper) +
      Number(metal);
    console.log(carbonFp);

    document.getElementById("cValue").innerText = carbonFp;
  }
}

// submit.addEventListener("click", carbon);
