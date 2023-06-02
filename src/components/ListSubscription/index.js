import "./styles.css";
import React from 'react';
import Plan from "./Plan";
import { useSelector } from 'react-redux';

const ListSubscription = () => {
  const plans = useSelector((state) => state.plans.plans);

  return (
    <>
      <section className="list-plans">
        <Plan plans={plans} />
      </section>
    </>
  );
};

export default ListSubscription;
