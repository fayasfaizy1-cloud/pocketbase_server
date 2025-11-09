/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // remove field
  collection.fields.removeById("text2181537457")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool2549671404",
    "name": "linked",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3030822147")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2181537457",
    "max": 0,
    "min": 0,
    "name": "p",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("bool2549671404")

  return app.save(collection)
})
