```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6535f678901234567890abc")},{$inc:{field: 'value'}})
```