import { offerData } from "../assets/data/data"
import Bestagency from "../componetnts/Bestagency"
import Customersay from "../componetnts/Customersay"
import Footer from "../componetnts/Footer"
import Howitworks from "../componetnts/Howitworks"
import InputBar from "../componetnts/InputBar"
import Lastfooter from "../componetnts/Lastfooter"
import Navbar from "../componetnts/Navbar"
import Newsletter from "../componetnts/Newsletter"
import Showcase from "../componetnts/Showcase"
import Specialoffer, { Offersection } from "../componetnts/Specialoffer"



export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <Showcase />
                <InputBar />
                <Howitworks />
                <Specialoffer title={'Special offer\'s and disconut'} zero={true} subHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots." />
                <Offersection offerData={offerData} />
                <Bestagency />
                <div>
                    <Specialoffer title={'Perfect holiday plan'} subHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots." />
                </div>
                <Offersection offerData={offerData} zero={true} />
                <Specialoffer title={'What our customers say...'} />
                <Customersay />

                <Specialoffer title={'Stay updated with Travel us'} zero={true} subHeading="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots." />
                <Offersection offerData={offerData} zero={true} />
            </div>
            <Newsletter />


        </>
    )
}
