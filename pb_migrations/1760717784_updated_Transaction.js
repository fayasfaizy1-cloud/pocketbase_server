/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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
      "UPI,QR,Gateway"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // remove field
  collection.fields.removeById("select1582905952")

  return app.save(collection)
})
