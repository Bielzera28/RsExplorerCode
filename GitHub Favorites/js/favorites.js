// classe com logica dos dados e como serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
  }

  load() {
    this.entries = [
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "200",
      },
      {
        login: "diego3g",
        name: "Diego Fernandes",
        public_repos: "96",
        followers: "1320",
      },
    ];
  }
}

// classe que vai criar visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();
    this.entries.forEach(user => {
      const row = this.createRow()
      row.querySelector(".user img").src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${user.name}`
      row.querySelector(".user p").textContent = user.name
      this.tbody.append(row)
      row.querySelector(".user span").textContent = user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers
    })
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="user">
    <img src="https://github.com/bielzera28.png" alt="Imagem de Gabriel Aguiar">
    <a href="https://github.com/bielzera28" target="_blank">
    <p>Gabriel</p>
    <span>bielzera28</span>
    </a>
     </td>
     <td class="repositories">76</td>
     <td class="followers">9589</td>
     <td>
      <button class="remove">&times;</button>
    </td>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
