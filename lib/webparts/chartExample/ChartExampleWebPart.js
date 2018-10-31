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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import styles from './ChartExampleWebPart.module.scss';
import * as strings from 'ChartExampleWebPartStrings';
import MockupClient from './MockupClient';
import * as Highcharts from 'highcharts';
import { sp } from '@pnp/sp';
var ChartExampleWebPart = (function (_super) {
    __extends(ChartExampleWebPart, _super);
    function ChartExampleWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartExampleWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                sp.setup({
                    spfxContext: this.context
                });
                return [2 /*return*/];
            });
        });
    };
    ChartExampleWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + styles.chartExample + "\">\n      <div class=\"" + styles.container + "\">\n      <div class=\"" + styles.row + "\">\n      <div class=\"" + styles.column + "\">\n      <div id=\"container\">\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>";
        this.getDataASync();
    };
    ChartExampleWebPart.prototype.getDataASync = function () {
        var _this = this;
        if (Environment.type === EnvironmentType.Local) {
            MockupClient.get().then(function (response) {
                _this.renderData(response.value);
            });
        }
        else {
            this.getSPData().then(function (response) {
                _this.renderData(response);
            });
        }
    };
    ChartExampleWebPart.prototype.getSPData = function () {
        return sp.web.lists.filter('Hidden eq false').get().then(function (response) {
            return response;
        });
        /* return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
           .then((response: SPHttpClientResponse) => {
             return response.json();
           })
           */
    };
    ChartExampleWebPart.prototype.renderData = function (values) {
        var htmlele = [];
        values.forEach(function (element) {
            htmlele.push([element.Title, element.ItemCount]);
        });
        var jsonValue = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Largest Items Count'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'List Items'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Items in List: <b>{point.y:.1f}</b>'
            },
            series: [{
                    name: 'Items',
                    data: htmlele,
                    dataLabels: {
                        enabled: true,
                    }
                }]
        };
        Highcharts.chart('container', jsonValue);
    };
    Object.defineProperty(ChartExampleWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ChartExampleWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ChartExampleWebPart;
}(BaseClientSideWebPart));
export default ChartExampleWebPart;
//# sourceMappingURL=ChartExampleWebPart.js.map