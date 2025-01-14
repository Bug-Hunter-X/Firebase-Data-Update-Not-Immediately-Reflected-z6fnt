The solution involves using the `on('value')` method instead of `once('value')` to listen for real-time updates. This ensures that the code receives the updated data as soon as it becomes available in the database.

```javascript
firebase.database().ref('myData').set({value: 'newData'}).then(() => {
  firebase.database().ref('myData').on('value', (snapshot) => {
    console.log(snapshot.val()); // This will now print the updated data
  });
});
```

The `on('value')` method establishes a persistent listener on the specified database reference. Whenever the data at that location changes, the callback function is executed with the updated snapshot.  This approach effectively resolves the asynchronous data retrieval problem.