import constants from "./constants";
import { Command, AudioSessionOptions } from "./types";
export { Command, AudioSessionOptions };
declare type TPlayingInfo = {
    title?: string;
    elapsedTime: number;
    artwork?: string | number;
    artist?: string;
    state?: constants.STATE_BUFFERING | constants.STATE_PLAYING | constants.STATE_PAUSED | constants.STATE_STOPPED | constants.STATE_ERROR;
    duration?: number;
    description?: string;
};
declare const MusicControl: {
    STATE_PLAYING: any;
    STATE_PAUSED: any;
    STATE_ERROR: any;
    STATE_STOPPED: any;
    STATE_BUFFERING: any;
    RATING_HEART: any;
    RATING_THUMBS_UP_DOWN: any;
    RATING_3_STARS: any;
    RATING_4_STARS: any;
    RATING_5_STARS: any;
    RATING_PERCENTAGE: any;
    enableBackgroundMode: (enable: boolean) => void;
    setNowPlaying: (info: TPlayingInfo) => void;
    setPlayback: (info: TPlayingInfo) => void;
    updatePlayback: (info: TPlayingInfo) => void;
    resetNowPlaying: () => void;
    enableControl: (controlName: string, enable: boolean, options?: {}) => void;
    handleCommand: (commandName: Command, value: any) => void;
    setNotificationId: (notificationId: any, channelId: any) => void;
    on: (actionName: Command, cb: (value: any) => void) => void;
    off: (actionName: Command) => void;
    stopControl: () => void;
    handleAudioInterruptions: (enable: boolean) => void;
    setAudioSessionActivity: (enable: boolean) => Promise<boolean>;
    setAudioSessionOptions: (options: AudioSessionOptions) => Promise<boolean>;
    observeOutputVolume: (enable: boolean) => void;
    getOutputVolume: () => Promise<number>;
};
export default MusicControl;
