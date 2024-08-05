import '@/app/styles/scss/components/about.scss'
import Image from "next/image";
import InSync from '@/app/assets/in-sync.png'

const AboutSection = () => {
    return <div className="wrap-about mb-10">
        <Image src={InSync} alt="in-sync" className="left-img"/>
        <div>
            <p className="text-5xl font-black mb-5 title">
                Improve Your Business
                <br/><span className="leading-normal" style={{color: '#00A2DF'}}>With ERP</span>
            </p>
            <p className="text-sm leading-relaxed" style={{width: '600px'}}>
                You can easily manage all aspects of your business, from stock taking to sales analysis. We believe that
                every entrepreneur deserves the right tools to grow their business.
            </p>
        </div>
    </div>
}

export default AboutSection