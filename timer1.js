const args = process.argv.slice(2);

if (!args.length) {
  return;
};

for (const num of args) {
  if (num < 0 || isNaN(num)) {
    continue;
  }
  let timer = 0;
  const timeInSeconds = num * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer += timeInSeconds);
};
