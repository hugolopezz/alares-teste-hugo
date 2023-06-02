export const addPlan = (plano) => ({
    type: 'ADICIONAR_PLANO',
    payload: plano,
  });

  export const changeInfosPlan = (id, plano) => ({
    type: 'ALTERAR_PLANO',
    payload: { id, plano },
  });
  
  export const removePlan = (id) => ({
    type: 'REMOVER_PLANO',
    payload: id,
  });