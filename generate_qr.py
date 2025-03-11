import qrcode

# Remplace par l'URL correcte
accueil_url = "https://BaptisteT31.github.io/escape-game-frontend/accueil.html"

# Génération du QR code
qr = qrcode.QRCode(
    version=1,
    box_size=10,
    border=5
)
qr.add_data(accueil_url)
qr.make(fit=True)

# Créer l'image du QR Code
img = qr.make_image(fill="black", back_color="white")

# Sauvegarde en PNG
img.save("qr_accueil.png")

print("✅ QR Code généré : qr_accueil.png")
print(f"📌 Il pointe vers : {accueil_url}")
