import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return <header className="py-[72px]">
    <Container>
        <nav className="flex items-center justify-between">
            <Logo />
            <NavbarLinks />
            <Button className='border border-[#377DFF] text-[#377DFF] font-bold hover:bg-[#377DFF] hover:text-white transition-all duration-500 ease-in-out' text='Contact us'/>
        </nav>
    </Container>
  </header>;
}

export default Navbar;