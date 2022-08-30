import React from 'react'

const Header = (Props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand">Buscador de Colaboradores</a>
            <form className="d-flex">
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Busca un colaborador"
            onChange = {(e) =>{Props.setBuscador(e.target.value);}}
            />
            </form>
        </div>
    </nav>
  );
}

export default Header