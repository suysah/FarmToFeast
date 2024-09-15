import styles from "../components/ContractInfo.module.css";
import Button from "./Button ";

const ContractInfo = ({ data }) => {
  const { price, farmername, consumername, name, cropid, quantity } = data;
  const payment = Number(price) * Number(quantity);
  return (
    <>
      <div className={styles.subContainer}>
        <h1>Contract</h1>
        <div className={styles.contractDetails}>
          <span>
            <h3>Farmer name : </h3> {farmername}{" "}
          </span>
          <span>
            {" "}
            <h3>Consumer name : </h3> {consumername}{" "}
          </span>

          <span>
            {" "}
            <h3>Crop name : </h3> {name}{" "}
          </span>
          <span>
            {" "}
            <h3>Price : </h3> $ {price}
          </span>
          <span>
            {" "}
            <h3>Quantity : </h3> {quantity}{" "}
          </span>
          <span>
            {" "}
            <h3>Contarct formation date : </h3> 14-09-2024{" "}
          </span>
          <span>
            {" "}
            <h3>Crop delivery date : </h3> 17-12-2024{" "}
          </span>
          <span>
            {" "}
            <h3>Payment : </h3> $ {payment}{" "}
          </span>
        </div>
        <div className={styles.contractBtn}>
          <Button type="contarct"> Chat </Button>
          <Button type="contarct"> Details </Button>
        </div>
      </div>
    </>
  );
};

export default ContractInfo;
