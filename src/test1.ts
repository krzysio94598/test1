import { Category } from "./models/category";

console.log("running tests..");

const testData: Category[] = [
  { id: 100, parentId: -1, name: "Business", keywords: "Money" },
  { id: 200, parentId: -1, name: "Tutoring", keywords: "Teaching" },
  { id: 101, parentId: 100, name: "Accounting", keywords: "Taxes" },
  { id: 102, parentId: 100, name: "Taxation", keywords: "" },
  { id: 201, parentId: 200, name: "Computer", keywords: "" },
  { id: 103, parentId: 101, name: "Corporate Tax", keywords: "" },
  { id: 202, parentId: 201, name: "Operating System", keywords: "" },
  { id: 109, parentId: 101, name: "Small business Tax", keywords: "" },
];


class Tester {

  static getKeywords(category: Category): string {
    if (category.keywords.length) {
      return category.keywords;
    }

    if (category.parentId > -1) {
      const parent = testData.find(x => x.id === category.parentId);
      return Tester.getKeywords(parent);
    }

    return "";
  }

  static getLevel(category: Category): number {
    if (category.parentId === -1) {
      return 1;
    }

    const parent = testData.find(x => x.id === category.parentId);

    const level = Tester.getLevel(parent) + 1;
    return level;
  }

  static test1(categoryId: number): string {
    const category: Category = testData.find(x => x.id === categoryId);
    return `Output: ParentCategoryId=${category.parentId} Name=${category.name} Keywords=${Tester.getKeywords(category)}`;
  }

  static test2(categoryLevel: number) {
    return testData.filter(x => Tester.getLevel(x) === categoryLevel);
  }

}


console.info(Tester.test1(201));
console.info(Tester.test1(202));

console.info(" *** test2 level 1 ***");
Tester.test2(1).forEach(tr => console.info(`${tr.name}`));
console.info(" *** test2 level 2 ***");
Tester.test2(2).forEach(tr => console.info(`${tr.name}`));
console.info(" *** test2 level 3 ***");
Tester.test2(3).forEach(tr => console.info(`${tr.name}`));
