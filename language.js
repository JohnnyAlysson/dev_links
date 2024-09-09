const translations = {
  "en": {
      "greeting": "Hello",
      "farewell": "How are you today?"
  },
  "tr": {
      "greeting": "Merhaba",
      "farewell": "Bugün Nasılsın?"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById('language-toggle');
  const languageText = document.getElementById('language-text');

  languageToggle.addEventListener('change', () => {
      const language = languageToggle.checked ? 'en' : 'tr';
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

  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'tr';
  languageToggle.checked = (preferredLanguage === 'en');
  languageText.textContent = preferredLanguage === 'en' ? 'English' : 'PT-BR';
  loadLanguage(preferredLanguage);
});
