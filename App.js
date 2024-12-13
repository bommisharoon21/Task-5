import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: 'Gifts', price: '$999', url: 'https://www.walmart.com/shop/gift-finder?FY25_AllThingsHoliday_AllThingsHolidayXCAT_AllThingsHolidayCP_Hubspoke_WholeFestivePackageGfitFinder' },
    { id: 2, name: 'Trees', price: '$799', url: 'https://www.walmart.com/browse/home/christmas-trees/4044_2634414_7472650_9169445?FY25_AllThingsHoliday_AllThingsHolidayXCAT_AllThingsHolidayCP_Hubspoke_WholeFestivePackageChristmasTrees' },
    { id: 3, name: 'Hosting', price: '$199', url: 'https://www.walmart.com/shop/christmas-hosting?FY25_AllThingsHoliday_AllThingsHolidayXCAT_AllThingsHolidayCP_Hubspoke_WholeFestivePackageHosting' },
    { id: 4, name: 'Chocolates', price: '$299', url: 'https://www.walmart.com/search?q=chocolates' },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">Walmart</div>
        <ul className="nav-links">
          <li><a href="https://www.walmart.com/cp/home/4044">Home</a></li>
          <li><a href="https://www.walmart.com/">Products</a></li>
          <li><a href="https://identity.walmart.com/account/login?client_id=5f3fb121-076a-45f6-9587-249f0bc160ff&redirect_uri=https%3A%2F%2Fwww.walmart.com%2Faccount%2FverifyToken&scope=openid+email+offline_access&tenant_id=elh9ie&state=%2Fcp%2F3747098%3Futm_content%3DWMD-HPG-GBNA&code_challenge=zCV4KGSYyjunPpJlb_nky3JBnAy5j8OtJrVT-2mSLMI">Sign in</a></li>
        </ul>
      </header>

      <section className="hero">
        <h1>Welcome to Walmart</h1>
        <p>Your one-stop shop for all your needs</p>
      </section>

      <section className="product-list" id="products">
        <h2>Christmas Shopping</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <h3>{product.name}</h3>
              </a>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
