    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    window.addEventListener('DOMContentLoaded', () => {
      const saved = localStorage.getItem("theme") || "dark";
      if (saved === "light") {
        document.body.classList.add("light-mode");
      }
    });
    
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Portfolio Value',
          data: [14200, 14350, 14100, 14400, 14300],
          borderColor: '#00ff57',
          backgroundColor: 'rgba(0, 255, 87, 0.1)',
          borderWidth: 2,
          tension: 0.3,
          pointBackgroundColor: '#00ff57',
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: { color: getComputedStyle(document.body).getPropertyValue('--text') }
          }
        },
        scales: {
          x: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--muted') } },
          y: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--muted') } }
        }
      }
    }); 

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
  }
 
