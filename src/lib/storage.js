// Pembungkus LocalStorage yang aman (tidak crash saat SSR, mode privat, atau kuota penuh).

export function loadJSON(key, fallback) {
  try {
    if (typeof window === 'undefined') return fallback;
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function saveJSON(key, value) {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* abaikan: storage penuh atau diblokir */
  }
}

export function removeKey(key) {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
  } catch {
    /* abaikan */
  }
}
