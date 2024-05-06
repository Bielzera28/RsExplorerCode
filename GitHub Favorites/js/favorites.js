// classe com logica dos dados e como serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}


// classe que vai criar visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }
}