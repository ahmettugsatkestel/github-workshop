# GitHub Workshop - Mesaj Duvarı

Hoş geldiniz! Bu repo, GitHub'ın temel özelliklerini (fork, commit, pull request) öğrenmek için tasarlanmış interaktif bir workshop projesidir.

## Ne Yapacaksınız?

Bu repoyu fork edip, kendi mesajınızı ekleyerek bir Pull Request açacaksınız. Mesajınız onaylandığında, web sayfasında görünecek!

## Hızlı Başlangıç

1. Bu repoyu **Fork** edin
2. `messages/` klasörüne kendi JSON dosyanızı ekleyin
3. **Pull Request** açın
4. Merge edilmesini bekleyin!

Detaylı talimatlar için: [CONTRIBUTING.md](CONTRIBUTING.md)

## Dosya Yapısı

```
github-workshop/
├── index.html          # Ana web sayfası
├── styles.css          # Stiller
├── script.js           # JavaScript
├── messages/           # Katılımcı mesajları (JSON)
│   └── ornek.json      # Örnek mesaj
├── CONTRIBUTING.md     # Katkıda bulunma rehberi
└── README.md           # Bu dosya
```

## Mesaj Formatı

`messages/` klasörüne ekleyeceğiniz JSON dosyası şu formatta olmalı:

```json
{
    "name": "Adınız Soyadınız",
    "message": "Mesajınız",
    "emoji": "🚀",
    "github": "github-kullanici-adiniz"
}
```

## Canlı Demo

Projeyi local'de görüntülemek için:

```bash
# Python 3 ile
python -m http.server 8000

# Node.js ile (npx)
npx serve

# VS Code Live Server eklentisi ile
# Sağ tık > Open with Live Server
```

Tarayıcınızda `http://localhost:8000` adresini açın.

## Katılımcılar

Bu workshop'a katılan herkese teşekkürler! Mesajlarınız için [web sayfasına](index.html) bakın.

## Workshop Hakkında

Bu workshop, GitHub'ın temel kavramlarını uygulamalı olarak öğretmek amacıyla hazırlanmıştır:

- **Fork**: Bir reponun kendi hesabınıza kopyası
- **Clone**: Repoyu bilgisayarınıza indirme
- **Branch**: Paralel geliştirme dalları
- **Commit**: Değişiklikleri kaydetme
- **Push**: Değişiklikleri uzak repoya gönderme
- **Pull Request**: Değişiklikleri ana repoya önerme
- **Merge**: Değişiklikleri birleştirme
- **Conflict**: Çakışan değişiklikleri çözme

## Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz!

---

**Workshop'u beğendiyseniz repoyu yıldızlayın!**

