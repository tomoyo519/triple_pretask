import ContentLogo from '../components/contentLogo'
import MetricsContainer from '../components/metricsContainer'
import AwardContainer from '../components/awardContainer'
import { Maxwidth, AlignItems } from '../style/container.js'

export default function Container() {
  return (
    <Maxwidth>
      <AlignItems>
        <ContentLogo />
        <MetricsContainer />
        <AwardContainer />
      </AlignItems>
    </Maxwidth>
  )
}
