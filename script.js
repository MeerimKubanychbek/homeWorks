window.onload = function () {


    let input1 = document.getElementById('input_name');

    input1.onkeydown = (e) => {
        let letters = parseInt(e.key);
        if (!isNaN(letters)) {
            return false;
        }
        console.log(e.key);
    }

    let input2 = document.getElementById('input_username');

    input2.onkeydown = (e) => {
        if ((e.key === ".") || (e.key === ",")) {
            return false;
        }
    }


    let checkbox = document.getElementsByName('agreed')[0];


    checkbox.onchange = function () {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    }



    let input3 = document.getElementById('input_email'),
        input4 = document.getElementById('input_password'),
        input5 = document.getElementById('input_repeatPassword'),
        button = document.getElementById('button'),
        modal = document.getElementById('modal');

    const formRegistration = () => {
        const isValid = validateFormRegistration();
        if(isValid) {
            modal.style.display = 'block';
            goToLoginPage()
        }
    };

    function validateFormRegistration() {
        function goToLoginPage() {
            input1.value = '';
            input2.value = '';
            input3.value = '';
            input4.value = '';
            input5.value = '';
            formTitle.innerText = 'Log in to the system';
            fullName.remove();
            document.getElementById('e-mail').remove();
            document.getElementById('repeatPassword').remove();
            document.getElementsByClassName('agree')[0].remove();
            already.remove()
            button.value = 'Sign In';
        }

    }
button.addEventListener('click', formRegistration);

    button.onclick = function () {
        if (!input1.value) {
            alert('Заполните поле Full Name');
            return;
        }
        if (!input2.value) {
            alert('Заполните поле Username');
            return;
        }
        if (!input3.value) {
            alert('Заполните  поле Email');
            return;
        }
        if (!input4.value) {
            alert('Заполните поле Password');
            return;
        }
        if (input4.value.length < 8) {
            alert('Пароль должен быть не менее 8 символов');
            return;
        }
        if (!input5.value) {
            alert('Заполните Repeat password');
            return;
        }
        if (input5.value !== input4.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (input5.value !== input4.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (!checkbox.checked) {
            alert('Поставьте галочку "Agree to our Terms of Service and Privacy Statement"');
            return;
        }
        modal.style.display = 'block';
    }


    let modalButton = document.getElementById('modal_button'),
        already = document.getElementsByClassName('text_account')[0],
        formTitle = document.getElementsByClassName('form_title')[0],
        fullName = document.getElementById('fullName');


    let signIn = function () {
        input1.value = '';
        input2.value = '';
        input3.value = '';
        input4.value = '';
        input5.value = '';
        formTitle.innerText = 'Log in to the system';
        fullName.remove();
        document.getElementById('e-mail').remove();
        document.getElementById('repeatPassword').remove();
        document.getElementsByClassName('agree')[0].remove();
        already.remove()
        button.value = 'Sign In';
        button.onclick = function () {
            if (!input2.value) {
                alert('Заполните Username');
                return;
            }
            if (!input4.value) {
                alert('Заполните Password');
                return;
            }


            alert(`Добро пожаловать ${input2.value}!`);
        };
    };

    function openModal() {
        modal.style.display = 'block';
    }
    function closeModal() {
        modal.style.display = 'block';
    }
    modalButton.onclick = function () {
        modal.style.display = 'none';
        closeModal()
        signIn();
    }

    already.onclick = function () {
        signIn();
    }
}