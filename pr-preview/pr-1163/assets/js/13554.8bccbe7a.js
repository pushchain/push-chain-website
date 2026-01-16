(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[13554],{

/***/ 313554
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_players = __toESM(__webpack_require__(797015));
var import_ReactPlayer = __webpack_require__(915580);
const fallback = import_players.default[import_players.default.length - 1];
var src_default = (0, import_ReactPlayer.createReactPlayer)(import_players.default, fallback);


/***/ },

/***/ 450327
(module, __unused_webpack_exports, __webpack_require__) {

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var patterns_exports = {};
__export(patterns_exports, {
  AUDIO_EXTENSIONS: () => AUDIO_EXTENSIONS,
  DASH_EXTENSIONS: () => DASH_EXTENSIONS,
  FLV_EXTENSIONS: () => FLV_EXTENSIONS,
  HLS_EXTENSIONS: () => HLS_EXTENSIONS,
  MATCH_URL_DAILYMOTION: () => MATCH_URL_DAILYMOTION,
  MATCH_URL_FACEBOOK: () => MATCH_URL_FACEBOOK,
  MATCH_URL_FACEBOOK_WATCH: () => MATCH_URL_FACEBOOK_WATCH,
  MATCH_URL_KALTURA: () => MATCH_URL_KALTURA,
  MATCH_URL_MIXCLOUD: () => MATCH_URL_MIXCLOUD,
  MATCH_URL_MUX: () => MATCH_URL_MUX,
  MATCH_URL_SOUNDCLOUD: () => MATCH_URL_SOUNDCLOUD,
  MATCH_URL_STREAMABLE: () => MATCH_URL_STREAMABLE,
  MATCH_URL_TWITCH_CHANNEL: () => MATCH_URL_TWITCH_CHANNEL,
  MATCH_URL_TWITCH_VIDEO: () => MATCH_URL_TWITCH_VIDEO,
  MATCH_URL_VIDYARD: () => MATCH_URL_VIDYARD,
  MATCH_URL_VIMEO: () => MATCH_URL_VIMEO,
  MATCH_URL_WISTIA: () => MATCH_URL_WISTIA,
  MATCH_URL_YOUTUBE: () => MATCH_URL_YOUTUBE,
  VIDEO_EXTENSIONS: () => VIDEO_EXTENSIONS,
  canPlay: () => canPlay
});
module.exports = __toCommonJS(patterns_exports);
var import_utils = __webpack_require__(675635);
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
const MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
const MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
const MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
const MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
const MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
const MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
const MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
const MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
const MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
const MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
const MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
const FLV_EXTENSIONS = /\.(flv)($|\?)/i;
const canPlayFile = (url) => {
  if (url instanceof Array) {
    for (const item of url) {
      if (typeof item === "string" && canPlayFile(item)) {
        return true;
      }
      if (canPlayFile(item.src)) {
        return true;
      }
    }
    return false;
  }
  if ((0, import_utils.isMediaStream)(url) || (0, import_utils.isBlobUrl)(url)) {
    return true;
  }
  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};
const canPlay = {
  youtube: (url) => {
    if (url instanceof Array) {
      return url.every((item) => MATCH_URL_YOUTUBE.test(item));
    }
    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: (url) => MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
  vimeo: (url) => MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  mux: (url) => MATCH_URL_MUX.test(url),
  facebook: (url) => MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url),
  streamable: (url) => MATCH_URL_STREAMABLE.test(url),
  wistia: (url) => MATCH_URL_WISTIA.test(url),
  twitch: (url) => MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url),
  dailymotion: (url) => MATCH_URL_DAILYMOTION.test(url),
  mixcloud: (url) => MATCH_URL_MIXCLOUD.test(url),
  vidyard: (url) => MATCH_URL_VIDYARD.test(url),
  kaltura: (url) => MATCH_URL_KALTURA.test(url),
  file: canPlayFile
};


/***/ },

/***/ 507604
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var props_exports = {};
__export(props_exports, {
  defaultProps: () => defaultProps,
  propTypes: () => propTypes
});
module.exports = __toCommonJS(props_exports);
var import_prop_types = __toESM(__webpack_require__(605556));
const { string, bool, number, array, oneOfType, shape, object, func, node } = import_prop_types.default;
const propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string, object]),
  playIcon: node,
  previewTabIndex: number,
  previewAriaLabel: string,
  fallback: node,
  oEmbedUrl: string,
  wrapper: oneOfType([
    string,
    func,
    shape({ render: func.isRequired })
  ]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object,
      title: string
    }),
    mux: shape({
      attributes: object,
      version: string
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceSafariHLS: bool,
      forceDisableHls: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlaybackRateChange: func,
  onPlaybackQualityChange: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
const noop = () => {
};
const defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  previewAriaLabel: "",
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      title: null
    },
    mux: {
      attributes: {},
      version: "2"
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: false
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlaybackRateChange: noop,
  onPlaybackQualityChange: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop
};


/***/ },

/***/ 588021
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Player_exports = {};
__export(Player_exports, {
  default: () => Player
});
module.exports = __toCommonJS(Player_exports);
var import_react = __toESM(__webpack_require__(296540));
var import_react_fast_compare = __toESM(__webpack_require__(730115));
var import_props = __webpack_require__(507604);
var import_utils = __webpack_require__(675635);
const SEEK_ON_PLAY_EXPIRY = 5e3;
class Player extends import_react.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "mounted", false);
    __publicField(this, "isReady", false);
    __publicField(this, "isPlaying", false);
    // Track playing state internally to prevent bugs
    __publicField(this, "isLoading", true);
    // Use isLoading to prevent onPause when switching URL
    __publicField(this, "loadOnReady", null);
    __publicField(this, "startOnPlay", true);
    __publicField(this, "seekOnPlay", null);
    __publicField(this, "onDurationCalled", false);
    __publicField(this, "handlePlayerMount", (player) => {
      if (this.player) {
        this.progress();
        return;
      }
      this.player = player;
      this.player.load(this.props.url);
      this.progress();
    });
    __publicField(this, "getInternalPlayer", (key) => {
      if (!this.player)
        return null;
      return this.player[key];
    });
    __publicField(this, "progress", () => {
      if (this.props.url && this.player && this.isReady) {
        const playedSeconds = this.getCurrentTime() || 0;
        const loadedSeconds = this.getSecondsLoaded();
        const duration = this.getDuration();
        if (duration) {
          const progress = {
            playedSeconds,
            played: playedSeconds / duration
          };
          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          }
          if (progress.playedSeconds !== this.prevPlayed || progress.loadedSeconds !== this.prevLoaded) {
            this.props.onProgress(progress);
          }
          this.prevPlayed = progress.playedSeconds;
          this.prevLoaded = progress.loadedSeconds;
        }
      }
      this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
    });
    __publicField(this, "handleReady", () => {
      if (!this.mounted)
        return;
      this.isReady = true;
      this.isLoading = false;
      const { onReady, playing, volume, muted } = this.props;
      onReady();
      if (!muted && volume !== null) {
        this.player.setVolume(volume);
      }
      if (this.loadOnReady) {
        this.player.load(this.loadOnReady, true);
        this.loadOnReady = null;
      } else if (playing) {
        this.player.play();
      }
      this.handleDurationCheck();
    });
    __publicField(this, "handlePlay", () => {
      this.isPlaying = true;
      this.isLoading = false;
      const { onStart, onPlay, playbackRate } = this.props;
      if (this.startOnPlay) {
        if (this.player.setPlaybackRate && playbackRate !== 1) {
          this.player.setPlaybackRate(playbackRate);
        }
        onStart();
        this.startOnPlay = false;
      }
      onPlay();
      if (this.seekOnPlay) {
        this.seekTo(this.seekOnPlay);
        this.seekOnPlay = null;
      }
      this.handleDurationCheck();
    });
    __publicField(this, "handlePause", (e) => {
      this.isPlaying = false;
      if (!this.isLoading) {
        this.props.onPause(e);
      }
    });
    __publicField(this, "handleEnded", () => {
      const { activePlayer, loop, onEnded } = this.props;
      if (activePlayer.loopOnEnded && loop) {
        this.seekTo(0);
      }
      if (!loop) {
        this.isPlaying = false;
        onEnded();
      }
    });
    __publicField(this, "handleError", (...args) => {
      this.isLoading = false;
      this.props.onError(...args);
    });
    __publicField(this, "handleDurationCheck", () => {
      clearTimeout(this.durationCheckTimeout);
      const duration = this.getDuration();
      if (duration) {
        if (!this.onDurationCalled) {
          this.props.onDuration(duration);
          this.onDurationCalled = true;
        }
      } else {
        this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
      }
    });
    __publicField(this, "handleLoaded", () => {
      this.isLoading = false;
    });
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout);
    clearTimeout(this.durationCheckTimeout);
    if (this.isReady && this.props.stopOnUnmount) {
      this.player.stop();
      if (this.player.disablePIP) {
        this.player.disablePIP();
      }
    }
    this.mounted = false;
  }
  componentDidUpdate(prevProps) {
    if (!this.player) {
      return;
    }
    const { url, playing, volume, muted, playbackRate, pip, loop, activePlayer, disableDeferredLoading } = this.props;
    if (!(0, import_react_fast_compare.default)(prevProps.url, url)) {
      if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, import_utils.isMediaStream)(url)) {
        console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`);
        this.loadOnReady = url;
        return;
      }
      this.isLoading = true;
      this.startOnPlay = true;
      this.onDurationCalled = false;
      this.player.load(url, this.isReady);
    }
    if (!prevProps.playing && playing && !this.isPlaying) {
      this.player.play();
    }
    if (prevProps.playing && !playing && this.isPlaying) {
      this.player.pause();
    }
    if (!prevProps.pip && pip && this.player.enablePIP) {
      this.player.enablePIP();
    }
    if (prevProps.pip && !pip && this.player.disablePIP) {
      this.player.disablePIP();
    }
    if (prevProps.volume !== volume && volume !== null) {
      this.player.setVolume(volume);
    }
    if (prevProps.muted !== muted) {
      if (muted) {
        this.player.mute();
      } else {
        this.player.unmute();
        if (volume !== null) {
          setTimeout(() => this.player.setVolume(volume));
        }
      }
    }
    if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
      this.player.setPlaybackRate(playbackRate);
    }
    if (prevProps.loop !== loop && this.player.setLoop) {
      this.player.setLoop(loop);
    }
  }
  getDuration() {
    if (!this.isReady)
      return null;
    return this.player.getDuration();
  }
  getCurrentTime() {
    if (!this.isReady)
      return null;
    return this.player.getCurrentTime();
  }
  getSecondsLoaded() {
    if (!this.isReady)
      return null;
    return this.player.getSecondsLoaded();
  }
  seekTo(amount, type, keepPlaying) {
    if (!this.isReady) {
      if (amount !== 0) {
        this.seekOnPlay = amount;
        setTimeout(() => {
          this.seekOnPlay = null;
        }, SEEK_ON_PLAY_EXPIRY);
      }
      return;
    }
    const isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
    if (isFraction) {
      const duration = this.player.getDuration();
      if (!duration) {
        console.warn("ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available");
        return;
      }
      this.player.seekTo(duration * amount, keepPlaying);
      return;
    }
    this.player.seekTo(amount, keepPlaying);
  }
  render() {
    const Player2 = this.props.activePlayer;
    if (!Player2) {
      return null;
    }
    return /* @__PURE__ */ import_react.default.createElement(
      Player2,
      {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }
    );
  }
}
__publicField(Player, "displayName", "Player");
__publicField(Player, "propTypes", import_props.propTypes);
__publicField(Player, "defaultProps", import_props.defaultProps);


/***/ },

/***/ 675635
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export(utils_exports, {
  callPlayer: () => callPlayer,
  getConfig: () => getConfig,
  getSDK: () => getSDK,
  isBlobUrl: () => isBlobUrl,
  isMediaStream: () => isMediaStream,
  lazy: () => lazy,
  omit: () => omit,
  parseEndTime: () => parseEndTime,
  parseStartTime: () => parseStartTime,
  queryString: () => queryString,
  randomString: () => randomString,
  supportsWebKitPresentationMode: () => supportsWebKitPresentationMode
});
module.exports = __toCommonJS(utils_exports);
var import_react = __toESM(__webpack_require__(296540));
var import_load_script = __toESM(__webpack_require__(6147));
var import_deepmerge = __toESM(__webpack_require__(914744));
const lazy = (componentImportFn) => import_react.default.lazy(async () => {
  const obj = await componentImportFn();
  return typeof obj.default === "function" ? obj : obj.default;
});
const MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
const MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
const MATCH_START_STAMP = /(\d+)(h|m|s)/g;
const MATCH_NUMERIC = /^\d+$/;
function parseTimeParam(url, pattern) {
  if (url instanceof Array) {
    return void 0;
  }
  const match = url.match(pattern);
  if (match) {
    const stamp = match[1];
    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }
    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }
  return void 0;
}
function parseTimeString(stamp) {
  let seconds = 0;
  let array = MATCH_START_STAMP.exec(stamp);
  while (array !== null) {
    const [, count, period] = array;
    if (period === "h")
      seconds += parseInt(count, 10) * 60 * 60;
    if (period === "m")
      seconds += parseInt(count, 10) * 60;
    if (period === "s")
      seconds += parseInt(count, 10);
    array = MATCH_START_STAMP.exec(stamp);
  }
  return seconds;
}
function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}
function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
}
function randomString() {
  return Math.random().toString(36).substr(2, 5);
}
function queryString(object) {
  return Object.keys(object).map((key) => `${key}=${object[key]}`).join("&");
}
function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }
  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }
  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }
  return null;
}
const requests = {};
const getSDK = enableStubOn(function getSDK2(url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = import_load_script.default) {
  const existingGlobal = getGlobal(sdkGlobal);
  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }
  return new Promise((resolve, reject) => {
    if (requests[url]) {
      requests[url].push({ resolve, reject });
      return;
    }
    requests[url] = [{ resolve, reject }];
    const onLoaded = (sdk) => {
      requests[url].forEach((request) => request.resolve(sdk));
    };
    if (sdkReady) {
      const previousOnReady = window[sdkReady];
      window[sdkReady] = function() {
        if (previousOnReady)
          previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }
    fetchScript(url, (err) => {
      if (err) {
        requests[url].forEach((request) => request.reject(err));
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
});
function getConfig(props, defaultProps) {
  return (0, import_deepmerge.default)(defaultProps.config, props.config);
}
function omit(object, ...arrays) {
  const omitKeys = [].concat(...arrays);
  const output = {};
  const keys = Object.keys(object);
  for (const key of keys) {
    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }
  return output;
}
function callPlayer(method, ...args) {
  if (!this.player || !this.player[method]) {
    let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c \u2013 `;
    if (!this.player) {
      message += "The player was not available";
    } else if (!this.player[method]) {
      message += "The method was not available";
    }
    console.warn(message, "font-weight: bold", "");
    return null;
  }
  return this.player[method](...args);
}
function isMediaStream(url) {
  return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
}
function isBlobUrl(url) {
  return /^blob:/.test(url);
}
function supportsWebKitPresentationMode(video = document.createElement("video")) {
  const notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
}
function enableStubOn(fn) {
  if (false) // removed by dead control flow
{}
  return fn;
}


/***/ },

/***/ 797015
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var players_exports = {};
__export(players_exports, {
  default: () => players_default
});
module.exports = __toCommonJS(players_exports);
var import_utils = __webpack_require__(675635);
var import_patterns = __webpack_require__(450327);
var players_default = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: import_patterns.canPlay.youtube,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerYouTube */ 18446).then(__webpack_require__.t.bind(__webpack_require__, 382910, 23)))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: import_patterns.canPlay.soundcloud,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerSoundCloud */ 92360).then(__webpack_require__.t.bind(__webpack_require__, 593127, 23)))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: import_patterns.canPlay.vimeo,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerVimeo */ 26173).then(__webpack_require__.t.bind(__webpack_require__, 391423, 23)))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: import_patterns.canPlay.mux,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerMux */ 52723).then(__webpack_require__.t.bind(__webpack_require__, 547553, 23)))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: import_patterns.canPlay.facebook,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerFacebook */ 86887).then(__webpack_require__.t.bind(__webpack_require__, 561343, 23)))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: import_patterns.canPlay.streamable,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerStreamable */ 47627).then(__webpack_require__.t.bind(__webpack_require__, 709643, 23)))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: import_patterns.canPlay.wistia,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerWistia */ 76959).then(__webpack_require__.t.bind(__webpack_require__, 823330, 23)))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: import_patterns.canPlay.twitch,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerTwitch */ 12042).then(__webpack_require__.t.bind(__webpack_require__, 21400, 23)))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: import_patterns.canPlay.dailymotion,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerDailyMotion */ 16328).then(__webpack_require__.t.bind(__webpack_require__, 339348, 23)))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: import_patterns.canPlay.mixcloud,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerMixcloud */ 67570).then(__webpack_require__.t.bind(__webpack_require__, 603276, 23)))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: import_patterns.canPlay.vidyard,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerVidyard */ 3392).then(__webpack_require__.t.bind(__webpack_require__, 753552, 23)))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: import_patterns.canPlay.kaltura,
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerKaltura */ 6463).then(__webpack_require__.t.bind(__webpack_require__, 797945, 23)))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: import_patterns.canPlay.file,
    canEnablePIP: (url) => {
      return import_patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, import_utils.supportsWebKitPresentationMode)()) && !import_patterns.AUDIO_EXTENSIONS.test(url);
    },
    lazyPlayer: (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerFilePlayer */ 97458).then(__webpack_require__.t.bind(__webpack_require__, 320688, 23)))
  }
];


/***/ },

/***/ 915580
(module, __unused_webpack_exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ReactPlayer_exports = {};
__export(ReactPlayer_exports, {
  createReactPlayer: () => createReactPlayer
});
module.exports = __toCommonJS(ReactPlayer_exports);
var import_react = __toESM(__webpack_require__(296540));
var import_deepmerge = __toESM(__webpack_require__(914744));
var import_memoize_one = __toESM(__webpack_require__(241811));
var import_react_fast_compare = __toESM(__webpack_require__(730115));
var import_props = __webpack_require__(507604);
var import_utils = __webpack_require__(675635);
var import_Player = __toESM(__webpack_require__(588021));
const Preview = (0, import_utils.lazy)(() => __webpack_require__.e(/* import() | reactPlayerPreview */ 36353).then(__webpack_require__.t.bind(__webpack_require__, 666734, 23)));
const IS_BROWSER = typeof window !== "undefined" && window.document && typeof document !== "undefined";
const IS_GLOBAL = typeof __webpack_require__.g !== "undefined" && __webpack_require__.g.window && __webpack_require__.g.window.document;
const SUPPORTED_PROPS = Object.keys(import_props.propTypes);
const UniversalSuspense = IS_BROWSER || IS_GLOBAL ? import_react.Suspense : () => null;
const customPlayers = [];
const createReactPlayer = (players, fallback) => {
  var _a;
  return _a = class extends import_react.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        showPreview: !!this.props.light
      });
      // Use references, as refs is used by React
      __publicField(this, "references", {
        wrapper: (wrapper) => {
          this.wrapper = wrapper;
        },
        player: (player) => {
          this.player = player;
        }
      });
      __publicField(this, "handleClickPreview", (e) => {
        this.setState({ showPreview: false });
        this.props.onClickPreview(e);
      });
      __publicField(this, "showPreview", () => {
        this.setState({ showPreview: true });
      });
      __publicField(this, "getDuration", () => {
        if (!this.player)
          return null;
        return this.player.getDuration();
      });
      __publicField(this, "getCurrentTime", () => {
        if (!this.player)
          return null;
        return this.player.getCurrentTime();
      });
      __publicField(this, "getSecondsLoaded", () => {
        if (!this.player)
          return null;
        return this.player.getSecondsLoaded();
      });
      __publicField(this, "getInternalPlayer", (key = "player") => {
        if (!this.player)
          return null;
        return this.player.getInternalPlayer(key);
      });
      __publicField(this, "seekTo", (fraction, type, keepPlaying) => {
        if (!this.player)
          return null;
        this.player.seekTo(fraction, type, keepPlaying);
      });
      __publicField(this, "handleReady", () => {
        this.props.onReady(this);
      });
      __publicField(this, "getActivePlayer", (0, import_memoize_one.default)((url) => {
        for (const player of [...customPlayers, ...players]) {
          if (player.canPlay(url)) {
            return player;
          }
        }
        if (fallback) {
          return fallback;
        }
        return null;
      }));
      __publicField(this, "getConfig", (0, import_memoize_one.default)((url, key) => {
        const { config } = this.props;
        return import_deepmerge.default.all([
          import_props.defaultProps.config,
          import_props.defaultProps.config[key] || {},
          config,
          config[key] || {}
        ]);
      }));
      __publicField(this, "getAttributes", (0, import_memoize_one.default)((url) => {
        return (0, import_utils.omit)(this.props, SUPPORTED_PROPS);
      }));
      __publicField(this, "renderActivePlayer", (url) => {
        if (!url)
          return null;
        const player = this.getActivePlayer(url);
        if (!player)
          return null;
        const config = this.getConfig(url, player.key);
        return /* @__PURE__ */ import_react.default.createElement(
          import_Player.default,
          {
            ...this.props,
            key: player.key,
            ref: this.references.player,
            config,
            activePlayer: player.lazyPlayer || player,
            onReady: this.handleReady
          }
        );
      });
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(0, import_react_fast_compare.default)(this.props, nextProps) || !(0, import_react_fast_compare.default)(this.state, nextState);
    }
    componentDidUpdate(prevProps) {
      const { light } = this.props;
      if (!prevProps.light && light) {
        this.setState({ showPreview: true });
      }
      if (prevProps.light && !light) {
        this.setState({ showPreview: false });
      }
    }
    renderPreview(url) {
      if (!url)
        return null;
      const { light, playIcon, previewTabIndex, oEmbedUrl, previewAriaLabel } = this.props;
      return /* @__PURE__ */ import_react.default.createElement(
        Preview,
        {
          url,
          light,
          playIcon,
          previewTabIndex,
          previewAriaLabel,
          oEmbedUrl,
          onClick: this.handleClickPreview
        }
      );
    }
    render() {
      const { url, style, width, height, fallback: fallback2, wrapper: Wrapper } = this.props;
      const { showPreview } = this.state;
      const attributes = this.getAttributes(url);
      const wrapperRef = typeof Wrapper === "string" ? this.references.wrapper : void 0;
      return /* @__PURE__ */ import_react.default.createElement(Wrapper, { ref: wrapperRef, style: { ...style, width, height }, ...attributes }, /* @__PURE__ */ import_react.default.createElement(UniversalSuspense, { fallback: fallback2 }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
    }
  }, __publicField(_a, "displayName", "ReactPlayer"), __publicField(_a, "propTypes", import_props.propTypes), __publicField(_a, "defaultProps", import_props.defaultProps), __publicField(_a, "addCustomPlayer", (player) => {
    customPlayers.push(player);
  }), __publicField(_a, "removeCustomPlayers", () => {
    customPlayers.length = 0;
  }), __publicField(_a, "canPlay", (url) => {
    for (const Player2 of [...customPlayers, ...players]) {
      if (Player2.canPlay(url)) {
        return true;
      }
    }
    return false;
  }), __publicField(_a, "canEnablePIP", (url) => {
    for (const Player2 of [...customPlayers, ...players]) {
      if (Player2.canEnablePIP && Player2.canEnablePIP(url)) {
        return true;
      }
    }
    return false;
  }), _a;
};


/***/ }

}]);