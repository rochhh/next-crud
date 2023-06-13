migrate((db) => {
  const collection = new Collection({
    "id": "5yjnmty2c94zgx4",
    "created": "2023-06-13 15:44:39.502Z",
    "updated": "2023-06-13 15:44:39.502Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "onld5pbt",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5yjnmty2c94zgx4");

  return dao.deleteCollection(collection);
})
