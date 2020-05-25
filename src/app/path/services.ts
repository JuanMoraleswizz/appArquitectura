export const GLOBAL = {
    contextPath: (window.location.port !== '' ? window.location.origin.replace(window.location.port, '8080') : window.location.origin + ':8080') + '/rest/'
};

export const CONSTANTES = {
  autenticar: GLOBAL.contextPath + 'user/autenticar/',
  cliente: GLOBAL.contextPath + 'cliente'
};
