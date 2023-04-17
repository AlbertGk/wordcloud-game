export const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return fetch(`/data/${Math.floor(Math.random() * 3 + 1)}.json`);
};
