// عداد الزوار العالمي باستخدام CountAPI
window.onload = function () {
  fetch('https://api.countapi.xyz/hit/anis-benticha.dev/visits')
    .then(response => response.json())
    .then(data => {
      document.getElementById("visitorCount").textContent = data.value;
      console.log("Visits: " + data.value);
    });
};

// تأثير التحريك عند التمرير
window.addEventListener('scroll', () => {
  const container = document.querySelector('.container');
  const scrollY = window.scrollY || window.pageYOffset;
  container.style.transform = `translateY(${scrollY * 0.3}px)`;
});
