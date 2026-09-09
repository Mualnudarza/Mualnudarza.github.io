import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "../shaders/landing-pages/pageTypography";
import { LandingPageFrame, type LandingPageProps } from "../shaders/landing-pages/LandingPageFrame";
import { KAGE_TYPOGRAPHY } from "../shaders/landing-pages/pageRecipes";

export type { PageTypographyProps } from "../shaders/landing-pages/pageTypography";
export type { LandingPageProps } from "../shaders/landing-pages/LandingPageFrame";

export function KageLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return (
    <LandingPageFrame
      {...frame}
      customization={customization}
      title="Muhammad Alif Nur Darwanza — Business Analyst"
      sourceUrl={`${baseUrl}landing-pages/kage.html`}
    />
  );
}
