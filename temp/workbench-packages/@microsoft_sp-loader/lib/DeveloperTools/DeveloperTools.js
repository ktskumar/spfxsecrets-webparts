import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DeveloperToolsTab from './Models/DeveloperToolsTab';
import DeveloperToolsConsole from './Components/DeveloperToolsConsole';
import DeveloperToolsConsoleStore from './Stores/DeveloperToolsConsoleStore';
var DeveloperTools = (function () {
    function DeveloperTools() {
    }
    Object.defineProperty(DeveloperTools, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new DeveloperTools();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    DeveloperTools.prototype.initialize = function () {
        var developerToolsDiv = document.createElement('div');
        document.body.appendChild(developerToolsDiv);
        ReactDOM.render(React.createElement(DeveloperToolsConsole), developerToolsDiv);
    };
    DeveloperTools.prototype.toggleDeveloperTools = function () {
        DeveloperToolsConsoleStore.showHideConsole(!DeveloperToolsConsoleStore.visible);
    };
    DeveloperTools.prototype.showHideDeveloperTools = function (show) {
        DeveloperToolsConsoleStore.showHideConsole(show);
    };
    DeveloperTools.prototype.registerDeveloperToolsTab = function (developerToolsTab) {
        var tab = new DeveloperToolsTab(developerToolsTab);
        DeveloperToolsConsoleStore.registerTab(tab);
    };
    return DeveloperTools;
}());
export default DeveloperTools;
