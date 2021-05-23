export const masking = (name: string): string => {
  if (name.length > 2) {
    let originalName = name.split('');

    originalName.forEach((name, i) => {
      if (i === 0 || i === originalName.length - 1) return;

      originalName[i] = '*';
    });

    let combineName = originalName.join();

    return combineName.replace(/,/g, '');
  } else {
    return name.replace(/.$/, '*');
  }
};

export function cleanAllNullArgs(args: object): object {
  const notNull = {};

  Object.keys(args).forEach((key) => {
    if (args[key] !== null) {
      notNull[key] = args[key];
    }
  });

  return notNull;
}
