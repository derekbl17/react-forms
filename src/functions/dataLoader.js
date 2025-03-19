export const dataLoader = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const result = await response.json();
  console.log(result);
  return result.message;
};
