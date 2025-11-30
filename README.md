# ⚽ CMD Football Frontend

![Vercel](https://img.shields.io/badge/deployed%20on-vercel-green)
![Railway](https://img.shields.io/badge/backend%20on-railway-blue)
![Build](https://github.com/Cmdcoachmoh/cmd-football-frontend/actions/workflows/build.yml/badge.svg)

**Effort. Elevation. Excellence.**  
CMD Football is a youth soccer growth platform designed to empower coaches, players, and federations through data, feedback, and visual storytelling.

---

## 🌐 Live Deployment

- **Frontend:** [cmdfootball.vercel.app](https://cmdfootball.vercel.app)  
- **Backend API:** [cmd-football-backend.up.railway.app/api](https://cmd-football-backend.up.railway.app/api)

---

## 🧱 Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Frontend    | React + Vite + TypeScript            |
| Backend     | Java Spring Boot + DTO architecture  |
| Deployment  | Vercel (frontend), Railway (backend) |
| Charts      | Chart.js / Recharts                  |
| Auth        | Token-based login + protected routes |

---

## 📦 Core Features

- 🎯 Player selector with badge tiers (Elite, Advanced, Starter)  
- 📊 Weekly progress and growth charts  
- 🔐 Coach-only views with milestone logic  
- 📤 Export to PDF/CSV with branded headers  
- 📱 Responsive dashboard with logout and toast feedback  
- 🌍 Bilingual UI (English & French)

---

## 🎯 Bonus–Malus Framework

CMD Football uses a **Bonus–Malus scoring system** to reinforce effort, accountability, and growth.

| Action                          | Bonus (+) | Malus (–) | Notes                                      |
|---------------------------------|-----------|-----------|--------------------------------------------|
| Attends practice on time        | +2        |           | Rewards punctuality and commitment          |
| Completes weekly drills         | +3        |           | Reinforces consistency and effort           |
| Shows leadership in team play   | +2        |           | Encourages collaboration and initiative     |
| Misses practice (unexcused)     |           | –2        | Highlights accountability                   |
| Incomplete drill submission     |           | –1        | Signals need for focus and improvement      |
| Disrespectful behavior          |           | –3        | Maintains discipline and respect            |
| Achieves milestone (fitness goal) | +5      |           | Celebrates growth and achievement           |

This framework is embedded in dashboards and reports, ensuring that performance data reflects both skill and character.

---

## 📈 Visualization Example

![Weekly Bonus–Malus Chart](docs/bonus_malus_chart.png)

---

## 🇫🇷 CMD Football en Français

CMD Football est une plateforme de suivi de la croissance des jeunes joueurs de soccer, conçue pour les entraîneurs, les joueurs et les fédérations francophones.  
Elle combine **visualisation de données**, **logique de jalons** et **impact émotionnel** afin d’élever le développement des talents.

### 🎯 Philosophie Bonus–Malus

- **Bonus** : récompenses pour la constance, l’esprit d’équipe et les progrès réalisés.  
  *Exemples : participation régulière aux entraînements, leadership, atteinte des objectifs hebdomadaires.*

- **Malus** : pénalités constructives qui signalent les axes d’amélioration sans décourager.  
  *Exemples : absences non justifiées, exercices incomplets, manque de concentration.*

---

## 🤝 Contributing

We welcome coaches, developers, and designers to help evolve CMD Football.

### How to Contribute

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/cmd-football-frontend.git
