function init() {
    window.document.addEventListener('copy', () => {
        const selection = document.getSelection().toString().trim();
        setTimeout(async () => {
            try {
                const clipText = await navigator.clipboard.readText().trim();
                if (selection.length > 0 && selection !== clipText) {
                    const answer = confirm(`SaferClipboard : you have just copied something different from your selection.\n\nDo you want to do the real copy instead ?\n\nCopied value : ${clipText}.`);
                    if (answer) {
                        setTimeout(async () => navigator.clipboard.writeText(selection));
                    }
                }
            } catch (err) {
                console.error(err);
            }
        });
    }, true);
}

init();