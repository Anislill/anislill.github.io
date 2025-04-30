// عداد زوار عالمي باستخدام CountAPI
window.onload = function () {
  fetch('https://api.countapi.xyz/hit/anisbt-test123/visits')
    .then(response => response.json())
    .then(data => {
      document.getElementById("visitorCount").textContent = data.value;
      console.log("عدد الزوار:", data.value);
    })
    .catch(error => {
      console.error("خطأ في جلب عدد الزوار:", error);
    });
};

// تأثير التحريك عند التمرير
window.addEventListener('scroll', () => {
  const container = document.querySelector('.container');
  const scrollY = window.scrollY || window.pageYOffset;
  container.style.transform = `translateY(${scrollY * 0.3}px)`;
});
