export const handler = async (event) => {
  // TODO implement
  let adam = {
    firstname: "Adam",
    lastname: "Curzon",
  };
  const response = {
    statusCode: 200,
    body: JSON.stringify(adam),
  };
  return response;
};