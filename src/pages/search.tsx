import DesktopLayout from "@/components/common/DesktopLayout";
import Footer from "@/components/common/Footer";
import InputSearch from "@/components/common/InputSearch";
import AuthProvider from "@/components/common/ProtectAuth";
import Sections from "@/components/search/Sections";
import axiosInstance from "@/services";
import { Serie } from "@/types/series";
import { GetServerSideProps } from "next";

type Props = {
  series: Serie[];
  isMobile: boolean;
};

const SearchPage = (props: Props) => {
  return (
    <AuthProvider>
      <DesktopLayout isMobile={props.isMobile}>
        <div className="flex flex-col gap-y-[24px] overflow-y-auto w-auto pb-[99px] md:py-[32px] relative min-w-max flex-grow hidescroll md:max-w-[1056px] justify-center">
          <InputSearch />
          <Sections
            text="Tu búsqueda"
            endpoint="/search/series"
            initData={props.series}
          />
        </div>
        <Footer />
      </DesktopLayout>
    </AuthProvider>
  );
};

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"] as string;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const series_result = await axiosInstance.get(`/search/series`);

  return { props: { series: series_result.data, isMobile } };
}) satisfies GetServerSideProps<Props>;

export default SearchPage;
