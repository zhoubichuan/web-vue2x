let tableData = require('./table.json')
module.exports = function http(app) {
  app.get("/api/query", (req, res) => {
    if (res) {
      res.json({
        statusCode: 200,
        success: true,
        result: {
          page: { total: tableData.length, current: 1, pageSize: 20 },
          data:tableData ,
        },
      });
    }
  });
  app.post("/api/add", (req, res) => {
    if (res) {
      res.json({
        code: 200,
        data: [
          {
            id: "1",
            s_name: "3",
            s_math: "3",
            s_english: "3",
          },
        ],
      });
    }
  });
  app.put("/api/updata", (req, res) => {
    if (res) {
      res.json({
        code: 200,
        data: [
          {
            id: "1",
            s_name: "3",
            s_math: "3",
            s_english: "3",
          },
        ],
      });
    }
  });
};
