function init() {
    const _setData = DataTransfer.prototype.setData;
    DataTransfer.prototype.setData = function (type, value) {
        if ((type === "text/plain" || type === "text")) {
            const selection = window.getSelection().toString();
            if (selection === value) {
                _setData.apply(this, [type, value]);
            } else {
                const answer = confirm(`SaferClipboard notices that you have just copied something different from your selection.\n\nDo you want to proceed anyway ?\n\nCopied value : ${value}.`);
                if (answer) {
                    _setData.apply(this, [type, value]);
                }
            }
        } else {
            _setData.apply(this, [type, value]);
        }
    };
}
init();