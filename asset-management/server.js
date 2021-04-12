const app = require("express")();

//middleware installation

//call all controllers
const AssetRegistrationController = require("./controllers/asset-registration/asset-registration-controller");

AssetRegistrationController.AssetRegistrationController({ express: app });

app.listen(3000, () => {
  console.info(`Application is running in port: ${3000}`);
});
