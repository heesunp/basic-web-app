import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "heesunp"
          ));
    });

    test('should return Andrew ID', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("heesunp");
    });

    test('should handle addition queries', () => {
        const query1 = "What is 27 plus 7?";
        const response1: string = QueryProcessor(query1);
        expect(response1).toBe("34");

        const query2 = "What is 53 plus 65?";
        const response2: string = QueryProcessor(query2);
        expect(response2).toBe("118");
    });

    test('should handle largest number queries', () => {
        const query = "Which of the following numbers is the largest: 64, 24, 99?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("99");
    });
});