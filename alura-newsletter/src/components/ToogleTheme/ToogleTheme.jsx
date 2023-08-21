import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ToogleTheme = () => {

    const toggle = () => {
        document.documentElement.classList.toggle('dark');
    }

    return (
        <div>
            <MoonIcon onClick={toggle} className="h-8 text-gray-100 block dark:hidden cursor-pointer" />
            <SunIcon onClick={toggle} className="h-8 text-gray-100 hidden dark:block cursor-pointer" />
        </div>
    )
}

export default ToogleTheme;
