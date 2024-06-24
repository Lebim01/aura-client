import DesktopLayout from "@/components/common/DesktopLayout"
import Footer from "@/components/common/Footer"
import AuthProvider from "@/components/common/ProtectAuth"
import VideosContextProvider from "@/context/VideosContext"
import router from "next/router"
import { isMobile } from "react-device-detect"

const ConoceTuAura = () => {
    return (
        <AuthProvider>
            <DesktopLayout isMobile={isMobile}>
                <iframe
                    className="overflow-hidden"
                    width="640px"
                    height="100%"
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=l2uNDV3gDEa2tRm30CD0esf0BTfcyMJCm01Oia24wEZUNlRIMVlPTlMwRkEzODRPQU05WlowU0ZSNC4u&embed=true"
                    style={{ border: "none", maxWidth: "100%", maxHeight: "100%" }}
                    allowFullScreen
                ></iframe>
            </DesktopLayout>
            <Footer />
        </AuthProvider>
    )
}

export default ConoceTuAura