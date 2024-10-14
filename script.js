let staffForm = document.getElementById("staffForm");
let username;
let password;
let branch;
let submit = document.getElementById("submit");
let info = document.getElementById("info");
let loginFormContainer = document.getElementById("loginFormContainer");

let modeContainer = document.getElementById("modeContainer");
let staffButton = document.getElementById("staffButton");
let studentButton = document.getElementById("studentButton");

let staffDiv = document.getElementById("staffDiv");
let studentDiv = document.getElementById("studentDiv");

let staffNameSpan = document.getElementById("staffNameSpan");

staffButton.onclick = function () {
  staffForm.style.display = "block";
  modeContainer.style.display = "none";

  submit.onclick = function () {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    branch = document.getElementById("branch").value;
    console.log(username, password, branch);
    fetch("staff.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let staffName = data.name;
        let staffPassword = data.password;
        let staffPlace = data.place;

        // console.log(username, password, branch);
        if (
          username === staffName &&
          password === staffPassword &&
          branch === staffPlace
        ) {
          modeContainer.style.display = "none";
          info.textContent = "Login successful!";
          setTimeout(function () {
            staffDiv.style.display = "block";
            staffForm.style.display = "none";
            loginFormContainer.style.display = "none";
            info.textContent = "";
            staffNameSpan.textContent = username;
          }, 1500);
        } else {
          info.textContent =
            "Login failed. Please check your username and password.";
          setTimeout(function () {
            info.textContent = "";
          }, 2000);
        }
      });
  };
};

studentButton.onclick = function () {
  loginFormContainer.style.display = "none";
  studentDiv.style.display = "block";
  window.alert(
    "Note!!! This is just a project website. This is not an actual company or business. Please do not enter your real details in the admission form that will be shown. Thank you."
  );
};

function submitAdmissionForm() {
  window.alert(
    "Thank you for filling out the form. We will send you the update on your email soon! (this is fake)"
  );
}
