export class Column {
  id: string;

  title: string;

  order: number;

  constructor(id:string, title:string, order:number) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}
