'use strict';

var obsidian = require('obsidian');

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

var DiscordianPlugin = /** @class */ (function (_super) {
    __extends(DiscordianPlugin, _super);
    function DiscordianPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // refresh function for when we change settings
        _this.refresh = function () {
            // re-load the style
            _this.updateStyle();
        };
        return _this;
    }
    DiscordianPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || {
                            hideVault: true,
                            hideTitleBar: true,
                            hideStatusBar: true,
                            originalMarkings: false,
                            relationLinesPreview: true,
                            prettyTasksEditor: true,
                            darkEnhance: false,
                            fontSizeNotes: 14,
                            fontSizeFileExplorer: 14,
                            writerMode: false,
                            paragraphFocusMode: false,
                            paragraphFocusFade: 75,
                            flatAndyMode: true,
                            readableLength: 45
                        };
                        this.addSettingTab(new DiscordianPluginSettingsTab(this.app, this));
                        this.addStyle();
                        this.addCommands();
                        this.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscordianPlugin.prototype.onunload = function () {
        this.removeStyle();
    };
    DiscordianPlugin.prototype.addCommands = function () {
        var _this = this;
        this.addCommand({
            id: 'toggle-discordian-writer-mode',
            name: 'Toggle Writer Mode',
            callback: function () {
                _this.settings.writerMode = !_this.settings.writerMode;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-flat-andy-mode',
            name: 'Toggle Flat Andy Mode',
            callback: function () {
                _this.settings.flatAndyMode = !_this.settings.flatAndyMode;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-paragraph-focus-mode',
            name: 'Toggle Paragraph Focus Mode',
            callback: function () {
                _this.settings.paragraphFocusMode = !_this.settings.paragraphFocusMode;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-discord-original-markings',
            name: 'Toggle Discord original markings',
            callback: function () {
                _this.settings.originalMarkings = !_this.settings.originalMarkings;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-relationship-lines-preview',
            name: 'Toggle relationship lines in Preview mode',
            callback: function () {
                _this.settings.relationLinesPreview = !_this.settings.relationLinesPreview;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-pretty-tasks-preview',
            name: 'Toggle Pretty Task Lists in Editor mode',
            callback: function () {
                _this.settings.prettyTasksEditor = !_this.settings.prettyTasksEditor;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
        this.addCommand({
            id: 'toggle-dark-enhance',
            name: 'Toggle Dark note headers',
            callback: function () {
                _this.settings.darkEnhance = !_this.settings.darkEnhance;
                _this.saveData(_this.settings);
                _this.refresh();
            }
        });
    };
    // add the styling elements we need
    DiscordianPlugin.prototype.addStyle = function () {
        // add a css block for our settings-dependent styles
        var css = document.createElement('style');
        css.id = 'discordian-theme';
        document.getElementsByTagName("head")[0].appendChild(css);
        // add the main class
        document.body.classList.add('discordian-theme');
        document.body.classList.add('discordian-readable-length');
        document.body.classList.add('discordian-paragraph-focus-fade');
        // update the style with the settings-dependent styles
        this.updateStyle();
    };
    DiscordianPlugin.prototype.removeStyle = function () {
        var discordianClasses = [
            'discordian-theme',
            'discordian-writer-mode',
            'discordian-flat-andy-mode',
            'discordian-paragraph-focus',
            'discordian-paragraph-focus-fade',
            'discordian-readable-length',
            'discordian-font-size-notes',
            'discordian-font-size-file-explorer',
            'discordian-discord-markings',
            'discordian-rel-preview',
            'discordian-pretty-tasks-editor',
            'discordian-dark-enhance',
            'discordian-hide-vault',
            'discordian-hide-titlebar',
            'discordian-hide-statusbar'
        ];
        document.body.removeClasses(discordianClasses);
    };
    DiscordianPlugin.prototype.initStyles = function () {
        var discordianEl = document.getElementById('discordian-theme');
        if (discordianEl) {
            var len = this.settings.readableLength + 'rem';
            var fade = 100 - this.settings.paragraphFocusFade;
            var fontSizeNotes = this.settings.fontSizeNotes / 16 + 'rem';
            var fontSizeFileExplorer = this.settings.fontSizeFileExplorer / 16 + 'rem';
            var letterSpacingNotes = (this.settings.fontSizeNotes < 16 ? -0.2 : -0.4) + 'px';
            discordianEl.innerText = "\n                    body.discordian-theme {\n                        --readable-line-length:" + len + ";\n                        --paragraph-focus-fade: 0." + fade + ";\n                        --font-size-notes: " + fontSizeNotes + ";\n                        --font-size-file-explorer: " + fontSizeFileExplorer + ";\n                        --letter-spacing-notes: " + letterSpacingNotes + ";\n                    }\n                ";
        }
        else {
            throw "Could not find Discordian Theme";
        }
    };
    // update the styles (at the start, or as the result of a settings change)
    DiscordianPlugin.prototype.updateStyle = function () {
        document.body.classList.toggle('discordian-writer-mode', this.settings.writerMode);
        document.body.classList.toggle('discordian-flat-andy-mode', this.settings.flatAndyMode);
        document.body.classList.toggle('discordian-paragraph-focus', this.settings.paragraphFocusMode);
        document.body.classList.toggle('discordian-hide-vault', this.settings.hideVault);
        document.body.classList.toggle('discordian-hide-titlebar', this.settings.hideTitleBar);
        document.body.classList.toggle('discordian-hide-statusbar', this.settings.hideStatusBar);
        document.body.classList.toggle('discordian-original-markings', this.settings.originalMarkings);
        document.body.classList.toggle('discordian-rel-preview', this.settings.relationLinesPreview);
        document.body.classList.toggle('discordian-pretty-tasks-editor', this.settings.prettyTasksEditor);
        document.body.classList.toggle('discordian-dark-enhance', this.settings.darkEnhance);
        this.initStyles();
    };
    return DiscordianPlugin;
}(obsidian.Plugin));
var DiscordianPluginSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordianPluginSettingsTab, _super);
    function DiscordianPluginSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    DiscordianPluginSettingsTab.prototype.display = function () {
        var containerEl = this.containerEl;
        var settings = this.plugin.settings;
        containerEl.empty();
        this.addPluginDescription(containerEl);
        this.addPluginSettingsHeader(containerEl, 'Theme Settings');
        this.addWriterModeSettings(containerEl, settings);
        this.addFlatAndyModeSettings(containerEl, settings);
        this.addParagraphFocusModeSettings(containerEl, settings);
        this.addReadableLengthSettings(containerEl, settings);
        this.addOriginalMarkingsSettings(containerEl, settings);
        this.addRelationLinesPreviewSettings(containerEl, settings);
        this.addPrettyTasksEditorSettings(containerEl, settings);
        this.addDarkEnhanceSettings(containerEl, settings);
        this.addPluginSettingsSeparator(containerEl);
        this.addPluginSettingsHeader(containerEl, 'Fonts');
        this.addNotesFontSizeSettings(containerEl, settings);
        this.addFileExplorerFontSizeSettings(containerEl, settings);
        this.addPluginSettingsSeparator(containerEl);
        this.addPluginSettingsHeader(containerEl, 'If not using Hider plugin');
        this.addHideVaultSettings(containerEl, settings);
        this.addHideTitleBarSettings(containerEl, settings);
        this.addHideStatusBarSettings(containerEl, settings);
    };
    DiscordianPluginSettingsTab.prototype.addPluginDescription = function (containerEl) {
        var description = containerEl.createEl('div', { cls: 'plugin-description' });
        description.createEl('h3', { text: 'Thanks for using Discordian !' });
        description.createEl('p', { text: 'If you notice any issues, try to update to the latest version and reload Obsidian.' });
        description.createEl('p', { text: 'Otherwise feel free to bring it up on Github or better yet contribute a fix.' });
        description.createEl('a', {
            text: 'https://github.com/radekkozak/discordian/issues/',
            attr: { 'href': 'https://github.com/radekkozak/discordian/issues/', 'target': '_blank' }
        });
    };
    DiscordianPluginSettingsTab.prototype.addPluginSettingsHeader = function (containerEl, headerTitle) {
        containerEl.createEl('h4', { text: headerTitle });
    };
    DiscordianPluginSettingsTab.prototype.addPluginSettingsSeparator = function (containerEl) {
        containerEl.createEl('p', { text: '⊷', cls: 'plugin-description separator' });
    };
    DiscordianPluginSettingsTab.prototype.addWriterModeSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Writer mode')
            .setDesc('Hides visual excess when sidebars are collapsed (accessible by hover) ')
            .addToggle(function (toggle) { return toggle.setValue(settings.writerMode)
            .onChange(function (value) {
            settings.writerMode = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addFlatAndyModeSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Flat Andy Mode')
            .setDesc('Flatter notes stacking when in Andy Mode (no elevation shadow)')
            .addToggle(function (toggle) { return toggle.setValue(settings.flatAndyMode)
            .onChange(function (value) {
            settings.flatAndyMode = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addParagraphFocusModeSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Paragraph focus mode')
            .setDesc('This aims to imitate well-known iA Writer paragraph focus.')
            .addToggle(function (toggle) { return toggle.setValue(settings.paragraphFocusMode)
            .onChange(function (value) {
            settings.paragraphFocusMode = value;
            _this.plugin.saveData(settings);
            setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', !value);
            _this.plugin.refresh();
        }); });
        var nameFade = 'Paragraph Focus Mode fade ';
        var setting = new obsidian.Setting(containerEl)
            .setName(nameFade + '( = ' + settings.paragraphFocusFade + '% )')
            .setDesc('Amount of fade out when in Paragraph Focus Mode (default 75%)')
            .addSlider(function (slider) { return slider.setLimits(25, 90, 5)
            .setValue(settings.paragraphFocusFade)
            .onChange(function (value) {
            settings.paragraphFocusFade = value;
            setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', !value);
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(nameFade + '( = ' + settings.paragraphFocusFade + '% )');
        }); });
        setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', !settings.paragraphFocusMode);
    };
    DiscordianPluginSettingsTab.prototype.addReadableLengthSettings = function (containerEl, settings) {
        var _this = this;
        var readableLineLength = document.getElementsByClassName('is-readable-line-width');
        var name = 'Readable line length ';
        var setting = new obsidian.Setting(containerEl)
            .setName(name + '( = ' + settings.readableLength + 'rem )')
            .setDesc('Obsidian\'s Readable line length needs to be enabled (default 45 rem)')
            .addSlider(function (slider) { return slider.setLimits(45, 120, 5)
            .setValue(settings.readableLength)
            .onChange(function (value) {
            settings.readableLength = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(name + '( = ' + settings.readableLength + 'rem )');
        }); });
        setting.settingEl.classList.toggle('discordian-plugin-setting-disabled', readableLineLength.length == 0);
    };
    DiscordianPluginSettingsTab.prototype.addOriginalMarkingsSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Discord original markings')
            .setDesc('Use Discord original markings such as bold, italics, inline code, quotes and so on')
            .addToggle(function (toggle) { return toggle.setValue(settings.originalMarkings)
            .onChange(function (value) {
            settings.originalMarkings = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addDarkEnhanceSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Dark note headers')
            .setDesc('Make note headers more prominent')
            .addToggle(function (toggle) { return toggle.setValue(settings.darkEnhance)
            .onChange(function (value) {
            settings.darkEnhance = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addRelationLinesPreviewSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Relationship lines in Preview mode')
            .setDesc('Show lines connecting related bullet points and task lists')
            .addToggle(function (toggle) { return toggle.setValue(settings.relationLinesPreview)
            .onChange(function (value) {
            settings.relationLinesPreview = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addPrettyTasksEditorSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Pretty Task Lists in Editor mode')
            .setDesc("HACKISH : please use both 'Smart indent lists' and 'Use tabs' options for best experience")
            .addToggle(function (toggle) { return toggle.setValue(settings.prettyTasksEditor)
            .onChange(function (value) {
            settings.prettyTasksEditor = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addNotesFontSizeSettings = function (containerEl, settings) {
        var _this = this;
        var name = 'Notes font size ';
        var setting = new obsidian.Setting(containerEl)
            .setName(name + '( = ' + settings.fontSizeNotes + 'px )')
            .setDesc('Used in editor/preview mode (default 14px)')
            .addSlider(function (slider) { return slider.setLimits(14, 22, 2)
            .setValue(settings.fontSizeNotes)
            .onChange(function (value) {
            settings.fontSizeNotes = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(name + '( = ' + value + 'px )');
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addFileExplorerFontSizeSettings = function (containerEl, settings) {
        var _this = this;
        var name = 'File Explorer font size ';
        var setting = new obsidian.Setting(containerEl)
            .setName(name + '( = ' + settings.fontSizeFileExplorer + 'px )')
            .setDesc('Used in File Explorer (default 14px)')
            .addSlider(function (slider) { return slider.setLimits(12, 18, 2)
            .setValue(settings.fontSizeFileExplorer)
            .onChange(function (value) {
            settings.fontSizeFileExplorer = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
            setting.setName(name + '( = ' + value + 'px )');
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addHideVaultSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Hide vault name')
            .setDesc('Hides vault name in File Explorer')
            .addToggle(function (toggle) { return toggle.setValue(settings.hideVault)
            .onChange(function (value) {
            settings.hideVault = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addHideTitleBarSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Hide title bar')
            .setDesc('Hides main title bar (theme\'s default)')
            .addToggle(function (toggle) { return toggle.setValue(settings.hideTitleBar)
            .onChange(function (value) {
            settings.hideTitleBar = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    DiscordianPluginSettingsTab.prototype.addHideStatusBarSettings = function (containerEl, settings) {
        var _this = this;
        new obsidian.Setting(containerEl)
            .setName('Hide status bar')
            .setDesc('Hides status bar (theme\'s default)')
            .addToggle(function (toggle) { return toggle.setValue(settings.hideStatusBar)
            .onChange(function (value) {
            settings.hideStatusBar = value;
            _this.plugin.saveData(settings);
            _this.plugin.refresh();
        }); });
    };
    return DiscordianPluginSettingsTab;
}(obsidian.PluginSettingTab));

module.exports = DiscordianPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7QXBwLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmd9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgc2V0ID0gUmVmbGVjdC5zZXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjb3JkaWFuUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuICAgIHNldHRpbmdzOiBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3M7XHJcblxyXG4gICAgYXN5bmMgb25sb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpIHx8IHtcclxuICAgICAgICAgICAgaGlkZVZhdWx0OiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlVGl0bGVCYXI6IHRydWUsXHJcbiAgICAgICAgICAgIGhpZGVTdGF0dXNCYXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9yaWdpbmFsTWFya2luZ3M6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWxhdGlvbkxpbmVzUHJldmlldzogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldHR5VGFza3NFZGl0b3I6IHRydWUsXHJcbiAgICAgICAgICAgIGRhcmtFbmhhbmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9udFNpemVOb3RlczogMTQsXHJcbiAgICAgICAgICAgIGZvbnRTaXplRmlsZUV4cGxvcmVyOiAxNCxcclxuICAgICAgICAgICAgd3JpdGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmFncmFwaEZvY3VzTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmFncmFwaEZvY3VzRmFkZTogNzUsXHJcbiAgICAgICAgICAgIGZsYXRBbmR5TW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVhZGFibGVMZW5ndGg6IDQ1XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3NUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZSgpXHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZHMoKVxyXG5cclxuICAgICAgICB0aGlzLnJlZnJlc2goKVxyXG4gICAgfVxyXG5cclxuICAgIG9udW5sb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU3R5bGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbW1hbmRzKCkge1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgICAgICBpZDogJ3RvZ2dsZS1kaXNjb3JkaWFuLXdyaXRlci1tb2RlJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvZ2dsZSBXcml0ZXIgTW9kZScsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLndyaXRlck1vZGUgPSAhdGhpcy5zZXR0aW5ncy53cml0ZXJNb2RlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiAndG9nZ2xlLWZsYXQtYW5keS1tb2RlJyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvZ2dsZSBGbGF0IEFuZHkgTW9kZScsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmZsYXRBbmR5TW9kZSA9ICF0aGlzLnNldHRpbmdzLmZsYXRBbmR5TW9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgICAgICBpZDogJ3RvZ2dsZS1wYXJhZ3JhcGgtZm9jdXMtbW9kZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgUGFyYWdyYXBoIEZvY3VzIE1vZGUnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGUgPSAhdGhpcy5zZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICAgICAgaWQ6ICd0b2dnbGUtZGlzY29yZC1vcmlnaW5hbC1tYXJraW5ncycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgRGlzY29yZCBvcmlnaW5hbCBtYXJraW5ncycsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9yaWdpbmFsTWFya2luZ3MgPSAhdGhpcy5zZXR0aW5ncy5vcmlnaW5hbE1hcmtpbmdzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiAndG9nZ2xlLXJlbGF0aW9uc2hpcC1saW5lcy1wcmV2aWV3JyxcclxuICAgICAgICAgICAgbmFtZTogJ1RvZ2dsZSByZWxhdGlvbnNoaXAgbGluZXMgaW4gUHJldmlldyBtb2RlJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVsYXRpb25MaW5lc1ByZXZpZXcgPSAhdGhpcy5zZXR0aW5ncy5yZWxhdGlvbkxpbmVzUHJldmlldztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENvbW1hbmQoe1xyXG4gICAgICAgICAgICBpZDogJ3RvZ2dsZS1wcmV0dHktdGFza3MtcHJldmlldycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgUHJldHR5IFRhc2sgTGlzdHMgaW4gRWRpdG9yIG1vZGUnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wcmV0dHlUYXNrc0VkaXRvciA9ICF0aGlzLnNldHRpbmdzLnByZXR0eVRhc2tzRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgICAgICAgIGlkOiAndG9nZ2xlLWRhcmstZW5oYW5jZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgRGFyayBub3RlIGhlYWRlcnMnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kYXJrRW5oYW5jZSA9ICF0aGlzLnNldHRpbmdzLmRhcmtFbmhhbmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIHRoZSBzdHlsaW5nIGVsZW1lbnRzIHdlIG5lZWRcclxuICAgIGFkZFN0eWxlKCkge1xyXG4gICAgICAgIC8vIGFkZCBhIGNzcyBibG9jayBmb3Igb3VyIHNldHRpbmdzLWRlcGVuZGVudCBzdHlsZXNcclxuICAgICAgICBjb25zdCBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIGNzcy5pZCA9ICdkaXNjb3JkaWFuLXRoZW1lJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBtYWluIGNsYXNzXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNjb3JkaWFuLXRoZW1lJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNjb3JkaWFuLXJlYWRhYmxlLWxlbmd0aCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzY29yZGlhbi1wYXJhZ3JhcGgtZm9jdXMtZmFkZScpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIHdpdGggdGhlIHNldHRpbmdzLWRlcGVuZGVudCBzdHlsZXNcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgZGlzY29yZGlhbkNsYXNzZXMgPSBbXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLXRoZW1lJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4td3JpdGVyLW1vZGUnLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1mbGF0LWFuZHktbW9kZScsXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLXBhcmFncmFwaC1mb2N1cycsXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLXBhcmFncmFwaC1mb2N1cy1mYWRlJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tcmVhZGFibGUtbGVuZ3RoJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tZm9udC1zaXplLW5vdGVzJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tZm9udC1zaXplLWZpbGUtZXhwbG9yZXInLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1kaXNjb3JkLW1hcmtpbmdzJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tcmVsLXByZXZpZXcnLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1wcmV0dHktdGFza3MtZWRpdG9yJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4tZGFyay1lbmhhbmNlJyxcclxuICAgICAgICAgICAgJ2Rpc2NvcmRpYW4taGlkZS12YXVsdCcsXHJcbiAgICAgICAgICAgICdkaXNjb3JkaWFuLWhpZGUtdGl0bGViYXInLFxyXG4gICAgICAgICAgICAnZGlzY29yZGlhbi1oaWRlLXN0YXR1c2JhcidcclxuICAgICAgICBdXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDbGFzc2VzKGRpc2NvcmRpYW5DbGFzc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U3R5bGVzKCkge1xyXG4gICAgICAgIGNvbnN0IGRpc2NvcmRpYW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjb3JkaWFuLXRoZW1lJylcclxuICAgICAgICBpZiAoZGlzY29yZGlhbkVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuc2V0dGluZ3MucmVhZGFibGVMZW5ndGggKyAncmVtJ1xyXG4gICAgICAgICAgICBjb25zdCBmYWRlID0gMTAwIC0gdGhpcy5zZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c0ZhZGVcclxuICAgICAgICAgICAgY29uc3QgZm9udFNpemVOb3RlcyA9IHRoaXMuc2V0dGluZ3MuZm9udFNpemVOb3RlcyAvIDE2ICsgJ3JlbSdcclxuICAgICAgICAgICAgY29uc3QgZm9udFNpemVGaWxlRXhwbG9yZXIgPSB0aGlzLnNldHRpbmdzLmZvbnRTaXplRmlsZUV4cGxvcmVyIC8gMTYgKyAncmVtJ1xyXG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJTcGFjaW5nTm90ZXMgPSAodGhpcy5zZXR0aW5ncy5mb250U2l6ZU5vdGVzIDwgMTYgPyAtMC4yIDogLTAuNCkgKyAncHgnXHJcblxyXG4gICAgICAgICAgICBkaXNjb3JkaWFuRWwuaW5uZXJUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZGlzY29yZGlhbi10aGVtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tcmVhZGFibGUtbGluZS1sZW5ndGg6JHtsZW59O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhcmFncmFwaC1mb2N1cy1mYWRlOiAwLiR7ZmFkZX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tZm9udC1zaXplLW5vdGVzOiAke2ZvbnRTaXplTm90ZXN9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWZvbnQtc2l6ZS1maWxlLWV4cGxvcmVyOiAke2ZvbnRTaXplRmlsZUV4cGxvcmVyfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1sZXR0ZXItc3BhY2luZy1ub3RlczogJHtsZXR0ZXJTcGFjaW5nTm90ZXN9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJDb3VsZCBub3QgZmluZCBEaXNjb3JkaWFuIFRoZW1lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGVzIChhdCB0aGUgc3RhcnQsIG9yIGFzIHRoZSByZXN1bHQgb2YgYSBzZXR0aW5ncyBjaGFuZ2UpXHJcbiAgICB1cGRhdGVTdHlsZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4td3JpdGVyLW1vZGUnLCB0aGlzLnNldHRpbmdzLndyaXRlck1vZGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1mbGF0LWFuZHktbW9kZScsIHRoaXMuc2V0dGluZ3MuZmxhdEFuZHlNb2RlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4tcGFyYWdyYXBoLWZvY3VzJywgdGhpcy5zZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1oaWRlLXZhdWx0JywgdGhpcy5zZXR0aW5ncy5oaWRlVmF1bHQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1oaWRlLXRpdGxlYmFyJywgdGhpcy5zZXR0aW5ncy5oaWRlVGl0bGVCYXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1oaWRlLXN0YXR1c2JhcicsIHRoaXMuc2V0dGluZ3MuaGlkZVN0YXR1c0Jhcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLW9yaWdpbmFsLW1hcmtpbmdzJywgdGhpcy5zZXR0aW5ncy5vcmlnaW5hbE1hcmtpbmdzKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4tcmVsLXByZXZpZXcnLCB0aGlzLnNldHRpbmdzLnJlbGF0aW9uTGluZXNQcmV2aWV3KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4tcHJldHR5LXRhc2tzLWVkaXRvcicsIHRoaXMuc2V0dGluZ3MucHJldHR5VGFza3NFZGl0b3IpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1kYXJrLWVuaGFuY2UnLCB0aGlzLnNldHRpbmdzLmRhcmtFbmhhbmNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0U3R5bGVzKClcclxuICAgIH1cclxuXHJcbi8vIHJlZnJlc2ggZnVuY3Rpb24gZm9yIHdoZW4gd2UgY2hhbmdlIHNldHRpbmdzXHJcbiAgICByZWZyZXNoID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIHJlLWxvYWQgdGhlIHN0eWxlXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3Mge1xyXG4gICAgaGlkZVZhdWx0OiBib29sZWFuXHJcbiAgICBoaWRlTWV0YWRhdGE6IGJvb2xlYW5cclxuICAgIGhpZGVUaXRsZUJhcjogYm9vbGVhblxyXG4gICAgaGlkZVN0YXR1c0JhcjogYm9vbGVhblxyXG4gICAgb3JpZ2luYWxNYXJraW5nczogYm9vbGVhblxyXG4gICAgcmVsYXRpb25MaW5lc1ByZXZpZXc6IGJvb2xlYW5cclxuICAgIHByZXR0eVRhc2tzRWRpdG9yOiBib29sZWFuXHJcbiAgICBkYXJrRW5oYW5jZTogYm9vbGVhblxyXG4gICAgZm9udFNpemVOb3RlczogbnVtYmVyXHJcbiAgICBmb250U2l6ZUZpbGVFeHBsb3JlcjogbnVtYmVyXHJcbiAgICBsZXR0ZXJTcGFjaW5nTm90ZXM6IG51bWJlclxyXG4gICAgd3JpdGVyTW9kZTogYm9vbGVhblxyXG4gICAgcGFyYWdyYXBoRm9jdXNNb2RlOiBib29sZWFuXHJcbiAgICBwYXJhZ3JhcGhGb2N1c0ZhZGU6IG51bWJlclxyXG4gICAgZmxhdEFuZHlNb2RlOiBib29sZWFuXHJcbiAgICByZWFkYWJsZUxlbmd0aDogbnVtYmVyXHJcbn1cclxuXHJcbmNsYXNzIERpc2NvcmRpYW5QbHVnaW5TZXR0aW5nc1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gICAgcGx1Z2luOiBEaXNjb3JkaWFuUGx1Z2luO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IERpc2NvcmRpYW5QbHVnaW4pIHtcclxuICAgICAgICBzdXBlcihhcHAsIHBsdWdpbik7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzO1xyXG5cclxuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFBsdWdpbkRlc2NyaXB0aW9uKGNvbnRhaW5lckVsKVxyXG5cclxuICAgICAgICB0aGlzLmFkZFBsdWdpblNldHRpbmdzSGVhZGVyKGNvbnRhaW5lckVsLCAnVGhlbWUgU2V0dGluZ3MnKVxyXG4gICAgICAgIHRoaXMuYWRkV3JpdGVyTW9kZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuICAgICAgICB0aGlzLmFkZEZsYXRBbmR5TW9kZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuICAgICAgICB0aGlzLmFkZFBhcmFncmFwaEZvY3VzTW9kZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuICAgICAgICB0aGlzLmFkZFJlYWRhYmxlTGVuZ3RoU2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkT3JpZ2luYWxNYXJraW5nc1NldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuICAgICAgICB0aGlzLmFkZFJlbGF0aW9uTGluZXNQcmV2aWV3U2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkUHJldHR5VGFza3NFZGl0b3JTZXR0aW5ncyhjb250YWluZXJFbCwgc2V0dGluZ3MpXHJcbiAgICAgICAgdGhpcy5hZGREYXJrRW5oYW5jZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc1NlcGFyYXRvcihjb250YWluZXJFbClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc0hlYWRlcihjb250YWluZXJFbCwgJ0ZvbnRzJylcclxuICAgICAgICB0aGlzLmFkZE5vdGVzRm9udFNpemVTZXR0aW5ncyhjb250YWluZXJFbCwgc2V0dGluZ3MpXHJcbiAgICAgICAgdGhpcy5hZGRGaWxlRXhwbG9yZXJGb250U2l6ZVNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc1NlcGFyYXRvcihjb250YWluZXJFbClcclxuXHJcbiAgICAgICAgdGhpcy5hZGRQbHVnaW5TZXR0aW5nc0hlYWRlcihjb250YWluZXJFbCwgJ0lmIG5vdCB1c2luZyBIaWRlciBwbHVnaW4nKVxyXG4gICAgICAgIHRoaXMuYWRkSGlkZVZhdWx0U2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkSGlkZVRpdGxlQmFyU2V0dGluZ3MoY29udGFpbmVyRWwsIHNldHRpbmdzKVxyXG4gICAgICAgIHRoaXMuYWRkSGlkZVN0YXR1c0JhclNldHRpbmdzKGNvbnRhaW5lckVsLCBzZXR0aW5ncylcclxuICAgIH1cclxuXHJcbiAgICBhZGRQbHVnaW5EZXNjcmlwdGlvbihjb250YWluZXJFbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdkaXYnLCB7Y2xzOiAncGx1Z2luLWRlc2NyaXB0aW9uJ30pO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbi5jcmVhdGVFbCgnaDMnLCB7dGV4dDogJ1RoYW5rcyBmb3IgdXNpbmcgRGlzY29yZGlhbiAhJ30pO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNyZWF0ZUVsKCdwJywge3RleHQ6ICdJZiB5b3Ugbm90aWNlIGFueSBpc3N1ZXMsIHRyeSB0byB1cGRhdGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIGFuZCByZWxvYWQgT2JzaWRpYW4uJ30pO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNyZWF0ZUVsKCdwJywge3RleHQ6ICdPdGhlcndpc2UgZmVlbCBmcmVlIHRvIGJyaW5nIGl0IHVwIG9uIEdpdGh1YiBvciBiZXR0ZXIgeWV0IGNvbnRyaWJ1dGUgYSBmaXguJ30pO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLmNyZWF0ZUVsKCdhJywge1xyXG4gICAgICAgICAgICB0ZXh0OiAnaHR0cHM6Ly9naXRodWIuY29tL3JhZGVra296YWsvZGlzY29yZGlhbi9pc3N1ZXMvJyxcclxuICAgICAgICAgICAgYXR0cjogeydocmVmJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYWRla2tvemFrL2Rpc2NvcmRpYW4vaXNzdWVzLycsICd0YXJnZXQnOiAnX2JsYW5rJ31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQbHVnaW5TZXR0aW5nc0hlYWRlcihjb250YWluZXJFbDogSFRNTEVsZW1lbnQsIGhlYWRlclRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDQnLCB7dGV4dDogaGVhZGVyVGl0bGV9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQbHVnaW5TZXR0aW5nc1NlcGFyYXRvcihjb250YWluZXJFbDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHt0ZXh0OiAn4oq3JywgY2xzOiAncGx1Z2luLWRlc2NyaXB0aW9uIHNlcGFyYXRvcid9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRXcml0ZXJNb2RlU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdXcml0ZXIgbW9kZScpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdIaWRlcyB2aXN1YWwgZXhjZXNzIHdoZW4gc2lkZWJhcnMgYXJlIGNvbGxhcHNlZCAoYWNjZXNzaWJsZSBieSBob3ZlcikgJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLndyaXRlck1vZGUpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mud3JpdGVyTW9kZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZsYXRBbmR5TW9kZVNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnRmxhdCBBbmR5IE1vZGUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnRmxhdHRlciBub3RlcyBzdGFja2luZyB3aGVuIGluIEFuZHkgTW9kZSAobm8gZWxldmF0aW9uIHNoYWRvdyknKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUoc2V0dGluZ3MuZmxhdEFuZHlNb2RlKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmZsYXRBbmR5TW9kZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhcmFncmFwaEZvY3VzTW9kZVNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnUGFyYWdyYXBoIGZvY3VzIG1vZGUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnVGhpcyBhaW1zIHRvIGltaXRhdGUgd2VsbC1rbm93biBpQSBXcml0ZXIgcGFyYWdyYXBoIGZvY3VzLicpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGUpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MucGFyYWdyYXBoRm9jdXNNb2RlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0dGluZ0VsLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc2NvcmRpYW4tcGx1Z2luLXNldHRpbmctZGlzYWJsZWQnLCAhdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUZhZGUgPSAnUGFyYWdyYXBoIEZvY3VzIE1vZGUgZmFkZSAnXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lRmFkZSArICcoID0gJyArIHNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZSArICclICknKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnQW1vdW50IG9mIGZhZGUgb3V0IHdoZW4gaW4gUGFyYWdyYXBoIEZvY3VzIE1vZGUgKGRlZmF1bHQgNzUlKScpXHJcbiAgICAgICAgICAgIC5hZGRTbGlkZXIoc2xpZGVyID0+IHNsaWRlci5zZXRMaW1pdHMoMjUsIDkwLCA1KVxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZSlcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c0ZhZGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnNldHRpbmdFbC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNjb3JkaWFuLXBsdWdpbi1zZXR0aW5nLWRpc2FibGVkJywgIXZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0TmFtZShuYW1lRmFkZSArICcoID0gJyArIHNldHRpbmdzLnBhcmFncmFwaEZvY3VzRmFkZSArICclICknKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0dGluZy5zZXR0aW5nRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1wbHVnaW4tc2V0dGluZy1kaXNhYmxlZCcsICFzZXR0aW5ncy5wYXJhZ3JhcGhGb2N1c01vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlYWRhYmxlTGVuZ3RoU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZGFibGVMaW5lTGVuZ3RoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaXMtcmVhZGFibGUtbGluZS13aWR0aCcpXHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAnUmVhZGFibGUgbGluZSBsZW5ndGggJ1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUobmFtZSArICcoID0gJyArIHNldHRpbmdzLnJlYWRhYmxlTGVuZ3RoICsgJ3JlbSApJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ09ic2lkaWFuXFwncyBSZWFkYWJsZSBsaW5lIGxlbmd0aCBuZWVkcyB0byBiZSBlbmFibGVkIChkZWZhdWx0IDQ1IHJlbSknKVxyXG4gICAgICAgICAgICAuYWRkU2xpZGVyKHNsaWRlciA9PiBzbGlkZXIuc2V0TGltaXRzKDQ1LCAxMjAsIDUpXHJcbiAgICAgICAgICAgICAgICAuc2V0VmFsdWUoc2V0dGluZ3MucmVhZGFibGVMZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MucmVhZGFibGVMZW5ndGggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmcuc2V0TmFtZShuYW1lICsgJyggPSAnICsgc2V0dGluZ3MucmVhZGFibGVMZW5ndGggKyAncmVtICknKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0dGluZy5zZXR0aW5nRWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzY29yZGlhbi1wbHVnaW4tc2V0dGluZy1kaXNhYmxlZCcsIHJlYWRhYmxlTGluZUxlbmd0aC5sZW5ndGggPT0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3JpZ2luYWxNYXJraW5nc1NldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnRGlzY29yZCBvcmlnaW5hbCBtYXJraW5ncycpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdVc2UgRGlzY29yZCBvcmlnaW5hbCBtYXJraW5ncyBzdWNoIGFzIGJvbGQsIGl0YWxpY3MsIGlubGluZSBjb2RlLCBxdW90ZXMgYW5kIHNvIG9uJylcclxuICAgICAgICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlLnNldFZhbHVlKHNldHRpbmdzLm9yaWdpbmFsTWFya2luZ3MpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub3JpZ2luYWxNYXJraW5ncyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERhcmtFbmhhbmNlU2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdEYXJrIG5vdGUgaGVhZGVycycpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdNYWtlIG5vdGUgaGVhZGVycyBtb3JlIHByb21pbmVudCcpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5kYXJrRW5oYW5jZSlcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5kYXJrRW5oYW5jZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlbGF0aW9uTGluZXNQcmV2aWV3U2V0dGluZ3MoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50LCBzZXR0aW5nczogRGlzY29yZGlhblBsdWdpblNldHRpbmdzKSB7XHJcbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKCdSZWxhdGlvbnNoaXAgbGluZXMgaW4gUHJldmlldyBtb2RlJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ1Nob3cgbGluZXMgY29ubmVjdGluZyByZWxhdGVkIGJ1bGxldCBwb2ludHMgYW5kIHRhc2sgbGlzdHMnKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUoc2V0dGluZ3MucmVsYXRpb25MaW5lc1ByZXZpZXcpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MucmVsYXRpb25MaW5lc1ByZXZpZXcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcmV0dHlUYXNrc0VkaXRvclNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnUHJldHR5IFRhc2sgTGlzdHMgaW4gRWRpdG9yIG1vZGUnKVxyXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkhBQ0tJU0ggOiBwbGVhc2UgdXNlIGJvdGggJ1NtYXJ0IGluZGVudCBsaXN0cycgYW5kICdVc2UgdGFicycgb3B0aW9ucyBmb3IgYmVzdCBleHBlcmllbmNlXCIpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5wcmV0dHlUYXNrc0VkaXRvcilcclxuICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5wcmV0dHlUYXNrc0VkaXRvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5vdGVzRm9udFNpemVTZXR0aW5ncyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3MpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gJ05vdGVzIGZvbnQgc2l6ZSAnXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZyA9IG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZShuYW1lICsgJyggPSAnICsgc2V0dGluZ3MuZm9udFNpemVOb3RlcyArICdweCApJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ1VzZWQgaW4gZWRpdG9yL3ByZXZpZXcgbW9kZSAoZGVmYXVsdCAxNHB4KScpXHJcbiAgICAgICAgICAgIC5hZGRTbGlkZXIoc2xpZGVyID0+IHNsaWRlci5zZXRMaW1pdHMoMTQsIDIyLCAyKVxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHNldHRpbmdzLmZvbnRTaXplTm90ZXMpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZm9udFNpemVOb3RlcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZy5zZXROYW1lKG5hbWUgKyAnKCA9ICcgKyB2YWx1ZSArICdweCApJylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsZUV4cGxvcmVyRm9udFNpemVTZXR0aW5ncyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3MpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gJ0ZpbGUgRXhwbG9yZXIgZm9udCBzaXplICdcclxuICAgICAgICBjb25zdCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcbiAgICAgICAgICAgIC5zZXROYW1lKG5hbWUgKyAnKCA9ICcgKyBzZXR0aW5ncy5mb250U2l6ZUZpbGVFeHBsb3JlciArICdweCApJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ1VzZWQgaW4gRmlsZSBFeHBsb3JlciAoZGVmYXVsdCAxNHB4KScpXHJcbiAgICAgICAgICAgIC5hZGRTbGlkZXIoc2xpZGVyID0+IHNsaWRlci5zZXRMaW1pdHMoMTIsIDE4LCAyKVxyXG4gICAgICAgICAgICAgICAgLnNldFZhbHVlKHNldHRpbmdzLmZvbnRTaXplRmlsZUV4cGxvcmVyKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmZvbnRTaXplRmlsZUV4cGxvcmVyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nLnNldE5hbWUobmFtZSArICcoID0gJyArIHZhbHVlICsgJ3B4ICknKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIaWRlVmF1bHRTZXR0aW5ncyhjb250YWluZXJFbDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBEaXNjb3JkaWFuUGx1Z2luU2V0dGluZ3MpIHtcclxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAgICAgLnNldE5hbWUoJ0hpZGUgdmF1bHQgbmFtZScpXHJcbiAgICAgICAgICAgIC5zZXREZXNjKCdIaWRlcyB2YXVsdCBuYW1lIGluIEZpbGUgRXhwbG9yZXInKVxyXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGUuc2V0VmFsdWUoc2V0dGluZ3MuaGlkZVZhdWx0KVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmhpZGVWYXVsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEhpZGVUaXRsZUJhclNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnSGlkZSB0aXRsZSBiYXInKVxyXG4gICAgICAgICAgICAuc2V0RGVzYygnSGlkZXMgbWFpbiB0aXRsZSBiYXIgKHRoZW1lXFwncyBkZWZhdWx0KScpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5oaWRlVGl0bGVCYXIpXHJcbiAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuaGlkZVRpdGxlQmFyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEoc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGlkZVN0YXR1c0JhclNldHRpbmdzKGNvbnRhaW5lckVsOiBIVE1MRWxlbWVudCwgc2V0dGluZ3M6IERpc2NvcmRpYW5QbHVnaW5TZXR0aW5ncykge1xyXG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgICAgICAuc2V0TmFtZSgnSGlkZSBzdGF0dXMgYmFyJylcclxuICAgICAgICAgICAgLnNldERlc2MoJ0hpZGVzIHN0YXR1cyBiYXIgKHRoZW1lXFwncyBkZWZhdWx0KScpXHJcbiAgICAgICAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZS5zZXRWYWx1ZShzZXR0aW5ncy5oaWRlU3RhdHVzQmFyKVxyXG4gICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmhpZGVTdGF0dXNCYXIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YShzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUGx1Z2luIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQXVDRDtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUs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
