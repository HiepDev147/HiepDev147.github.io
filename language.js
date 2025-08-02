// 🌀 Auto detect language
const userLang = navigator.language || navigator.userLanguage;
let langCode = userLang.split('-')[0]; // "vi" từ "vi-VN"

// Fallback nếu không hỗ trợ
const supportedLangs = ['en', 'vi', 'ja'];
if (!supportedLangs.includes(langCode)) {
  langCode = 'en';
}

// 🛸 Tải file JSON và dịch các phần tử
fetch('lang.json')
  .then(res => res.json())
  .then(data => {
    const translations = data[langCode];
    document.querySelectorAll(".translate").forEach(el => {
      const key = el.getAttribute("data-key");
      
      if (translations[key]) {
        el.innerText = translations[key];
      }
      if (langCode === "ja") {
        document.body.style.fontFamily = "'Dela Gothic One', sans-serif";
      }
    });
  })
  .catch(err => {
    console.error("Oops~ lỗi tải file JSON:", err);
  });