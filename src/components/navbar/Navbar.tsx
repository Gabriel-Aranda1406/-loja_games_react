import { ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='w-full bg-indigo-600 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home'><img src="https://ik.imagekit.io/4lf7m2y5a/SUPER-Games-23-05-2024.png?updatedAt=1716473741031" alt="" width="120px"/></Link>

                    <div className='flex gap-4 font-display'>
                    Produtos
                    Categorias
                    Cadastrar Categoria
                    <ShoppingCart size={32} weight='bold' />
                        
                        {/* <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        Perfil
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar