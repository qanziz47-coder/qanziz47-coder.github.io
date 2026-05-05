const overlay = document.getElementById('loadingOverlay');
        
        function startEyeReveal() {
            overlay.classList.add('reveal');
        }
        
        setTimeout(() => {
            startEyeReveal();
        }, 1000);
        