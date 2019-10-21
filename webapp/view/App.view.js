sap.ui.jsview("zfiori.demo.view.App", {


	getControllerName: function () {
		return "zfiori.demo.controller.App";
	},

	createContent: function (oController) {

		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		// create app
		this.app = new sap.m.SplitApp();

		// load the master page
		var master = sap.ui.xmlview("mainPage", "zfiori.demo.view.mainPage");
		this.app.addPage(master, true);
		master.getController().nav = this.getController();

		// load the empty page
		// var detail = sap.ui.xmlview("detail", "zfiori.demo.view.detail");
		// this.app.addPage(detail, false);

		// wrap app with shell
		return new sap.m.Shell("Shell", {
			title: "Shell",
			showLogout: false,
			app: this.app
		});
	}
});