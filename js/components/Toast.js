function createToast(type, text) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = text;
    if (type === 'positive') {
        toast.className += ' toast--positive';
    } else if (type === 'negative') {
        toast.className += ' toast--negative';
    }
    toast.className += ' toast--animation';
    return toast;
}