// Generated by CoffeeScript 1.4.0
/**
* Controls the scenario form UI.
*/

Ext.define("Phoenix.controller.ScenarioFormController", {
  extend: "Phoenix.controller.AbstractPhoenixController",
  requires: ["Phoenix.model.AffectedItem"],
  config: {
    /**
    		* The {Phoenix.model.Scenario} being displayed by the view.
    */

    scenario: null
  },
  control: {
    view: {
      boxready: "onBoxReady"
    },
    saveButton: {
      click: "onSaveButtonClick"
    },
    copyButton: {
      click: "onCopyButtonClick"
    },
    addButton: {
      click: "addScenarioItem"
    },
    scenarioItemGrid: true,
    scenarioItemActionColumn: {
      click: "onActionColumnClick"
    }
  },
  init: function() {
    return this.callParent(arguments);
  },
  /**
  	* Performs initial view setup.
  */

  onBoxReady: function() {
    this.setScenario(this.getView().getScenario());
    this.getView().loadRecord(this.getScenario());
    if (this.getScenarioService().isNewScenario(this.getScenario())) {
      return this.getCopyButton().setVisible(false);
    }
  },
  /**
  	* Handles a click on the save button.
  */

  onSaveButtonClick: function() {
    this.getView().getForm().updateRecord(this.getScenario());
    if (!this.getScenario().hasInvalidScenarioItems()) {
      return this.saveScenario(this.getScenario());
    }
  },
  /**
  	* Saves the passed {Phoenix.model.Scenario}.
  	* @param {Phoenix.model.Scenario} Scenario to save.
  */

  saveScenario: function(scenario) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getScenarioService().saveScenario(scenario).then({
      success: function() {
        _this.getView().setTitle(scenario.get("name"));
        if (_this.getView().itemId !== ("scenarioPanel_" + (scenario.getId()))) {
          _this.getView().itemId = "scenarioPanel_" + (scenario.getId());
        }
        _this.getCopyButton().setVisible(true);
        return _this.getNotificationService().success("Success", "The scenario was saved successfully.");
      },
      failure: function() {
        return _this.getNotificationService().error("Error", "Error saving the Scenario");
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  /**
  	* Copies the passed {Phoenix.model.Scenario}.
  	* @param {Phoenix.model.Scenario} Scenario to copy.
  */

  saveScenarioCopy: function(scenario) {
    var _this = this;
    this.getView().setLoading(true);
    return this.getScenarioService().saveScenario(scenario).then({
      success: function() {
        _this.getNotificationService().success("Success", "The scenario was copied successfully.");
        return _this.getScenarioContext().scenarioOpened(scenario);
      },
      failure: function() {
        return _this.getNotificationService().error("Error", "Error copying the Scenario");
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  /**
  	* Adds a new {Phoenix.model.ScenarioItem} to the set of items associated with the current {Phoenix.model.Scenario}.
  */

  addScenarioItem: function() {
    var scenarioItem;
    scenarioItem = Ext.create("Phoenix.model.ScenarioItem");
    this.getScenarioItemGrid().getStore().insert(0, scenarioItem);
    scenarioItem.setUpDefaults();
    return this.getScenarioItemGrid().cellEditing.startEditByPosition({
      row: 0,
      column: 0
    });
  },
  /**
  	* Handles a click on a row's action column.
  */

  onActionColumnClick: function(view, cell, rowIndex, columnIndex, event, scenarioItem, row) {
    return Ext.MessageBox.confirm("Confirm", "Are you sure you want to delete the this Scenario Item?", function(button) {
      if (button === "yes") {
        return this.deleteScenarioItem(scenarioItem);
      }
    }, this);
  },
  /**
  	* Deletes the passed {Phoenix.model.ScenarioItem}.
  	* @param {Phoenix.model.ScenarioItem} ScenarioItem to delete.
  */

  deleteScenarioItem: function(scenarioItem) {
    this.getScenario().scenarioItems().remove(scenarioItem);
    return this.getNotificationService().info("Change Pending", "Scenario Item removed. Save the Scenario to persist the change.");
  },
  /**
  	* Handles a click on the copy button.
  */

  onCopyButtonClick: function() {
    var copyOfScenario;
    copyOfScenario = this.getScenario().copy();
    return this.saveScenarioCopy(copyOfScenario);
  }
});
