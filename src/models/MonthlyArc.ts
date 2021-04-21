import { nanoid } from 'nanoid';

export default class MonthlyArc {
  id: string;
  displayName: string;
  name: string;
  amount: number;
  color: string;

  constructor(
    displayName: string,
    name: string,
    amount: number,
    color: string
  ) {
    this.id = nanoid();
    this.displayName = displayName;
    this.name = name;
    this.amount = amount;
    this.color = color;
  }
}
