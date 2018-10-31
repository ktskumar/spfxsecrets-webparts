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
import * as React from 'react';
import { ListView } from "@pnp/spfx-controls-react/lib/ListView";
import { sp } from '@pnp/sp';
var PnPReactSample1 = (function (_super) {
    __extends(PnPReactSample1, _super);
    function PnPReactSample1(props) {
        var _this = _super.call(this, props) || this;
        _this._viewFields = [
            {
                name: "Id",
                displayName: "ID",
                maxWidth: 25,
                minWidth: 25,
                sorting: true
            },
            {
                name: "File.Name",
                linkPropertyName: "File.ServerRelativeUrl",
                displayName: "Name",
                sorting: true
            },
            {
                name: "File.TimeCreated",
                displayName: "Created",
                minWidth: 150,
                render: function (item) {
                    var created = item["File.TimeCreated"];
                    if (created) {
                        var createdDate = created;
                        return React.createElement("span", null, createdDate);
                    }
                }
            }
        ];
        _this.state = {
            items: []
        };
        return _this;
    }
    PnPReactSample1.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                sp.setup({
                    spfxContext: this.props.context
                });
                return [2 /*return*/];
            });
        });
    };
    PnPReactSample1.prototype.componentDidMount = function () {
        console.log('com mount');
        if (this.props.list != null && this.props.list != "") {
            this.getListItems();
        }
    };
    PnPReactSample1.prototype.componentDidUpdate = function (prevProps, prevState) {
        console.log("com update");
        console.log(this.props.list);
        console.log(prevProps.list);
        if (this.props.list != prevProps.list) {
            if (this.props.list != null && this.props.list != "") {
                this.getListItems();
            }
            else {
                this.setState({
                    items: []
                });
            }
        }
    };
    PnPReactSample1.prototype.getListItems = function () {
        var _this = this;
        sp.web.lists.getById(this.props.list.toString()).items.filter('FSObjType eq 0').expand('File').get()
            .then(function (resp) { return resp; })
            .then(function (items) {
            console.log(items);
            _this.setState({
                items: items ? items : []
            });
        });
    };
    PnPReactSample1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(ListView, { items: this.state.items, viewFields: this._viewFields, iconFieldName: "File.ServerRelativeUrl", compact: true })));
    };
    return PnPReactSample1;
}(React.Component));
export default PnPReactSample1;
//# sourceMappingURL=PnPReactSample1.js.map