function checkURL() {
    const url = document.getElementById("urlInput").value.trim();
    const result = document.getElementById("result");

    if (!url) {
        result.textContent = " Please enter a URL.";
        result.style.color = "yellow";
        return;
    }

    const suspiciousPatterns = [
        "bit.ly", "tinyurl", "goo.gl", "grabify", "shady", "@", "://0",
        "login", "verify", "bank", "free", "gift", "update", "confirm"
    ];

    let isSuspicious = suspiciousPatterns.some(pattern => url.toLowerCase().includes(pattern));

    if (isSuspicious) {
        result.textContent = " Suspicious link detected! Be careful.";
        result.style.color = "red";
    } else if (!url.includes(".")) {
        result.textContent = " Invalid URL format.";
        result.style.color = "orange";
    } else {
        result.textContent = " This link looks safe!";
        result.style.color = "limegreen";
    }
}
