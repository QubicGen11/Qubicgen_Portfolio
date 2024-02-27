import React, { useEffect, useState } from 'react'
import './Bankinglist.css'

const Bankinglist = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(selectedItem === item ? null : item);
    };
  return (
    
    <>
    
    <div className="banking-main-list">
        <nav style={{position:'sticky'}}>
            <li>Overview</li>
            <li>What we serve</li>
            <li>Case studies</li>
            <li>Meet our leadership</li>
        </nav>
    </div>
    <hr />
    <br />
    <br />
    
    <div className="container"  style={{color:'white'}}>
    <div className="row featurette" bis_skin_checked="1">
      <div className="col-md-7" bis_skin_checked="1">
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Directing the winds of change</h1>
        <p className="lead" id='leadtext'>With over two decades of experience in offering innovative solutions for Retail Banking, Lending and Leasing, Cards and Payments, Asset and Wealth Management, Investment Banks, Stock Exchanges and Life / General Insurances, Tech Mahindra helps in directing the winds of these changes in the right direction by providing immense opportunities for offering better products, services and a superior customer experience. BFSI in Tech Mahindra is aligned to TechM’s 3-4-3 strategy, which is alignment of 3 Mega trends- 4 Big bets - addressing 3 objectives.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://files.techmahindra.com/static/img/bfsi-3-4-3-strategy-driving-strong-results.png" alt="" />
      </div>
    </div>
    </div>
<br />
<br />
<br />
<br />
    <div className="bank-serve" style={{color:'white'}}>


      


<div className="banklist">
        <nav>
          <li onClick={() => handleItemClick('Banking')}>
            <img src="https://files.techmahindra.com/static/img/Manufacturing-&-Automotive.png" alt="" />
            <p>Banking</p>
          </li>
          <li onClick={() => handleItemClick('FS')}>
            <img src="https://files.techmahindra.com/static/img/Retail-&-Consumer.png" alt="" />
            <p>FS</p>
          </li>
          <li onClick={() => handleItemClick('Insurance')}>
            <img src="https://files.techmahindra.com/static/img/Insurance.png" alt="" />
            <p>Insurance</p>
          </li>
          <li onClick={() => handleItemClick('GRC')}>
            <img src="https://files.techmahindra.com/static/img/GRC.png" alt="" />
            <p>GRC</p>
          </li>
          <li onClick={() => handleItemClick('Platforms')}>
            <img src="https://files.techmahindra.com/static/img/platform.png" alt="" />
            <p>Platforms</p>
          </li>
        </nav>
      </div>
      <hr />

      {selectedItem && (
        <div className="bank-serve" style={{ color: 'white' }}>
        <div className="bankservehead">
          </div>
          {selectedItem === 'Banking' && (
            <div className="banking-sec" style={{ color: 'white' }}>
                
                <div className="banking-sec" style={{color:'white'}}>
        <div className="container" id='bankingprod' >
  <div className="row" style={{backgroundColor:'#242424'}}>
    <div className="col-sm">
        <img src="https://files.techmahindra.com/static/img/Core-banking.png" alt="" />
        <p>Banking Products</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>
    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Lending.png" alt="" />
        <p>Lending Money</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Cards-and-payments.png" alt="" />
        <p>Card and Payments</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
  </div>
</div>
    </div>            </div>
          )}
          {selectedItem === 'FS' && (
            <div className="fs-sec" style={{ color: 'white' }}>
              {/* Your FS content goes here */}
              <div className="container" id='bankingprod'>
  <div className="row" style={{backgroundColor:'#242424'}}>
    <div className="col-sm" >
        <img src="https://files.techmahindra.com/static/img/Core-banking.png" alt="" />
        <p>Banking Products</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>
    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Lending.png" alt="" />
        <p>Lending Money</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Cards-and-payments.png" alt="" />
        <p>Card and Payments</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
  </div>
</div>            </div>
          )}
          {selectedItem === 'Insurance' && (
            <div className="fs-sec" style={{ color: 'white' }}>
              {/* Your FS content goes here */}
              <div className="container" id='bankingprod'>
  <div className="row" style={{backgroundColor:'#242424'}}>
    <div className="col-sm">
        <img src="https://files.techmahindra.com/static/img/Core-banking.png" alt="" />
        <p>Banking Products</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>
    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Lending.png" alt="" />
        <p>Lending Money</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Cards-and-payments.png" alt="" />
        <p>Card and Payments</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
  </div>
</div>            </div>
          )}
          {selectedItem === 'GRC' && (
            <div className="fs-sec" style={{ color: 'white' }}>
              {/* Your FS content goes here */}
              <div className="container" id='bankingprod'>
  <div className="row" style={{backgroundColor:'#242424'}}>
    <div className="col-sm">
        <img src="https://files.techmahindra.com/static/img/Core-banking.png" alt="" />
        <p>Banking Products</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>
    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Lending.png" alt="" />
        <p>Lending Money</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Cards-and-payments.png" alt="" />
        <p>Card and Payments</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
  </div>
</div>            </div>
          )}
          {selectedItem === 'Platforms' && (
            <div className="fs-sec" style={{ color: 'white' }}>
              {/* Your FS content goes here */}
              <div className="container" id='bankingprod'>
  <div className="row" style={{backgroundColor:'#242424'}}>
    <div className="col-sm">
        <img src="https://files.techmahindra.com/static/img/Core-banking.png" alt="" />
        <p>Banking Products</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>
    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Lending.png" alt="" />
        <p>Lending Money</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
    <div className="col-sm">
    <img src="https://files.techmahindra.com/static/img/Cards-and-payments.png" alt="" />
        <p>Card and Payments</p>
        <p>Banking Products enable banks to transform their operations, bring innovation, drive profitability, optimize resources, and build future ready banking.</p>    </div>
  </div>
</div>            </div>
          )}
        </div>
      )}
     

    </div>


    
    </>
  )
}

export default Bankinglist