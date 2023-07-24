export const handler = async (event) => {
  // TODO implement
  let adam = {
    firstname: "Adam",
    lastname: "Curzon",
    message: "Please work 🙏"
  };
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: 
    `<html>
    <head>
      <title>Lambda Test</title>
    </head>
      <style>
        h1 {
          font-family: sans-serif;
          display: block;
          width: 300px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin: 50px auto;
          background: #DDD;
        }
      </style>
      <body>
        <h1>Lambda Test 🧪</h1>
      </body>
    </html>`
  };
  return response;
};
