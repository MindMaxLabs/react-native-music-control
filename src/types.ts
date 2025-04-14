export enum Command {
  play = "play",
  pause = "pause",
  stop = "stop",
  nextTrack = "nextTrack",
  previousTrack = "previousTrack",
  seekForward = "seekForward",
  seekBackward = "seekBackward",
  seek = "seek",
  volume = "volume",
  setRating = "setRating",
  togglePlayPause = "togglePlayPause",
  enableLanguageOption = "enableLanguageOption",
  disableLanguageOption = "disableLanguageOption",
  skipForward = "skipForward",
  skipBackward = "skipBackward",
  changePlaybackPosition = "changePlaybackPosition",
  closeNotification = "closeNotification",
  routeChange = "routeChange",
  interruption = "interruption",
  outputVolume = "outputVolume",
}

export type IOSMode =
  | "default"
  | "gameChat"
  | "measurement"
  | "moviePlayback"
  | "spokenAudio"
  | "videoChat"
  | "videoRecording"
  | "voiceChat"
  | "voicePrompt";

export type IOSCategory =
  | "ambient"
  | "multiRoute"
  | "playAndRecord"
  | "playback"
  | "record"
  | "soloAmbient";

export type IOSCategoryOption =
  | "mixWithOthers"
  | "duckOthers"
  | "interruptSpokenAudioAndMixWithOthers"
  | "allowBluetooth"
  | "allowBluetoothA2DP"
  | "allowAirPlay"
  | "defaultToSpeaker"
  | "overrideMutedMicrophoneInterruption";

export interface AudioSessionOptions {
  iosMode: IOSMode;
  iosCategory: IOSCategory;
  iosCategoryOptions: IOSCategoryOption[];
}
