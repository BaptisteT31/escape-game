// Génération QR Code
let qr = new QRCode(document.getElementById("qrcode"), {
    text: "https://ton-site.github.io/escape-game/question1",
    width: 150,
    height: 150
});

// Fonction pour soumettre la réponse
function soumettreReponse() {
    const reponse = document.getElementById('reponse').value;
    fetch('https://TON_BACKEND.onrender.com/repondre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            groupe_id: 1, // Exemple de groupe
            question_id: 1, // Id de la question
            reponse: reponse
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'correct') {
            document.getElementById('feedback').innerText = "Bonne réponse ! Scannez le prochain QR code.";
            qr.makeCode(data.next_url); // Met à jour le QR code
        } else {
            document.getElementById('feedback').innerText = "Mauvaise réponse, essayez encore.";
        }
    })
    .catch(err => console.error(err));
}
