/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // remove field
  collection.fields.removeById("bool2034721560")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3885137012",
    "max": 0,
    "min": 0,
    "name": "email",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "bool2034721560",
    "name": "used",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("text3885137012")

  return app.save(collection)
})
