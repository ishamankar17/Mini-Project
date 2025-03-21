document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("languageSelect").addEventListener("change", function () {
        const language = this.value;

        const translations = {
            "en": {
                "title": "Learn Indian Sign Language",
                "subtitle": "Empowering communication through ISL - Learn, Practice, and Connect!",
                "bridging": "Bridging Communication for the Deaf & Mute",
                "start": "Start Learning",
                "explore": "Explore the basics of Indian Sign Language through interactive visuals.",
                "home": "Home",
                "learn": "Learn",
                "translator": "Translator",
                "about": "About",
                "contact": "Contact"
            },
            "hi": {
                "title": "भारतीय सांकेतिक भाषा सीखें",
                "subtitle": "आईएसएल के माध्यम से संचार को सशक्त बनाना - सीखें, अभ्यास करें और जुड़ें!",
                "bridging": "बधिर और मूक के लिए संचार का पुल",
                "start": "सीखना शुरू करें",
                "explore": "इंटरएक्टिव दृश्य के माध्यम से भारतीय सांकेतिक भाषा की मूल बातें जानें।",
                "home": "होम",
                "learn": "सीखें",
                "translator": "अनुवादक",
                "about": "के बारे में",
                "contact": "संपर्क करें"
            }
        };

        // Update text content
        document.querySelector("h1").textContent = translations[language].title;
        document.querySelector("p").textContent = translations[language].subtitle;
        document.querySelector(".hero h2").textContent = translations[language].bridging;
        document.getElementById("ctaButton").textContent = translations[language].start;
        document.querySelector(".hero p").textContent = translations[language].explore;

        // Update navbar items
        document.getElementById("navHome").textContent = translations[language].home;
        document.getElementById("navLearn").textContent = translations[language].learn;
        document.getElementById("navTranslator").textContent = translations[language].translator;
        document.getElementById("navAbout").textContent = translations[language].about;
        document.getElementById("navContact").textContent = translations[language].contact;
    });
});
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const navLinks = document.querySelectorAll('.navbar ul li');

    navLinks.forEach(link => {
        const linkName = link.id;

        if (linkName === currentPage) {
            link.classList.add('active');
        }
    });
});

 // Dark Mode Toggle
 darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
window.addEventListener('load', function() {
    // Get the current page filename from the URL (without extension)
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

    // Select all the list items in the navbar
    const navLinks = document.querySelectorAll('.navbar ul li');

    // Loop through all the navbar items
    navLinks.forEach(link => {
        // Get the ID of each <li> element
        const linkName = link.id;

        // If the link's ID matches the current page name, add the active class
        if (linkName === currentPage) {
            link.classList.add('active');
        }
    });
});

