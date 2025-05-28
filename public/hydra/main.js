const hydraCanvas = document.createElement('canvas');
hydraCanvas.id = 'hydra-bg-canvas';
hydraCanvas.style.position = 'fixed';
hydraCanvas.style.left = '0';
hydraCanvas.style.top = '58px';
hydraCanvas.style.zIndex = '0';
hydraCanvas.style.pointerEvents = 'none';

function resizeHydraCanvas() {
    const dpr = window.devicePixelRatio || 1;
    hydraCanvas.width = window.innerWidth * dpr;
    // Subtract navbar height (56px) from height
    hydraCanvas.height = (window.innerHeight - 56) * dpr;
    hydraCanvas.style.width = window.innerWidth + 'px';
    hydraCanvas.style.height = (window.innerHeight - 56) + 'px';
}
resizeHydraCanvas();
window.addEventListener('resize', resizeHydraCanvas);

document.body.prepend(hydraCanvas);

var hydra = new Hydra({ detectAudio: false, canvas: hydraCanvas });