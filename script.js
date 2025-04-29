window.onload = function () {
    // عداد الزوار
    let visits = parseInt(localStorage.getItem("visits")) || 0;
  
    if (!sessionStorage.getItem("visited")) {
      visits++;
      localStorage.setItem("visits", visits);
      sessionStorage.setItem("visited", "true");
    }
  
    document.getElementById("visitorCount").textContent = visits;
  
    console.log("Visits: " + visits);
  };
  
  // تأثير التحريك عند التمرير
  window.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    const scrollY = window.scrollY || window.pageYOffset;
    container.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
  