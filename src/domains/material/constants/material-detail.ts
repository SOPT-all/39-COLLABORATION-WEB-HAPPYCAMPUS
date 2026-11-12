import type { MaterialDetail } from '@domains/material/types/material';

export const MATERIAL_DETAIL_MOCK: MaterialDetail = {
  title: 'A기업 마케팅 합격 자소서 (2026)',
  description: '데이터 기반 캠페인 기획과 콘텐츠 개선 경험을 담은 자기소개서',
  tableOfContents: ['지원 동기', '고객 분석', '콘텐츠 기획', '성과 개선'],
  summary:
    '고객 행동을 이해하고 실행 결과를 개선하는 마케터로 성장하고자 지원했습니다.',
  bodySections: [
    {
      title: '지원 동기',
      content:
        'A기업이 고객 데이터를 기반으로 브랜드 경험을 설계하는 방식에 공감해 지원했습니다.',
    },
    {
      title: '고객 분석',
      content:
        '설문과 SNS 반응 데이터를 분석해 20대 고객의 구매 요인을 도출한 경험을 설명했습니다.',
    },
    {
      title: '콘텐츠 기획',
      content:
        '분석 결과를 바탕으로 숏폼 콘텐츠 시리즈를 기획하고 제작한 과정을 정리했습니다.',
    },
  ],
  tags: ['자기소개서', '자기소개서샘플', '마케팅', '마케팅자기소개서'],
};
