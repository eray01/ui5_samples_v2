sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("DemoProject1.DemoProject1.controller.Page1", {
		onInit: function () {
			//alert("This is an alert");
			//set data model
			var oData = {
				recipient: {
					name: "Json Sample"
				}
			};

			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		onClick: function () {
			// alert("Button pressed");
			MessageToast.show("Button Pressed Message");
		},
		onShowHello: function () {
			MessageToast.show("Hello Fiori");
		}
	});
});