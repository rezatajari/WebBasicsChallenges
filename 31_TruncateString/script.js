function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.substring(0, num) + '...';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // "A-tisket..."
console.log(truncateString("Hello World", 5));                                   // "Hello..."
console.log(truncateString("Hi", 2));                                           // "Hi"
