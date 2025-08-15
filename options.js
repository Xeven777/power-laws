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

    document.getElementById('save').addEventListener('click', () => {
        const newOpts = {
            showClock: document.getElementById('opt-show-clock').checked,
            showShortcuts: document.getElementById('opt-show-shortcuts').checked,
            showLaws: document.getElementById('opt-show-laws').checked,
            defaultEngine: document.getElementById('opt-default-engine').value
        };
        saveOptions(newOpts);
        alert('Options saved');
    });
});
