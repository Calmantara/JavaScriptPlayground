class AssetRegistration {
  constructor({ express }) {
    this.express = express;
  }

  GetRoot() {
    this.express.get("/v1/asset-registration", (req, res) => {
      res.statusCode = 200;
      res.send("Asset Registration Controller is running");
    });
  }
}

const AssetRegistrationController = async ({ express }) => {
  const AssetRegistration = AssetRegistration;

  AssetRegistration.GetRoot();
};

module.exports = {
  AssetRegistrationController: AssetRegistrationController,
};
