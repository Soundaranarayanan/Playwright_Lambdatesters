// src/helper/util/csvReader.ts
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface SearchData {
  ScenarioType: string;
  Input: string;
  Expected: string;
}

export function readCsvData(): SearchData[] {
  // Resolve path relative to the current file location
  const csvPath = path.join(__dirname, '../testData/searchData.csv');
  
  try {
    const fileContent = fs.readFileSync(csvPath, 'utf-8');
    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });
  } catch (error) {
    console.error(`Error reading CSV file at ${csvPath}:`, error);
    throw new Error(`Failed to read CSV data: ${error instanceof Error ? error.message : String(error)}`);
  }
}