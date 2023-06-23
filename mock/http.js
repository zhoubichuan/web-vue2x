module.exports = function http(app) {
  app.get("/api/query", (req, res) => {
    if (res) {
      res.json({
        statusCode: 200,
        success: true,
        result: {
          page: {
            total: require("./table.json").length,
            current: 1,
            pageSize: 20,
          },
          data: require("./table.json"),
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
  app.get("/api/change", (req, res) => {
    if (res) {
      res.json({
        code: 200,
        data: require("./1.json"),
      });
    }
  });
  app.post("/api/change", (req, res) => {
    if (res) {
      let params = req.body;
      let data = require("./1.json");
      data.data = params.id;
      let fs = require("fs");
      fs.writeFile("./mock/1.json", JSON.stringify(data), (err) => {
        if (err) {
          res.json({
            code: 400,
            data: {},
          });
        } else {
          res.json({
            code: 200,
            data,
          });
        }
      });
    }
  });
};
