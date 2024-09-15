import React, { useEffect, useState } from "react";
import styles from "../components/Contracts.module.css";
import ContractInfo from "./ContractInfo";
import { useOutletContext } from "react-router-dom";

const Contarcts = ({ userId }) => {
  const [contracts, setContracts] = useState([]);
  const data = useOutletContext();

  useEffect(
    function () {
      if (data && data.contract) {
        setContracts(data.contract);
      }
    },
    [data]
  );

  return (
    <main className={styles.mainContainer}>
      {contracts.map((data) => {
        return <ContractInfo data={data} key={data.id} />;
      })}
    </main>
  );
};

export default Contarcts;
