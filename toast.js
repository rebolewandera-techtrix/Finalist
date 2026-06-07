/**
 * ChainGrade Toast Notification System
 * Replaces all alert() calls with non-blocking inline toasts.
 *
 * Usage:
 *   toast('Title', 'Message body', 'success' | 'error' | 'warning' | 'info', durationMs?)
 */

(function () {
    function ensureContainer() {
        var c = document.getElementById('toast-container');
        if (!c) {
            c = document.createElement('div');
            c.id = 'toast-container';
            document.body.appendChild(c);
        }
        return c;
    }

    var ICONS = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };

    window.toast = function (title, message, type, duration) {
        type     = type     || 'info';
        duration = duration || 5000;

        var container = ensureContainer();
        var el = document.createElement('div');
        el.className = 'toast ' + type;
        el.innerHTML =
            '<span class="toast-icon">' + (ICONS[type] || 'ℹ️') + '</span>' +
            '<div class="toast-body">' +
                '<div class="toast-title">' + title + '</div>' +
                (message ? '<div class="toast-msg">' + message + '</div>' : '') +
            '</div>' +
            '<button class="toast-dismiss" aria-label="Dismiss">✕</button>';

        container.appendChild(el);

        function dismiss() {
            el.classList.add('fade-out');
            el.addEventListener('animationend', function () {
                if (el.parentNode) el.parentNode.removeChild(el);
            }, { once: true });
        }

        el.querySelector('.toast-dismiss').addEventListener('click', dismiss);
        setTimeout(dismiss, duration);
    };
})();
