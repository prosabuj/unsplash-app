const Random = () => {
  return (
    Number(String(Math.random()).slice(2)) +
    Date.now() +
    Math.round(performance.now())
  ).toString(36);
};

export default Random;
