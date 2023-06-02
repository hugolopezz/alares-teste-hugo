export const addOrder = (pedido) => ({
    type: 'ADICIONAR_PEDIDO',
    payload: pedido,
  });
  
  export const changeInfosOrder = (idOrder, newStatus) => ({
    type: 'ALTERAR_PEDIDO',
    payload: { idOrder, newStatus },
  });
  
  export const removeOrder = (id) => ({
    type: 'REMOVER_PEDIDO',
    payload: id,
  });