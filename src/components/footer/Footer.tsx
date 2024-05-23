import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-indigo-600 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl  font-display'>Blog pessoal | Desenvolvido por : Gabriel Aranda </p>
            <p className='text-lg font-display'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={36} weight='bold' />
              <GithubLogo size={36} weight='bold'/>
              <WhatsappLogo size={36} />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer