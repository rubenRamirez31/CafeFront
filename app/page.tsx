"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ProductosCard from "./components/ProductosCard";
import { IProducto } from "./models/IProducto";
import { useSession, signOut } from "next-auth/react";

const PrincipalPage = () => {
  const { data: session, status } = useSession();
  const [productos, setProductos] = useState<IProducto[]>([]);
  
  useEffect(() => {

    if (session?.user.token) {
      fetch('http://localhost:8080/Productos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.user.token}`,
        },
      })
        .then(response => response.json())
        .then(json => setProductos(json))
        .catch(error => console.error('Error fetching products:', error));
    }


  }, [session]);


  return (

    <div className={styles.principal}>

      {/* Contenido de la página */}
      <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Bienvenidos a Café Contigo</h1>
          <p>Descubre una amplia variedad de productos de café.</p>
        </div>
      </header>
      
        {/* Buscador */}
        <section className={styles.searchContainer}>
          <h2>Buscador</h2>
          <input type="text" placeholder="Buscar productos..." className={styles.searchInput} />
          <button className={styles.searchButton}>Buscar</button>
        </section>

        {/* Categorías */}
        <section className={styles.categories}>
          <h2>Categorías populares</h2>
          <div className={styles.categoryList}>
            {/* Aquí puedes mostrar categorías o enlaces a páginas de categorías */}
            <Link href="./Categorias" className={styles.categoryItem}>
              Categorias
            </Link>
          </div>
        </section>

        {/* Productos Destacados */}
        <section className={styles.featuredProducts}>
          <h2>Productos Destacados</h2>
          <div className="row">
            {productos.map((producto: IProducto) => (
              //condicionar aqui que se vean los productos con mas likes
              <ProductosCard key={producto.idProducto} producto={producto} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrincipalPage;