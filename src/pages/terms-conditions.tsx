import TermsAndConditions from "@/components/terms-conditions";
import { GetServerSideProps } from "next";
import { FC } from "react";

type Props = {
  isMobile: boolean;
}

const TermsAndConditionsPage: FC<Props> = ({ isMobile }) => {
  return <TermsAndConditions isMobile={isMobile} />;
};

export default TermsAndConditionsPage;

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"] as string;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { props: { isMobile } };
}) satisfies GetServerSideProps<Props>;
