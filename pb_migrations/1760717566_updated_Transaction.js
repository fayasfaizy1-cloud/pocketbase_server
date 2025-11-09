/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2392944706",
    "max": null,
    "min": null,
    "name": "amount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2828907607",
    "max": 0,
    "min": 0,
    "name": "business_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "autodate2782324286",
    "name": "timestamp",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // remove field
  collection.fields.removeById("number2392944706")

  // remove field
  collection.fields.removeById("text2828907607")

  // remove field
  collection.fields.removeById("autodate2782324286")

  return app.save(collection)
})
