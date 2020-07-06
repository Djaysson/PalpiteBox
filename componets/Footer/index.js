import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
         <a className='hover:underline' href="https://github.com/Djaysson">Djayson Rodrigues</a> / {' '}
         <a className='hover:underline' href="https://br.linkedin.com/in/djaysonrodrigues">Linkedin</a> / {' '} 
         <a className='hover:underline' href="https://github.com/Djaysson">Github </a> 
         <div className='mt-2'>
          <img className='inline p-4' src="/logo_semana_fsm.png" alt=""/>
          <img className='inline p-4' src="/logo_devpleno.png" alt=""/>
         </div>
      </div>   
    </div>
  )
}

export default Footer;