export function changeListKorean(value) {
  switch (value) {
    case 'all':
      return '전체';
    case 'active':
      return '진행중';
    case 'completed':
      return '완료';
    default:
      return '';
  }
}
