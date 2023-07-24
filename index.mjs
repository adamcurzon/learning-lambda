export const handler = async (event) => {
  // TODO implement
  let adam = {
    firstname: "Adam",
    lastname: "Curzon",
    message: "Please work 🙏"
  };
  const response = {
    statusCode: 200,
    body: `<h1>Lambda Test 🧪</h1>`
  };
  return response;
};
