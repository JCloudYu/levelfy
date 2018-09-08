/**
 * Project: levelfy
 * File: levelfy.js
 * Author: JCloudYu
 * Create Date: Sep. 08, 2018 
 */
(()=>{
	"use strict";
	
	const LOG_LEVEL = {
		SILENT:  1,
		ERROR:	 2,
		WARN:	 3,
		NOTICE:	 4,
		INFO:	 5,
		DEBUG:	 6,
		SILLY:	 7
	};
	const LOG_LEVEL_RMAP	= ['silent', 'error', 'warn', 'notice', 'info', 'debug', 'silly'];
	const DEFAULT_LOG_LEVEL = LOG_LEVEL.INFO;
	const DEFAULT_CONSOLE	= console;
	const PRIVATE_MAP		= new WeakMap();

	// region [ Overwrite console ]
	(()=>{
		const _PRIVATES = {};
		PRIVATE_MAP.set(DEFAULT_CONSOLE, _PRIVATES);
		_PRIVATES.logLevel = DEFAULT_LOG_LEVEL;
		
		Object.defineProperties(console, {
			__log:  {value:console.log,		enumerable:true},
			__error:{value:console.error,	enumerable:true},
			__warn: {value:console.warn,	enumerable:true},
			__info: {value:console.info,	enumerable:true},
			__debug:{value:console.debug,	enumerable:true},
			logLevel:{
				get:__LEVEL_PROPERTY, set:__LEVEL_PROPERTY, enumerable:true
			}
		});
		
		console.log		= __WRITE_INFO;
		console.error	= __WRITE_ERROR;
		console.warn	= __WRITE_WARN;
		console.notice	= __WRITE_NOTICE;
		console.info	= __WRITE_INFO;
		console.debug	= __WRITE_DEBUG;
	})();
	// endregion
	
	// region [ Overwrite node js Console module ]
	(()=>{
		if ( !(console.Console) ) return;
		const Console = console.Console;
		
		Object.defineProperties(Console.prototype, {
			__log:  {value:Console.prototype.log,	enumerable:true},
			__error:{value:Console.prototype.error, enumerable:true},
			__warn: {value:Console.prototype.warn,	enumerable:true},
			__info: {value:Console.prototype.info,	enumerable:true},
			__debug:{value:Console.prototype.debug,	enumerable:true},
			logLevel:{
				get:__LEVEL_PROPERTY, set:__LEVEL_PROPERTY, enumerable:true
			}
		});
		
		Console.prototype.log	 = __WRITE_INFO;
		Console.prototype.error	 = __WRITE_ERROR;
		Console.prototype.warn	 = __WRITE_WARN;
		Console.prototype.notice = __WRITE_NOTICE;
		Console.prototype.info	 = __WRITE_INFO;
		Console.prototype.debug	 = __WRITE_DEBUG;
	})();
	// endregion
	
	
	
	
	
	
	function __OBTAIN_PRIVATE(inst){
		let PROPS = PRIVATE_MAP.get(inst);
		if ( !PROPS ) {
			PROPS = {logLevel:DEFAULT_LOG_LEVEL};
			PRIVATE_MAP.set(inst, PROPS);
		}
		return PROPS;
	}
	function __WRITE_LOG(level, data, ...args) {
		const { logLevel } = __OBTAIN_PRIVATE(this);
		if ( logLevel < level ) {
			return;
		}
		
		switch( level ) {
			case LOG_LEVEL.ERROR:
				this.__error(data, ...args);
				break;
			case LOG_LEVEL.WARN:
				this.__warn(data, ...args);
				break;
			case LOG_LEVEL.NOTICE:
				this.__log(data, ...args);
				break;
			case LOG_LEVEL.INFO:
				this.__info(data, ...args);
				break;
			case LOG_LEVEL.DEBUG:
				this.__debug(data, ...args);
				break;
			default:
				break;
		}
	}
	function __WRITE_ERROR(data, ...args) {
		return __WRITE_LOG.call(this, LOG_LEVEL.ERROR, data, ...args);
	}
	function __WRITE_WARN(data, ...args) {
		return __WRITE_LOG.call(this, LOG_LEVEL.WARN, data, ...args);
	}
	function __WRITE_NOTICE(data, ...args) {
		return __WRITE_LOG.call(this, LOG_LEVEL.NOTICE, data, ...args);
	}
	function __WRITE_INFO(data, ...args) {
		return __WRITE_LOG.call(this, LOG_LEVEL.INFO, data, ...args);
	}
	function __WRITE_DEBUG(data, ...args) {
		return __WRITE_LOG.call(this, LOG_LEVEL.DEBUG, data, ...args);
	}
	function __LEVEL_PROPERTY(val) {
		let PRIVATE = __OBTAIN_PRIVATE(this);
	
		// getter
		if ( arguments.length === 0 ) {
			return LOG_LEVEL_RMAP[PRIVATE.logLevel];
		}
		// setter
		else {
			let level, type = typeof val;
			if ( type === "string" ) {
				level = LOG_LEVEL[val.toUpperCase()];
				if (!level) { return; }
			}
			else
			if ( type === "number" ) {
				if (LOG_LEVEL_RMAP[val] === undefined) { return; }
				level = val;
			}
			else { return; }
			
			PRIVATE.logLevel = level;
		}
	}
})();

