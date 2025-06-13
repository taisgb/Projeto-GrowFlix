// Este arquivo home.js espera que a constante 'movies' seja carregada globalmente de movies.js.

document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.getElementById("videoContainer");

  // Função auxiliar para criar um card de vídeo
  const createVideoCard = (video) => {
    const card = document.createElement("div");
    card.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");

    card.innerHTML = `
      <img src="${video.img}" 
           class="img-fluid rounded shadow video-thumb" 
           alt="${video.title}" 
           style="cursor: pointer;" 
           data-bs-toggle="modal" 
           data-bs-target="#videoModal"
           data-video-url="${video.link}" 
           data-video-title="${video.title}">
    `;
    return card;
  };

  // Renderiza os cards de vídeo se o container e a lista de filmes existirem
  if (videoContainer && typeof movies !== 'undefined' && movies.length > 0) {
    movies.forEach(video => {
      const card = createVideoCard(video);
      videoContainer.appendChild(card);
    });
  }

  // Elementos do modal
  const videoModal = document.getElementById('videoModal');
  const modalVideoIframe = document.getElementById('modalVideo');
  const modalTitleElement = document.getElementById('videoModalLabel');

  // Adiciona listeners para o modal Bootstrap
  if (videoModal && modalVideoIframe && modalTitleElement) {
    videoModal.addEventListener('show.bs.modal', function (event) {
      // O elemento que acionou o modal (a imagem do vídeo)
      const triggerElement = event.relatedTarget; 
      
      // Obtém a URL e o título do vídeo dos atributos 'data-' do elemento acionador
      const videoSrc = triggerElement.getAttribute('data-video-url');
      const videoTitle = triggerElement.getAttribute('data-video-title');

      // Define o src do iframe e o título do modal
      // Adicionado '?autoplay=1' para iniciar o vídeo automaticamente ao abrir o modal
      modalVideoIframe.src = videoSrc + "?autoplay=1";
      modalTitleElement.textContent = videoTitle;
    });

    // Limpa o src do iframe quando o modal é fechado para parar o vídeo
    videoModal.addEventListener('hidden.bs.modal', function () {
      modalVideoIframe.src = ""; // Isso impede que o vídeo continue tocando em segundo plano
    });
  }

  // Função global 'openMovie' para elementos que usam onclick
  // É preferível usar data-bs-toggle e data-bs-target diretamente no HTML,
  // mas mantido para compatibilidade com a estrutura existente.
  window.openMovie = (element) => {
    // Tenta pegar a URL do atributo 'data-link' ou 'data-video-url'
    const videoLink = element.getAttribute('data-link') || element.getAttribute('data-video-url');
    
    // Tenta pegar o título do span dentro de 'detail-movie' ou do atributo 'data-title'
    let videoTitle = '';
    if (element.tagName === 'BUTTON') { // Para o botão principal "Assistir"
      // Você precisará definir um data-title no botão ou buscar de alguma outra forma se não estiver na lista de movies
      // Por simplicidade, para o botão principal, a URL já deve ser do vídeo principal
      videoTitle = "Growcast"; // Título genérico para o botão principal
    } else if (element.querySelector('span')) { // Para os parágrafos .detail-movie
      videoTitle = element.querySelector('span').textContent;
    } else { // Para outros elementos (como as imagens renderizadas dinamicamente)
      videoTitle = element.getAttribute('data-title') || 'Vídeo'; // Fallback para "Vídeo"
    }

    if (modalVideoIframe && modalTitleElement && videoModal && videoLink) {
      modalVideoIframe.src = videoLink + "?autoplay=1";
      modalTitleElement.textContent = videoTitle;
      // Instancia e mostra o modal manualmente para elementos que usam onclick
      const bootstrapModal = new bootstrap.Modal(videoModal);
      bootstrapModal.show();
    } else {
      console.error("Erro: Não foi possível abrir o modal. Verifique os elementos ou a URL do vídeo.", { element, videoLink, videoTitle });
    }
  };
});