const DEFAULT_OPTIONS = {
    showClock: true,
    showShortcuts: true,
    showLaws: true,
    defaultEngine: 'google'
};

function loadOptions() {
    try {
        const raw = localStorage.getItem('pl_options');
        return raw ? JSON.parse(raw) : DEFAULT_OPTIONS;
    } catch (e) {
        return DEFAULT_OPTIONS;
    }
}

function saveOptions(opts) {
    localStorage.setItem('pl_options', JSON.stringify(opts));
}

document.addEventListener('DOMContentLoaded', () => {
    const opts = loadOptions();
    document.getElementById('opt-show-clock').checked = !!opts.showClock;
    document.getElementById('opt-show-shortcuts').checked = !!opts.showShortcuts;
    document.getElementById('opt-show-laws').checked = !!opts.showLaws;
    document.getElementById('opt-default-engine').value = opts.defaultEngine || 'google';

    const saveBtn = document.getElementById('save');
    const resetBtn = document.getElementById('reset');
    const toast = document.getElementById('toast');

    function showToast(msg = 'Saved') {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2400);
    }

    function readUi() {
        return {
            showClock: document.getElementById('opt-show-clock').checked,
            showShortcuts: document.getElementById('opt-show-shortcuts').checked,
            showLaws: document.getElementById('opt-show-laws').checked,
            defaultEngine: document.getElementById('opt-default-engine').value
        };
    }

    function writeUi(opts) {
        document.getElementById('opt-show-clock').checked = !!opts.showClock;
        document.getElementById('opt-show-shortcuts').checked = !!opts.showShortcuts;
        document.getElementById('opt-show-laws').checked = !!opts.showLaws;
        document.getElementById('opt-default-engine').value = opts.defaultEngine || 'google';
        syncSwitches();
    }

    saveBtn.addEventListener('click', () => {
        const newOpts = readUi();
        saveOptions(newOpts);
        showToast('Options saved');
    });

    resetBtn.addEventListener('click', () => {
        saveOptions(DEFAULT_OPTIONS);
        writeUi(DEFAULT_OPTIONS);
        showToast('Reset to defaults');
    });

    // keep visual switch wrappers in sync with inputs
    function syncSwitches() {
        [['opt-show-clock', 'wrap-show-clock'], ['opt-show-shortcuts', 'wrap-show-shortcuts'], ['opt-show-laws', 'wrap-show-laws']].forEach(([inp, wrap]) => {
            const i = document.getElementById(inp);
            const w = document.getElementById(wrap);
            if (!i || !w) return;
            if (i.checked) w.classList.add('on'); else w.classList.remove('on');
        });
    }

    // attach change listeners to inputs
    ['opt-show-clock', 'opt-show-shortcuts', 'opt-show-laws'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('change', syncSwitches);
    });

    // initial sync
    syncSwitches();
});
