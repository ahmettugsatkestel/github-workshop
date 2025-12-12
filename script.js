/**
 * GitHub Workshop - Mesaj Duvarı
 * Bu script messages/ klasöründeki JSON dosyalarını yükler
 * ve dinamik olarak mesaj kartları oluşturur.
 */

// Renk seçenekleri - kartlara rastgele atanacak
const COLORS = ["purple", "pink", "blue", "green", "orange", "cyan"];

// Bilinen mesaj dosyaları listesi
// Yeni bir mesaj eklerseniz, dosya adını buraya da ekleyin
const MESSAGE_FILES = [
  "ornek.json",
  // Yeni mesajlar otomatik olarak yüklenecek
  // Örnek: 'mehmet.json', 'ayse.json'
];

/**
 * Rastgele renk seçer
 */
function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

/**
 * GitHub ikonunu SVG olarak döndürür
 */
function getGitHubIcon() {
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`;
}

/**
 * Mesaj verisinden HTML kart oluşturur
 */
function createMessageCard(data) {
  const card = document.createElement("article");
  card.className = "message-card";
  card.setAttribute("data-color", data.color || getRandomColor());

  const emoji = data.emoji || "💬";
  const name = data.name || "Anonim";
  const message = data.message || "Mesaj yok";
  const github = data.github || "";

  card.innerHTML = `
        <div class="card-emoji">${emoji}</div>
        <h3 class="card-name">${escapeHtml(name)}</h3>
        <p class="card-message">${escapeHtml(message)}</p>
        ${
          github
            ? `
            <a href="https://github.com/${escapeHtml(
              github
            )}" class="card-github" target="_blank">
                ${getGitHubIcon()}
                @${escapeHtml(github)}
            </a>
        `
            : ""
        }
    `;

  return card;
}

/**
 * HTML özel karakterlerini escape eder (XSS koruması)
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Tek bir mesaj dosyasını yükler
 */
async function loadMessageFile(filename) {
  try {
    const response = await fetch(`messages/${filename}`);
    if (!response.ok) {
      console.warn(`Dosya yüklenemedi: ${filename}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(`JSON parse hatası: ${filename}`, error);
    return null;
  }
}

/**
 * Tüm mesajları yükler ve görüntüler
 */
async function loadAllMessages() {
  const container = document.getElementById("dynamic-messages");
  if (!container) return;

  // Yükleniyor göstergesi
  container.innerHTML =
    '<div class="empty-state loading"><p>Mesajlar yükleniyor...</p></div>';

  const messages = [];

  // Bilinen dosyaları yükle
  for (const filename of MESSAGE_FILES) {
    const data = await loadMessageFile(filename);
    if (data) {
      messages.push(data);
    }
  }

  // Container'ı temizle
  container.innerHTML = "";

  if (messages.length === 0) {
    container.innerHTML = `
            <div class="empty-state">
                <p>Henüz JSON mesajı yok. <code>messages/</code> klasörüne bir JSON dosyası ekleyerek başlayın!</p>
            </div>
        `;
    return;
  }

  // Kartları oluştur ve ekle
  messages.forEach((data, index) => {
    const card = createMessageCard(data);
    card.style.animationDelay = `${index * 0.1}s`;
    container.appendChild(card);
  });
}

/**
 * Statik kartlara rastgele renk ata
 */
function colorizeStaticCards() {
  const staticCards = document.querySelectorAll(
    "#messages-container .message-card"
  );
  staticCards.forEach((card) => {
    if (!card.getAttribute("data-color")) {
      card.setAttribute("data-color", getRandomColor());
    }
  });
}

/**
 * Sayfa yüklendiğinde çalışır
 */
document.addEventListener("DOMContentLoaded", () => {
  colorizeStaticCards();
  loadAllMessages();
});

// Debug için konsola bilgi yaz
console.log("🎉 GitHub Workshop - Mesaj Duvarı yüklendi!");
console.log("📝 Kendi mesajını eklemek için CONTRIBUTING.md dosyasına bak.");
