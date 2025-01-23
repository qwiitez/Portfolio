const translations = {
    en: {
        headerTitle: "Hi, my name is Danylo Kustov",
        headerDescription: "An aspiring web developer with experience in HTML and CSS. Interested in web design and eager to develop skills in this area!",
        aboutTitle: "About Me",
        aboutDescription: "Hi, my name is Danylo Kustov and I specialize in creating web pages using HTML and CSS. My goal is to develop user-friendly and aesthetically pleasing interfaces, simplify complex processes, and share my knowledge with others.",
        projectsTitle: "Projects & Links",
        projectTitle: "My First Project",
        projectDescription: "Ukrainian site about fictional geese",
        footerText: "© 2025 qwiitez. All rights reserved."
    },
    ru: {
        headerTitle: "Привет, меня зовут Данило Кустов",
        headerDescription: "Начинающий веб-разработчик с опытом работы в HTML и CSS. Интересуюсь веб-дизайном и хочу развиваться в этой области!",
        aboutTitle: "Обо мне",
        aboutDescription: "Привет, меня зовут Данило Кустов, и я специализируюсь на создании веб-страниц с использованием HTML и CSS. Моя цель - разрабатывать удобные и эстетичные интерфейсы, упрощать сложные процессы и делиться знаниями с другими.",
        projectsTitle: "Проекты и ссылки",
        projectTitle: "Мой первый проект",
        projectDescription: "Украинский сайт о вымышленных гусях",
        footerText: "© 2025 qwiitez. Все права защищены."
    },
    lt: {
        headerTitle: "Labas, mano vardas Danylo Kustov",
        headerDescription: "Pradedantysis interneto svetainių kūrėjas, turintis HTML ir CSS patirties. Domiuosi interneto dizainu ir noriu tobulėti šioje srityje!",
        aboutTitle: "Apie mane",
        aboutDescription: "Labas, mano vardas Danylo Kustov, ir aš specializuojuosi kurti interneto puslapius, naudodamas HTML ir CSS. Mano tikslas yra kurti patogias ir estetiškai patrauklias sąsajas, supaprastinti sudėtingus procesus ir dalintis žiniomis su kitais.",
        projectsTitle: "Projektai ir nuorodos",
        projectTitle: "Mano pirmasis projektas",
        projectDescription: "Ukrainos svetainė apie išgalvotus žąsis",
        footerText: "© 2025 qwiitez. Visos teisės saugomos."
    }
};

function changeLanguage(lang) {
    document.getElementById("header-title").textContent = translations[lang].headerTitle;
    document.getElementById("header-description").textContent = translations[lang].headerDescription;
    document.getElementById("about-title").textContent = translations[lang].aboutTitle;
    document.getElementById("about-description").textContent = translations[lang].aboutDescription;
    document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
    document.getElementById("project-title").textContent = translations[lang].projectTitle;
    document.getElementById("project-description").textContent = translations[lang].projectDescription;
    document.getElementById("footer-text").textContent = translations[lang].footerText;

    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"));
    document.getElementById(`btn-${lang}`).classList.add("active");
}

const savedLang = localStorage.getItem("lang") || "en";
changeLanguage(savedLang);
