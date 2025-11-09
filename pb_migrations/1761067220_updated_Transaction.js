/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_73050482")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  // update field
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
})
