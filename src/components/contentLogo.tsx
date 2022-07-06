import { ContentLogoSection, LogoMetric } from '../style/contentLogo.js'
import { useMounted } from '../hooks/useMount'

export default function ContentLogo() {
  const isMounted = useMounted()
  return (
    <ContentLogoSection isMounted={isMounted}>
      <LogoMetric>2019년 2월 기준</LogoMetric>
    </ContentLogoSection>
  )
}
