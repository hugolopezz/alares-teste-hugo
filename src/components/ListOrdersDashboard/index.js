import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeInfosOrder, removeOrder } from '../../actions/ordersActions';

import { format } from 'date-fns';

const ListOrdersDashboard = () => {
  const pedidos = useSelector((state) => state.pedidos.pedidos);
  const dispatch = useDispatch();
  const progressOrders = pedidos.filter(item => item.status === 'Progress');
  const doneOrders = pedidos.filter(item => item.status === 'Done');

  const handleChangeStatus = (idOrder, currentStatus) => {
    const newStatus = currentStatus === 'Progress' ? 'Done' : 'Progress';
    dispatch(changeInfosOrder(idOrder, newStatus));
    alert("Pedido Enviado para " + newStatus)
  };

  const handleRemoveOrder = (idOrder) => {
    dispatch(removeOrder(idOrder));
    alert("Pedido excluido")
  };

  return (
    <>
      <section className="orders-block">
        <div className="list-orders">
          <h2 className="in-progress">IN PROGRESS</h2>
          {pedidos && progressOrders.map((item, index) => (
            <div className="orders-dashboard" key={index}>
              <div className="orders-name">
                Nome:
                <span>{item.nome}</span>
              </div>
              <div className="orders-tel">
                Telefone:
                <span>{item.telefone}</span>
              </div>
              <div className="orders-email">
                Email:
                <span>{item.email}</span>
              </div>
              <div className="orders-date">
                Data e hora:
                <span>{format(new Date(item.dataHora), 'yyyy-MM-dd HH:mm:ss')}</span>
              </div>
              <div className="orders-giga">
                Quantidades de giga do plano:
                <span>{item.planSelected.giga}</span>
              </div>
              <div className="orders-price">
                Preço do plano
                <span>R${item.planSelected.price}</span>
              </div>
              <div className="orders-status">
                STATUS:
                <span>{item.status}</span>
              </div>
              <div className="orders-buttons">
                <button onClick={() => { handleChangeStatus(item.id, item.status) }} className="order-button">Alterar Status</button>
                <button onClick={() => { handleRemoveOrder(item.id) }} className="order-button">Remover Pedido</button>
              </div>
            </div>
          ))}
        </div>
        <div className="list-orders">
          <h2 className="done">DONE</h2>
          {pedidos && doneOrders.map((item, index) => (
            <div className="orders-dashboard" key={index}>
              <div className="orders-name">
                Nome:
                <span>{item.nome}</span>
              </div>
              <div className="orders-tel">
                Telefone:
                <span>{item.telefone}</span>
              </div>
              <div className="orders-email">
                Email:
                <span>{item.email}</span>
              </div>
              <div className="orders-date">
                Data e hora:
                <span>{format(new Date(item.dataHora), 'HH:mm:ss')}</span>
              </div>
              <div className="orders-giga">
                Quantidades de giga do plano:
                <span>{item.planSelected.giga}</span>
              </div>
              <div className="orders-price">
                Quantidades de giga do plano:
                <span>{item.planSelected.price}</span>
              </div>
              <div className="orders-status">
                STATUS:
                <span>{item.status}</span>
              </div>
              <div className="orders-buttons">
                <button onClick={() => { handleChangeStatus(item.id, item.status) }} className="order-button">Alterar Status</button>
                <button onClick={() => { handleRemoveOrder(item.id) }} className="order-button">Remover Pedido</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ListOrdersDashboard;
