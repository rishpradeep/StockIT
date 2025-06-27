document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(`${currentTheme}-mode`);
  });
  
  function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains("dark-mode");
    body.classList.toggle("dark-mode", !isDark);
    body.classList.toggle("light-mode", isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  }

  function toggleSidebar() {
    console.log('AAAAAAAAAAAAAAAAAAA');
    document.getElementById('sidebar').classList.toggle('collapsed');
  }


    const pieCanvas = document.getElementById('pieChart');
    if (pieCanvas){
        const pieCtx = pieCanvas.getContext('2d');
        new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['SBUX', 'MBG.BE', 'NVDA', 'VWAGY'],
        datasets: [{
          data: [57, 37, 76, 8],
          backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24']
        }]
      }
    });
    }

    const barCanvas = document.getElementById('barChart');
    if (barCanvas) {
        const barCtx = barCanvas.getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['SBUX', 'MBG.BE', 'NVDA', 'VWAGY'],
        datasets: [{
          label: 'Returns ($)',
          data: [120, 240, 580, 94],
          backgroundColor: '#3b82f6'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    }

    
