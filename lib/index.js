"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
/**
 * @providesModule MusicControl
 */
// @ts-ignore
const react_native_1 = require("react-native");
// @ts-ignore
const resolveAssetSource_1 = __importDefault(require("react-native/Libraries/Image/resolveAssetSource"));
// @ts-ignore
const constants_1 = __importDefault(require("./constants"));
const types_1 = require("./types");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return types_1.Command; } });
const NativeMusicControl = react_native_1.NativeModules.MusicControlManager;
let handlers = {};
let listenerOfNativeMusicControl = null;
const IS_ANDROID = react_native_1.Platform.OS === "android";
const MusicControl = {
    STATE_PLAYING: constants_1.default.STATE_PLAYING,
    STATE_PAUSED: constants_1.default.STATE_PAUSED,
    STATE_ERROR: constants_1.default.STATE_ERROR,
    STATE_STOPPED: constants_1.default.STATE_STOPPED,
    STATE_BUFFERING: constants_1.default.STATE_BUFFERING,
    RATING_HEART: constants_1.default.RATING_HEART,
    RATING_THUMBS_UP_DOWN: constants_1.default.RATING_THUMBS_UP_DOWN,
    RATING_3_STARS: constants_1.default.RATING_3_STARS,
    RATING_4_STARS: constants_1.default.RATING_4_STARS,
    RATING_5_STARS: constants_1.default.RATING_5_STARS,
    RATING_PERCENTAGE: constants_1.default.RATING_PERCENTAGE,
    enableBackgroundMode: function (enable) {
        NativeMusicControl.enableBackgroundMode(enable);
    },
    setNowPlaying: function (info) {
        // Check if we have an android asset from react style image require
        if (info.artwork) {
            info.artwork = resolveAssetSource_1.default(info.artwork) || info.artwork;
        }
        NativeMusicControl.setNowPlaying(info);
    },
    setPlayback: function (info) {
        // Backwards compatibility. Use updatePlayback instead.
        NativeMusicControl.updatePlayback(info);
    },
    updatePlayback: function (info) {
        NativeMusicControl.updatePlayback(info);
    },
    resetNowPlaying: function () {
        NativeMusicControl.resetNowPlaying();
    },
    enableControl: function (controlName, enable, options = {}) {
        NativeMusicControl.enableControl(controlName, enable, options || {});
    },
    handleCommand: function (commandName, value) {
        if (handlers[commandName]) {
            //@ts-ignore
            handlers[commandName](value);
        }
    },
    setNotificationId: function (notificationId, channelId) {
        if (IS_ANDROID) {
            NativeMusicControl.setNotificationIds(notificationId, channelId);
        }
    },
    on: function (actionName, cb) {
        if (!listenerOfNativeMusicControl) {
            listenerOfNativeMusicControl = (IS_ANDROID
                ? react_native_1.DeviceEventEmitter
                : new react_native_1.NativeEventEmitter(NativeMusicControl)).addListener("RNMusicControlEvent", (event) => {
                MusicControl.handleCommand(event.name, event.value);
            });
        }
        handlers[actionName] = cb;
    },
    off: function (actionName) {
        delete handlers[actionName];
        if (!Object.keys(handlers).length && listenerOfNativeMusicControl) {
            listenerOfNativeMusicControl.remove();
            listenerOfNativeMusicControl = null;
        }
    },
    stopControl: function () {
        if (listenerOfNativeMusicControl) {
            listenerOfNativeMusicControl.remove();
            listenerOfNativeMusicControl = null;
        }
        Object.keys(handlers).map((key) => {
            //@ts-ignore
            delete handlers[key];
        });
        NativeMusicControl.stopControl();
    },
    handleAudioInterruptions: function (enable) {
        NativeMusicControl.observeAudioInterruptions(enable);
    },
    setAudioSessionActivity: async function (enable) {
        const result = await NativeMusicControl.setAudioSessionActivity(enable);
        return result === "true";
    },
    setAudioSessionOptions: async function (options) {
        const result = await NativeMusicControl.setAudioSessionOptions(options);
        return result === "true";
    },
    observeOutputVolume: function (enable) {
        NativeMusicControl.observeOutputVolume(enable);
    },
    getOutputVolume: function () {
        return NativeMusicControl.getOutputVolume();
    },
};
exports.default = MusicControl;
