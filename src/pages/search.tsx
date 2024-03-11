import DesktopLayout from "@/components/common/DesktopLayout";
import Footer from "@/components/common/Footer";
import InputSearch from "@/components/common/InputSearch";
import AuthProvider from "@/components/common/ProtectAuth";
import Sections from "@/components/search/Sections";

const SearchPage = () => {
  return (
    <AuthProvider>
      <DesktopLayout forceDisplay>
        <div className="flex flex-col gap-y-[24px] overflow-y-auto w-auto pb-[99px] md:py-[32px] relative min-w-max flex-grow hidescroll md:max-w-[1056px] justify-center">
          <InputSearch />
          <Sections text="Tu búsqueda" endpoint="/search/series" />
        </div>
        <Footer />
      </DesktopLayout>
    </AuthProvider>
  );
};

export default SearchPage;
