import { useEffect, useState } from 'react';
import './../custom.scss';
import Button from 'react-bootstrap/Button';

const About = () => {

    const [sales, setSales] = useState([]);
    const [salesIndex, setSalesIndex] = useState(0);

    const getSales = () => {
        let salesNumber = Math.floor(Math.random() * 1000);
        let salesAmount = Math.floor(Math.random() * 100000);
        const sale = {
            saleNumber: salesNumber,
            saleAmount: salesAmount
        };
        setSales([...sales, sale]);
    };

    const incrementSalesIndex = () => {
        if(salesIndex + 1 < sales.length) {
            setSalesIndex(salesIndex +1);
        }
    }

    const decreaseSalesIndex = () => {
        if(salesIndex -1 >= 0) {
        setSalesIndex(salesIndex -1);
        }
    };

    useEffect(() => {
        const salesInterval = setInterval(() => {
            getSales();
        }, 3700);

        return () => clearInterval(salesInterval);

    }, [sales]);
    return (
        <div className="pushDown paddingSides" id="liveSales">
            <h1>Live Sales</h1>
            {sales.length > 0 ?
            <div class="currentSalesContainer">
                <div>
                    All Sales: {sales.length}
                </div>
                <br />
                <div className="salesArea">
                    <p>
                        Sale Number: #{sales[salesIndex].saleNumber}
                    </p>
                    <p>
                        Sales Amount: {sales[salesIndex].saleAmount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    </p>
                </div>
                {sales.length > 1 ?
                    <div class="buttonContainer">
                        <Button variant="outline-primary" onClick={decreaseSalesIndex}>Back </Button>
                        <Button variant="outline-primary" onClick={incrementSalesIndex}>Next</Button>
                    </div>
                    :
                    <div class="buttonContainer">
                        <Button variant="outline-primary" onClick={decreaseSalesIndex} disabled={true}>Back </Button>
                        <Button variant="outline-primary" onClick={incrementSalesIndex} disabled={true}>Next</Button>
                    </div>
                }
            </div>
            : <span></span>}

            {sales.length <= 0 ?
                <div> No Sales... just wait</div>
            :
            <div>
                <h2>Current Sale</h2>
                <p>Sale Number: #{sales[sales.length -1].saleNumber} </p>
                <p>Sales Amount: {sales[sales.length -1].saleAmount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </p>
            </div>
            }
        </div>
    );
  };
  
  export default About;