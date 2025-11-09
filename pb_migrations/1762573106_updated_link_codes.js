/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.email != \"\"",
    "deleteRule": "email = @request.auth.email",
    "updateRule": "@request.auth.email != \"\"",
    "viewRule": "email = @request.auth.email"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
