chrome.runtime.onMessage.addListener(function (message, sender) {
    if (!message.myPopupIsOpen) return;

    alert('works');
});
