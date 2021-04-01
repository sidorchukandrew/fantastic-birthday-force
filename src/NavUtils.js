export function makeUrlSafe(text) {
    if (text) {
        text = text.toLowerCase();
        text = text.replaceAll(" ", "-");
    }
    return text;
}

export function toJobName(text) {
    if (text) {
        let words = text.split("-");
        words = words.map(word => capitalize(word));
        text = words.join(" ");
    }

    return text;
}

function capitalize(text) {
    if (text) {
        return text.charAt(0).toUpperCase() + text.substring(1);
    }
}