import { ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


function Navbar() {

    return (
        <>
            <div className='w-full bg-indigo-600 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home'><img src="https://ik.imagekit.io/4lf7m2y5a/SUPER-Games-23-05-2024.png?updatedAt=1716473741031" alt="" width="180px"/></Link>

                    <div className='flex gap-6 font-display m-6 items-center'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cardcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <ShoppingCart size={32} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar