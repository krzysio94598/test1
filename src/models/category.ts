export class Category {
  id: number;
  parentId: number;
  parent?: Category;
  name: string;
  keywords: string;
}