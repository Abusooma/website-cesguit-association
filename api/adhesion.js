/*
  Fonction serverless Vercel : reçoit le formulaire d'adhésion.
  - envoie une notification designée au bureau (contact.cesguit@gmail.com)
  - envoie un accusé de réception designé au candidat
  via Resend. Nécessite la variable d'environnement RESEND_API_KEY.
*/

const FROM = 'CESGUIT <adhesions@cesguit.org>'
const BUREAU = 'contact.cesguit@gmail.com'
// URL absolue du logo pour l'email (Vercel = toujours en ligne ; bascule vers
// https://cesguit.org/img/logo-blanc.jpg quand le domaine web sera actif).
const LOGO_URL = 'https://website-cesguit-association.vercel.app/img/logo-blanc.jpg'
const WHATSAPP = '+216 46 89 58 75'

const esc = (s = '') =>
  String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]))

/* --- coquille commune (en-tete + pied) --- */
function shell({ preheader = '', eyebrow, eyebrowColor = '#ce1126', title, body }) {
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#eef1f0;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1f0;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border:1px solid #e5dfd2;border-radius:2px;overflow:hidden;">
        <tr>
          <td style="height:5px;background:#ce1126;font-size:0;line-height:0;width:33.33%;">&nbsp;</td>
          <td style="height:5px;background:#fcd116;font-size:0;line-height:0;width:33.33%;">&nbsp;</td>
          <td style="height:5px;background:#009460;font-size:0;line-height:0;width:33.34%;">&nbsp;</td>
        </tr>
        <tr><td colspan="3" style="padding:0;">
          <!-- en-tete marque -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #eee7d8;">
            <tr>
              <td width="60" style="padding:20px 0 20px 28px;vertical-align:middle;">
                <img src="${LOGO_URL}" width="44" height="44" alt="CESGUIT" style="display:block;width:44px;height:44px;border-radius:50%;border:0;">
              </td>
              <td style="padding:20px 28px 20px 12px;vertical-align:middle;">
                <div style="font:800 17px/1 Georgia,'Times New Roman',serif;letter-spacing:.02em;color:#0c4a38;">CESGUIT</div>
                <div style="margin-top:4px;font:400 11px/1.3 Arial,sans-serif;color:#8a8175;">Étudiants &amp; Stagiaires Guinéens en Tunisie</div>
              </td>
            </tr>
          </table>
          <!-- contenu -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:30px 28px 8px;">
              <div style="font:700 11px/1 Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:${eyebrowColor};">${esc(
    eyebrow
  )}</div>
              <div style="margin-top:10px;font:800 26px/1.2 Georgia,'Times New Roman',serif;color:#1c1a17;">${title}</div>
            </td></tr>
            <tr><td style="padding:16px 28px 28px;">${body}</td></tr>
          </table>
          <!-- pied -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0c1f18;">
            <tr><td style="padding:22px 28px;">
              <div style="font:700 13px/1 Georgia,serif;color:#ffffff;">CESGUIT</div>
              <div style="margin-top:6px;font:400 12px/1.6 Arial,sans-serif;color:#9db3a8;">
                Communauté des Étudiants et Stagiaires Guinéens en Tunisie · Tunis<br>
                <a href="mailto:${BUREAU}" style="color:#fcd116;text-decoration:none;">${BUREAU}</a> · ${esc(
    WHATSAPP
  )}
              </div>
              <div style="margin-top:12px;font:700 10px/1 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#5f7a6d;">Travail · Justice · Solidarité</div>
            </td></tr>
          </table>
        </td></tr>
      </table>
      <div style="font:400 11px/1.5 Arial,sans-serif;color:#9aa39d;padding:14px 0;">cesguit.org</div>
    </td></tr>
  </table>
</body></html>`
}

/* --- email bureau : notification --- */
function adminHtml(fields, prenom, nom) {
  const rows = fields
    .filter(([, v]) => v && String(v).trim() !== '')
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:13px 0;border-bottom:1px solid #f0eadd;font:700 11px/1.4 Arial,sans-serif;letter-spacing:.05em;text-transform:uppercase;color:#00764c;width:170px;vertical-align:top;">${esc(
        label
      )}</td>
          <td style="padding:13px 0;border-bottom:1px solid #f0eadd;font:400 15px/1.5 Arial,sans-serif;color:#1c1a17;">${esc(
        value
      )}</td>
        </tr>`
    )
    .join('')
  const body = `
    <p style="margin:0 0 18px;font:400 15px/1.65 Arial,sans-serif;color:#56504a;">
      <strong style="color:#1c1a17;">${esc(prenom)} ${esc(
    nom
  )}</strong> vient de remplir le formulaire d'adhésion sur le site. Voici les informations transmises :
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    <p style="margin:22px 0 0;padding:14px 16px;background:#e4f3ec;border-left:3px solid #009460;font:400 13px/1.6 Arial,sans-serif;color:#0c4a38;">
      Pour répondre à cette personne, cliquez simplement sur « Répondre » : votre message lui parviendra directement.
    </p>`
  return shell({
    preheader: `Nouvelle adhésion : ${prenom} ${nom}`,
    eyebrow: 'Nouvelle adhésion',
    eyebrowColor: '#ce1126',
    title: 'Une nouvelle demande',
    body,
  })
}

/* --- email candidat : accuse de reception --- */
function userHtml(prenom) {
  const body = `
    <p style="margin:0 0 16px;font:400 15px/1.7 Arial,sans-serif;color:#56504a;">
      Bonjour <strong style="color:#1c1a17;">${esc(prenom)}</strong>,
    </p>
    <p style="margin:0 0 16px;font:400 15px/1.7 Arial,sans-serif;color:#56504a;">
      Nous avons bien reçu votre demande d'adhésion à la <strong>CESGUIT</strong>. Merci de rejoindre la communauté&nbsp;! 🇬🇳
    </p>
    <p style="margin:0 0 8px;font:400 15px/1.7 Arial,sans-serif;color:#56504a;">
      Un membre du bureau vous recontactera très prochainement. En cas de besoin urgent, écrivez-nous&nbsp;:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 20px;">
      <tr><td style="padding:4px 0;font:400 14px/1.5 Arial,sans-serif;color:#1c1a17;">✉️ <a href="mailto:${BUREAU}" style="color:#00764c;text-decoration:none;">${BUREAU}</a></td></tr>
      <tr><td style="padding:4px 0;font:400 14px/1.5 Arial,sans-serif;color:#1c1a17;">💬 WhatsApp ${esc(
        WHATSAPP
      )}</td></tr>
    </table>
    <p style="margin:0;font:400 15px/1.7 Arial,sans-serif;color:#56504a;">
      À très vite,<br><strong style="color:#0c4a38;">L'équipe CESGUIT</strong>
    </p>`
  return shell({
    preheader: 'Nous avons bien reçu votre demande d’adhésion à la CESGUIT.',
    eyebrow: 'Bienvenue',
    eyebrowColor: '#009460',
    title: `Merci, ${esc(prenom)} !`,
    body,
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Méthode non autorisée.' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) {
    return res.status(500).json({ success: false, message: 'Configuration e-mail manquante côté serveur.' })
  }

  const b = req.body || {}
  if (b.botcheck) return res.status(200).json({ success: true }) // anti-spam

  const prenom = (b.prenom || '').toString().trim()
  const nom = (b.nom || '').toString().trim()
  const email = (b.email || '').toString().trim()
  if (!prenom || !nom || !email) {
    return res.status(400).json({ success: false, message: 'Merci de renseigner au moins prénom, nom et email.' })
  }

  const fields = [
    ['Prénom', b.prenom],
    ['Nom', b.nom],
    ['Email', b.email],
    ['WhatsApp', b.whatsapp],
    ['Université', b.universite],
    ["Domaine d'étude", b.domaine],
    ['Niveau', b.niveau],
    ['Bourse', b.bourse],
  ]

  const send = (payload) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

  try {
    // 1) notification au bureau (prioritaire)
    const rNotif = await send({
      from: FROM,
      to: [BUREAU],
      reply_to: email,
      subject: `Nouvelle adhésion — ${prenom} ${nom}${b.universite ? ` (${b.universite})` : ''}`,
      html: adminHtml(fields, prenom, nom),
    })

    // 2) accusé de réception au candidat (best-effort)
    send({
      from: FROM,
      to: [email],
      reply_to: BUREAU,
      subject: 'Votre demande d’adhésion à la CESGUIT',
      html: userHtml(prenom),
    }).catch(() => {})

    if (rNotif.ok) return res.status(200).json({ success: true })
    const data = await rNotif.json().catch(() => ({}))
    return res.status(502).json({ success: false, message: data?.message || "L'envoi a échoué." })
  } catch (e) {
    return res.status(500).json({ success: false, message: "Erreur serveur lors de l'envoi." })
  }
}
