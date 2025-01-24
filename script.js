const translations = {
    en: {
        headerTitle: "Hi, my name is Danylo Kustov",
        headerDescription: "An aspiring web developer with experience in HTML and CSS. Interested in web design and eager to develop skills in this area!",
        aboutTitle: "About Me",
        aboutContent: "Hi, my name is Danylo Kustov and I specialize in creating web pages using HTML and CSS. My goal is to develop user-friendly and aesthetically pleasing interfaces, simplify complex processes, and share my knowledge with others.",
        reviewsTitle: "Reviews",
        namePlaceholder: "Your Name",
        reviewPlaceholder: "Write your review here...",
        ratingText: "Rate:",
        ratingOptions: ["Choose...", "5 - Excellent", "4 - Good", "3 - Average", "2 - Poor", "1 - Terrible"],
        reviewButton: "Post Review",
    },
    ru: {
        headerTitle: "Привет, меня зовут Данило Кустов",
        headerDescription: "Начинающий веб-разработчик с опытом работы с HTML и CSS. Интересуюсь веб-дизайном и стремлюсь развивать навыки в этой области!",
        aboutTitle: "Обо мне",
        aboutContent: "Привет, меня зовут Данило Кустов, и я специализируюсь на создании веб-страниц с использованием HTML и CSS. Моя цель — разрабатывать удобные и эстетически приятные интерфейсы, упрощать сложные процессы и делиться своими знаниями с другими.",
        reviewsTitle: "Отзывы",
        namePlaceholder: "Ваше имя",
        reviewPlaceholder: "Напишите свой отзыв здесь...",
        ratingText: "Оценка:",
        ratingOptions: ["Выбрать...", "5 - Отлично", "4 - Хорошо", "3 - Средне", "2 - Плохо", "1 - Ужасно"],
        reviewButton: "Оставить отзыв",
    },
    lt: {
        headerTitle: "Sveiki, mano vardas Danylo Kustov",
        headerDescription: "Pradedantis interneto kūrėjas, turintis HTML ir CSS patirties. Domiuosi interneto dizainu ir siekiu tobulinti įgūdžius šioje srityje!",
        aboutTitle: "Apie mane",
        aboutContent: "Sveiki, mano vardas Danylo Kustov ir aš specializuojuosi kuriant tinklalapius naudojant HTML ir CSS. Mano tikslas - kurti patogias ir estetiškai patrauklias sąsajas, supaprastinti sudėtingus procesus ir dalytis savo žiniomis su kitais.",
        reviewsTitle: "Atsiliepimai",
        namePlaceholder: "Jūsų vardas",
        reviewPlaceholder: "Rašykite savo atsiliepimą čia...",
        ratingText: "Įvertinimas:",
        ratingOptions: ["Pasirinkti...", "5 - Puiku", "4 - Gerai", "3 - Vidutiniškai", "2 - Blogai", "1 - Siaubinga"],
        reviewButton: "Palikti atsiliepimą",
    },
};

document.getElementById("language-selector").addEventListener("change", function () {
    const selectedLanguage = this.value;
    const translation = translations[selectedLanguage];

    // Перевод заголовков
    document.getElementById("header-title").textContent = translation.headerTitle;
    document.getElementById("header-description").textContent = translation.headerDescription;
    document.getElementById("about-title").textContent = translation.aboutTitle;
    document.getElementById("about-content").textContent = translation.aboutContent;
    document.getElementById("reviews-title").textContent = translation.reviewsTitle;

    // Перевод отзывов
    document.getElementById("name-input").placeholder = translation.namePlaceholder;
    document.getElementById("review-input").placeholder = translation.reviewPlaceholder;
    document.getElementById("rating-text").textContent = translation.ratingText;

    const ratingInput = document.getElementById("rating-input");
    ratingInput.innerHTML = ""; // Очистить старые опции
    translation.ratingOptions.forEach((option, index) => {
        const opt = document.createElement("option");
        opt.value = index === 0 ? "" : 5 - (index - 1); // Значение от 5 до 1
        opt.textContent = option;
        if (index === 0) opt.disabled = true;
        ratingInput.appendChild(opt);
    });

    document.getElementById("review-button").textContent = translation.reviewButton;
});
