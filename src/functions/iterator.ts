export const obj1: any = {};
obj1[Symbol.iterator] = () => {
  const iterator: any = {};
  let count = 1;
  iterator.next = () => {
    const iteratorResult =
      count <= 10
        ? {
            value: count++,
            done: false,
          }
        : {
            value: undefined,
            done: true,
          };
    return iteratorResult;
  };
  return iterator;
};
