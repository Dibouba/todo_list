import React from 'react';
import {FaListAlt,FaCheckSquare,FaPlusSquare,FaTrash} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
const Navfoot = ({onDeleteCompleted}) =>(
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
    <div className="btn-group">
        {/* <!--listes des tâches--> */}
        <NavLink to="/" className="btn btn-outline-dark bg-light" exact={true}><FaListAlt /></NavLink>
        {/* <!--listes des tâches compléter--> */}
        <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
        {/* <!--ajout de nouvelle tâches--> */}
        <NavLink to="/Add-task" className="btn btn-outline-dark bg-light" exact={true}><FaPlusSquare /></NavLink>
    </div>
    <button href="" className="btn btn-outline-dark bg-light" onClick={onDeleteCompleted}><FaTrash /></button>
</footer>
);
export default Navfoot;