/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(
  ['knockout',
    'ojs/ojmodule-element-utils',
    'ojs/ojrouter',
    'ojs/ojknockout',
    'ojs/ojnavigationlist',
    'ojs/ojdefer',
    'ojs/ojmodule',
    'ojs/ojmodule-element'
  ],
  function (ko, ModuleUtils, Router) {
    function LinksViewModel() {
      var self = this;

      var parentRouter = Router.rootInstance;
      self.router = parentRouter.createChildRouter('links')
        .configure({
          before: { label: 'Before', value: 'before', isDefault: true },
          after: { label: 'After', value: 'after' }
        });

      Router.sync();

      self.moduleConfig = ko.pureComputed(function () {
        var name = self.router.moduleConfig.name();
        var viewPath = 'views/linkContent/' + name + '.html';
        var modelPath = 'viewModels/linkContent/' + name;
        return Promise.all([
          ModuleUtils.createView({ viewPath: viewPath }),
          ModuleUtils.createViewModel({ viewModelPath: modelPath })
        ]).then(function (values) { return { view: values[0], viewModel: values[1] }; });
      });

      self.changeHandler = function (event) {
        self.router.go(event.detail.value);
      };

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new LinksViewModel();
  }
);
