function toggleTheme() {
      const isDark = document.body.classList.contains("dark-mode");
      document.body.classList.toggle("dark-mode", !isDark);
      document.body.classList.toggle("light-mode", isDark);
      localStorage.setItem("theme", isDark ? "light" : "dark");
    }

    window.addEventListener('DOMContentLoaded', () => {
      const saved = localStorage.getItem('theme') || 'dark';
      document.body.classList.add(`${saved}-mode`);

      const container = document.getElementById('news-container');
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
      const NEWS_API_KEY = '00LFBtJzDoQgaoRiT1y4Z2Q0vup5iZtFEU5vhUXo';

      fetch(`${CORS_PROXY}https://api.marketaux.com/v1/news/all?countries=us&filter_entities=true&language=en&api_token=${00LFBtJzDoQgaoRiT1y4Z2Q0vup5iZtFEU5vhUXo}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.articles)) {
            data.articles.forEach(article => {
              const card = document.createElement('div');
              card.className = 'news-card';
              card.innerHTML = `
                <img src="${article.image_url || 'https://via.placeholder.com/120x80'}" alt="News Image">
                <div class="news-details">
                  <h3>${article.title}</h3>
                  <p>${article.description || 'No summary available.'}</p>
                  <a href="${article.url}" target="_blank">Read More →</a>
                </div>
              `;
              container.appendChild(card);
            });
          } else {
            container.innerHTML = '<p>⚠️ No news available (check API response).</p>';
            console.warn('NewsAPI response:', data);
          }
        })
        .catch(err => {
          if (container) {
            container.innerHTML = '<p>⚠️ Failed to load news. Please check your API key or run with Live Server.</p>';
          }
          console.error(err);
        });
 });
