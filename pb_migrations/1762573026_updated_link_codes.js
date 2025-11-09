/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // update collection data
  unmarshal({
    "listRule": "email = @request.auth.email"
  }, collection)

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date1542800728",
    "max": "",
    "min": "",
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("date1542800728")

  return app.save(collection)
})
