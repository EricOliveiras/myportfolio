document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')  // Carrega o arquivo JSON local
    .then(response => response.json())
    .then(data => {
      const reposList = document.getElementById('github-repos');
      data.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.classList.add('card');
        listItem.innerHTML = `
          <a href="${repo.url}" target="_blank">
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "Sem descrição disponível"}</p>
          </a>
        `;
        reposList.appendChild(listItem);
      });
    })
    .catch(error => console.error('Erro ao carregar os repositórios:', error));
});
