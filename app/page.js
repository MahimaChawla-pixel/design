import LeftSidebar from "@/components/LeftSidebar"
import OfferBox from "@/components/OfferBox"
import Navbar from "@/components/Navbar"
import Heading from "@/components/Heading"
import CustomOffer from "./CustomOffer"
import ManageOffer from "./ManageOffer"

export default function Home() {
  return (
    <main className="flex w-full relative">
      <LeftSidebar />
      <div className="w-5/6 p-7">
        <Navbar />
        <Heading />
        <div className="bg-neutral-50 w-full mt-4 flex p-6 gap-5">
          <CustomOffer />
          <ManageOffer />
        </div>
      </div>
    </main>
  )
}
