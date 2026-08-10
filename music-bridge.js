// music-bridge.js — 跨页面音乐共享机制
(function() {
    var STORAGE_PREFIX = 'music_';
    var TRACK_COUNT = 10;
    var TRACKS = [
        'assets/music/bgm/likewejustmet（inst.）.mp3',
        'assets/music/bgm/清水翔太-PUZZLE.mp3',
        'assets/music/bgm/Mrs. GREEN APPL-Soranji.mp3',
        'assets/music/bgm/ユイカ-17岁的歌.mp3',
        'assets/music/bgm/名取-Propose.mp3',
        'assets/music/bgm/Yorushika-茜.mp3',
        'assets/music/bgm/Mrs. GREEN APPLE-風と町.mp3',
        'assets/music/bgm/平井大-Anniversary.mp3',
        'assets/music/bgm/bothsides（inst.）.mp3',
        'assets/music/bgm/likewejustmet.mp3'
    ];

    var TRACK_NAMES = [
        'likewejustmet（inst.）',
        '清水翔太-PUZZLE',
        'Mrs. GREEN APPL-Soranji',
        'ユイカ-17岁的歌',
        '名取-Propose',
        'Yorushika-茜',
        'Mrs. GREEN APPLE-風と町',
        '平井大-Anniversary',
        'bothsides（inst.）',
        'likewejustmet'
    ];

    var audio = null;
    var _playing = false;
    var _trackIndex = 0;
    var _ready = false;

    function save() {
        if (!_ready) return;
        try {
            localStorage.setItem(STORAGE_PREFIX + 'playing', _playing ? '1' : '0');
            localStorage.setItem(STORAGE_PREFIX + 'track', String(_trackIndex));
            if (audio && !isNaN(audio.currentTime)) {
                localStorage.setItem(STORAGE_PREFIX + 'time', String(audio.currentTime));
            }
        } catch(e) {}
    }

    function load() {
        try {
            var p = localStorage.getItem(STORAGE_PREFIX + 'playing') === '1';
            var t = parseInt(localStorage.getItem(STORAGE_PREFIX + 'track')) || 0;
            var c = parseFloat(localStorage.getItem(STORAGE_PREFIX + 'time')) || 0;
            if (t < 0 || t >= TRACK_COUNT) t = 0;
            return {playing: p, track: t, time: c};
        } catch(e) {
            return {playing: false, track: 0, time: 0};
        }
    }

    function makeAudio(index, seekTime, autoplay) {
        if (audio) {
            audio.pause();
            audio.src = '';
            audio = null;
        }
        audio = new Audio(TRACKS[index]);
        audio.loop = false;
        if (seekTime > 0) {
            audio.currentTime = seekTime;
        }
        audio.addEventListener('ended', function() {
            _trackIndex = (_trackIndex + 1) % TRACK_COUNT;
            makeAudio(_trackIndex, 0, true);
            save();
            if (window.MusicBridge && typeof window.MusicBridge.onTrackChange === 'function') {
                window.MusicBridge.onTrackChange(_trackIndex);
            }
        });
        audio.addEventListener('timeupdate', function() {
            save();
        });
        audio.addEventListener('play', function() {
            _playing = true;
            save();
        });
        audio.addEventListener('pause', function() {
            _playing = false;
            save();
        });
        if (autoplay) {
            audio.play().then(function() {
                console.log('[music-bridge] makeAudio autoplay SUCCESS');
                _playing = true;
                save();
            }).catch(function(err) {
                console.warn('[music-bridge] makeAudio autoplay BLOCKED:', err.name, err.message);
                // Autoplay blocked — keep _playing=true so UI stays in sync;
                // actual playback will recover on first user gesture.
                _autoplayBlocked = true;
                document.addEventListener('click', tryRecoverAutoplay, {once: false, capture: true});
                document.addEventListener('touchstart', tryRecoverAutoplay, {once: false, capture: true});
            });
        } else {
            _playing = false;
            save();
        }
    }

    var _autoplayBlocked = false;

    function tryRecoverAutoplay() {
        console.log('[music-bridge] tryRecoverAutoplay called, _autoplayBlocked=', _autoplayBlocked, 'audio=', !!audio, 'paused=', audio && audio.paused, 'ended=', audio && audio.ended);
        if (!_autoplayBlocked) return;
        _autoplayBlocked = false;
        if (audio && audio.paused && !audio.ended) {
            console.log('[music-bridge] attempting audio.play()...');
            audio.play().then(function() {
                console.log('[music-bridge] audio.play() SUCCESS');
                _playing = true;
                save();
                document.removeEventListener('click', tryRecoverAutoplay, {capture: true});
                document.removeEventListener('touchstart', tryRecoverAutoplay, {capture: true});
                if (window.MusicBridge && typeof window.MusicBridge.onTrackChange === 'function') {
                    window.MusicBridge.onTrackChange(_trackIndex);
                }
            }).catch(function(err) {
                console.error('[music-bridge] audio.play() FAILED:', err.name, err.message);
            });
        } else {
            console.log('[music-bridge] skipping play (audio missing or already playing/ended)');
            document.removeEventListener('click', tryRecoverAutoplay, {capture: true});
            document.removeEventListener('touchstart', tryRecoverAutoplay, {capture: true});
        }
    }

    function init() {
        var state = load();
        var hasState = localStorage.getItem(STORAGE_PREFIX + 'playing') !== null;
        var isPlaylistPage = !!document.getElementById('btn-play');

        console.log('[music-bridge] init: hasState=', hasState, 'isPlaylistPage=', isPlaylistPage, 'state=', JSON.stringify(state));

        // First visit: start playing track 0
        // Playlist page: always play from saved state
        // Any other page (index/main/album etc): always attempt autoplay,
        // ignoring localStorage `playing` to guarantee music on entry
        if (!hasState) {
            state.playing = true;
            state.track = 0;
            state.time = 0;
        } else if (isPlaylistPage) {
            state.playing = true;
        } else {
            state.playing = true;
        }

        _trackIndex = state.track;
        _playing = state.playing;
        _ready = true;
        save();

        console.log('[music-bridge] init done: _trackIndex=', _trackIndex, '_playing=', _playing, 'state.playing=', state.playing);

        // All pages: create audio and attempt autoplay when playing
        if (state.playing) {
            makeAudio(state.track, state.time, true);
        }
    }

    window.MusicBridge = {
        tracks: TRACKS,
        trackCount: TRACK_COUNT,

        getTrackIndex: function() { return _trackIndex; },
        getTrackName: function() { return TRACK_NAMES[_trackIndex]; },
        isPlaying: function() { return _playing; },
        getAudio: function() { return audio; },
        trackNames: TRACK_NAMES,

        initAudio: function(index, seekTime, autoplay) {
            _ready = true;
            _trackIndex = index;
            makeAudio(index, seekTime || 0, autoplay);
        },

        play: function() {
            if (!audio) {
                makeAudio(_trackIndex, 0, true);
            } else {
                audio.play();
            }
        },

        pause: function() {
            if (audio) audio.pause();
        },

        toggle: function() {
            if (_playing) {
                _playing = false;
                this.pause();
                save();
            } else {
                _playing = true;
                _autoplayBlocked = false;
                this.play();
                save();
            }
            return _playing;
        },

        next: function() {
            var wasPlaying = _playing;
            _trackIndex = (_trackIndex + 1) % TRACK_COUNT;
            makeAudio(_trackIndex, 0, wasPlaying);
            return _trackIndex;
        },

        prev: function() {
            var wasPlaying = _playing;
            _trackIndex = (_trackIndex - 1 + TRACK_COUNT) % TRACK_COUNT;
            makeAudio(_trackIndex, 0, wasPlaying);
            return _trackIndex;
        },

        setTrack: function(index) {
            var wasPlaying = _playing;
            _trackIndex = ((index % TRACK_COUNT) + TRACK_COUNT) % TRACK_COUNT;
            makeAudio(_trackIndex, 0, wasPlaying);
            return _trackIndex;
        },

        onTrackChange: null,

        recoverPlayback: tryRecoverAutoplay
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.addEventListener('beforeunload', function() { save(); });
})();
