  const teachers = JSON.parse(localStorage.getItem('activeTeacher'));

  const tests = [
    {
      question: "2 + 2 nechiga teng?",
      answers: ["3", "4", "5", "6"],
      correct: 2
    },
    {
      question: "gapni davom etiring: 70 75 legenda ....",
      answers: ["auuu", "ouuu", "aoooa", "uuuu"],
      correct: 3
    },
    {
      question: "img ishlashi uchun nimala kerak?",
      answers: ["src", "crs", "seni qolaring", "img"],
      correct: 0
    },
    {
      question: "Koding birdan ishlamay qolsa, eng ko‘p sabab nima?",
      answers: [
        "Kompyuter xafa",
        "Do‘sting tegib qo‘ygan",
        "Script ulangan emas",
        "Refresh qilmagansan"
      ],
      correct: 2
    },
    {
      question: "JavaScript’da eng ko‘p ***** qilinadigan narsa?",
      answers: ["console", "error", "variable", "if"],
      correct: 1
    },
    {
      question: "LocalStorage ishlamasa ***** noto‘g‘ri bo‘lishi mumkin",
      answers: ["kalit", "shahar", "kompyuter", "sinfxona"],
      correct: 0
    },
    {
      question: "Meme: 'Bu kodni ***** yozgan'",
      answers: ["aka", "robot", "noob", "python"],
      correct: 2
    },
    {
      question: "Natija chiqmasa odatda ***** unutib ketiladi",
      answers: ["script", "html", "comment", "style"],
      correct: 0
    },
    {
      question: "let bilan e’lon qilib qayta yozsang nima chiqadi?",
      answers: ["error", "yangi qiymat", "virus", "signal"],
      correct: 0
    },
    {
      question: "‘Alooo siz tel qilyapsizmi yoki telefonmi?’ memesi nima haqida?",
      answers: ["Internet", "Telefon sifati", "Tovuq", "Mashina"],
      correct: 1
    },
    {
      question: "‘Aka gap yo‘q’ degan ibora nimani bildiradi?",
      answers: ["Yomon", "Zo‘r", "O‘rtacha", "Tushunarsiz"],
      correct: 1
    },
    {
      question: "O‘zbekiston memelarida eng ko‘p ishlatiladigan emoji qaysi?",
      answers: ["😂", "🔥", "💀", "😎"],
      correct: 0
    },
    {
      question: "‘Bugun kayfiyat yo‘q’ memesi nimani bildiradi?",
      answers: ["Xursand", "Charchoq", "Kasallik", "Bayram"],
      correct: 1
    },
    {
      question: "‘Qoyil!’ degan so‘z nimani bildiradi?",
      answers: ["Norozi", "Hayron", "Ma’qullash", "Xafa"],
      correct: 2
    },
    {
      question: "‘O‘zing bilasan’ iborasi odatda nimani bildiradi?",
      answers: ["Rozilik", "G‘azab", "Befarqlik", "Quvonch"],
      correct: 2
    },
    {
      question: "‘Qani ko‘raylik’ iborasi nimani bildiradi?",
      answers: ["Qiziqish", "Uyqu", "Qo‘rquv", "Ochlik"],
      correct: 0
    },
    {
      question: "Doim ishlatiladigan JS metodi qaysi?",
      answers: ["console.log()", "Math.random()", "alert()", "prompt()"],
      correct: 0
    },
    {
      question: "‘Buni kim qildi?’ iborasi ko‘pincha nimaga ishlatiladi?",
      answers: ["Hazil", "Tergov", "Maqtov", "E’tirof"],
      correct: 1
    },
    {
      question: "‘Gap yo‘q’ degan ibora aslida nimani bildiradi?",
      answers: ["Yomon", "A’lo", "Oddiy", "Tushunarsiz"],
      correct: 1
    },
    {
      question: "Eng mashhur Telegram kanal turi?",
      answers: ["Dars", "Memelar", "Yangilik", "Sport"],
      correct: 1
    }
  ];

  let current = 0;
  let score = 0;
  const username = document.querySelector('.username');


    username.textContent =  teachers.firstName || "user";

  function loadQuestion() {
    const q = tests[current];

    document.getElementById("page").textContent =
      `${current + 1} / ${tests.length}`;

    document.getElementById("question").textContent = q.question;

    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    document.getElementById("result").textContent = "";

    q.answers.forEach((ans, index) => {
      const div = document.createElement("div");
      div.className = "answer";
      div.textContent = ans;
      div.onclick = () => checkAnswer(index);
      answersBox.appendChild(div);
    });
  }

  function checkAnswer(index) {
    const correct = tests[current].correct;

    if (index === correct) {
      score++;
      document.getElementById("result").textContent = "✅ To‘g‘ri!";
    } else {
      document.getElementById("result").textContent = "❌ Noto‘g‘ri!";
    }
  }

  function nextQuestion() {
    if (current < tests.length - 1) {
      current++;
      loadQuestion();
    } else {
      document.querySelector(".test-box").innerHTML = `
        <h2>Test tugadi ✅</h2>
        <p>Natija: ${score} / ${tests.length}</p>
      `;
    }
  }

  function prevQuestion() {
    if (current > 0) {
      current--;
      loadQuestion();
    }
  }

  loadQuestion();
