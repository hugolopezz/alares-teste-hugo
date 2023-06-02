import LevEduca from '../assets/levEduca.png';
import Paramount from '../assets/paramount.png';
import McAfee from '../assets/mcAfee.png';

const initialStateOrders = {
  pedidos: [],
};

const initialStatePlans = {
  plans: [{
    id: 1,
    giga: '2',
    bestPlan: false,
    service1: McAfee,
    service2: LevEduca,
    service3: Paramount,
    price: '399,99'
  }, {
    id: 2,
    giga: '1',
    bestPlan: true,
    service1: Paramount,
    service2: Paramount,
    service3: McAfee,
    service4: LevEduca,
    price: '99,99'
  }, {
    id: 3,
    giga: '1.5',
    bestPlan: false,
    service1: Paramount,
    service2: McAfee,
    service3: LevEduca,
    price: '149,99'
  }]
};

const pedidoReducer = (state = initialStateOrders, action) => {
  switch (action.type) {
    case 'ADICIONAR_PEDIDO':
      return {
        ...state,
        pedidos: [...state.pedidos, action.payload],
      };
    case 'ALTERAR_PEDIDO':
      const { idOrder, newStatus } = action.payload;
      return {
        ...state,
        pedidos: state.pedidos.map((pedido) =>
          pedido.id === idOrder ? { ...pedido, status: newStatus } : pedido
        ),
      };
    case 'REMOVER_PEDIDO':
      return {
        ...state,
        pedidos: state.pedidos.filter((pedido) => pedido.id !== action.payload),
      };
    default:
      return state;
  }
};

const plansReducer = (state = initialStatePlans, action) => {
  switch (action.type) {
    case 'ADICIONAR_PLANO':
      return {
        ...state,
        plans: [...state.plans, action.payload],
      };
    case 'ALTERAR_PLANO':
      const { id, plano } = action.payload;
      const planosAtualizados = state.plans.map((plan) =>
        plan.id === id ? { ...plan, ...plano } : plan
      );
      return {
        ...state,
        plans: planosAtualizados,
      };
    case 'REMOVER_PLANO':
      return {
        ...state,
        plans: state.plans.filter((plans) => plans.id !== action.payload),
      };
    default:
      return state;
  }
};

export { pedidoReducer, plansReducer };