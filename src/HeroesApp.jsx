
import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components';

export const HeroesApp = () => {
  return (
    <div>
      <Navbar/>
      <main className='container'>
        <Outlet/>
      </main>
    </div>
  )
}
