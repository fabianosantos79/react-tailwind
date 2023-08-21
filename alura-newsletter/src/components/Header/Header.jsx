import ToogleTheme from '../ToogleTheme/ToogleTheme'

export default function Header() {
    return (
        <header className="h-20 bg-gray-500 flex justify-between items-center px-8 sm:rounded-xl sm:m-5">
            <span className="text-gray-100">Olá usuário</span>
            <h1 className="text-gray-100 text-xl font-bold">Alura newsletter</h1>
            <ToogleTheme />
        </header>
    )
}
