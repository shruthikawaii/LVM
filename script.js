// Sample code for dynamic article loading
document.addEventListener("DOMContentLoaded", () => {
    const articleList = document.getElementById('article-list');

    // Example articles
    const articles = [
        {
            title: "Article 1",
            image: "article1.jpg",
            excerpt: "This is a brief excerpt from Article 1.",
            info: "Author: Author 1 | Date: 2024"
        },
        {
            title: "Article 2",
            image: "article2.jpg",
            excerpt: "This is a brief excerpt from Article 2.",
            info: "Author: Author 2 | Date: 2024"
        }
        // Add more articles as needed
    ];

    articles.forEach(article => {
        const tile = document.createElement('div');
        tile.className = 'article-tile';

        tile.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-info">${article.info}</p>
                <p class="article-excerpt">${article.excerpt}</p>
            </div>
        `;
        
        articleList.appendChild(tile);
    });
});
