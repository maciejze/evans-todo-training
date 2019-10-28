export class Task {
  public name: string;
  public description: string;
  public id: string;
  public isDone: boolean;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
