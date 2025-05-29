
const Contacts = () => {

    const handleLinkedInClick = () => {
        // Opens the link in a new tab
        window.open('https://www.linkedin.com/in/ananta-shahane/', '_blank');
    };
    const handleMailClick = () => {
        // Opens the link in a new tab
        window.open('mailto:ananta.shahane@aol.com', '_blank');
    };
    const handleGitClick = () => {
        // Opens the link in a new tab
        window.open('https://github.com/anantashahane', '_blank');
    };
    const handleCVClick = () => {
        // Opens the link in a new tab
        window.open('Resum_.pdf', '_download');
    };

    return (
        <section id="contact" className="container items-center">
            <div className="flex flex-row items-center justify-center bg-zinc-300 mt-2 rounded-t-xl gap-5 p-4">
                <img src="Images/IMG_0348.jpeg" alt="" className="w-20 h-20 rounded-full" />
                <div className="flex flex-col">
                    <div className="text-2xl font-semibold text-zinc-600">Ananta Shahane</div>
                    <div className="flex flex-row gap-2">
                        <div className="tooltip" data-tip="Visit LinkedIn">
                            <img src="Images/linkedin.svg" alt="linkedIn" className="w-10 h-10 hover:opacity-80" onClick={handleLinkedInClick}/>
                        </div>
                        <div className="tooltip" data-tip="Compose Mail">
                            <img src="Images/mail.svg" alt="mail" className="w-10 h-10  hover:opacity-80" onClick={handleMailClick}/>
                        </div>
                        <div className="tooltip" data-tip="Visit Github">
                            <img src="Images/github.svg" alt="github" className="w-10 h-10 hover:opacity-80" onClick={handleGitClick}/>
                        </div>
                        <div className="tooltip" data-tip="Download Resume">
                            <img src="Images/resume.svg" alt="resumé" className="w-10 h-10 hover:opacity-80" onClick={handleCVClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;