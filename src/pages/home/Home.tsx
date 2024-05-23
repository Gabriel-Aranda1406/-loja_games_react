
function Home() {
    return (
        <>
            <div className="bg-slate-800  w-screen flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4" >
                        <img src="https://ik.imagekit.io/4lf7m2y5a/SUPER-Games-23-05-2024.png?updatedAt=1716473741031" alt="" width="400px"/>
                        <p className="text-5xl font-display ">Onde cada jogo vira realidade.</p>
                        
                    
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/4lf7m2y5a/control.png?updatedAt=1716476523268"
                            alt="Imagem Home"
                            width="w-2/3"
                        />
                    </div> 

                   
                </div>

            </div>
        </>
    );
}

export default Home;