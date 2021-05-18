import ContactForm from '../../components/contact/contact-form'

import Head from 'next/head'

function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Form</title>
                <meta 
                    name="description" 
                    content="Send me your questions" 
                />
            </Head>
            <ContactForm />
        </>
    )
}

export default ContactPage