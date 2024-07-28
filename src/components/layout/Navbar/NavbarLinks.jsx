const NAV_LINKS = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Services',
        href: '/services',
    },
    {
        title: 'Projects',
        href: '/projects',
    },
]
export default function NavbarLinks() {
  return (
    <ul className="flex items-center gap-[50px]">
        {NAV_LINKS.map((link , index) => (
            <li className="text-lg font-light hover:text-[#377DFF] hover:border-b-[14px] hover:border-[#377DFF] transition-all duration-500 ease-in-out cursor-pointer" key={index}>
                <a href={link.href}>{link.title}</a>
            </li>
        ))}
    </ul>
  )
}