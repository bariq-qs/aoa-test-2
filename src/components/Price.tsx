import '@/app/styles/scss/components/price.scss'
import {useState} from "react";
import {rupiah} from "@/app/utils/formatCurrency";

const PriceSection = () => {
    const [prices] = useState([
        {
            title: 'BASIC',
            amount: 15000,
            features: [
                'Mencatat barang masuk',
                'Mencatat barang keluar',
                'Mencatat hasil keuntungan'
            ]
        },
        {
            title: 'BUSINESS',
            amount: 17900,
            features: [
                'Mencatat barang masuk dan keluar',
                'Mencatat Keuntungan',
                'Dapat menganalisa hasil penjualan dengan CHART',
                'Support 7x24 Jam'
            ]
        },
        {
            title: 'ENTREPRENEUR',
            amount: 29900,
            features: [
                'Mencatat barang masuk dan keluar',
                'Mencatat Keuntungan',
                'Dapat menganalisa hasil penjualan dengan CHART',
                'Support 7x24 Jam',
                'Export data ke Excel',
                'AI Prediksi penghasilan'
            ]
        }
    ])
    return <div className="wrap-price">
        <p className="text-3xl text-center font-black mb-8">Price</p>
        <div className="grid grid-cols-3 gap-8">
            {
                prices.map((price, priceIdx) => (
                    <div className="price-card" key={priceIdx}>
                        <div className="price-header">
                            {price.title}
                        </div>
                        <div className="price-content">
                            <div className="price-amount">
                                <span>Rp.&nbsp;</span>
                                {rupiah(price.amount)}
                                <span>&nbsp;/month</span>
                            </div>
                            <ul className="price-feature">
                                {price.features.map((feature, featureIdx) => (
                                    <li key={featureIdx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}

export default PriceSection