import './footer.css'

const Footer = () => {

    const sendToGithub = () => {
        window.open('https://github.com/jmv1006')
    }

    return(
        <div id='footerContainer'>
            <div id='myInfo'>
                Developed by Jonathan Andrade Valenzuela
                <div id='gitLogoContainer'>
                    <img onClick={sendToGithub} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </div>
            </div>
            <div id='imageInfo'>
                Game Image from <a href='https://www.amazon.com/Star-Wars-Wheres-Wookiee-Search/dp/1405284196'>Star Wars: Where's the Wookie?</a>
            </div>
        </div>
    )
}

export default Footer;