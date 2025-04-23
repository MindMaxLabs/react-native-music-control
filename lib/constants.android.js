"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const NativeMusicControl = react_native_1.NativeModules.MusicControlManager;
const STATE_PLAYING = NativeMusicControl.STATE_PLAYING;
const STATE_PAUSED = NativeMusicControl.STATE_PAUSED;
const STATE_ERROR = NativeMusicControl.STATE_PAUSED;
const STATE_STOPPED = NativeMusicControl.STATE_PAUSED;
const STATE_BUFFERING = NativeMusicControl.STATE_PAUSED;
const RATING_HEART = 0;
const RATING_THUMBS_UP_DOWN = 0;
const RATING_3_STARS = 0;
const RATING_4_STARS = 0;
const RATING_5_STARS = 0;
const RATING_PERCENTAGE = 0;
exports.default = {
    STATE_PLAYING,
    STATE_PAUSED,
    STATE_ERROR,
    STATE_STOPPED,
    STATE_BUFFERING,
    RATING_HEART,
    RATING_THUMBS_UP_DOWN,
    RATING_3_STARS,
    RATING_4_STARS,
    RATING_5_STARS,
    RATING_PERCENTAGE
};
