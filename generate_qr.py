import qrcode

# Lien de ta page d'accueil hebergée
accueil_url = "https://ton-frontend-de-escape-game.onrender.com/accueil.html"

# Génération du QR code
img = qrcode.make(accueil_url)

# Sauvegarde en PNG
img.save("qr_accueil.png")

print("QR code généré : qr_accueil.png")
print(f"Il pointe vers : {accueil_url}")
