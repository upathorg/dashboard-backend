"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model(database, table) {
        this.database = database;
        this.table = table;
    }
    Model.prototype.all = function () {
        return this.database(this.table).select();
    };
    Model.prototype.find = function (conditions) {
        return this.database(this.table).where(conditions).select();
    };
    Model.prototype.findByOne = function (conditions) {
        return this.database(this.table).where(conditions).first();
    };
    Model.prototype.findById = function (id) {
        return this.database(this.table).where({ id: id }).select().first();
    };
    Model.prototype.insertStudent = function (values) {
        return this.database(this.table).insert(values);
    };
    Model.prototype.updateStudent = function (id, values) {
        return this.database(this.table).where({ id: id }).update(values);
    };
    Model.prototype.deleteStudent = function (id) {
        return this.database(this.table).where({ id: id }).del();
    };
    Model.prototype.insertCourse = function (values) {
        return this.database(this.table).insert(values);
    };
    Model.prototype.updateCourse = function (id, values) {
        return this.database(this.table).where({ id: id }).update(values);
    };
    Model.prototype.deleteCourse = function (id) {
        return this.database(this.table).where({ id: id }).del();
    };
    Model.prototype.enrollCourse = function (values) {
        return this.database(this.table).insert(values);
    };
    Model.prototype.insertInstructor = function (values) {
        return this.database(this.table).insert(values);
    };
    Model.prototype.updateInstructor = function (id, values) {
        return this.database(this.table).where({ id: id }).update(values);
    };
    Model.prototype.deleteInstructor = function (id) {
        return this.database(this.table).where({ id: id }).del();
    };
    return Model;
}());
exports.Model = Model;
