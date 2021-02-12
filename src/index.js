const safe_password = (sentence, minlength=8, maxlength=16) => {

  if (minlength > maxlength)
    return 'length error';

  const str = sentence;
  let password = str.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '');
  const chars = { 'a': '@', 'A': '@', 'e': '3', 'E': '3', 'h': '#', 'H': '#', 'i': '!', 'I': '!', 'n': '&', 'N': '&', 'o': '0', 'O': '0', 's': '5', 'S': '5', 't': '7', 'T': '7', 'z': '2', 'Z': '2' };
  password = password.replace(/[aAeEhHiInNoOsStTzZ]/g, m => chars[m]);

  while (password.length < (minlength || 8))
    password += password.length * (password.length - 1);

  if (password.length > maxlength)
    password = password.slice(0, maxlength - 1);
  return password;
}

module.exports = safe_password;




