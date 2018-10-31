var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'PnPReactSample1WebPartStrings';
import PnPReactSample1 from './components/PnPReactSample1';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
var PnPReactSample1WebPart = (function (_super) {
    __extends(PnPReactSample1WebPart, _super);
    function PnPReactSample1WebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PnPReactSample1WebPart.prototype.render = function () {
        var element = React.createElement(PnPReactSample1, {
            description: this.properties.description,
            list: this.properties.lists,
            context: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    PnPReactSample1WebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(PnPReactSample1WebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    PnPReactSample1WebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                PropertyFieldListPicker('lists', {
                                    label: 'Select a list',
                                    selectedList: this.properties.lists,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    baseTemplate: 101,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'listPickerFieldId'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return PnPReactSample1WebPart;
}(BaseClientSideWebPart));
export default PnPReactSample1WebPart;
//# sourceMappingURL=PnPReactSample1WebPart.js.map