# should-reject
Return a promise which is resolved when the original promise is rejected, and rejected when the original promise is resolved

## Example
```javascript
var shouldReject = require('should-reject');
var login = require('./login'); //A function that returns a promise
shouldReject(login('username','wrongPassword')).then(function() {
  console.log('Login function is ok');
},function() {
  console.log('Something is wrong with the login function');
});
```