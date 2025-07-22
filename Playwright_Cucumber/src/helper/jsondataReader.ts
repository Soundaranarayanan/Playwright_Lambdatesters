import * as fs from 'fs';
import * as path from 'path';

export class DataReader {
    private static data: any = null;

    static loadSearchTerms(): any {
        if (!this.data) {
            const filePath = path.join(__dirname, '../test/data/productCompareSearch.json');
            const rawData = fs.readFileSync(filePath, 'utf8');
            this.data = JSON.parse(rawData);
        }
        return this.data;
    }

    static getSearchTerm(key: string): string {
        const data = this.loadSearchTerms();
        const searchTerm = data.searchTerms[key];
        
        if (searchTerm === undefined) {
            throw new Error(`Search term not found for key: ${key}`);
        }
        
        console.log(`Using search term "${searchTerm}" for key: ${key}`);
        return searchTerm;
    }
}