const http = require("http");

const PORT = 8080;

// ❌ Bug: server variable not defined properly
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});