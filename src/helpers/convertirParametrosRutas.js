module.exports = (objetoParams) => {
  for(let prop in objetoParams) {
    if (/Id|id/.test(prop)) {
      objetoParams[prop] = Number(objetoParams[prop]);
    }  
  }

  return objetoParams;
};
