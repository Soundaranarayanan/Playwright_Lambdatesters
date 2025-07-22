import * as fs from 'fs';
import csv from 'csv-parser';

export async function getAddressData(): Promise<Record<string, string>[]> {
  const results: Record<string, string>[] = [];

  const filePath = 'C:\\LambdaTesters_Playwright\\Playwright_Cucumber\\src\\data\\address.csv';

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}
