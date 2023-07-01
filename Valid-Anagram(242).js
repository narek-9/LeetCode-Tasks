// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
  const firstWordChars = s.split("").sort();
  const secondWordChars = t.split("").sort();

  if (firstWordChars.length !== secondWordChars.length) {
    return false;
  }

  for (let i = 0; i < firstWordChars.length; i++) {
    if (firstWordChars[i] !== secondWordChars[i]) {
      return false;
    }
  }
  return true;
};
