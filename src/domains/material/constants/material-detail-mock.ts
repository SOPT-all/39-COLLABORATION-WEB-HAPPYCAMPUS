import type { MaterialDetail } from '@domains/material/types/material';

export const MATERIAL_DETAIL_MOCK: MaterialDetail = {
  postId: 1,
  category: 'SELF_INTRODUCTION',
  title: 'A기업 마케팅 합격 자소서 (2026)',
  description: '데이터 기반 캠페인 기획과 콘텐츠 개선 경험을 담은 자기소개서',
  price: 4500,
  coverImageUrl: null,
  savedYear: 202610,
  fileType: 'hwp',
  pageCount: 5,
  tableOfContents: '1. 지원 동기\n2. 고객 분석\n3. 콘텐츠 기획\n4. 성과 개선',
  content:
    '고객 행동을 이해하고 실행 결과를 개선하는 마케터로 성장하고자 지원했습니다.\n\n[1. 지원 동기]\nA기업이 고객 경험을 기반으로 브랜드 경험을 설계하는 방식에 공감해 지원했습니다.\n\n[2. 고객 분석]\n설문과 SNS 반응 데이터를 분석해 20대 고객의 구매 요인을 도출한 경험을 설명했습니다.\n\n[3. 콘텐츠 기획]\n분석 결과를 바탕으로 숏폼 콘텐츠 시리즈를 기획하고 제작한 과정을 정리했습니다.',
  imageUrls: [
    'https://picsum.photos/seed/preview-1/350/495',
    'https://picsum.photos/seed/preview-2/350/495',
    'https://picsum.photos/seed/preview-3/350/495',
    'https://picsum.photos/seed/preview-4/350/495',
    'https://picsum.photos/seed/preview-5/350/495',
  ],
  cartItemId: null,
  tag: '#자기소개서, #자기소개서샘플, #마케팅, #마케팅자기소개서',
};

export const MATERIAL_TAGS_MOCK = [
  '자기소개서',
  '자기소개서샘플',
  '마케팅',
  '마케팅자기소개서',
];
