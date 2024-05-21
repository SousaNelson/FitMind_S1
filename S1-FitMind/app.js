const express = require('express');
const app = express();
const router = express.Router();
const sequelize = require('./util/database')
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/PacienteRoutes');
const appointmentRoutes = require('./routes/AgendamentoRoutes');
const healthArticleRoutes = require('./routes/HealthArticleRoutes');
const activityRoutes = require('./routes/AtividadesRoutes');
const audioRoutes = require('./routes/AudioRoutes');
const videoRoutes = require('./routes/VideoFisRoutes');
const sessionRoutes = require('./routes/SessaoRoutes');
const mentalHealthVideoRoutes = require('./routes/VideoMenteRoutes');
const meditationRoutes = require('./routes/MeditacaoRoutes');


app.use(express.json());
app.use('/activities', activityRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/health-articles', healthArticleRoutes);
app.use('/audios', audioRoutes);
app.use('/videos-fisica', videoRoutes);
app.use('/sessions', sessionRoutes);
app.use('/videos-mente', mentalHealthVideoRoutes);
app.use('/meditations', meditationRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

sequelize.sync({ force: false }).then(() => {
  console.log('Tabelas sincronizadas com sucesso');
}).catch(err => {
  console.error('Erro ao sincronizar tabelas:', err);
});

module.exports = router;















