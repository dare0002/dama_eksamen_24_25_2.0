import Accordion from "@/components/FAQ";

const About = () => {
    return (
         <div className="md:mb-20 mb-10 max-w-xl md:max-w-3xl mx-auto md:mx-auto px-6 py-8 md:py-10">
            <div>
                <h3 className="md:text-offwhite text-xl md:text-3xl py-8 md:py-4">Practical Information.</h3>
                <p className="mb-2">Welcome to Foofest – a celebration of music, community, and unforgettable experiences!</p>
                <p> Foofest is more than just a festival; it’s a space where creativity thrives, diversity is embraced, and memories are made. Whether you’re here for the music, the atmosphere, or the connection with like-minded people, we’re thrilled to have you join us. </p>
                <p className="md:mt-4 mt-2">Here you will find our practicle information about the festival including a section of about us.</p>
            </div>
            <Accordion />
            <h3 className="md:text-offwhite text-xl md:text-3xl py-4 md:py-4">About us.</h3>
            <h4 className="text-offwhite md:text-xl py-6 md:py-4">Our story.</h4>
            <p>Foofest began with a dream: to create a festival that brings people together in the spirit of joy, inclusivity, and sustainability. Over the years, we’ve grown from a small gathering of music lovers into a vibrant event that welcomes thousands from all walks of life.</p>
            <p className="mt-2">Our passion for music, art, and togetherness fuels everything we do, and we’re committed to ensuring that Foofest remains a space for everyone to feel safe, celebrated, and inspired.</p>
            <h4 className="text-offwhite md:text-xl py-6 md:py-4">Festival experience.</h4>
            <p className="md:mb-2 mb-4">At Foofest, we believe in creating a welcoming, safe, and inclusive environment for everyone. Here’s what you can expect during your visit:</p>
            <ul className="text-offwhite list-disc pl-5 md:space-y-4">
                <li>
                    <p className="mb-2"><strong>Inclusivity:</strong> Foofest is for everyone, regardless of gender, ethnicity, age, or background. We celebrate diversity and work hard to ensure everyone feels at home.</p>
                </li>
                <li>
                    <p className="mb-2"><strong>Awareness Team:</strong> If something is disturbing you or you need assistance, look for our Awareness Team in bright orange or pink vests. They’re here to help and ensure everyone feels safe and respected. </p>
                </li>
                <li>
                    <p className="mb-2"><strong>Accessibility:</strong> We are committed to making the festival accessible to all. Wheelchair-accessible areas and services are available across the site. </p>
                </li>
                <li>
                    <p className="mb-2"><strong>Food & Drinks:</strong> Enjoy a variety of food stalls, catering to every taste and dietary preference – from vegan bites to hearty festival classics.</p>
                </li>
                <li>
                    <p className="mb-2"><strong>Lost & Found: </strong>Misplaced an item? Visit our Lost & Found booth near the main entrance.</p>
                </li>
            </ul>
            <h4 className="text-offwhite md:text-xl py-6 md:py-4">Sustainability.</h4>
            <p className="mb-2 md:mt-2">At Foofest, we’re dedicated to minimizing our environmental impact. We need your help to make this possible!</p>
            <p className="mb-2 md:mt-2">Please use the recycling bins located throughout the festival to sort glass, cans, plastic, and general waste. All drinks are served in reusable cups—return yours at a cup station for a refund or a fresh one.</p>
            <p className="mb-2 md:mt-2"> To reduce emissions, consider walking, biking, or using public transport to get here. Parking is limited, but we’ve partnered with local providers to make eco-friendly travel easy.</p>
            <p className="mb-2 md:mt-2">Finally, check out our merch tent for sustainable and ethically sourced festival gear. </p>
            <p className="mb-2 md:mt-4">Together, let’s keep Foofest green and make a positive impact on the planet!</p>
            <h4 className="text-offwhite md:text-xl py-6 md:py-4">Contact.</h4>
            <p>Contact us at kea@kea.dk or feel free to call us at +45 46 46 00 00</p>

        </div>
      );
}
 
export default About;