const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Initialize an empty set to keep track of used endpoints
const usedEndpoints = new Set();

app.get("/:endpoint(doc\\d{4}|lab\\d{4})", (req, res) => {
  const endpoint = req.params.endpoint;

  // Check if the endpoint has been used before
  if (usedEndpoints.has(endpoint)) {
    res.send({ res: 0 });
  } else {
    // Mark the endpoint as used
    usedEndpoints.add(endpoint);
    res.send({ res: 100 });
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to MediChain registration Api</h1>");
});

app.get("*", (req, res) => {
  res.send({ res: 0 });
});

app.listen(port, () => {
  console.log("Server started!");
});

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/:docId", (req, res) => {
//   const docId = req.params.docId;
//   const docList = ["a", "b", "c"];
//   if (docList.includes(docId)) {
//     res.send({ res: "100" });
//   } else {
//     res.send({ res: "0" });
//   }
// });

// app.get("/tldr", (req, res) => {
//   res.send("Hello Express App");
// });

// app.listen(port, () => {
//   console.log("Server started!");
// });

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/:endpoint(doc\\d{4}|lab\\d{4})", (req, res) => {
//   const endpoint = req.params.endpoint;
//   res.send({ res: 100 });
// });

// // Add a route handler for the root path ("/")
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to MediChain registration Api</h1>");
// });

// // Add a catch-all route for unmatched routes
// app.get("*", (req, res) => {
//   res.send({ res: 0 });
// });

// app.listen(port, () => {
//   console.log("Server started!");
// });
