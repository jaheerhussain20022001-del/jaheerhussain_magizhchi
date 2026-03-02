document.getElementById("form1").addEventListener("submit", function(e)
{
    e.preventDefault();

    const user=
    {
        name: name.value,
        age: age.value,
        email: email.value,
        phone: phone.value
    };

    console.log("User Date:", user)
});