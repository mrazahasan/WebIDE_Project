/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zfiori/demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});