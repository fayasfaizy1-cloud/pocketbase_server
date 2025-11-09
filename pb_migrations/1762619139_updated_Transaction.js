/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // remove field
  collection.fields.removeById("select1582905952")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool870300407",
    "name": "sound_played",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1582905952",
    "maxSelect": 1,
    "name": "method",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "UPI"
    ]
  }))

  // remove field
  collection.fields.removeById("bool870300407")

  return app.save(collection)
})
