import react from 'react'
export const Footer = () => {
    const today = new Date();

    return (
        <footer>
            Copyright &copy; {today.getFullYear()}
        </footer>
    )
}


export default Footer;