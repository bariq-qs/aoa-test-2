const ContactSection = () => {
    return <div className="px-8 py-10 flex gap-12">
        <div>
            <p className="text-3xl font-black mb-8">Connect With Us</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
        </div>
        <div>
            <div className="mb-4">
                <p className="font-bold text-primary">Mailing Address</p>
                <p>Jl. Medan Merdeka Tim. No.1, Gambir<br/>Central Jakarta</p>
            </div>
            <div className="mb-4">
                <p className="font-bold text-primary">Email</p>
                <p>test@mail.com</p>
            </div>
            <div className="mb-4">
                <p className="font-bold text-primary">Phone Number</p>
                <p>021123456</p>
            </div>
        </div>
    </div>
}

export default ContactSection