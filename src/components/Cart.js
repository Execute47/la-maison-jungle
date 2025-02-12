function Cart(){
    let prixmonstera = 8;
    let prixlierre = 10;
    let prixbouquet = 15;
    return (<div><h1>Panier</h1>
        <ul><li>Monstera : {prixmonstera} euros</li>
            <li>Lierre : {prixlierre} euros</li>
            <li>Bouquet de fleurs : {prixbouquet} euros</li>
        </ul>
        <p>Total : {prixmonstera + prixlierre + prixbouquet} euros</p></div>)
  }

  export default Cart 