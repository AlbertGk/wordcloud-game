export const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000));
  return fetch("/data.json");
};
