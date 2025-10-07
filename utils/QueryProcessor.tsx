export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "heesunp";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "heesunp";
  }

  // Handle addition queries like "What is 27 plus 7?"
  const additionMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1]);
    const num2 = parseInt(additionMatch[2]);
    return (num1 + num2).toString();
  }

  // Handle largest number queries like "Which of the following numbers is the largest: 64, 24, 99?"
  const largestMatch = query.match(/which of the following numbers is the largest: ([^?]+)\?/i);
  if (largestMatch) {
    const numbersStr = largestMatch[1];
    const numbers = numbersStr.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (numbers.length > 0) {
      const largest = Math.max(...numbers);
      return largest.toString();
    }
  }

  return "";
}
