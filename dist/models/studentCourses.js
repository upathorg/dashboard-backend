"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCourse = void 0;
var models_1 = require("./models");
var StudentCourse = /** @class */ (function (_super) {
    __extends(StudentCourse, _super);
    function StudentCourse(database, table) {
        return _super.call(this, database, table) || this;
    }
    return StudentCourse;
}(models_1.Model));
exports.StudentCourse = StudentCourse;
