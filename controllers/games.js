module.exports = app => {
  app.get("/games", async (req, res) => {
    res.render("index");
  });

  app.get("/", async (req, res) => {
    res.render("landing");
  });

  app.get("/bot", async (req, res) => {
    res.render("bot");
  });
};
