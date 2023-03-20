import React from "react";
import styled from 'styled-components';

const Pagination = ({ paginas, setpage, paginasPlayers,setpages }) => {
        const ButtonPersons = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0;
  margin: 0.5rem 1rem;
  width: 5rem;
  heigth:2rem;
  background:#1775ef ;
  color: white;
  border: 2px solid white;
`
const TexNumbers = styled.h3`
  display: inline-block;
  border-radius: 3px;
  padding:  0;
  margin: 0.5rem 1rem;
  width: 1.5rem;
  background:#1775ef ;
  color: white;
  border: 2px solid white;
`

  return (
    <div style={{position:'fixed', bottom:0, width: '100%'}} >
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center ">
          <li className="page-item">
            <ButtonPersons className="page-link" disabled={paginas.current_page === 1}
            onClick={()=>setpage(paginas.current_page -1)}>
              Previous
            </ButtonPersons>
          </li>

          <li class="page-item">
            <TexNumbers className="page-link"> {paginas.current_page} </TexNumbers>
          </li>

          <li className="page-item">
            <ButtonPersons
              className="page-link"
              disabled={paginas.current_page === paginas.total_pages}
              onClick={()=>setpage(paginas.next_page)}>
              next
            </ButtonPersons>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
