// FORM VALIDATION
import data from "./form.json" with{type: 'json'}

const user = data;

let register_form = document.getElementById("regi");
let login_form = document.getElementById("nostalgia")


if (register_form) {
    register();
}

function register() {
    register_form.addEventListener("input", (event) => {
        event.preventDefault();

        let formdata = new FormData(register_form);
        let errormessage = "";
        let name_reg = /[A-Za-z]+$/gi;
        let error_message = document.getElementById("mirage");
        let condition = document.getElementById('conditions');
        let pass_strength = document.getElementById('pass_strength');
        let passwordpattern = /^(?=.*[A-Za-z]+)(?=.*\d)(?=.*[\.*#@!]).{8,20}$/;
        let num_reg = /^(234|0)([0-9].{9})$/;
        let mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        


        toggleError(false)

        function toggleError(hide) {
            condition.classList.toggle('active', hide)
        }


        for (const [key, value] of formdata.entries()) {

            if (key === 'firstname' && value) {

                if (value.match(name_reg)) {
                    errormessage = '';
                    error_message.textContent = errormessage;
                } else if (value.match(name_reg) == null) {
                    event.target.value = ''
                    errormessage = `Enter valid ${key}`;
                    error_message.textContent = errormessage;
                }
            }

            if (key === 'lastname' && value) {

                if (value.match(name_reg)) {
                    errormessage = '';
                    error_message.textContent = errormessage;
                } else if (value.match(name_reg) == null) {
                    event.target.value = ''
                    errormessage = `Enter valid ${key}`;
                    error_message.textContent = errormessage;
                }
            }


            if (key === "password" && value) {

                toggleError(true)

                if (value.match(passwordpattern)) {
                    toggleError(false);
                    password = value;
                    pass_strength.textContent = 'Password Strength: '.concat(+ value.length <= 11 ? (pass_strength.style.color = "red", "weak") : value.length <= 14 ? (pass_strength.style.color = "yellow", "fair") : (pass_strength.style = "#00ff00", "Strong"));
                }

                if (value.match(/[a-z]/)) {
                    document.getElementById("low-case").style.color = "green";
                } else {
                    document.getElementById("low-case").style.color = "red";
                }

                if (value.match(/[A-Z]/)) {
                    document.getElementById("up-case").style.color = "green";
                } else {
                    document.getElementById("up-case").style.color = " red";
                }

                if (value.match(/\d/)) {
                    document.getElementById("num").style.color = "green";
                } else {
                    document.getElementById("num").style.color = "red";
                }

                if (/.{8,20}/.test(value)) {
                    document.getElementById("length").style.color = "green";
                } else {
                    document.getElementById("length").style.color = "red";
                }
            }

            if (key === 'confirmpassword' && value) {
                if (value === password) {
                    return
                } else {
                    errormessage = `Confirm Password does not match`;
                    error_message.textContent = errormessage;
                }

            }

            if (key === 'phonenumber' && value) {

                if (!/^[0-9]/.test(value)) {
                    event.target.value = '';
                }

                if (value.length == 13) {
                    if (value.match(num_reg) == null) {
                        event.target.value = '';
                    }
                }
            } else {
                errormessage = ` Ode you don forget to put ${key}`;
                error_message.textContent = errormessage;
            }

            if (key === 'email' && value != '') {
                if (!value.match(mail))
                    errormessage = ` Ode you don forget to put ${key}`;
                return error_message.textContent = errormessage;
            }
        }
    });

    register_form.addEventListener("submit", (event) => {
        event.preventDefault();

        let formdata = new FormData(register_form);
        let errormessage = "";
        let error_message = document.getElementById("mirage");
        let password = '';



        for (const [key, value] of formdata.entries()) {

            if (key === 'firstname' && value === '') {
                errormessage = ` Ode you don forget to put ${key}`;
                return error_message.textContent = errormessage;
            } else if (key === 'lastname' && value === '') {
                errormessage = ` Mumu you don forget to put ${key}`;
                return error_message.textContent = errormessage;
            } else if (key === 'password' && value === '') {

                // if (passwordpattern.test(event.target.value)) {
                //     password = value;
                console.log(value)
                //     errormessage = ` Idiot you don forget to put ${key}`;
                //     return error_message.textContent = errormessage;
                // }
            } else if (key === 'confirmpassword' && value === '') {
                if (password === value) {
                    return;
                } else {
                    error_message = `ode check your password the two no rhyme`
                    return error_message.textContent = error_message;
                }

                errormessage = ` Dumbass you don forget to ${key}`;
                return error_message.textContent = errormessage;
            } else if (key === 'phonenumber' && value === '') {
                errormessage = ` Idiot you don forget to put ${key}`;
                return error_message.textContent = errormessage;
            } else if (key === 'emailaddress' && value === '') {
                errormessage = ` Mumu you don forget to put ${key}`;
                return error_message.textContent = errormessage;
            }
        }

        checkuser(formdata.get('email'))
    });

    function checkuser(email) {

        let userValue = user.find((u => u['email'] === email));

        if (userValue.email) {
            alert("Ok you don get account")
            window.location.href = "login.html"
        }
        else {
            alert("dey go na you no even get account")
            window.location.reload();
        }

    }

}

if (login_form) {
    login();
}

function login() {



    login_form.addEventListener("input", (event) => {
        event.preventDefault();
        let formdata = new FormData(login_form);
        let errormessage = "";
        let error_message = document.getElementById("illusion");
        let password =''

        for (const [key, value] of formdata.entries()) {
            if (key === 'email' && value !='') {
                errormessage = ` input your  ${key}`;
                return error_message.textContent = errormessage;
            } else if (key === 'password' && value !='') {
                errormessage = `input your ${key}`
                return error_message.textContent = errormessage;
            }
        }
    });




    login_form.addEventListener("submit", (event) => {
        event.preventDefault();

        let formdata = new FormData(login_form);
        let errormessage = "";
        let error_message = document.getElementById("illusion");



        for (const [key, value] of formdata.entries()) {
            if (key === 'email' && value === '') {
                errormessage = `input your ${key}`;
                return error_message.textContent = errormessage;
            } else if (key === 'password' && value === '') {
                errormessage = `input your ${key}`
                return error_message.textContent = errormessage;
            }

        }

    });




}