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

      fetch('https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=5&apiKey=361b4c2a8cd94ac69593c81f86bbf669')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.articles)) {
            data.articles.forEach(article => {
              const card = document.createElement('div');
              card.className = 'news-card';
              card.innerHTML = `
                <img src="${article.urlToImage || 'https://via.placeholder.com/120x80'}" alt="News Image">
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
