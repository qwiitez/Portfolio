const translations = {
    en: {
        "header-title": "Hi, my name is Danylo Kustov",
        "header-description": "An aspiring web developer with experience in HTML and CSS. Interested in web design and eager to develop skills in this area!",
        "about-title": "About Me",
        "about-content": "Hi, my name is Danylo Kustov and I specialize in creating web pages using HTML and CSS. My goal is to develop user-friendly and aesthetically pleasing interfaces, simplify complex processes, and share my knowledge with others.",
        "projects-title": "Projects & Links",
        "project1-title": "My First Project",
        "project1-description": "Ukrainian site about fictional geese",
        "project2-title": "Second Project",
        "project2-description": "A portfolio showcasing modern web design",
    },
    ru: {
        "header-title": "Привет, меня зовут Данило Кустов",
        "header-description": "Начинающий веб-разработчик с опытом работы с HTML и CSS. Интересуюсь веб-дизайном и стремлюсь развивать навыки в этой области!",
        "about-title": "Обо мне",
        "about-content": "Привет, меня зовут Данило Кустов. Я специализируюсь на создании веб-страниц с использованием HTML и CSS. Моя цель — разрабатывать удобные и эстетически приятные интерфейсы, упрощать сложные процессы и делиться знаниями с другими.",
        "projects-title": "Проекты и ссылки",
        "project1-title": "Мой первый проект",
        "project1-description": "Украинский сайт о вымышленных гусях",
        "project2-title": "Второй проект",
        "project2-description": "Портфолио, демонстрирующее современный веб-дизайн",
    },
    lt: {
        "header-title": "Labas, mano vardas yra Danylo Kustov",
        "header-description": "Pradedantysis tinklalapių kūrėjas, turintis patirties su HTML ir CSS. Domiuosi tinklalapių dizainu ir noriu tobulinti įgūdžius šioje srityje!",
        "about-title": "Apie mane",
        "about-content": "Labas, mano vardas yra Danylo Kustov. Specializuojuosi kurdamas tinklalapius naudodamas HTML ir CSS. Mano tikslas – kurti patogias ir estetiškai patrauklias sąsajas, supaprastinti sudėtingus procesus ir dalytis savo žiniomis su kitais.",
        "projects-title": "Projektai ir nuorodos",
        "project1-title": "Mano pirmasis projektas",
        "project1-description": "Ukrainos svetainė apie išgalvotus žąsis",
        "project2-title": "Antrasis projektas",
        "project2-description": "Portfolio, demonstruojantis modernų tinklalapių dizainą",
    }
};

// Функция смены языка
function switchLanguage(language) {
    const elementsToTranslate = document.querySelectorAll("[id]");
    elementsToTranslate.forEach((element) => {
        const translationKey = element.id;
        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });
}

// Обработчик события для селектора
const languageSelector = document.getElementById("language-selector");
languageSelector.addEventListener("change", (event) => {
    switchLanguage(event.target.value);
});
