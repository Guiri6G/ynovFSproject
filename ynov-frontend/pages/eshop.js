


// -E-shop commenté dans la navbar car ne fonctionne pas

import React, {useState} from "react";
import { gql, useQuery } from "@apollo/client";
import Link from 'next/link';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

function EShop(){
  const GET_ALL_PRODUCTS = gql`
  query Products{
    products{
        id,
        title,
        price,
        description
    }
  }`
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const [ errorMessage, setErrorMessage] = useState('');
  if(loading) {
    return( <div>Loading...</div>)
  }
  if(error){
    setErrorMessage(error.message);
    return( <div>{errorMessage}</div>)
  }
  return(
    <div class="flex flex-col">
      <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Titre</th>
          <th>description</th>
          <th>Prix</th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {data.products.map(product => {
                    return(
                    <tr>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>€{product.price}</td>
                    <td>
                      <Link href={`/eshop/${product.id}`}>
                      <a class="">Detail</a>
                      </Link></td>
                    </tr>)
                })}
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default EShop;
