/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // update collection data
  unmarshal({
    "name": "Link_codes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // update collection data
  unmarshal({
    "name": "link_codes"
  }, collection)

  return app.save(collection)
})
