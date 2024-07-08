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
                className="md:w-[940px] w-[600px]"
               
                height="800px" 
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=l2uNDV3gDEa2tRm30CD0esf0BTfcyMJCm01Oia24wEZURURQNlJQQlFEOEkzNThaSVlUTEtINlBQVS4u&embed=true" 
                > </iframe>
            </DesktopLayout>
            <Footer />
        </AuthProvider >
    )
}

export default ConoceTuAura