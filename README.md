# Levelfy #
This framework is intend to extend the built in console object with the capability that allows developers to control over the log level of console output. 

## Install ##
### NodeJS ###
```bash
npm install levelfy
```

### Browser ###
```html
<script src="https://rawgit.com/JCloudYu/levelfy/master/js/levelfy.js"></script>
```


## Usage ##
### Log to specified log level ###
Following methods will output the log to the specific log levels.
```javascript
console.error(data, ...args);  // error level
console.warn(data, ...args);   // warn level
console.notice(data, ...args); // notice level
console.info(data, ...args);   // info level
console.debug(data, ...args);  // debug level

console.log(data, ...args);    // info level ( it's an alias of console.info )
```

### Specify the log level ###
Use the following statement to change the verbose level.
```javascript
console.logLevel = 'info';  // info level in string representation
console.logLevel = 5;       // info level in numeric representation
```

Following map are the accepted log levels and their corresponding verbose levels.
| num | string | verbose level | description |
|:------:|:------|:---|:-------------|
| 1 | silent |  | Log nothing |
| 2 | error | error | Log message at error level only |
| 3 | warn | warn, error | Log info at warn and error level  |
| 4 | notice | notice, warn, error | Log info at notice, warn and error level |
| 5 | info | info, notice, warn, error | Log everything but message at debug level |
| 6 | debug | debug, info, notice, warn, error | Log eveything ( Temporarily ) |
| 7 | silly | debug, info, notice, warn, error | Log eveything ( Reserved for future extension ) |
