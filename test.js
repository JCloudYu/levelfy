/**
 * Project: 0018.levelfy
 * File: test.js
 * Author: JCloudYu
 * Create Date: Sep. 08, 2018 
 */
(()=>{
	"use strict";
	require( './levelfy' );
	
	console.__log( "Output using default level (info)" );
	console.error(	"ERROR" );
	console.warn(	"WARN" );
	console.notice( "NOTICE" );
	console.info(	"INFO" );
	console.debug(	"DEBUG - This msg should not be presented!" );
	
	
	
	console.__log( "\nOutput using level - silly" );
	console.logLevel = 'silly';
	console.error(	"ERROR" );
	console.warn(	"WARN" );
	console.notice( "NOTICE" );
	console.info(	"INFO" );
	console.debug(	"DEBUG" );
	
	
	
	console.__log( "\nOutput using level - debug" );
	console.logLevel = 'debug';
	console.error(	"ERROR" );
	console.warn(	"WARN" );
	console.notice( "NOTICE" );
	console.info(	"INFO" );
	console.debug(	"DEBUG" );
	
	
	
	console.__log( "\nOutput using level - info" );
	console.logLevel = 'info';
	console.error(	"ERROR" );
	console.warn(	"WARN" );
	console.notice( "NOTICE" );
	console.info(	"INFO" );
	console.debug(	"DEBUG - This msg should not be presented!" );
	
	
	
	console.__log( "\nOutput using level - notice" );
	console.logLevel = 'notice';
	console.error(	"ERROR" );
	console.warn(	"WARN" );
	console.notice( "NOTICE" );
	console.info(	"INFO - This msg should not be presented!" );
	console.debug(	"DEBUG - This msg should not be presented!" );
	
	
	
	console.__log( "\nOutput using level - warn" );
	console.logLevel = 'warn';
	console.error(	"ERROR" );
	console.warn(	"WARN" );
	console.notice( "NOTICE - This msg should not be presented!" );
	console.info(	"INFO - This msg should not be presented!" );
	console.debug(	"DEBUG - This msg should not be presented!" );
	
	
	
	console.__log( "\nOutput using level - error" );
	console.logLevel = 'error';
	console.error(	"ERROR" );
	console.warn(	"WARN - This msg should not be presented!" );
	console.notice( "NOTICE - This msg should not be presented!" );
	console.info(	"INFO - This msg should not be presented!" );
	console.debug(	"DEBUG - This msg should not be presented!" );
	
	
	
	console.__log( "\nOutput using level - silent" );
	console.logLevel = 'silent';
	console.error(	"ERROR - This msg should not be presented!" );
	console.warn(	"WARN - This msg should not be presented!" );
	console.notice( "NOTICE - This msg should not be presented!" );
	console.info(	"INFO - This msg should not be presented!" );
	console.debug(	"DEBUG - This msg should not be presented!" );
})();
