The following code snippet demonstrates an uncommon error in Firebase where a data update is not reflected immediately after a successful write operation.

```javascript
firebase.database().ref('myData').set({value: 'newData'}).then(() => {
  firebase.database().ref('myData').once('value', (snapshot) => {
    console.log(snapshot.val()); // This might still print the old data
  });
});
```

This asynchronous nature of Firebase's database operations might cause this issue. The `set()` method returns a promise which resolves upon successful writing to the database, but it does not guarantee immediate data retrieval.