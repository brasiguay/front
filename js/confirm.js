// Pega o token da URL
const params = new URLSearchParams(window.location.search);
const token = params.get('token');

const statusEl = document.getElementById('status');

if (!token) {
  statusEl.textContent = "❌ Token ausente ou inválido.";
} else {
  fetch(`https://api.upalug.com.br/auth/confirm-email/${token}`)
  .then(async response => {
    const data = await response.json();
    if (response.ok) {
      statusEl.textContent = `✅ ${data.message || 'E-mail confirmado com sucesso!'}`;
    } else {
      statusEl.textContent = `❌ ${data.message || 'Não foi possível confirmar o e-mail.'}`;
    }
  })
  .catch(err => {
    console.error(err);
    statusEl.textContent = "❌ Erro de conexão com o servidor.";
  });

}
