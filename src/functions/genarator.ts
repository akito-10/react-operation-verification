export const gfn1 = (from: number, to: number) =>
  (function* () {
    while (from <= to) yield from++;
  })();
