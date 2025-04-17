// js/ui/notificationHandler.js
const notificationArea = document.getElementById('notification-area');

/**
 * Mostra una notifica temporanea all'utente.
 * @param {string} message - Il messaggio da mostrare.
 * @param {'success'|'error'|'info'} type - Il tipo di notifica.
 */
export function showNotification(message, type = 'success') {
    if (!notificationArea) {
        console.error("Notification area not found!");
        return;
    }

    const notification = document.createElement('div');
    notification.classList.add('notification');

    let iconClass = 'fa-check-circle';
    if (type === 'error') {
        notification.classList.add('error'); iconClass = 'fa-times-circle';
    } else if (type === 'info') {
        notification.classList.add('info'); iconClass = 'fa-info-circle';
    }

    notification.innerHTML = `<i class="fas ${iconClass}"></i> ${message}`;
    notificationArea.appendChild(notification);
    void notification.offsetWidth; // Trigger reflow
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => notification.remove(), { once: true }); // Use { once: true } for cleanup
    }, 4000);
}