function fecharMenuERedirecionar(target) {
    var modalElement = document.querySelector('.modal');
    var backdropElement = document.querySelector('.modal-backdrop');
  
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide(); // Fecha o menu
  
    setTimeout(function() {
      window.location.href = target; // Redireciona para a seção desejada
    }, 500); // Aguarda 500ms para redirecionar (pode ajustar o tempo conforme necessário)
  
    modalInstance._config.backdrop = false; // Remove o bloqueio do modal
    backdropElement.remove(); // Remove o backdrop do menu
  }