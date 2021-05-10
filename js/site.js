let form = document.getElementById('registrationForm');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    const values = [...data.values()];

    console.log(values);

    let login = data.get("exampleInputName");
    let email = data.get("exampleInputEmail1");
    let password = data.get("exampleInputPassword1");
    let password2 = data.get("exampleInputPassword2");

     if (login.length == 0 || email.length == 0 || password.length == 0 || password2.length == 0) {
        Swal.fire('Указана не вся информация', 'Заполните все поля', 'error');
        return;
    }
    if (password != password2) {
        Swal.fire('Пароли не совпадают!', '', 'error');
        return;
    }
    if (password.length < 6) {
        Swal.fire('Пароль слишком короткий!', '', 'warning');
        return;
    }
    Swal.fire('Поздравляем!', 'Регистрация завершена', 'success');
});
