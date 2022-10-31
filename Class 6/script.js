function getFormData() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
}