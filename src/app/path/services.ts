export const GLOBAL = {
    contextPath: (window.location.port !== '' ? window.location.origin.replace(window.location.port, '8089') : window.location.origin + ':8089') + '/'
};

export const CONSTANTES = {
  autenticar: GLOBAL.contextPath + 'login'
};
