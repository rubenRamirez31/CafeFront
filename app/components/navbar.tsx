"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react";

const NavBarComponent = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="navbar bg-black navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Inicio</Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">


          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/Productos">Productos</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" href="/Tiendas">Tiendas</Link>
          </li>

          {session ? (
            <>
              <li className="nav-item">
                <button onClick={() => signOut()} className="nav-link btn btn-link">Cerrar Sesión</button>
              </li>
            </>
          ) : (
            <>
              {/* Links para usuarios no autenticados */}
              <li className="nav-item">
                <Link className="nav-link active" href="/Login">Iniciar Sesión</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default NavBarComponent