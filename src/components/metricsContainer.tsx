import { MetricContainer, MetricItem } from '../style/metricsContainer.js'
import useCountUp from '../hooks/useCount'
import { useMounted } from '../hooks/useMount'

export default function MetricsContainer() {
  const MAX_TRAVELER_COUNT = 700
  const MAX_REVIEW_COUNT = 100
  const MAX_SCHEDULE_COUNT = 470

  const travelerCount = useCountUp(MAX_TRAVELER_COUNT)
  const reviewCount = useCountUp(MAX_REVIEW_COUNT)
  const scheduleCount = useCountUp(MAX_SCHEDULE_COUNT)
  const isMounted = useMounted()
  return (
    <MetricContainer isMounted={isMounted}>
      <MetricItem>
        <strong>
          <span>{travelerCount}</span>
          <span>만 명</span>
        </strong>
        <div>의 사용자</div>
      </MetricItem>
      <MetricItem>
        <strong>
          <span>{reviewCount}</span>
          <span>만 개</span>
        </strong>
        <div>의 리뷰</div>
      </MetricItem>
      <MetricItem>
        <strong>
          <span>{scheduleCount}</span>
          <span>만 개</span>
        </strong>
        <div>의 저장</div>
      </MetricItem>
    </MetricContainer>
  )
}
