const translations = {
    "en": {
        "firstItem": "Look my portfolio !",
        "secondItem": "This project Repository",
        "project1" :"Project 1",
        "project2" :"Project 2",
        "project3" :"Project 3"
    },
    "PT-BR": {
        "firstItem": "Ver meu portfólio",
        "secondItem": "Repositório desse projeto",
        "project1" :"Projeto 1",
        "project2" :"Projeto 2",
        "project3" :"Projeto 3"
    }
};

document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById('language-toggle');
  const languageText = document.getElementById('language-text');

  languageToggle.addEventListener('change', () => {
      const language = languageToggle.checked ? 'en' : 'PT-BR';
      localStorage.setItem('preferredLanguage', language);
      languageText.textContent = language === 'en' ? 'English' : 'PT-BR';
      loadLanguage(language);
  });

  function loadLanguage(language) {
      const translation = translations[language];
      if (translation) {
          document.querySelectorAll('[data-key]').forEach(element => {
              const key = element.getAttribute('data-key');
              if (translation[key]) {
                  element.textContent = translation[key];
              }
          });
      }
  }

  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'PT-BR';
  languageToggle.checked = (preferredLanguage === 'en');
  languageText.textContent = preferredLanguage === 'en' ? 'English' : 'PT-BR';
  loadLanguage(preferredLanguage);
});
