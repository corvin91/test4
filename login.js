const teachers = [
  { firstName: "Emir",      lastName: "Ertan",        login: "emir99",      password: "Emir123@" },
  { firstName: "Saidali",   lastName: "Jonka",        login: "saidali01",   password: "Saidali123@" },
  { firstName: "Humoyun",   lastName: "Hunuyun",      login: "humoyun07",   password: "Humoyun123@" },
  { firstName: "Saidslom",  lastName: "Saidslomjonka",login: "saidslom90",  password: "Saidslom123@" },
  { firstName: "Sardor",    lastName: "Shashka",      login: "sardor77",    password: "Sardor123@" },
  { firstName: "Kamron",    lastName: "Kama",         login: "kamron10",    password: "Kamron123@" },
  { firstName: "Bexruz",    lastName: "Uuuuu",        login: "bexruz02",    password: "Bexruz123@" },
  { firstName: "Abdumovlon",lastName: "Mono",         login: "abdumovlon",  password: "Abdumovlon123@" },
  { firstName: "Abdulloh",  lastName: "Abu",          login: "abdulloh01",  password: "Abdulloh123@" }
];


function teacherr(teachers) {
  let submitBtn = document.querySelector('.submit-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let loginInput = document.querySelector('.login');
    let passwordInput = document.querySelector('.pasword');
    let textError = document.querySelector('.text');

    let loginValue = loginInput.value.toLowerCase().trim();
    let passwordValue = passwordInput.value.trim();

    if (loginValue === '' || passwordValue === '') {
      textError.style.display = 'block';
      loginInput.style.border = '1px solid red';
      passwordInput.style.border = '1px solid red';
      return;
    }

    let found = teachers.find((t) =>
      t.login.toLowerCase() === loginValue &&
      t.password === passwordValue
    );

    if (!found) {
      textError.style.display = 'block';
      loginInput.style.border = '1px solid red';
      passwordInput.style.border = '1px solid red';
    } else {
      textError.style.display = 'none';
      loginInput.style.border = '1px solid #ccc';
      passwordInput.style.border = '1px solid #ccc';

      localStorage.setItem('activeTeacher', JSON.stringify(found));
      window.location.href = './index.html';
    }
  });
}
localStorage.setItem('teachers', JSON.stringify(teachers));


teacherr(teachers);
