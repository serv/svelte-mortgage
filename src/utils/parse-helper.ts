export default class ParseHelper {
  // Able to remove commas in a string
  static parseCurrency(input: any): number {
    if (!input || input === undefined || input === null) {
      return 0;
    }

    if (typeof input === 'number') {
      return input;
    }

    console.log('2,', input);

    return parseFloat(input.replace(/,/g, ''));
  }

  static formatCurrency(input: number): string {
    return input.toLocaleString('en-US', {
      maximumFractionDigits: 2
    });
  }
}
