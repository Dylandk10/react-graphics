import TransactionDropDown from "./sub-component/TransactionDropDown";
import Test_Data from "./testdata";

const TransactionPage = (props) => {


    return (
        <div className="pushDown">
            <h3> Transactions</h3> <hr />

            {Test_Data.map((data) => {
                return <TransactionDropDown data={data}/>
            })}
            
  
        </div>
    )
}

export default TransactionPage;