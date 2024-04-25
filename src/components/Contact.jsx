export default function Contact() {
    return (
        <section className=" min-h-[100vh] m-5">
            <h1 className="text-center font-semibold">Contact Us</h1>
            <div className="flex items-center mx-auto w-[90%] p-5">
                <form id="contact-us" className="text-[#414778] bg-[#f7eeff] flex flex-col w-[80%] p-5 text-xl font-semibold">
                    <Label attributes={{ id: "user-name", type: "text", label: "Name" }} />

                    <Label attributes={{ id: "user-email", type: "email", label: "Email" }} />

                    <Label attributes={{ id: "message", label: "Message" }} />

                    <button className="bg-[#414778] p-2 text-[#f7eeff] rounded-sm">Send Message</button>
                </form>
                <img className="w-1/2" src="./img/contact-page.jpg" alt="free contact us image by freepik" />
            </div>
        </section>
    )
};

function Label({ attributes: { id, type, label } }) {
    return (
        <>
            {id !== "message" ?
                <label className="flex flex-col mb-5" htmlFor={id}>{label}
                    <input type={type} name={`${id}-holder`} required id={id} className="text-base p-2 outline-none shadow-md" />
                </label >
                : <label className="flex flex-col mb-5" htmlFor="message">{label}
                    <textarea className="text-base font-light p-2 outline-none shadow-md" name={`${id}-holder`} id={id} cols="30" rows="6" spellCheck="false" resize="none" required placeholder="your message"></textarea>
                </label>
            }
        </>
    )
}