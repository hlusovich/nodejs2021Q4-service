const uuid = require('uuid');

class Board {
  constructor({ title, columns, id }) {
    this.id = id || uuid.v4();
    this.title = title;
    this.columns = new Set(columns);
  }

  toResponse(){
    return {
      id:this.id,
      title:this.title,
      columns: [...this.columns]
    }
  }

}

module.exports = Board;
