import ToogleTheme from '../ToogleTheme/ToogleTheme'

export default function Header({ user }) {
    return (
        <div className='h-screen'>
            <header className="h-20 bg-gray-500 flex justify-between items-center px-8 sm:rounded-xl sm:m-5">
                {user &&
                    <span className="text-gray-100">Olá {user?.name || 'Usuário'}</span>
                }
                <h1>Alura newsletter</h1>
                <ToogleTheme />
            </header>
        </div>
    )
}
