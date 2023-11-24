
function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    document.getElementById("dFirstName").innerText = firstName;
    document.getElementById("dLastName").innerText = lastName;
    document.getElementById("dEmail").innerText = email;
    document.getElementById("formData").style.display = "block";
}
function showMore() {
    var text1 = document.getElementById('small').innerHTML;
    var text2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quia quos ab non cum esse doloribus dicta tenetur magnam dolor, animi perferendis impedit fugiat aspernatur. Libero eius cum quam ut."
     var text3 = text1 + text2
    document.getElementById('small').innerHTML = text3;
}