
import Navbar from '@package/components/Navbar'
import ContainerPreview from '@package/components/ContainerPreview'

export interface MetadataTypes {
    id: string
    title: string
    image: string
}

export default function Home() {

    const metadata: MetadataTypes[] = [
        {
            id: "1000",
            title: "หลับเพื่อจบ ลืมเพื่อเริ่ม หลับเพื่อจบ ลืมเพื่อเริ่ม หลับเพื่อจบ ลืมเพื่อเริ่ม หลับเพื่อจบ ลืมเพื่อเริ่ม หลับเพื่อจบ ลืมเพื่อเริ่ม หลับเพื่อจบ ลืมเพื่อเริ่ม หลับเพื่อจบ ลืมเพื่อเริ่ม",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/coverG/prod/-239079937_%E9%95%BF%E7%9C%A0%E5%90%8E%E4%B8%89%E4%B8%AA%E5%93%A5%E5%93%A5%E4%B8%BA%E6%88%91%E7%99%BD%E4%BA%86%E5%A4%B4%E6%B3%B0%E8%AF%AD.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1001",
            title: "ชะตารักนางหงส์",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1909467508698333185/1747724262915-0725767790467355-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1002",
            title: "ลำนำรักวารีเพลิง",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1909492453616730114/1747725005724-2417295373783197-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1003",
            title: "สองใบหน้า หนึ่งหัวใจ",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1928637938302509058/1749030237600-3600729065285544-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1004",
            title: "รักพังกลางศึก",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1927921407541301249/1748931096052-0.8542515678581-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1005",
            title: "หลับเพื่อจบ ลืมเพื่อเริ่ม",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/coverG/prod/-239079937_%E9%95%BF%E7%9C%A0%E5%90%8E%E4%B8%89%E4%B8%AA%E5%93%A5%E5%93%A5%E4%B8%BA%E6%88%91%E7%99%BD%E4%BA%86%E5%A4%B4%E6%B3%B0%E8%AF%AD.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1006",
            title: "ชะตารักนางหงส์",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1909467508698333185/1747724262915-0725767790467355-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1007",
            title: "ลำนำรักวารีเพลิง",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1909492453616730114/1747725005724-2417295373783197-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1008",
            title: "สองใบหน้า หนึ่งหัวใจ",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1928637938302509058/1749030237600-3600729065285544-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        },
        {
            id: "1009",
            title: "รักพังกลางศึก",
            image: "https://awscover.netshort.com/tos-vod-mya-v-da59d5a2040f5f77/imageG/prod/1927921407541301249/1748931096052-0.8542515678581-3%E6%AF%944.jpg~tplv-vod-rs:651:868.webp"
        }
    ]

    return (
        <div className='px-5 xl:px-0 mx-auto max-w-6xl'>
            <Navbar />
            <section className='py-1'>
                <div className='flex mx-auto max-w-xl border rounded-full overflow-hidden'>
                    <input className='outline-none flex-1 border-r ring-0 px-4 md:px-6 py-2' placeholder='ค้นหาซีรีย์ที่นี่สิ...' type="text"></input>
                    <button className='px-4'>ค้นหา</button>
                </div>
            </section>
            <main className='py-5 px-2'>
                <h1 className='py-3 text-lg font-semibold'>ซีรีส์อัปโหลดล่าสุด</h1>
                <ContainerPreview metadata={ metadata } />
            </main>
        </div>
    )
}
