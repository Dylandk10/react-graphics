import TransactionDropDown from "./sub-component/TransactionDropDown";
import Test_Data from "./testdata";

const TransactionPage = (props) => {


    return (
        <div className="pushDown paddingSides">
            <h3> Transactions</h3> <hr />

            {Test_Data.map((data) => {
                return <TransactionDropDown data={data} key={data.order_number}/>
            })}
            
  
        </div>
    )
}

export default TransactionPage;