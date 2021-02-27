'use strict';

var obsidian = require('obsidian');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var obsidian__default = /*#__PURE__*/_interopDefaultLegacy(obsidian);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });




var DEFAULT_DAILY_NOTE_FORMAT = "YYYY-MM-DD";
var DEFAULT_WEEKLY_NOTE_FORMAT = "gggg-[W]ww";
var DEFAULT_MONTHLY_NOTE_FORMAT = "YYYY-MM";

/**
 * Read the user settings for the `daily-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getDailyNoteSettings() {
    var _a, _b, _c, _d, _e, _f;
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var _g = window.app, internalPlugins = _g.internalPlugins, plugins = _g.plugins;
        var dailyNoteSettings = (_b = (_a = internalPlugins.getPluginById("daily-notes")) === null || _a === void 0 ? void 0 : _a.instance) === null || _b === void 0 ? void 0 : _b.options;
        var periodicNotesSettings = (_d = (_c = plugins.getPlugin("periodic-notes")) === null || _c === void 0 ? void 0 : _c.settings) === null || _d === void 0 ? void 0 : _d.daily;
        var settings = periodicNotesSettings || dailyNoteSettings || {};
        return {
            format: settings.format || DEFAULT_DAILY_NOTE_FORMAT,
            folder: ((_e = settings.folder) === null || _e === void 0 ? void 0 : _e.trim()) || "",
            template: ((_f = settings.template) === null || _f === void 0 ? void 0 : _f.trim()) || "",
        };
    }
    catch (err) {
        console.info("No custom daily note settings found!", err);
    }
}
/**
 * Read the user settings for the `weekly-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getWeeklyNoteSettings() {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var pluginManager = window.app.plugins;
        var calendarSettings = (_a = pluginManager.getPlugin("calendar")) === null || _a === void 0 ? void 0 : _a.options;
        var periodicNotesSettings = (_c = (_b = pluginManager.getPlugin("periodic-notes")) === null || _b === void 0 ? void 0 : _b.settings) === null || _c === void 0 ? void 0 : _c.weekly;
        if (periodicNotesSettings) {
            return {
                format: periodicNotesSettings.format || DEFAULT_WEEKLY_NOTE_FORMAT,
                folder: ((_d = periodicNotesSettings.folder) === null || _d === void 0 ? void 0 : _d.trim()) || "",
                template: ((_e = periodicNotesSettings.template) === null || _e === void 0 ? void 0 : _e.trim()) || "",
            };
        }
        var settings = calendarSettings || {};
        return {
            format: settings.weeklyNoteFormat || DEFAULT_WEEKLY_NOTE_FORMAT,
            folder: ((_f = settings.weeklyNoteFolder) === null || _f === void 0 ? void 0 : _f.trim()) || "",
            template: ((_g = settings.weeklyNoteTemplate) === null || _g === void 0 ? void 0 : _g.trim()) || "",
        };
    }
    catch (err) {
        console.info("No custom weekly note settings found!", err);
    }
}
/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
function getMonthlyNoteSettings() {
    var _a, _b, _c, _d;
    try {
        var settings = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((_b = (_a = window.app.plugins.getPlugin("periodic-notes")) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.monthly) || {};
        return {
            format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
            folder: ((_c = settings.folder) === null || _c === void 0 ? void 0 : _c.trim()) || "",
            template: ((_d = settings.template) === null || _d === void 0 ? void 0 : _d.trim()) || "",
        };
    }
    catch (err) {
        console.info("No custom monthly note settings found!", err);
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

/**
 * dateUID is a way of weekly identifying daily/weekly/monthly notes.
 * They are prefixed with the granularity to avoid ambiguity.
 */
function getDateUID(date, granularity) {
    if (granularity === void 0) { granularity = "day"; }
    var ts = date.clone().startOf(granularity).format();
    return granularity + "-" + ts;
}
function getDateFromFile(file, granularity) {
    var getSettings = {
        day: getDailyNoteSettings,
        week: getWeeklyNoteSettings,
        month: getMonthlyNoteSettings,
    };
    var format = getSettings[granularity]().format.split("/").pop();
    var noteDate = window.moment(file.basename, format, true);
    return noteDate.isValid() ? noteDate : null;
}

function ensureFolderExists(path$1) {
    return __awaiter(this, void 0, void 0, function () {
        var dirs, dir;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirs = path$1.split("/");
                    dirs.pop(); // remove basename
                    dir = "";
                    _a.label = 1;
                case 1:
                    if (!dirs.length) return [3 /*break*/, 4];
                    dir = path__default['default'].join(dir, dirs.shift()).replace(/\\/g, "/");
                    if (!!window.app.vault.getAbstractFileByPath(dir)) return [3 /*break*/, 3];
                    return [4 /*yield*/, window.app.vault.createFolder(dir)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getNotePath(directory, filename) {
    return __awaiter(this, void 0, void 0, function () {
        var path$1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!filename.endsWith(".md")) {
                        filename += ".md";
                    }
                    path$1 = obsidian__default['default'].normalizePath(path__default['default'].join(directory, filename));
                    return [4 /*yield*/, ensureFolderExists(path$1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, path$1];
            }
        });
    });
}
function getTemplateContents(template) {
    return __awaiter(this, void 0, void 0, function () {
        var app, metadataCache, vault, templatePath, templateFile, contents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = window.app;
                    metadataCache = app.metadataCache, vault = app.vault;
                    templatePath = obsidian__default['default'].normalizePath(template);
                    if (templatePath === "/") {
                        return [2 /*return*/, Promise.resolve("")];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    templateFile = metadataCache.getFirstLinkpathDest(templatePath, "");
                    return [4 /*yield*/, vault.cachedRead(templateFile)];
                case 2:
                    contents = _a.sent();
                    return [2 /*return*/, contents];
                case 3:
                    err_1 = _a.sent();
                    console.error("Failed to read the daily note template '" + templatePath + "'", err_1);
                    new obsidian__default['default'].Notice("Failed to read the daily note template");
                    return [2 /*return*/, ""];
                case 4: return [2 /*return*/];
            }
        });
    });
}

var DailyNotesFolderMissingError = /** @class */ (function (_super) {
    __extends(DailyNotesFolderMissingError, _super);
    function DailyNotesFolderMissingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DailyNotesFolderMissingError;
}(Error));
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
function createDailyNote(date) {
    return __awaiter(this, void 0, void 0, function () {
        var app, vault, moment, _a, template, format, folder, templateContents, filename, normalizedPath, createdFile, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    app = window.app;
                    vault = app.vault;
                    moment = window.moment;
                    _a = getDailyNoteSettings(), template = _a.template, format = _a.format, folder = _a.folder;
                    return [4 /*yield*/, getTemplateContents(template)];
                case 1:
                    templateContents = _b.sent();
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 2:
                    normalizedPath = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, vault.create(normalizedPath, templateContents
                            .replace(/{{\s*(date|time)\s*:(.*?)}}/gi, function (_, _timeOrDate, momentFormat) {
                            return date.format(momentFormat.trim());
                        })
                            .replace(/{{\s*date\s*}}/gi, filename)
                            .replace(/{{\s*time\s*}}/gi, moment().format("HH:mm"))
                            .replace(/{{\s*title\s*}}/gi, filename))];
                case 4:
                    createdFile = _b.sent();
                    return [2 /*return*/, createdFile];
                case 5:
                    err_1 = _b.sent();
                    console.error("Failed to create file: '" + normalizedPath + "'", err_1);
                    new obsidian__default['default'].Notice("Unable to create new file.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getDailyNote(date, dailyNotes) {
    var _a;
    return (_a = dailyNotes[getDateUID(date, "day")]) !== null && _a !== void 0 ? _a : null;
}
function getAllDailyNotes() {
    /**
     * Find all daily notes in the daily note folder
     */
    var vault = window.app.vault;
    var folder = getDailyNoteSettings().folder;
    var dailyNotesFolder = vault.getAbstractFileByPath(obsidian__default['default'].normalizePath(folder));
    if (!dailyNotesFolder) {
        throw new DailyNotesFolderMissingError("Failed to find daily notes folder");
    }
    var dailyNotes = {};
    obsidian__default['default'].Vault.recurseChildren(dailyNotesFolder, function (note) {
        if (note instanceof obsidian__default['default'].TFile) {
            var date = getDateFromFile(note, "day");
            if (date) {
                var dateString = getDateUID(date, "day");
                dailyNotes[dateString] = note;
            }
        }
    });
    return dailyNotes;
}

var WeeklyNotesFolderMissingError = /** @class */ (function (_super) {
    __extends(WeeklyNotesFolderMissingError, _super);
    function WeeklyNotesFolderMissingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WeeklyNotesFolderMissingError;
}(Error));
function getDaysOfWeek() {
    var moment = window.moment;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var weekStart = moment.localeData()._week.dow;
    var daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];
    while (weekStart) {
        daysOfWeek.push(daysOfWeek.shift());
        weekStart--;
    }
    return daysOfWeek;
}
function getDayOfWeekNumericalValue(dayOfWeekName) {
    return getDaysOfWeek().indexOf(dayOfWeekName.toLowerCase());
}
function createWeeklyNote(date) {
    return __awaiter(this, void 0, void 0, function () {
        var vault, _a, template, format, folder, templateContents, filename, normalizedPath, createdFile, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    vault = window.app.vault;
                    _a = getWeeklyNoteSettings(), template = _a.template, format = _a.format, folder = _a.folder;
                    return [4 /*yield*/, getTemplateContents(template)];
                case 1:
                    templateContents = _b.sent();
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 2:
                    normalizedPath = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, vault.create(normalizedPath, templateContents
                            .replace(/{{\s*(date|time)\s*:(.*?)}}/gi, function (_, _timeOrDate, momentFormat) {
                            return date.format(momentFormat.trim());
                        })
                            .replace(/{{\s*title\s*}}/gi, filename)
                            .replace(/{{\s*(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\s*:(.*?)}}/gi, function (_, dayOfWeek, momentFormat) {
                            var day = getDayOfWeekNumericalValue(dayOfWeek);
                            return date.weekday(day).format(momentFormat.trim());
                        }))];
                case 4:
                    createdFile = _b.sent();
                    return [2 /*return*/, createdFile];
                case 5:
                    err_1 = _b.sent();
                    console.error("Failed to create file: '" + normalizedPath + "'", err_1);
                    new obsidian__default['default'].Notice("Unable to create new file.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getWeeklyNote(date, weeklyNotes) {
    var _a;
    return (_a = weeklyNotes[getDateUID(date, "week")]) !== null && _a !== void 0 ? _a : null;
}
function getAllWeeklyNotes() {
    var vault = window.app.vault;
    var folder = getWeeklyNoteSettings().folder;
    var weeklyNotesFolder = vault.getAbstractFileByPath(obsidian__default['default'].normalizePath(folder));
    if (!weeklyNotesFolder) {
        throw new WeeklyNotesFolderMissingError("Failed to find weekly notes folder");
    }
    var weeklyNotes = {};
    obsidian__default['default'].Vault.recurseChildren(weeklyNotesFolder, function (note) {
        if (note instanceof obsidian__default['default'].TFile) {
            var date = getDateFromFile(note, "week");
            if (date) {
                var dateString = getDateUID(date, "week");
                weeklyNotes[dateString] = note;
            }
        }
    });
    return weeklyNotes;
}

var MonthlyNotesFolderMissingError = /** @class */ (function (_super) {
    __extends(MonthlyNotesFolderMissingError, _super);
    function MonthlyNotesFolderMissingError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MonthlyNotesFolderMissingError;
}(Error));
/**
 * This function mimics the behavior of the daily-notes plugin
 * so it will replace {{date}}, {{title}}, and {{time}} with the
 * formatted timestamp.
 *
 * Note: it has an added bonus that it's not 'today' specific.
 */
function createMonthlyNote(date) {
    return __awaiter(this, void 0, void 0, function () {
        var vault, _a, template, format, folder, templateContents, filename, normalizedPath, createdFile, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    vault = window.app.vault;
                    _a = getMonthlyNoteSettings(), template = _a.template, format = _a.format, folder = _a.folder;
                    return [4 /*yield*/, getTemplateContents(template)];
                case 1:
                    templateContents = _b.sent();
                    filename = date.format(format);
                    return [4 /*yield*/, getNotePath(folder, filename)];
                case 2:
                    normalizedPath = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, vault.create(normalizedPath, templateContents
                            .replace(/{{\s*(date|time)\s*:(.*?)}}/gi, function (_, _timeOrDate, momentFormat) {
                            return date.format(momentFormat.trim());
                        })
                            .replace(/{{\s*date\s*}}/gi, filename)
                            .replace(/{{\s*time\s*}}/gi, window.moment().format("HH:mm"))
                            .replace(/{{\s*title\s*}}/gi, filename))];
                case 4:
                    createdFile = _b.sent();
                    return [2 /*return*/, createdFile];
                case 5:
                    err_1 = _b.sent();
                    console.error("Failed to create file: '" + normalizedPath + "'", err_1);
                    new obsidian__default['default'].Notice("Unable to create new file.");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getMonthlyNote(date, monthlyNotes) {
    var _a;
    return (_a = monthlyNotes[getDateUID(date, "month")]) !== null && _a !== void 0 ? _a : null;
}
function getAllMonthlyNotes() {
    var vault = window.app.vault;
    var folder = getMonthlyNoteSettings().folder;
    var monthlyNotesFolder = vault.getAbstractFileByPath(obsidian__default['default'].normalizePath(folder));
    if (!monthlyNotesFolder) {
        throw new MonthlyNotesFolderMissingError("Failed to find monthly notes folder");
    }
    var monthlyNotes = {};
    obsidian__default['default'].Vault.recurseChildren(monthlyNotesFolder, function (note) {
        if (note instanceof obsidian__default['default'].TFile) {
            var date = getDateFromFile(note, "month");
            if (date) {
                var dateString = getDateUID(date, "month");
                monthlyNotes[dateString] = note;
            }
        }
    });
    return monthlyNotes;
}

function appHasDailyNotesPluginLoaded() {
    var _a, _b;
    var app = window.app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var dailyNotesPlugin = app.internalPlugins.plugins["daily-notes"];
    if (dailyNotesPlugin && dailyNotesPlugin.enabled) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a.daily) === null || _b === void 0 ? void 0 : _b.enabled);
}
/**
 * XXX: "Weekly Notes" live in either the Calendar plugin or the periodic-notes plugin.
 * Check both until the weekly notes feature is removed from the Calendar plugin.
 */
function appHasWeeklyNotesPluginLoaded() {
    var _a, _b;
    var app = window.app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (app.plugins.getPlugin("calendar")) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a.weekly) === null || _b === void 0 ? void 0 : _b.enabled);
}
function appHasMonthlyNotesPluginLoaded() {
    var _a, _b;
    var app = window.app;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var periodicNotes = app.plugins.getPlugin("periodic-notes");
    return periodicNotes && ((_b = (_a = periodicNotes.settings) === null || _a === void 0 ? void 0 : _a.monthly) === null || _b === void 0 ? void 0 : _b.enabled);
}

exports.DEFAULT_DAILY_NOTE_FORMAT = DEFAULT_DAILY_NOTE_FORMAT;
exports.DEFAULT_MONTHLY_NOTE_FORMAT = DEFAULT_MONTHLY_NOTE_FORMAT;
exports.DEFAULT_WEEKLY_NOTE_FORMAT = DEFAULT_WEEKLY_NOTE_FORMAT;
exports.appHasDailyNotesPluginLoaded = appHasDailyNotesPluginLoaded;
exports.appHasMonthlyNotesPluginLoaded = appHasMonthlyNotesPluginLoaded;
exports.appHasWeeklyNotesPluginLoaded = appHasWeeklyNotesPluginLoaded;
exports.createDailyNote = createDailyNote;
exports.createMonthlyNote = createMonthlyNote;
exports.createWeeklyNote = createWeeklyNote;
exports.getAllDailyNotes = getAllDailyNotes;
exports.getAllMonthlyNotes = getAllMonthlyNotes;
exports.getAllWeeklyNotes = getAllWeeklyNotes;
exports.getDailyNote = getDailyNote;
exports.getDailyNoteSettings = getDailyNoteSettings;
exports.getDateFromFile = getDateFromFile;
exports.getDateUID = getDateUID;
exports.getMonthlyNote = getMonthlyNote;
exports.getMonthlyNoteSettings = getMonthlyNoteSettings;
exports.getTemplateContents = getTemplateContents;
exports.getWeeklyNote = getWeeklyNote;
exports.getWeeklyNoteSettings = getWeeklyNoteSettings;
});

var DEFAULT_SETTINGS = {
    dailyNotesFolder: "",
    reviewSectionHeading: "## Review",
    linePrefix: "- ",
    defaultReviewDate: "tomorrow",
    blockLinePrefix: "!",
};
var Review = /** @class */ (function (_super) {
    __extends(Review, _super);
    function Review() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Review.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            var _this_1 = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log('Loading the Review plugin.');
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([(_e.sent())]));
                        if (this.app.workspace.layoutReady) {
                            this.onLayoutReady();
                        }
                        else {
                            this.app.workspace.on("layout-ready", this.onLayoutReady.bind(this));
                        }
                        this.addCommand({
                            id: 'future-review',
                            name: 'Add this note to a daily note for review',
                            checkCallback: function (checking) {
                                var leaf = _this_1.app.workspace.activeLeaf;
                                if (leaf) {
                                    if (!checking) {
                                        new ReviewModal(_this_1.app).open();
                                    }
                                    return true;
                                }
                                return false;
                            }
                        });
                        this.addCommand({
                            id: 'future-review-block',
                            name: 'Add this block to a daily note for review',
                            checkCallback: function (checking) {
                                var leaf = _this_1.app.workspace.activeLeaf;
                                if (leaf) {
                                    if (!checking) {
                                        new ReviewBlockModal(_this_1.app).open();
                                    }
                                    return true;
                                }
                                return false;
                            }
                        });
                        this.addSettingTab(new ReviewSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    Review.prototype.onLayoutReady = function () {
        // Check for the Natural Language Dates plugin after all the plugins are loaded.
        // If not found, tell the user to install it/initialize it.
        var naturalLanguageDates = this.app.plugins.getPlugin('nldates-obsidian');
        if (!naturalLanguageDates) {
            new obsidian.Notice("The Natural Language Dates plugin was not found. The Review plugin requires the Natural Language Dates plugin. Please install it first and make sure it is enabled before using Review.");
        }
    };
    Review.prototype.onunload = function () {
        console.log('The Review Dates plugin has been disabled and unloaded.');
    };
    Review.prototype.createBlockHash = function (inputText) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 7; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    Review.prototype.getBlock = function (inputLine, noteFile) {
        var obsidianApp = this.app;
        var noteBlocks = obsidianApp.metadataCache.getFileCache(noteFile).blocks;
        console.log("Checking if line '" + inputLine + "' is a block.");
        var blockString = "";
        if (noteBlocks) { // the file does contain blocks. If not, return ""
            for (var eachBlock in noteBlocks) { // iterate through the blocks. 
                console.log("Checking block ^" + eachBlock);
                var blockRegExp = new RegExp("(" + eachBlock + ")$", "gim");
                if (inputLine.match(blockRegExp)) { // if end of inputLine matches block, return it
                    blockString = eachBlock;
                    console.log("Found block ^" + blockString);
                    return blockString;
                }
            }
            return blockString;
        }
        return blockString;
    };
    Review.prototype.setReviewDate = function (someDate, someBlock) {
        return __awaiter(this, void 0, void 0, function () {
            var obsidianApp, naturalLanguageDates, parsedResult, inputDate, notesFolder, notesPath, reviewHeading, reviewLinePrefix, noteName_1, noteFile_1, noteLink_1, lineBlockID, lineWithBlock_1, files, dateFile_1, noteText, newDateFile, templateText, previousNoteText_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obsidianApp = this.app;
                        naturalLanguageDates = obsidianApp.plugins.getPlugin('nldates-obsidian');
                        if (!naturalLanguageDates) {
                            new obsidian.Notice("The Natural Language Dates plugin is not available. Please make sure it is installed and enabled before trying again.");
                            return [2 /*return*/];
                        }
                        if (someDate === "") {
                            someDate = this.settings.defaultReviewDate;
                        }
                        parsedResult = naturalLanguageDates.parseDate(someDate);
                        inputDate = parsedResult.formattedString;
                        console.debug("Date string to use: " + inputDate);
                        notesFolder = this.settings.dailyNotesFolder;
                        notesPath = "";
                        if (notesFolder === "") {
                            notesPath = "/"; // If the user is using the root for their daily notes, don't add a second /.
                        }
                        else {
                            notesPath = "/" + notesFolder + "/";
                        }
                        console.debug("The path to daily notes: " + notesPath);
                        reviewHeading = this.settings.reviewSectionHeading;
                        console.debug("The review section heading is: " + reviewHeading);
                        reviewLinePrefix = this.settings.linePrefix;
                        console.debug("The line prefix is: " + reviewLinePrefix);
                        if (!parsedResult.moment.isValid()) return [3 /*break*/, 5];
                        noteName_1 = obsidianApp.workspace.activeLeaf.getDisplayText();
                        noteFile_1 = obsidianApp.workspace.activeLeaf.view.file;
                        noteLink_1 = obsidianApp.metadataCache.fileToLinktext(noteFile_1, noteFile_1.path, true);
                        if (someBlock != undefined) {
                            console.log("Checking for block:");
                            lineBlockID = this.getBlock(someBlock, noteFile_1);
                            console.debug(lineBlockID);
                            if (this.getBlock(someBlock, noteFile_1) === "") { // The line is not already a block
                                console.debug("This line is not currently a block. Adding a block ID.");
                                lineBlockID = this.createBlockHash(someBlock).toString();
                                lineWithBlock_1 = someBlock + " ^" + lineBlockID;
                                obsidianApp.vault.read(noteFile_1).then(function (result) {
                                    var previousNoteText = result;
                                    var newNoteText = previousNoteText.replace(someBlock, lineWithBlock_1);
                                    obsidianApp.vault.modify(noteFile_1, newNoteText);
                                });
                            }
                            noteLink_1 = noteLink_1 + "#^" + lineBlockID;
                            reviewLinePrefix = this.settings.blockLinePrefix;
                        }
                        files = obsidianApp.vault.getFiles();
                        dateFile_1 = files.filter(function (e) { return e.name === inputDate //hat-tip 🎩 to @MrJackPhil for this little workflow 
                            || e.path === inputDate
                            || e.basename === inputDate; })[0];
                        console.debug("File found:" + dateFile_1);
                        if (!!dateFile_1) return [3 /*break*/, 3];
                        console.debug("The daily note for the given date does not exist yet. Creating it, then appending the review section.");
                        noteText = reviewHeading + "\n" + reviewLinePrefix + "[[" + noteLink_1 + "]]";
                        return [4 /*yield*/, main.createDailyNote(parsedResult.moment)];
                    case 1:
                        newDateFile = _a.sent();
                        return [4 /*yield*/, obsidianApp.vault.read(newDateFile)];
                    case 2:
                        templateText = _a.sent();
                        //console.log(templateText); // for debugging
                        if (templateText.includes(reviewHeading)) {
                            noteText = templateText.replace(reviewHeading, noteText);
                        }
                        else {
                            noteText = templateText + "\n" + noteText;
                        }
                        obsidianApp.vault.modify(newDateFile, noteText);
                        new obsidian.Notice("Set note \"" + noteName_1 + "\" for review on " + inputDate + ".");
                        return [3 /*break*/, 4];
                    case 3:
                        console.debug("The daily note already exists for the date given. Adding this note to it for review.");
                        previousNoteText_1 = "";
                        obsidianApp.vault.read(dateFile_1).then(function (result) {
                            previousNoteText_1 = result;
                            console.log("Previous Note text:\n" + previousNoteText_1);
                            var newNoteText = "";
                            if (previousNoteText_1.includes(reviewHeading)) {
                                newNoteText = previousNoteText_1.replace(reviewHeading, reviewHeading + "\n" + reviewLinePrefix + "[[" + noteLink_1 + "]]");
                            }
                            else {
                                newNoteText = previousNoteText_1 + "\n" + reviewHeading + "\n" + reviewLinePrefix + "[[" + noteLink_1 + "]]";
                            }
                            obsidianApp.vault.modify(dateFile_1, newNoteText);
                            new obsidian.Notice("Set note \"" + noteName_1 + "\" for review on " + inputDate + ".");
                        });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        new obsidian.Notice("You've entered an invalid date (note that \"two weeks\" will not work, but \"in two weeks\" will). The note was not set for review. Please try again.");
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Review;
}(obsidian.Plugin));
var ReviewModal = /** @class */ (function (_super) {
    __extends(ReviewModal, _super);
    function ReviewModal(app) {
        return _super.call(this, app) || this;
    }
    ReviewModal.prototype.onOpen = function () {
        var _this_1 = this;
        var _this = this;
        console.debug(_this);
        var contentEl = this.contentEl;
        var inputDateField = new obsidian.TextComponent(contentEl)
            .setPlaceholder(this.app.plugins.getPlugin("review-obsidian").settings.defaultReviewDate);
        new obsidian.ButtonComponent(contentEl)
            .setButtonText("Set Review Date")
            .onClick(function () {
            var inputDate = inputDateField.getValue();
            _this.app.plugins.getPlugin("review-obsidian").setReviewDate(inputDate);
            _this_1.close();
        });
        inputDateField.inputEl.focus();
        inputDateField.inputEl.addEventListener('keypress', function (keypressed) {
            if (keypressed.key === 'Enter') {
                var inputDate = inputDateField.getValue();
                _this.app.plugins.getPlugin("review-obsidian").setReviewDate(inputDate);
                _this.close();
            }
        });
    };
    ReviewModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return ReviewModal;
}(obsidian.Modal));
var ReviewBlockModal = /** @class */ (function (_super) {
    __extends(ReviewBlockModal, _super);
    function ReviewBlockModal(app) {
        return _super.call(this, app) || this;
    }
    ReviewBlockModal.prototype.onOpen = function () {
        var _this_1 = this;
        var _this = this;
        var editor = this.app.workspace.activeLeaf.view.sourceMode.cmEditor;
        var cursor = editor.getCursor();
        var lineText = editor.getLine(cursor.line);
        console.debug(_this);
        var contentEl = this.contentEl;
        var inputDateField = new obsidian.TextComponent(contentEl)
            .setPlaceholder(this.app.plugins.getPlugin("review-obsidian").settings.defaultReviewDate);
        new obsidian.ButtonComponent(contentEl)
            .setButtonText("Set Review Date")
            .onClick(function () {
            var inputDate = inputDateField.getValue();
            _this.app.plugins.getPlugin("review-obsidian").setReviewDate(inputDate, lineText);
            _this_1.close();
        });
        inputDateField.inputEl.focus();
        inputDateField.inputEl.addEventListener('keypress', function (keypressed) {
            if (keypressed.key === 'Enter') {
                var inputDate = inputDateField.getValue();
                _this.app.plugins.getPlugin("review-obsidian").setReviewDate(inputDate, lineText);
                _this.close();
            }
        });
    };
    ReviewBlockModal.prototype.onClose = function () {
        var contentEl = this.contentEl;
        contentEl.empty();
    };
    return ReviewBlockModal;
}(obsidian.Modal));
var ReviewSettingTab = /** @class */ (function (_super) {
    __extends(ReviewSettingTab, _super);
    function ReviewSettingTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReviewSettingTab.prototype.display = function () {
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Review Settings' });
        new obsidian.Setting(containerEl)
            .setName('Review section heading')
            .setDesc('Set the heading to use for the review section. BE CAREFUL: it must be unique in each daily note.')
            .addText(function (text) {
            return text
                .setPlaceholder('## Review')
                .setValue(plugin.settings.reviewSectionHeading)
                .onChange(function (value) {
                if (value === "") {
                    plugin.settings.reviewSectionHeading = "## Review";
                }
                else {
                    plugin.settings.reviewSectionHeading = value;
                }
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Line prefix')
            .setDesc('Set the prefix to use on each new line. E.g., use `- ` for bullets or `- [ ] ` for tasks. **Include the trailing space.**')
            .addText(function (text) {
            return text
                .setPlaceholder('- ')
                .setValue(plugin.settings.linePrefix)
                .onChange(function (value) {
                plugin.settings.linePrefix = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Block review line prefix')
            .setDesc('Set the prefix used when adding blocks to daily notes with Review. Use e.g., `- [ ] ` to link the block as a task, or `!` to create embeds.')
            .addText(function (text) {
            return text
                .setPlaceholder('!')
                .setValue(plugin.settings.blockLinePrefix)
                .onChange(function (value) {
                plugin.settings.blockLinePrefix = value;
                plugin.saveData(plugin.settings);
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Default review date')
            .setDesc('Set a default date to be used when no date is entered. Use natural language: "Next Monday", "November 5th", and "tomorrow" all work.')
            .addText(function (text) {
            return text
                .setPlaceholder('')
                .setValue(plugin.settings.defaultReviewDate)
                .onChange(function (value) {
                plugin.settings.defaultReviewDate = value;
                plugin.saveData(plugin.settings);
            });
        });
        // containerEl.createEl('h3', { text: 'Preset review schedules' });
        /*
        TKTKTK: Figure out how to add a function to a button inside the setting element. Currently `doSomething`, below, throws errors.
        containerEl.createEl('button', { text: "Add a new review schedule preset", attr: { onclick: "doSomething({ console.log('button clicked') });"}});
        */
    };
    return ReviewSettingTab;
}(obsidian.PluginSettingTab));

module.exports = Review;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9vYnNpZGlhbi1kYWlseS1ub3Rlcy1pbnRlcmZhY2UvZGlzdC9tYWluLmpzIiwibWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBvYnNpZGlhbiA9IHJlcXVpcmUoJ29ic2lkaWFuJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxudmFyIERFRkFVTFRfREFJTFlfTk9URV9GT1JNQVQgPSBcIllZWVktTU0tRERcIjtcclxudmFyIERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFUID0gXCJnZ2dnLVtXXXd3XCI7XHJcbnZhciBERUZBVUxUX01PTlRITFlfTk9URV9GT1JNQVQgPSBcIllZWVktTU1cIjtcblxuLyoqXHJcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgZGFpbHktbm90ZXNgIHBsdWdpblxyXG4gKiB0byBrZWVwIGJlaGF2aW9yIG9mIGNyZWF0aW5nIGEgbmV3IG5vdGUgaW4tc3luYy5cclxuICovXHJcbmZ1bmN0aW9uIGdldERhaWx5Tm90ZVNldHRpbmdzKCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgdmFyIF9nID0gd2luZG93LmFwcCwgaW50ZXJuYWxQbHVnaW5zID0gX2cuaW50ZXJuYWxQbHVnaW5zLCBwbHVnaW5zID0gX2cucGx1Z2lucztcclxuICAgICAgICB2YXIgZGFpbHlOb3RlU2V0dGluZ3MgPSAoX2IgPSAoX2EgPSBpbnRlcm5hbFBsdWdpbnMuZ2V0UGx1Z2luQnlJZChcImRhaWx5LW5vdGVzXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5zdGFuY2UpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vcHRpb25zO1xyXG4gICAgICAgIHZhciBwZXJpb2RpY05vdGVzU2V0dGluZ3MgPSAoX2QgPSAoX2MgPSBwbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0dGluZ3MpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5kYWlseTtcclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSBwZXJpb2RpY05vdGVzU2V0dGluZ3MgfHwgZGFpbHlOb3RlU2V0dGluZ3MgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZm9ybWF0OiBzZXR0aW5ncy5mb3JtYXQgfHwgREVGQVVMVF9EQUlMWV9OT1RFX0ZPUk1BVCxcclxuICAgICAgICAgICAgZm9sZGVyOiAoKF9lID0gc2V0dGluZ3MuZm9sZGVyKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UudHJpbSgpKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKChfZiA9IHNldHRpbmdzLnRlbXBsYXRlKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YudHJpbSgpKSB8fCBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiTm8gY3VzdG9tIGRhaWx5IG5vdGUgc2V0dGluZ3MgZm91bmQhXCIsIGVycik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFJlYWQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBgd2Vla2x5LW5vdGVzYCBwbHVnaW5cclxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2c7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgdmFyIHBsdWdpbk1hbmFnZXIgPSB3aW5kb3cuYXBwLnBsdWdpbnM7XHJcbiAgICAgICAgdmFyIGNhbGVuZGFyU2V0dGluZ3MgPSAoX2EgPSBwbHVnaW5NYW5hZ2VyLmdldFBsdWdpbihcImNhbGVuZGFyXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3B0aW9ucztcclxuICAgICAgICB2YXIgcGVyaW9kaWNOb3Rlc1NldHRpbmdzID0gKF9jID0gKF9iID0gcGx1Z2luTWFuYWdlci5nZXRQbHVnaW4oXCJwZXJpb2RpYy1ub3Rlc1wiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mud2Vla2x5O1xyXG4gICAgICAgIGlmIChwZXJpb2RpY05vdGVzU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogcGVyaW9kaWNOb3Rlc1NldHRpbmdzLmZvcm1hdCB8fCBERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVCxcclxuICAgICAgICAgICAgICAgIGZvbGRlcjogKChfZCA9IHBlcmlvZGljTm90ZXNTZXR0aW5ncy5mb2xkZXIpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50cmltKCkpIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKChfZSA9IHBlcmlvZGljTm90ZXNTZXR0aW5ncy50ZW1wbGF0ZSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnRyaW0oKSkgfHwgXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNldHRpbmdzID0gY2FsZW5kYXJTZXR0aW5ncyB8fCB7fTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb3JtYXQ6IHNldHRpbmdzLndlZWtseU5vdGVGb3JtYXQgfHwgREVGQVVMVF9XRUVLTFlfTk9URV9GT1JNQVQsXHJcbiAgICAgICAgICAgIGZvbGRlcjogKChfZiA9IHNldHRpbmdzLndlZWtseU5vdGVGb2xkZXIpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi50cmltKCkpIHx8IFwiXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAoKF9nID0gc2V0dGluZ3Mud2Vla2x5Tm90ZVRlbXBsYXRlKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cudHJpbSgpKSB8fCBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiTm8gY3VzdG9tIHdlZWtseSBub3RlIHNldHRpbmdzIGZvdW5kIVwiLCBlcnIpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZWFkIHRoZSB1c2VyIHNldHRpbmdzIGZvciB0aGUgYHBlcmlvZGljLW5vdGVzYCBwbHVnaW5cclxuICogdG8ga2VlcCBiZWhhdmlvciBvZiBjcmVhdGluZyBhIG5ldyBub3RlIGluLXN5bmMuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNb250aGx5Tm90ZVNldHRpbmdzKCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSBcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICgoX2IgPSAoX2EgPSB3aW5kb3cuYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXR0aW5ncykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1vbnRobHkpIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm1hdDogc2V0dGluZ3MuZm9ybWF0IHx8IERFRkFVTFRfTU9OVEhMWV9OT1RFX0ZPUk1BVCxcclxuICAgICAgICAgICAgZm9sZGVyOiAoKF9jID0gc2V0dGluZ3MuZm9sZGVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudHJpbSgpKSB8fCBcIlwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogKChfZCA9IHNldHRpbmdzLnRlbXBsYXRlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudHJpbSgpKSB8fCBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwiTm8gY3VzdG9tIG1vbnRobHkgbm90ZSBzZXR0aW5ncyBmb3VuZCFcIiwgZXJyKTtcclxuICAgIH1cclxufVxuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBkYXRlVUlEIGlzIGEgd2F5IG9mIHdlZWtseSBpZGVudGlmeWluZyBkYWlseS93ZWVrbHkvbW9udGhseSBub3Rlcy5cclxuICogVGhleSBhcmUgcHJlZml4ZWQgd2l0aCB0aGUgZ3JhbnVsYXJpdHkgdG8gYXZvaWQgYW1iaWd1aXR5LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGF0ZVVJRChkYXRlLCBncmFudWxhcml0eSkge1xyXG4gICAgaWYgKGdyYW51bGFyaXR5ID09PSB2b2lkIDApIHsgZ3JhbnVsYXJpdHkgPSBcImRheVwiOyB9XHJcbiAgICB2YXIgdHMgPSBkYXRlLmNsb25lKCkuc3RhcnRPZihncmFudWxhcml0eSkuZm9ybWF0KCk7XHJcbiAgICByZXR1cm4gZ3JhbnVsYXJpdHkgKyBcIi1cIiArIHRzO1xyXG59XHJcbmZ1bmN0aW9uIGdldERhdGVGcm9tRmlsZShmaWxlLCBncmFudWxhcml0eSkge1xyXG4gICAgdmFyIGdldFNldHRpbmdzID0ge1xyXG4gICAgICAgIGRheTogZ2V0RGFpbHlOb3RlU2V0dGluZ3MsXHJcbiAgICAgICAgd2VlazogZ2V0V2Vla2x5Tm90ZVNldHRpbmdzLFxyXG4gICAgICAgIG1vbnRoOiBnZXRNb250aGx5Tm90ZVNldHRpbmdzLFxyXG4gICAgfTtcclxuICAgIHZhciBmb3JtYXQgPSBnZXRTZXR0aW5nc1tncmFudWxhcml0eV0oKS5mb3JtYXQuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgdmFyIG5vdGVEYXRlID0gd2luZG93Lm1vbWVudChmaWxlLmJhc2VuYW1lLCBmb3JtYXQsIHRydWUpO1xyXG4gICAgcmV0dXJuIG5vdGVEYXRlLmlzVmFsaWQoKSA/IG5vdGVEYXRlIDogbnVsbDtcclxufVxuXG5mdW5jdGlvbiBlbnN1cmVGb2xkZXJFeGlzdHMocGF0aCQxKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpcnMsIGRpcjtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBkaXJzID0gcGF0aCQxLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXJzLnBvcCgpOyAvLyByZW1vdmUgYmFzZW5hbWVcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpcnMubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBkaXIgPSBwYXRoLmpvaW4oZGlyLCBkaXJzLnNoaWZ0KCkpLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGRpcikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHdpbmRvdy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGRpcildO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldE5vdGVQYXRoKGRpcmVjdG9yeSwgZmlsZW5hbWUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGF0aCQxO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmlsZW5hbWUuZW5kc1dpdGgoXCIubWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgKz0gXCIubWRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCQxID0gb2JzaWRpYW4ubm9ybWFsaXplUGF0aChwYXRoLmpvaW4oZGlyZWN0b3J5LCBmaWxlbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGVuc3VyZUZvbGRlckV4aXN0cyhwYXRoJDEpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHBhdGgkMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldFRlbXBsYXRlQ29udGVudHModGVtcGxhdGUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXBwLCBtZXRhZGF0YUNhY2hlLCB2YXVsdCwgdGVtcGxhdGVQYXRoLCB0ZW1wbGF0ZUZpbGUsIGNvbnRlbnRzLCBlcnJfMTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBhcHAgPSB3aW5kb3cuYXBwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhQ2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZSwgdmF1bHQgPSBhcHAudmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYXRoID0gb2JzaWRpYW4ubm9ybWFsaXplUGF0aCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlUGF0aCA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVzb2x2ZShcIlwiKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRmlsZSA9IG1ldGFkYXRhQ2FjaGUuZ2V0Rmlyc3RMaW5rcGF0aERlc3QodGVtcGxhdGVQYXRoLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2YXVsdC5jYWNoZWRSZWFkKHRlbXBsYXRlRmlsZSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjb250ZW50c107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byByZWFkIHRoZSBkYWlseSBub3RlIHRlbXBsYXRlICdcIiArIHRlbXBsYXRlUGF0aCArIFwiJ1wiLCBlcnJfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIkZhaWxlZCB0byByZWFkIHRoZSBkYWlseSBub3RlIHRlbXBsYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBcIlwiXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxuXG52YXIgRGFpbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEYWlseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRGFpbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRGFpbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcjtcclxufShFcnJvcikpO1xyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBtaW1pY3MgdGhlIGJlaGF2aW9yIG9mIHRoZSBkYWlseS1ub3RlcyBwbHVnaW5cclxuICogc28gaXQgd2lsbCByZXBsYWNlIHt7ZGF0ZX19LCB7e3RpdGxlfX0sIGFuZCB7e3RpbWV9fSB3aXRoIHRoZVxyXG4gKiBmb3JtYXR0ZWQgdGltZXN0YW1wLlxyXG4gKlxyXG4gKiBOb3RlOiBpdCBoYXMgYW4gYWRkZWQgYm9udXMgdGhhdCBpdCdzIG5vdCAndG9kYXknIHNwZWNpZmljLlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRGFpbHlOb3RlKGRhdGUpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXBwLCB2YXVsdCwgbW9tZW50LCBfYSwgdGVtcGxhdGUsIGZvcm1hdCwgZm9sZGVyLCB0ZW1wbGF0ZUNvbnRlbnRzLCBmaWxlbmFtZSwgbm9ybWFsaXplZFBhdGgsIGNyZWF0ZWRGaWxlLCBlcnJfMTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBhcHAgPSB3aW5kb3cuYXBwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhdWx0ID0gYXBwLnZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCA9IHdpbmRvdy5tb21lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBnZXREYWlseU5vdGVTZXR0aW5ncygpLCB0ZW1wbGF0ZSA9IF9hLnRlbXBsYXRlLCBmb3JtYXQgPSBfYS5mb3JtYXQsIGZvbGRlciA9IF9hLmZvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRUZW1wbGF0ZUNvbnRlbnRzKHRlbXBsYXRlKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb250ZW50cyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGRhdGUuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0Tm90ZVBhdGgoZm9sZGVyLCBmaWxlbmFtZSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRQYXRoID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzMsIDUsICwgNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHZhdWx0LmNyZWF0ZShub3JtYWxpemVkUGF0aCwgdGVtcGxhdGVDb250ZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKihkYXRlfHRpbWUpXFxzKjooLio/KX19L2dpLCBmdW5jdGlvbiAoXywgX3RpbWVPckRhdGUsIG1vbWVudEZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KG1vbWVudEZvcm1hdC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKmRhdGVcXHMqfX0vZ2ksIGZpbGVuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpbWVcXHMqfX0vZ2ksIG1vbWVudCgpLmZvcm1hdChcIkhIOm1tXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRmlsZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY3JlYXRlZEZpbGVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICdcIiArIG5vcm1hbGl6ZWRQYXRoICsgXCInXCIsIGVycl8xKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgZmlsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGFpbHlOb3RlKGRhdGUsIGRhaWx5Tm90ZXMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHJldHVybiAoX2EgPSBkYWlseU5vdGVzW2dldERhdGVVSUQoZGF0ZSwgXCJkYXlcIildKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFsbERhaWx5Tm90ZXMoKSB7XHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgYWxsIGRhaWx5IG5vdGVzIGluIHRoZSBkYWlseSBub3RlIGZvbGRlclxyXG4gICAgICovXHJcbiAgICB2YXIgdmF1bHQgPSB3aW5kb3cuYXBwLnZhdWx0O1xyXG4gICAgdmFyIGZvbGRlciA9IGdldERhaWx5Tm90ZVNldHRpbmdzKCkuZm9sZGVyO1xyXG4gICAgdmFyIGRhaWx5Tm90ZXNGb2xkZXIgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgob2JzaWRpYW4ubm9ybWFsaXplUGF0aChmb2xkZXIpKTtcclxuICAgIGlmICghZGFpbHlOb3Rlc0ZvbGRlcikge1xyXG4gICAgICAgIHRocm93IG5ldyBEYWlseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yKFwiRmFpbGVkIHRvIGZpbmQgZGFpbHkgbm90ZXMgZm9sZGVyXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhaWx5Tm90ZXMgPSB7fTtcclxuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbihkYWlseU5vdGVzRm9sZGVyLCBmdW5jdGlvbiAobm90ZSkge1xyXG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBnZXREYXRlRnJvbUZpbGUobm90ZSwgXCJkYXlcIik7XHJcbiAgICAgICAgICAgIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVN0cmluZyA9IGdldERhdGVVSUQoZGF0ZSwgXCJkYXlcIik7XHJcbiAgICAgICAgICAgICAgICBkYWlseU5vdGVzW2RhdGVTdHJpbmddID0gbm90ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhaWx5Tm90ZXM7XHJcbn1cblxudmFyIFdlZWtseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdlZWtseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV2Vla2x5Tm90ZXNGb2xkZXJNaXNzaW5nRXJyb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdlZWtseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yO1xyXG59KEVycm9yKSk7XHJcbmZ1bmN0aW9uIGdldERheXNPZldlZWsoKSB7XHJcbiAgICB2YXIgbW9tZW50ID0gd2luZG93Lm1vbWVudDtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICB2YXIgd2Vla1N0YXJ0ID0gbW9tZW50LmxvY2FsZURhdGEoKS5fd2Vlay5kb3c7XHJcbiAgICB2YXIgZGF5c09mV2VlayA9IFtcclxuICAgICAgICBcInN1bmRheVwiLFxyXG4gICAgICAgIFwibW9uZGF5XCIsXHJcbiAgICAgICAgXCJ0dWVzZGF5XCIsXHJcbiAgICAgICAgXCJ3ZWRuZXNkYXlcIixcclxuICAgICAgICBcInRodXJzZGF5XCIsXHJcbiAgICAgICAgXCJmcmlkYXlcIixcclxuICAgICAgICBcInNhdHVyZGF5XCIsXHJcbiAgICBdO1xyXG4gICAgd2hpbGUgKHdlZWtTdGFydCkge1xyXG4gICAgICAgIGRheXNPZldlZWsucHVzaChkYXlzT2ZXZWVrLnNoaWZ0KCkpO1xyXG4gICAgICAgIHdlZWtTdGFydC0tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRheXNPZldlZWs7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrTnVtZXJpY2FsVmFsdWUoZGF5T2ZXZWVrTmFtZSkge1xyXG4gICAgcmV0dXJuIGdldERheXNPZldlZWsoKS5pbmRleE9mKGRheU9mV2Vla05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5Tm90ZShkYXRlKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhdWx0LCBfYSwgdGVtcGxhdGUsIGZvcm1hdCwgZm9sZGVyLCB0ZW1wbGF0ZUNvbnRlbnRzLCBmaWxlbmFtZSwgbm9ybWFsaXplZFBhdGgsIGNyZWF0ZWRGaWxlLCBlcnJfMTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB2YXVsdCA9IHdpbmRvdy5hcHAudmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBnZXRXZWVrbHlOb3RlU2V0dGluZ3MoKSwgdGVtcGxhdGUgPSBfYS50ZW1wbGF0ZSwgZm9ybWF0ID0gX2EuZm9ybWF0LCBmb2xkZXIgPSBfYS5mb2xkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0VGVtcGxhdGVDb250ZW50cyh0ZW1wbGF0ZSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29udGVudHMgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBkYXRlLmZvcm1hdChmb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldE5vdGVQYXRoKGZvbGRlciwgZmlsZW5hbWUpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkUGF0aCA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB2YXVsdC5jcmVhdGUobm9ybWFsaXplZFBhdGgsIHRlbXBsYXRlQ29udGVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyooZGF0ZXx0aW1lKVxccyo6KC4qPyl9fS9naSwgZnVuY3Rpb24gKF8sIF90aW1lT3JEYXRlLCBtb21lbnRGb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdChtb21lbnRGb3JtYXQudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97e1xccyp0aXRsZVxccyp9fS9naSwgZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KVxccyo6KC4qPyl9fS9naSwgZnVuY3Rpb24gKF8sIGRheU9mV2VlaywgbW9tZW50Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5ID0gZ2V0RGF5T2ZXZWVrTnVtZXJpY2FsVmFsdWUoZGF5T2ZXZWVrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLndlZWtkYXkoZGF5KS5mb3JtYXQobW9tZW50Rm9ybWF0LnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEZpbGUgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNyZWF0ZWRGaWxlXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBmaWxlOiAnXCIgKyBub3JtYWxpemVkUGF0aCArIFwiJ1wiLCBlcnJfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IG9ic2lkaWFuLk5vdGljZShcIlVuYWJsZSB0byBjcmVhdGUgbmV3IGZpbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdlZWtseU5vdGUoZGF0ZSwgd2Vla2x5Tm90ZXMpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHJldHVybiAoX2EgPSB3ZWVrbHlOb3Rlc1tnZXREYXRlVUlEKGRhdGUsIFwid2Vla1wiKV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWxsV2Vla2x5Tm90ZXMoKSB7XHJcbiAgICB2YXIgdmF1bHQgPSB3aW5kb3cuYXBwLnZhdWx0O1xyXG4gICAgdmFyIGZvbGRlciA9IGdldFdlZWtseU5vdGVTZXR0aW5ncygpLmZvbGRlcjtcclxuICAgIHZhciB3ZWVrbHlOb3Rlc0ZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xyXG4gICAgaWYgKCF3ZWVrbHlOb3Rlc0ZvbGRlcikge1xyXG4gICAgICAgIHRocm93IG5ldyBXZWVrbHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcihcIkZhaWxlZCB0byBmaW5kIHdlZWtseSBub3RlcyBmb2xkZXJcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgd2Vla2x5Tm90ZXMgPSB7fTtcclxuICAgIG9ic2lkaWFuLlZhdWx0LnJlY3Vyc2VDaGlsZHJlbih3ZWVrbHlOb3Rlc0ZvbGRlciwgZnVuY3Rpb24gKG5vdGUpIHtcclxuICAgICAgICBpZiAobm90ZSBpbnN0YW5jZW9mIG9ic2lkaWFuLlRGaWxlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gZ2V0RGF0ZUZyb21GaWxlKG5vdGUsIFwid2Vla1wiKTtcclxuICAgICAgICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlU3RyaW5nID0gZ2V0RGF0ZVVJRChkYXRlLCBcIndlZWtcIik7XHJcbiAgICAgICAgICAgICAgICB3ZWVrbHlOb3Rlc1tkYXRlU3RyaW5nXSA9IG5vdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3ZWVrbHlOb3RlcztcclxufVxuXG52YXIgTW9udGhseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1vbnRobHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1vbnRobHlOb3Rlc0ZvbGRlck1pc3NpbmdFcnJvcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTW9udGhseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yO1xyXG59KEVycm9yKSk7XHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIG1pbWljcyB0aGUgYmVoYXZpb3Igb2YgdGhlIGRhaWx5LW5vdGVzIHBsdWdpblxyXG4gKiBzbyBpdCB3aWxsIHJlcGxhY2Uge3tkYXRlfX0sIHt7dGl0bGV9fSwgYW5kIHt7dGltZX19IHdpdGggdGhlXHJcbiAqIGZvcm1hdHRlZCB0aW1lc3RhbXAuXHJcbiAqXHJcbiAqIE5vdGU6IGl0IGhhcyBhbiBhZGRlZCBib251cyB0aGF0IGl0J3Mgbm90ICd0b2RheScgc3BlY2lmaWMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVNb250aGx5Tm90ZShkYXRlKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhdWx0LCBfYSwgdGVtcGxhdGUsIGZvcm1hdCwgZm9sZGVyLCB0ZW1wbGF0ZUNvbnRlbnRzLCBmaWxlbmFtZSwgbm9ybWFsaXplZFBhdGgsIGNyZWF0ZWRGaWxlLCBlcnJfMTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB2YXVsdCA9IHdpbmRvdy5hcHAudmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBnZXRNb250aGx5Tm90ZVNldHRpbmdzKCksIHRlbXBsYXRlID0gX2EudGVtcGxhdGUsIGZvcm1hdCA9IF9hLmZvcm1hdCwgZm9sZGVyID0gX2EuZm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFRlbXBsYXRlQ29udGVudHModGVtcGxhdGUpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbnRlbnRzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZGF0ZS5mb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXROb3RlUGF0aChmb2xkZXIsIGZpbGVuYW1lKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFBhdGggPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgNSwgLCA2XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdmF1bHQuY3JlYXRlKG5vcm1hbGl6ZWRQYXRoLCB0ZW1wbGF0ZUNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqKGRhdGV8dGltZSlcXHMqOiguKj8pfX0vZ2ksIGZ1bmN0aW9uIChfLCBfdGltZU9yRGF0ZSwgbW9tZW50Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQobW9tZW50Rm9ybWF0LnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqZGF0ZVxccyp9fS9naSwgZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgve3tcXHMqdGltZVxccyp9fS9naSwgd2luZG93Lm1vbWVudCgpLmZvcm1hdChcIkhIOm1tXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL3t7XFxzKnRpdGxlXFxzKn19L2dpLCBmaWxlbmFtZSkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkRmlsZSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY3JlYXRlZEZpbGVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGZpbGU6ICdcIiArIG5vcm1hbGl6ZWRQYXRoICsgXCInXCIsIGVycl8xKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgb2JzaWRpYW4uTm90aWNlKFwiVW5hYmxlIHRvIGNyZWF0ZSBuZXcgZmlsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0TW9udGhseU5vdGUoZGF0ZSwgbW9udGhseU5vdGVzKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICByZXR1cm4gKF9hID0gbW9udGhseU5vdGVzW2dldERhdGVVSUQoZGF0ZSwgXCJtb250aFwiKV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWxsTW9udGhseU5vdGVzKCkge1xyXG4gICAgdmFyIHZhdWx0ID0gd2luZG93LmFwcC52YXVsdDtcclxuICAgIHZhciBmb2xkZXIgPSBnZXRNb250aGx5Tm90ZVNldHRpbmdzKCkuZm9sZGVyO1xyXG4gICAgdmFyIG1vbnRobHlOb3Rlc0ZvbGRlciA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChvYnNpZGlhbi5ub3JtYWxpemVQYXRoKGZvbGRlcikpO1xyXG4gICAgaWYgKCFtb250aGx5Tm90ZXNGb2xkZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgTW9udGhseU5vdGVzRm9sZGVyTWlzc2luZ0Vycm9yKFwiRmFpbGVkIHRvIGZpbmQgbW9udGhseSBub3RlcyBmb2xkZXJcIik7XHJcbiAgICB9XHJcbiAgICB2YXIgbW9udGhseU5vdGVzID0ge307XHJcbiAgICBvYnNpZGlhbi5WYXVsdC5yZWN1cnNlQ2hpbGRyZW4obW9udGhseU5vdGVzRm9sZGVyLCBmdW5jdGlvbiAobm90ZSkge1xyXG4gICAgICAgIGlmIChub3RlIGluc3RhbmNlb2Ygb2JzaWRpYW4uVEZpbGUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBnZXREYXRlRnJvbUZpbGUobm90ZSwgXCJtb250aFwiKTtcclxuICAgICAgICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlU3RyaW5nID0gZ2V0RGF0ZVVJRChkYXRlLCBcIm1vbnRoXCIpO1xyXG4gICAgICAgICAgICAgICAgbW9udGhseU5vdGVzW2RhdGVTdHJpbmddID0gbm90ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1vbnRobHlOb3RlcztcclxufVxuXG5mdW5jdGlvbiBhcHBIYXNEYWlseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIHZhciBhcHAgPSB3aW5kb3cuYXBwO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHZhciBkYWlseU5vdGVzUGx1Z2luID0gYXBwLmludGVybmFsUGx1Z2lucy5wbHVnaW5zW1wiZGFpbHktbm90ZXNcIl07XHJcbiAgICBpZiAoZGFpbHlOb3Rlc1BsdWdpbiAmJiBkYWlseU5vdGVzUGx1Z2luLmVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICB2YXIgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xyXG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgKChfYiA9IChfYSA9IHBlcmlvZGljTm90ZXMuc2V0dGluZ3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYWlseSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVuYWJsZWQpO1xyXG59XHJcbi8qKlxyXG4gKiBYWFg6IFwiV2Vla2x5IE5vdGVzXCIgbGl2ZSBpbiBlaXRoZXIgdGhlIENhbGVuZGFyIHBsdWdpbiBvciB0aGUgcGVyaW9kaWMtbm90ZXMgcGx1Z2luLlxyXG4gKiBDaGVjayBib3RoIHVudGlsIHRoZSB3ZWVrbHkgbm90ZXMgZmVhdHVyZSBpcyByZW1vdmVkIGZyb20gdGhlIENhbGVuZGFyIHBsdWdpbi5cclxuICovXHJcbmZ1bmN0aW9uIGFwcEhhc1dlZWtseU5vdGVzUGx1Z2luTG9hZGVkKCkge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIHZhciBhcHAgPSB3aW5kb3cuYXBwO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGlmIChhcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJjYWxlbmRhclwiKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHZhciBwZXJpb2RpY05vdGVzID0gYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicGVyaW9kaWMtbm90ZXNcIik7XHJcbiAgICByZXR1cm4gcGVyaW9kaWNOb3RlcyAmJiAoKF9iID0gKF9hID0gcGVyaW9kaWNOb3Rlcy5zZXR0aW5ncykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLndlZWtseSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVuYWJsZWQpO1xyXG59XHJcbmZ1bmN0aW9uIGFwcEhhc01vbnRobHlOb3Rlc1BsdWdpbkxvYWRlZCgpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICB2YXIgYXBwID0gd2luZG93LmFwcDtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICB2YXIgcGVyaW9kaWNOb3RlcyA9IGFwcC5wbHVnaW5zLmdldFBsdWdpbihcInBlcmlvZGljLW5vdGVzXCIpO1xyXG4gICAgcmV0dXJuIHBlcmlvZGljTm90ZXMgJiYgKChfYiA9IChfYSA9IHBlcmlvZGljTm90ZXMuc2V0dGluZ3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tb250aGx5KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZW5hYmxlZCk7XHJcbn1cblxuZXhwb3J0cy5ERUZBVUxUX0RBSUxZX05PVEVfRk9STUFUID0gREVGQVVMVF9EQUlMWV9OT1RFX0ZPUk1BVDtcbmV4cG9ydHMuREVGQVVMVF9NT05USExZX05PVEVfRk9STUFUID0gREVGQVVMVF9NT05USExZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5ERUZBVUxUX1dFRUtMWV9OT1RFX0ZPUk1BVCA9IERFRkFVTFRfV0VFS0xZX05PVEVfRk9STUFUO1xuZXhwb3J0cy5hcHBIYXNEYWlseU5vdGVzUGx1Z2luTG9hZGVkID0gYXBwSGFzRGFpbHlOb3Rlc1BsdWdpbkxvYWRlZDtcbmV4cG9ydHMuYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkID0gYXBwSGFzTW9udGhseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5hcHBIYXNXZWVrbHlOb3Rlc1BsdWdpbkxvYWRlZCA9IGFwcEhhc1dlZWtseU5vdGVzUGx1Z2luTG9hZGVkO1xuZXhwb3J0cy5jcmVhdGVEYWlseU5vdGUgPSBjcmVhdGVEYWlseU5vdGU7XG5leHBvcnRzLmNyZWF0ZU1vbnRobHlOb3RlID0gY3JlYXRlTW9udGhseU5vdGU7XG5leHBvcnRzLmNyZWF0ZVdlZWtseU5vdGUgPSBjcmVhdGVXZWVrbHlOb3RlO1xuZXhwb3J0cy5nZXRBbGxEYWlseU5vdGVzID0gZ2V0QWxsRGFpbHlOb3RlcztcbmV4cG9ydHMuZ2V0QWxsTW9udGhseU5vdGVzID0gZ2V0QWxsTW9udGhseU5vdGVzO1xuZXhwb3J0cy5nZXRBbGxXZWVrbHlOb3RlcyA9IGdldEFsbFdlZWtseU5vdGVzO1xuZXhwb3J0cy5nZXREYWlseU5vdGUgPSBnZXREYWlseU5vdGU7XG5leHBvcnRzLmdldERhaWx5Tm90ZVNldHRpbmdzID0gZ2V0RGFpbHlOb3RlU2V0dGluZ3M7XG5leHBvcnRzLmdldERhdGVGcm9tRmlsZSA9IGdldERhdGVGcm9tRmlsZTtcbmV4cG9ydHMuZ2V0RGF0ZVVJRCA9IGdldERhdGVVSUQ7XG5leHBvcnRzLmdldE1vbnRobHlOb3RlID0gZ2V0TW9udGhseU5vdGU7XG5leHBvcnRzLmdldE1vbnRobHlOb3RlU2V0dGluZ3MgPSBnZXRNb250aGx5Tm90ZVNldHRpbmdzO1xuZXhwb3J0cy5nZXRUZW1wbGF0ZUNvbnRlbnRzID0gZ2V0VGVtcGxhdGVDb250ZW50cztcbmV4cG9ydHMuZ2V0V2Vla2x5Tm90ZSA9IGdldFdlZWtseU5vdGU7XG5leHBvcnRzLmdldFdlZWtseU5vdGVTZXR0aW5ncyA9IGdldFdlZWtseU5vdGVTZXR0aW5ncztcbiIsImltcG9ydCB7IEFwcCwgQnV0dG9uQ29tcG9uZW50LCBNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRleHRDb21wb25lbnQgfSBmcm9tICdvYnNpZGlhbic7XHJcbmltcG9ydCB7IGNyZWF0ZURhaWx5Tm90ZSB9IGZyb20gJ29ic2lkaWFuLWRhaWx5LW5vdGVzLWludGVyZmFjZSc7XHJcblxyXG5pbnRlcmZhY2UgSVJldmlld1NldHRpbmdzIHtcclxuXHRkYWlseU5vdGVzRm9sZGVyOiBzdHJpbmc7XHJcblx0cmV2aWV3U2VjdGlvbkhlYWRpbmc6IHN0cmluZztcclxuXHRsaW5lUHJlZml4OiBzdHJpbmc7XHJcblx0ZGVmYXVsdFJldmlld0RhdGU6IHN0cmluZztcclxuXHRibG9ja0xpbmVQcmVmaXg6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogSVJldmlld1NldHRpbmdzID0ge1xyXG5cdGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXHJcblx0cmV2aWV3U2VjdGlvbkhlYWRpbmc6IFwiIyMgUmV2aWV3XCIsXHJcblx0bGluZVByZWZpeDogXCItIFwiLFxyXG5cdGRlZmF1bHRSZXZpZXdEYXRlOiBcInRvbW9ycm93XCIsXHJcblx0YmxvY2tMaW5lUHJlZml4OiBcIiFcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJldmlldyBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IElSZXZpZXdTZXR0aW5ncztcclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0xvYWRpbmcgdGhlIFJldmlldyBwbHVnaW4uJyk7XHJcblxyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIChhd2FpdCB0aGlzLmxvYWREYXRhKCkpKVxyXG5cclxuXHRcdGlmICh0aGlzLmFwcC53b3Jrc3BhY2UubGF5b3V0UmVhZHkpIHtcclxuXHRcdFx0dGhpcy5vbkxheW91dFJlYWR5KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJsYXlvdXQtcmVhZHlcIiwgdGhpcy5vbkxheW91dFJlYWR5LmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnZnV0dXJlLXJldmlldycsXHJcblx0XHRcdG5hbWU6ICdBZGQgdGhpcyBub3RlIHRvIGEgZGFpbHkgbm90ZSBmb3IgcmV2aWV3JyxcclxuXHJcblx0XHRcdGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4geyAvLyBJZiBhIG5vdGUgaXMgY3VycmVudGx5IGFjdGl2ZSwgb3BlbiB0aGUgcGx1Z2luJ3MgbW9kYWwgdG8gcmVjZWl2ZSBhIGRhdGUgc3RyaW5nLlxyXG5cdFx0XHRcdGxldCBsZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XHJcblx0XHRcdFx0aWYgKGxlYWYpIHtcclxuXHRcdFx0XHRcdGlmICghY2hlY2tpbmcpIHtcclxuXHRcdFx0XHRcdFx0bmV3IFJldmlld01vZGFsKHRoaXMuYXBwKS5vcGVuKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2Z1dHVyZS1yZXZpZXctYmxvY2snLFxyXG5cdFx0XHRuYW1lOiAnQWRkIHRoaXMgYmxvY2sgdG8gYSBkYWlseSBub3RlIGZvciByZXZpZXcnLFxyXG5cclxuXHRcdFx0Y2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XHJcblx0XHRcdFx0bGV0IGxlYWYgPSB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZjtcclxuXHRcdFx0XHRpZiAobGVhZikge1xyXG5cdFx0XHRcdFx0aWYgKCFjaGVja2luZykge1xyXG5cdFx0XHRcdFx0XHRuZXcgUmV2aWV3QmxvY2tNb2RhbCh0aGlzLmFwcCkub3BlbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBSZXZpZXdTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdH1cclxuXHJcblx0b25MYXlvdXRSZWFkeSgpIHtcclxuXHRcdC8vIENoZWNrIGZvciB0aGUgTmF0dXJhbCBMYW5ndWFnZSBEYXRlcyBwbHVnaW4gYWZ0ZXIgYWxsIHRoZSBwbHVnaW5zIGFyZSBsb2FkZWQuXHJcblx0XHQvLyBJZiBub3QgZm91bmQsIHRlbGwgdGhlIHVzZXIgdG8gaW5zdGFsbCBpdC9pbml0aWFsaXplIGl0LlxyXG5cdFx0bGV0IG5hdHVyYWxMYW5ndWFnZURhdGVzID0gKDxhbnk+dGhpcy5hcHApLnBsdWdpbnMuZ2V0UGx1Z2luKCdubGRhdGVzLW9ic2lkaWFuJyk7XHJcblx0XHRpZiAoIW5hdHVyYWxMYW5ndWFnZURhdGVzKSB7XHJcblx0XHRcdG5ldyBOb3RpY2UoXCJUaGUgTmF0dXJhbCBMYW5ndWFnZSBEYXRlcyBwbHVnaW4gd2FzIG5vdCBmb3VuZC4gVGhlIFJldmlldyBwbHVnaW4gcmVxdWlyZXMgdGhlIE5hdHVyYWwgTGFuZ3VhZ2UgRGF0ZXMgcGx1Z2luLiBQbGVhc2UgaW5zdGFsbCBpdCBmaXJzdCBhbmQgbWFrZSBzdXJlIGl0IGlzIGVuYWJsZWQgYmVmb3JlIHVzaW5nIFJldmlldy5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdUaGUgUmV2aWV3IERhdGVzIHBsdWdpbiBoYXMgYmVlbiBkaXNhYmxlZCBhbmQgdW5sb2FkZWQuJyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVCbG9ja0hhc2goaW5wdXRUZXh0OiBzdHJpbmcpOiBzdHJpbmcgeyAvLyBDcmVkaXQgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzNDk0MjZcclxuXHRcdGxldCByZXN1bHQgPSAnJztcclxuXHRcdHZhciBjaGFyYWN0ZXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblx0XHR2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgNzsgaSsrICkge1xyXG5cdFx0ICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRnZXRCbG9jayhpbnB1dExpbmU6IHN0cmluZywgbm90ZUZpbGU6IG9iamVjdCk6IHN0cmluZyB7IC8vUmV0dXJucyB0aGUgc3RyaW5nIG9mIGEgYmxvY2sgSUQgaWYgYmxvY2sgaXMgZm91bmQsIG9yIFwiXCIgaWYgbm90LlxyXG5cdFx0bGV0IG9ic2lkaWFuQXBwID0gdGhpcy5hcHA7XHJcblx0XHRsZXQgbm90ZUJsb2NrcyA9IG9ic2lkaWFuQXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKG5vdGVGaWxlKS5ibG9ja3M7XHJcblx0XHRjb25zb2xlLmxvZyhcIkNoZWNraW5nIGlmIGxpbmUgJ1wiICsgaW5wdXRMaW5lICsgXCInIGlzIGEgYmxvY2suXCIpO1xyXG5cdFx0bGV0IGJsb2NrU3RyaW5nID0gXCJcIjtcclxuXHRcdGlmIChub3RlQmxvY2tzKSB7IC8vIHRoZSBmaWxlIGRvZXMgY29udGFpbiBibG9ja3MuIElmIG5vdCwgcmV0dXJuIFwiXCJcclxuXHRcdFx0Zm9yIChsZXQgZWFjaEJsb2NrIGluIG5vdGVCbG9ja3MpIHsgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBibG9ja3MuIFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2hlY2tpbmcgYmxvY2sgXlwiICsgZWFjaEJsb2NrKTtcclxuXHRcdFx0XHRsZXQgYmxvY2tSZWdFeHAgPSBuZXcgUmVnRXhwKFwiKFwiICsgZWFjaEJsb2NrICsgXCIpJFwiLCBcImdpbVwiKTtcclxuXHRcdFx0XHRpZiAoaW5wdXRMaW5lLm1hdGNoKGJsb2NrUmVnRXhwKSkgeyAvLyBpZiBlbmQgb2YgaW5wdXRMaW5lIG1hdGNoZXMgYmxvY2ssIHJldHVybiBpdFxyXG5cdFx0XHRcdFx0YmxvY2tTdHJpbmcgPSBlYWNoQmxvY2s7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkZvdW5kIGJsb2NrIF5cIiArIGJsb2NrU3RyaW5nKTtcclxuXHRcdFx0XHRcdHJldHVybiBibG9ja1N0cmluZztcclxuXHRcdFx0XHR9IFxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBibG9ja1N0cmluZztcclxuXHRcdH0gXHJcblx0XHRyZXR1cm4gYmxvY2tTdHJpbmc7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzZXRSZXZpZXdEYXRlKHNvbWVEYXRlOiBzdHJpbmcsIHNvbWVCbG9jaz86IHN0cmluZykge1xyXG5cdFx0bGV0IG9ic2lkaWFuQXBwID0gdGhpcy5hcHA7XHJcblx0XHRsZXQgbmF0dXJhbExhbmd1YWdlRGF0ZXMgPSBvYnNpZGlhbkFwcC5wbHVnaW5zLmdldFBsdWdpbignbmxkYXRlcy1vYnNpZGlhbicpOyAvLyBHZXQgdGhlIE5hdHVyYWwgTGFuZ3VhZ2UgRGF0ZXMgcGx1Z2luLlxyXG5cclxuXHRcdGlmICghbmF0dXJhbExhbmd1YWdlRGF0ZXMpIHtcclxuXHRcdFx0bmV3IE5vdGljZShcIlRoZSBOYXR1cmFsIExhbmd1YWdlIERhdGVzIHBsdWdpbiBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgbWFrZSBzdXJlIGl0IGlzIGluc3RhbGxlZCBhbmQgZW5hYmxlZCBiZWZvcmUgdHJ5aW5nIGFnYWluLlwiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzb21lRGF0ZSA9PT0gXCJcIikge1xyXG5cdFx0XHRzb21lRGF0ZSA9IHRoaXMuc2V0dGluZ3MuZGVmYXVsdFJldmlld0RhdGU7XHJcblx0XHR9XHJcblx0XHQvLyBVc2UgdGhlIE5hdHVyYWwgTGFuZ3VhZ2UgRGF0ZXMgcGx1Z2luJ3MgcHJvY2Vzc0RhdGUgbWV0aG9kIHRvIGNvbnZlcnQgdGhlIGlucHV0IGRhdGUgaW50byBhIGRhaWx5IG5vdGUgdGl0bGUuXHJcblx0XHRsZXQgcGFyc2VkUmVzdWx0ID0gbmF0dXJhbExhbmd1YWdlRGF0ZXMucGFyc2VEYXRlKHNvbWVEYXRlKTtcclxuXHRcdGxldCBpbnB1dERhdGUgPSBwYXJzZWRSZXN1bHQuZm9ybWF0dGVkU3RyaW5nO1xyXG5cclxuXHRcdGNvbnNvbGUuZGVidWcoXCJEYXRlIHN0cmluZyB0byB1c2U6IFwiICsgaW5wdXREYXRlKTtcclxuXHJcblx0XHQvLyBHZXQgdGhlIGZvbGRlciBwYXRoLlxyXG5cdFx0bGV0IG5vdGVzRm9sZGVyID0gdGhpcy5zZXR0aW5ncy5kYWlseU5vdGVzRm9sZGVyO1xyXG5cdFx0bGV0IG5vdGVzUGF0aCA9IFwiXCI7XHJcblx0XHRpZiAobm90ZXNGb2xkZXIgPT09IFwiXCIpIHtcclxuXHRcdFx0bm90ZXNQYXRoID0gXCIvXCI7IC8vIElmIHRoZSB1c2VyIGlzIHVzaW5nIHRoZSByb290IGZvciB0aGVpciBkYWlseSBub3RlcywgZG9uJ3QgYWRkIGEgc2Vjb25kIC8uXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRub3Rlc1BhdGggPSBcIi9cIiArIG5vdGVzRm9sZGVyICsgXCIvXCI7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmRlYnVnKFwiVGhlIHBhdGggdG8gZGFpbHkgbm90ZXM6IFwiICsgbm90ZXNQYXRoKTtcclxuXHJcblx0XHQvLyBHZXQgdGhlIHJldmlldyBzZWN0aW9uIGhlYWRlci5cclxuXHRcdGxldCByZXZpZXdIZWFkaW5nID0gdGhpcy5zZXR0aW5ncy5yZXZpZXdTZWN0aW9uSGVhZGluZztcclxuXHRcdGNvbnNvbGUuZGVidWcoXCJUaGUgcmV2aWV3IHNlY3Rpb24gaGVhZGluZyBpczogXCIgKyByZXZpZXdIZWFkaW5nKTtcclxuXHJcblx0XHQvLyBHZXQgdGhlIGxpbmUgcHJlZml4LlxyXG5cdFx0bGV0IHJldmlld0xpbmVQcmVmaXggPSB0aGlzLnNldHRpbmdzLmxpbmVQcmVmaXg7XHJcblx0XHRjb25zb2xlLmRlYnVnKFwiVGhlIGxpbmUgcHJlZml4IGlzOiBcIiArIHJldmlld0xpbmVQcmVmaXgpO1xyXG5cclxuXHRcdC8vIElmIHRoZSBkYXRlIGlzIHJlY29nbml6ZWQgYW5kIHZhbGlkXHJcblx0XHRpZiAocGFyc2VkUmVzdWx0Lm1vbWVudC5pc1ZhbGlkKCkpIHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBjdXJyZW50IG5vdGUgbmFtZVxyXG5cdFx0XHRsZXQgbm90ZU5hbWUgPSBvYnNpZGlhbkFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZi5nZXREaXNwbGF5VGV4dCgpO1xyXG5cdFx0XHRsZXQgbm90ZUZpbGUgPSBvYnNpZGlhbkFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZi52aWV3LmZpbGU7XHJcblx0XHRcdGxldCBub3RlTGluayA9IG9ic2lkaWFuQXBwLm1ldGFkYXRhQ2FjaGUuZmlsZVRvTGlua3RleHQobm90ZUZpbGUsIG5vdGVGaWxlLnBhdGgsIHRydWUpO1xyXG5cclxuXHRcdFx0aWYgKHNvbWVCbG9jayAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNoZWNraW5nIGZvciBibG9jazpcIik7XHJcblx0XHRcdFx0bGV0IGxpbmVCbG9ja0lEID0gdGhpcy5nZXRCbG9jayhzb21lQmxvY2ssIG5vdGVGaWxlKTtcclxuXHRcdFx0XHRjb25zb2xlLmRlYnVnKGxpbmVCbG9ja0lEKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuZ2V0QmxvY2soc29tZUJsb2NrLCBub3RlRmlsZSkgPT09IFwiXCIpIHsgLy8gVGhlIGxpbmUgaXMgbm90IGFscmVhZHkgYSBibG9ja1xyXG5cdFx0XHRcdFx0Y29uc29sZS5kZWJ1ZyhcIlRoaXMgbGluZSBpcyBub3QgY3VycmVudGx5IGEgYmxvY2suIEFkZGluZyBhIGJsb2NrIElELlwiKTtcclxuXHRcdFx0XHRcdGxpbmVCbG9ja0lEID0gdGhpcy5jcmVhdGVCbG9ja0hhc2goc29tZUJsb2NrKS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0bGV0IGxpbmVXaXRoQmxvY2sgPSBzb21lQmxvY2sgKyBcIiBeXCIgKyBsaW5lQmxvY2tJRDtcclxuXHRcdFx0XHRcdG9ic2lkaWFuQXBwLnZhdWx0LnJlYWQobm90ZUZpbGUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgcHJldmlvdXNOb3RlVGV4dCA9IHJlc3VsdDtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld05vdGVUZXh0ID0gcHJldmlvdXNOb3RlVGV4dC5yZXBsYWNlKHNvbWVCbG9jaywgbGluZVdpdGhCbG9jayk7XHJcblx0XHRcdFx0XHRcdG9ic2lkaWFuQXBwLnZhdWx0Lm1vZGlmeShub3RlRmlsZSwgbmV3Tm90ZVRleHQpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bm90ZUxpbmsgPSBub3RlTGluayArIFwiI15cIiArIGxpbmVCbG9ja0lEO1xyXG5cdFx0XHRcdHJldmlld0xpbmVQcmVmaXggPSB0aGlzLnNldHRpbmdzLmJsb2NrTGluZVByZWZpeDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gY2hlY2sgaWYgdGhlIGRhaWx5IG5vdGUgZmlsZSBleGlzdHNcclxuXHRcdFx0bGV0IGZpbGVzID0gb2JzaWRpYW5BcHAudmF1bHQuZ2V0RmlsZXMoKTtcclxuXHRcdFx0Y29uc3QgZGF0ZUZpbGUgPSBmaWxlcy5maWx0ZXIoZSA9PiBlLm5hbWUgPT09IGlucHV0RGF0ZSAvL2hhdC10aXAg8J+OqSB0byBATXJKYWNrUGhpbCBmb3IgdGhpcyBsaXR0bGUgd29ya2Zsb3cgXHJcblx0XHRcdFx0fHwgZS5wYXRoID09PSBpbnB1dERhdGVcclxuXHRcdFx0XHR8fCBlLmJhc2VuYW1lID09PSBpbnB1dERhdGVcclxuXHRcdFx0KVswXTtcclxuXHRcdFx0Y29uc29sZS5kZWJ1ZyhcIkZpbGUgZm91bmQ6XCIgKyBkYXRlRmlsZSk7XHJcblxyXG5cdFx0XHRpZiAoIWRhdGVGaWxlKSB7IC8vdGhlIGRhdGUgZmlsZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XHJcblx0XHRcdFx0Y29uc29sZS5kZWJ1ZyhcIlRoZSBkYWlseSBub3RlIGZvciB0aGUgZ2l2ZW4gZGF0ZSBkb2VzIG5vdCBleGlzdCB5ZXQuIENyZWF0aW5nIGl0LCB0aGVuIGFwcGVuZGluZyB0aGUgcmV2aWV3IHNlY3Rpb24uXCIpXHJcblx0XHRcdFx0bGV0IG5vdGVUZXh0ID0gcmV2aWV3SGVhZGluZyArIFwiXFxuXCIgKyByZXZpZXdMaW5lUHJlZml4ICsgXCJbW1wiICsgbm90ZUxpbmsgKyBcIl1dXCI7XHJcblx0XHRcdFx0Ly8gbGV0IG5ld0RhdGVGaWxlID0gb2JzaWRpYW5BcHAudmF1bHQuY3JlYXRlKG5vdGVzUGF0aCArIGlucHV0RGF0ZSArIFwiLm1kXCIsIG5vdGVUZXh0KTsgLy9wcmV2aW91cyBhcHByb2FjaFxyXG5cdFx0XHRcdGxldCBuZXdEYXRlRmlsZSA9IGF3YWl0IGNyZWF0ZURhaWx5Tm90ZShwYXJzZWRSZXN1bHQubW9tZW50KTsgLy8gVXNlIEBsaWFtY2FpbidzIG9ic2lkaWFuLWRhaWx5LW5vdGVzLWludGVyZmFjZSB0byBjcmVhdGUgYSBkYWlseSBub3RlIHdpdGggY29yZS1kZWZpbmVkIHRlbXBsYXRlc1xyXG5cdFx0XHRcdGxldCB0ZW1wbGF0ZVRleHQgPSBhd2FpdCBvYnNpZGlhbkFwcC52YXVsdC5yZWFkKG5ld0RhdGVGaWxlKTtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKHRlbXBsYXRlVGV4dCk7IC8vIGZvciBkZWJ1Z2dpbmdcclxuXHRcdFx0XHRpZiAodGVtcGxhdGVUZXh0LmluY2x1ZGVzKHJldmlld0hlYWRpbmcpKSB7XHJcblx0XHRcdFx0XHRub3RlVGV4dCA9IHRlbXBsYXRlVGV4dC5yZXBsYWNlKHJldmlld0hlYWRpbmcsIG5vdGVUZXh0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bm90ZVRleHQgPSB0ZW1wbGF0ZVRleHQgKyBcIlxcblwiICsgbm90ZVRleHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9ic2lkaWFuQXBwLnZhdWx0Lm1vZGlmeShuZXdEYXRlRmlsZSwgbm90ZVRleHQpO1xyXG5cdFx0XHRcdG5ldyBOb3RpY2UoXCJTZXQgbm90ZSBcXFwiXCIgKyBub3RlTmFtZSArIFwiXFxcIiBmb3IgcmV2aWV3IG9uIFwiICsgaW5wdXREYXRlICsgXCIuXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUuZGVidWcoXCJUaGUgZGFpbHkgbm90ZSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhlIGRhdGUgZ2l2ZW4uIEFkZGluZyB0aGlzIG5vdGUgdG8gaXQgZm9yIHJldmlldy5cIilcclxuXHRcdFx0XHRsZXQgcHJldmlvdXNOb3RlVGV4dCA9IFwiXCI7XHJcblx0XHRcdFx0b2JzaWRpYW5BcHAudmF1bHQucmVhZChkYXRlRmlsZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IC8vIEdldCB0aGUgdGV4dCBpbiB0aGUgbm90ZS4gU2VhcmNoIGl0IGZvciAjIyBSZXZpZXcgYW5kIGFwcGVuZCB0byB0aGF0IHNlY3Rpb24uIEVsc2UsIGFwcGVuZCAjIyBSZXZpZXcgYW5kIHRoZSBsaW5rIHRvIHRoZSBub3RlIGZvciByZXZpZXcuXHJcblx0XHRcdFx0XHRwcmV2aW91c05vdGVUZXh0ID0gcmVzdWx0O1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQcmV2aW91cyBOb3RlIHRleHQ6XFxuXCIgKyBwcmV2aW91c05vdGVUZXh0KTtcclxuXHRcdFx0XHRcdGxldCBuZXdOb3RlVGV4dCA9IFwiXCI7XHJcblx0XHRcdFx0XHRpZiAocHJldmlvdXNOb3RlVGV4dC5pbmNsdWRlcyhyZXZpZXdIZWFkaW5nKSkge1xyXG5cdFx0XHRcdFx0XHRuZXdOb3RlVGV4dCA9IHByZXZpb3VzTm90ZVRleHQucmVwbGFjZShyZXZpZXdIZWFkaW5nLCByZXZpZXdIZWFkaW5nICsgXCJcXG5cIiArIHJldmlld0xpbmVQcmVmaXggKyBcIltbXCIgKyBub3RlTGluayArIFwiXV1cIik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXdOb3RlVGV4dCA9IHByZXZpb3VzTm90ZVRleHQgKyBcIlxcblwiICsgcmV2aWV3SGVhZGluZyArIFwiXFxuXCIgKyByZXZpZXdMaW5lUHJlZml4ICsgXCJbW1wiICsgbm90ZUxpbmsgKyBcIl1dXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRvYnNpZGlhbkFwcC52YXVsdC5tb2RpZnkoZGF0ZUZpbGUsIG5ld05vdGVUZXh0KTtcclxuXHRcdFx0XHRcdG5ldyBOb3RpY2UoXCJTZXQgbm90ZSBcXFwiXCIgKyBub3RlTmFtZSArIFwiXFxcIiBmb3IgcmV2aWV3IG9uIFwiICsgaW5wdXREYXRlICsgXCIuXCIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuZXcgTm90aWNlKFwiWW91J3ZlIGVudGVyZWQgYW4gaW52YWxpZCBkYXRlIChub3RlIHRoYXQgXFxcInR3byB3ZWVrc1xcXCIgd2lsbCBub3Qgd29yaywgYnV0IFxcXCJpbiB0d28gd2Vla3NcXFwiIHdpbGwpLiBUaGUgbm90ZSB3YXMgbm90IHNldCBmb3IgcmV2aWV3LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybjtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJldmlld01vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XHJcblx0XHRzdXBlcihhcHApO1xyXG5cdH1cclxuXHJcblx0b25PcGVuKCkge1xyXG5cdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdGNvbnNvbGUuZGVidWcoX3RoaXMpO1xyXG5cdFx0bGV0IHsgY29udGVudEVsIH0gPSB0aGlzO1xyXG5cdFx0bGV0IGlucHV0RGF0ZUZpZWxkID0gbmV3IFRleHRDb21wb25lbnQoY29udGVudEVsKVxyXG5cdFx0XHQuc2V0UGxhY2Vob2xkZXIodGhpcy5hcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJyZXZpZXctb2JzaWRpYW5cIikuc2V0dGluZ3MuZGVmYXVsdFJldmlld0RhdGUpO1xyXG5cdFx0bGV0IGlucHV0QnV0dG9uID0gbmV3IEJ1dHRvbkNvbXBvbmVudChjb250ZW50RWwpXHJcblx0XHRcdC5zZXRCdXR0b25UZXh0KFwiU2V0IFJldmlldyBEYXRlXCIpXHJcblx0XHRcdC5vbkNsaWNrKCgpID0+IHtcclxuXHRcdFx0XHRsZXQgaW5wdXREYXRlID0gaW5wdXREYXRlRmllbGQuZ2V0VmFsdWUoKTtcclxuXHRcdFx0XHRfdGhpcy5hcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJyZXZpZXctb2JzaWRpYW5cIikuc2V0UmV2aWV3RGF0ZShpbnB1dERhdGUpO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRpbnB1dERhdGVGaWVsZC5pbnB1dEVsLmZvY3VzKCk7XHJcblx0XHRpbnB1dERhdGVGaWVsZC5pbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGtleXByZXNzZWQpIHtcclxuXHRcdFx0aWYgKGtleXByZXNzZWQua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdFx0dmFyIGlucHV0RGF0ZSA9IGlucHV0RGF0ZUZpZWxkLmdldFZhbHVlKClcclxuXHRcdFx0XHRfdGhpcy5hcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJyZXZpZXctb2JzaWRpYW5cIikuc2V0UmV2aWV3RGF0ZShpbnB1dERhdGUpO1xyXG5cdFx0XHRcdF90aGlzLmNsb3NlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25DbG9zZSgpIHtcclxuXHRcdGxldCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcclxuXHRcdGNvbnRlbnRFbC5lbXB0eSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgUmV2aWV3QmxvY2tNb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHR9XHJcblxyXG5cdG9uT3BlbigpIHtcclxuXHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHRsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xyXG5cdFx0bGV0IGN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoKTtcclxuXHRcdGxldCBsaW5lVGV4dCA9IGVkaXRvci5nZXRMaW5lKGN1cnNvci5saW5lKTtcclxuXHRcdGNvbnNvbGUuZGVidWcoX3RoaXMpO1xyXG5cdFx0bGV0IHsgY29udGVudEVsIH0gPSB0aGlzO1xyXG5cdFx0bGV0IGlucHV0RGF0ZUZpZWxkID0gbmV3IFRleHRDb21wb25lbnQoY29udGVudEVsKVxyXG5cdFx0XHQuc2V0UGxhY2Vob2xkZXIodGhpcy5hcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJyZXZpZXctb2JzaWRpYW5cIikuc2V0dGluZ3MuZGVmYXVsdFJldmlld0RhdGUpO1xyXG5cdFx0bGV0IGlucHV0QnV0dG9uID0gbmV3IEJ1dHRvbkNvbXBvbmVudChjb250ZW50RWwpXHJcblx0XHRcdC5zZXRCdXR0b25UZXh0KFwiU2V0IFJldmlldyBEYXRlXCIpXHJcblx0XHRcdC5vbkNsaWNrKCgpID0+IHtcclxuXHRcdFx0XHRsZXQgaW5wdXREYXRlID0gaW5wdXREYXRlRmllbGQuZ2V0VmFsdWUoKTtcclxuXHRcdFx0XHRfdGhpcy5hcHAucGx1Z2lucy5nZXRQbHVnaW4oXCJyZXZpZXctb2JzaWRpYW5cIikuc2V0UmV2aWV3RGF0ZShpbnB1dERhdGUsIGxpbmVUZXh0KTtcclxuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0aW5wdXREYXRlRmllbGQuaW5wdXRFbC5mb2N1cygpO1xyXG5cdFx0aW5wdXREYXRlRmllbGQuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChrZXlwcmVzc2VkKSB7XHJcblx0XHRcdGlmIChrZXlwcmVzc2VkLmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRcdHZhciBpbnB1dERhdGUgPSBpbnB1dERhdGVGaWVsZC5nZXRWYWx1ZSgpXHJcblx0XHRcdFx0X3RoaXMuYXBwLnBsdWdpbnMuZ2V0UGx1Z2luKFwicmV2aWV3LW9ic2lkaWFuXCIpLnNldFJldmlld0RhdGUoaW5wdXREYXRlLCBsaW5lVGV4dCk7XHJcblx0XHRcdFx0X3RoaXMuY2xvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRvbkNsb3NlKCkge1xyXG5cdFx0bGV0IHsgY29udGVudEVsIH0gPSB0aGlzO1xyXG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBSZXZpZXdTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgcGx1Z2luOiBhbnkgPSAodGhpcyBhcyBhbnkpLnBsdWdpbjtcclxuXHJcblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1JldmlldyBTZXR0aW5ncycgfSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdSZXZpZXcgc2VjdGlvbiBoZWFkaW5nJylcclxuXHRcdFx0LnNldERlc2MoJ1NldCB0aGUgaGVhZGluZyB0byB1c2UgZm9yIHRoZSByZXZpZXcgc2VjdGlvbi4gQkUgQ0FSRUZVTDogaXQgbXVzdCBiZSB1bmlxdWUgaW4gZWFjaCBkYWlseSBub3RlLicpXHJcblx0XHRcdC5hZGRUZXh0KCh0ZXh0KSA9PlxyXG5cdFx0XHRcdHRleHRcclxuXHRcdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignIyMgUmV2aWV3JylcclxuXHRcdFx0XHRcdC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MucmV2aWV3U2VjdGlvbkhlYWRpbmcpXHJcblx0XHRcdFx0XHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0XHRcdHBsdWdpbi5zZXR0aW5ncy5yZXZpZXdTZWN0aW9uSGVhZGluZyA9IFwiIyMgUmV2aWV3XCI7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cGx1Z2luLnNldHRpbmdzLnJldmlld1NlY3Rpb25IZWFkaW5nID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdMaW5lIHByZWZpeCcpXHJcblx0XHRcdC5zZXREZXNjKCdTZXQgdGhlIHByZWZpeCB0byB1c2Ugb24gZWFjaCBuZXcgbGluZS4gRS5nLiwgdXNlIGAtIGAgZm9yIGJ1bGxldHMgb3IgYC0gWyBdIGAgZm9yIHRhc2tzLiAqKkluY2x1ZGUgdGhlIHRyYWlsaW5nIHNwYWNlLioqJylcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+XHJcblx0XHRcdFx0dGV4dFxyXG5cdFx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCctICcpXHJcblx0XHRcdFx0XHQuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmxpbmVQcmVmaXgpXHJcblx0XHRcdFx0XHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRcdHBsdWdpbi5zZXR0aW5ncy5saW5lUHJlZml4ID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnQmxvY2sgcmV2aWV3IGxpbmUgcHJlZml4JylcclxuXHRcdFx0LnNldERlc2MoJ1NldCB0aGUgcHJlZml4IHVzZWQgd2hlbiBhZGRpbmcgYmxvY2tzIHRvIGRhaWx5IG5vdGVzIHdpdGggUmV2aWV3LiBVc2UgZS5nLiwgYC0gWyBdIGAgdG8gbGluayB0aGUgYmxvY2sgYXMgYSB0YXNrLCBvciBgIWAgdG8gY3JlYXRlIGVtYmVkcy4nKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4gXHJcblx0XHRcdFx0dGV4dFxyXG5cdFx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCchJylcclxuXHRcdFx0XHRcdC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuYmxvY2tMaW5lUHJlZml4KVxyXG5cdFx0XHRcdFx0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRwbHVnaW4uc2V0dGluZ3MuYmxvY2tMaW5lUHJlZml4ID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnRGVmYXVsdCByZXZpZXcgZGF0ZScpXHJcblx0XHRcdC5zZXREZXNjKCdTZXQgYSBkZWZhdWx0IGRhdGUgdG8gYmUgdXNlZCB3aGVuIG5vIGRhdGUgaXMgZW50ZXJlZC4gVXNlIG5hdHVyYWwgbGFuZ3VhZ2U6IFwiTmV4dCBNb25kYXlcIiwgXCJOb3ZlbWJlciA1dGhcIiwgYW5kIFwidG9tb3Jyb3dcIiBhbGwgd29yay4nKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4gXHJcblx0XHRcdFx0dGV4dFxyXG5cdFx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCcnKVxyXG5cdFx0XHRcdFx0LnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5kZWZhdWx0UmV2aWV3RGF0ZSlcclxuXHRcdFx0XHRcdC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdFx0cGx1Z2luLnNldHRpbmdzLmRlZmF1bHRSZXZpZXdEYXRlID0gdmFsdWU7XHJcblx0XHRcdFx0XHRcdHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdFxyXG5cdFx0Ly8gY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnUHJlc2V0IHJldmlldyBzY2hlZHVsZXMnIH0pO1xyXG5cclxuXHRcdC8qXHJcblx0XHRUS1RLVEs6IEZpZ3VyZSBvdXQgaG93IHRvIGFkZCBhIGZ1bmN0aW9uIHRvIGEgYnV0dG9uIGluc2lkZSB0aGUgc2V0dGluZyBlbGVtZW50LiBDdXJyZW50bHkgYGRvU29tZXRoaW5nYCwgYmVsb3csIHRocm93cyBlcnJvcnMuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiBcIkFkZCBhIG5ldyByZXZpZXcgc2NoZWR1bGUgcHJlc2V0XCIsIGF0dHI6IHsgb25jbGljazogXCJkb1NvbWV0aGluZyh7IGNvbnNvbGUubG9nKCdidXR0b24gY2xpY2tlZCcpIH0pO1wifX0pO1xyXG5cdFx0Ki9cclxuXHR9XHRcclxufVxyXG4iXSwibmFtZXMiOlsicGF0aCIsIm9ic2lkaWFuIiwiTm90aWNlIiwiY3JlYXRlRGFpbHlOb3RlIiwiUGx1Z2luIiwiVGV4dENvbXBvbmVudCIsIkJ1dHRvbkNvbXBvbmVudCIsIk1vZGFsIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFD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QyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNBLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMs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
