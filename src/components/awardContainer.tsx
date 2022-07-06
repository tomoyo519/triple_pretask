import {
  AwardSectionContainer,
  AwardGoogleItem,
  AwardAppleItem,
  AwardMetric,
} from '../style/awardContainer.js'
import { useMounted } from '../hooks/useMount'

export default function AwardContainer() {
  const isMounted = useMounted()
  return (
    <AwardSectionContainer isMounted={isMounted}>
      <AwardGoogleItem>
        <AwardMetric>
          2018 구글 플레이스토어 <br />
          올해의 앱 최우수상 수상
        </AwardMetric>
      </AwardGoogleItem>
      <AwardAppleItem>
        <AwardMetric>
          2018 애플 앱스토어 <br />
          오늘의 여행앱 선정
        </AwardMetric>
      </AwardAppleItem>
    </AwardSectionContainer>
  )
}
