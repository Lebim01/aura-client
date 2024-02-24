import DesktopLayout from "@/components/common/DesktopLayout";
import Footer from "@/components/common/Footer";
import Sections from "@/components/search/Sections";
const SearchPage = () => {
  return (
    <DesktopLayout forceDisplay>
      <div className="flex flex-col gap-y-[24px] overflow-y-auto w-auto pb-[99px] md:py-[32px] relative min-w-max flex-grow hidescroll md:items-start md:justify-start">
        <Sections text="Tu búsqueda" endpoint="/search/movies" />
      </div>
      <Footer />
    </DesktopLayout>
  );
};

export default SearchPage;
