document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    
    fetch(`http://localhost:3000/api/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultsContainer').innerHTML = data.results.join('<br>');
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
});
