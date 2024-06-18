/**
 * Slices a given text to a specified length and appends an ellipsis if the original text is longer than 15 characters.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} num - The number of characters to slice from the text.
 * @returns {string} - The sliced text with an ellipsis appended if the original text length is greater than 15 characters, otherwise returns the original text.
 */
export const textSlicer = (text: string,num:number): string=> {
  if(text.length > 15){
    const newText = text.slice(0,num);
    return `${newText}...`;
  }else {
    return text;
  }
}