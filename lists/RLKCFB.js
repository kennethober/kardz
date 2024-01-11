//  Notes
//  If there's an apostrophe in an entry, surround it with double quotes, like this:
//  ["Washing one's face", 'korean'],
//
//  When adding entries, be sure to make each entry end with a comma except for the last one
//
//  To deactivate a single line from the list below, precede it with '//', like this:
//  // ['english', 'korean'],
//
//  To deactivate a section from the list below, delimit it with '/*' and '*/', like this:
//  /*
//  ['english1', 'korean1'],
//  ['english2', 'korean2'],
//  */

const listFromFile = [
  ['How do you do? Nice to meet you!', '처음 뵙겠습니다'],
  ['My', '제 (short for 저의)'],
  ['Hometown', '고향'],
  ['Engineer', '엔지니어'],
  ['Contact information', '연락처'],
  ['To let (someone) know, to inform', '알리다'],
  ['Business card', '명함'],
  ['To let (someone) know', '알려 주다'],
  ['Cell phone', '핸드폰'],
  ['Number', '번호'],
  ['To let (someone) know (honorific)', '알려 드리다'],
  ['To call (on the phone)', '전화하다'],
  ['To save', '저장하다'],
  ['To see, to meet (honorific)', '뵙다'], 
  ['To live, to stay, to spend (time)', '지내다'],
  ['You (casual)', '너'],
  ['Hello? (on the phone)', '여보세요?'],
  ['Then, at that time', '그때'],
  ['To hang up (phone)', '끊다'],
  ['To go to VERB', 'VERB + (으)러 가다'],
  ['This week', '이번 주에'],
  ['Monday', '월요일'],
  ['Tuesday', '화요일'],
  ['Wednesday', '수요일'],
  ['Thursday', '목요일'],
  ['Friday', '금요일'],
  ['Saturday', '토요일'],
  ['Sunday', '일요일'],
  ['To apply for, request', '신청하다'],
  ['To know, to understand', '알다'],
  ['Getting off work', '퇴근'],
  ['I, me (casual)', '나'],
  ['Angel', '천사'],
  ['To be nervous', '긴장되다'],
  ['Matching couple t-shirts', '커플 티'],
  ['Honeymoon', '신혼여행'],
  ['Husband', '신랑'],
  ['At a late hour', '늦게'],
  ['Make sure', '꼭'],
  ['To try', '노력하다'],
  ['To wake (someone) up', '깨우다'],
  ['Middle-aged man', '아저씨'],
  ['1,000', '천'],
  ['10,000', '만'],
  ['10,000,000', '천만'],
  ['This, this time', '이번'],
  ['To have a drink', '한잔하다'],
  ['To try on', '입어 보다'],
  ['Size', '사이즈'],
  ['Which, what kind of', '어떤'],
  ['Dress shoes', '구두'],
  ['To try on shoes', '신어 보다'],
  ['For a moment, briefly', '잠시'],
  ['To like', '마음에 들다'],
  ['To give a discount', '깎아 주다'],
  ['To contact, to let someone know (honorific)', '연락드리다'],
  ['To deliver', '배달하다'],
  ['Toner','토너'],
  ['Lotion', '로션'],
  ['To recommend', '추천하다']
  ['Skin', '피부'],
  ['Oily skin', '지성'],
  ['Dry skin', '건성'],
  ['To run out of something', '떨어지다'],
  ['Mileage, point', '포인트'],
  ['To accumulate', '적립하다'],
  ['Receipt', '영수증'],
  ['To be popular', '인기가 많다'],
  ['To be sold out', '다 팔리다'],
  ['To be sure', '확실하다'],
  ['Action', '액션'],
  ['To be released', '개봉하다'],
  ['To reserve', '예매하다'],
  ['To smell', '냄새나다']
  ['Han River', '한강'],
  ['To borrow, to rent', '빌리다'],
  ['To mess with someone', '장난치다'],
  ['Sincerity, honest feeling', '진심'],
  ['Actually', '사실'],
  ['To date, to go out', '사귀다'],
  ['To work overtime', '야근하다'],
  ['Honey (married couple)', '여보'],
  ['Wedding anniversary', '결혼기념일'],
  ['Meeting', '회의'],
  ['Section chief', '과장님'],
  ['Assistant manager', '대리'],
  ['To check', '확인하다'],
  ['Business trip', '출장'],
  ['Cancellation', '취소'],
  ['Senior', '선배'],
  ['Getting a job', '취업'],
  ['Resume', '이력서'],
  ['To submit', '내다'],
  ['One place', '한 군데'],
  ['Jobless', '백수'],
  ['To be drunk', '취하다'],
  ['Company dinner', '회식'],
  ['Cheers', '건배'],
  ['Very, so', '엄청'],
  ['To get a job', '취업하다'],
  ['Taxi fare', '택시비'],
  ['We/us (humble)', '저희'],
  ['Lunch box', '도시락'],
  ['To pack', '싸다'],
  ['Cutting class', '땡땡이'],
  ['Stop', '그만'],
  ['To take a test', '시험 보다'],
  ['Completely', '완전히'],
  ['To screw up', '망치다'],
  ['Relief', '다행'],
  ['To be wrong', '틀리다'],
  ['Perfect score, 100%', '백 점'],
  ['To be right, to be hit/beat up', '맞다'],
  ['Kimchi stew', '김치찌개'],
  ['To order', '주문하다'],
  ['Soybean paste stew', '된장찌개'],
  ['Kitchen', '주방'],
  ['Americano', '아메리카노'],
  ['Caffe latte', '카페 라떼'],
  ['Cappuccino', '카푸치노'],
  ['Chamomile tea', '캐모마일 티'],
  ['Orange juice', '오렌지 주스'],
  ['Pager (call coaster)', '진동벨'],
  ['To take, to bring', '가져가다'],
  ['To change', '바꾸다'],
  ['To pay', '결제하다'],
  ['Other (friends)', '애들'],
  ['To be cool', '멋지다'],
  ['Interior design', '인테리어'],
  ['Housewarming party', '집들이'],
  ['Tuna', '참치'],
  ['Can', '캔'],
  ['To open', '따다'],
  ['To help', '도와주다'],
  ['Oil', '기름'],
  ['To fry', '볶다'],
  ['Fried kimchi', '김치 볶음'],
  ['To pour', '붓다'],
  ['To put, to add', '넣다'],
  ['To work, to be available, to be done', '되다'],
  ['To tell', '말해 주다'],
  ['Half', '반'],
  ['To take (time)', '걸리다'],
  ['Credit card', '카드'],
  ['Throat', '목'],
  ['Cold medicine', '감기약'],
  ['Cough', '기침'],
  ['Snot', '콧물'],
  ['To have a runny nose', '콧물 나다'],
  ['Headache', '두통'],
  ['Fever', '열'],
  ['To have a fever', '열나다'],
  ['To eat (honorific)', '드시다'],
  ['Each', '씩'],
  ['To have diarrhea', '설사하다'],
  ['Enteritis', '장염'],
  ['Digestion', '소화'],
  ['Transportation, traffic', '교통'],
  ['Which', '어느'],
  ['Side, route', '쪽'],
  ['To have a lot of traffic', '막히다'],
  ['Entrance', '입구'],
  ['To let someone off/out', '내려 주다'],
  ['Graduation', '졸업'],
  ['To have been awhile', '오랜만이다'],
  ['Map', '노선도'],
  ['Almost', '거의'],
  ['Completely', '완전히'],
  ['Opposite side', '반대편'],
  ['Subway line', '호선'],
  ['To transfer', '갈아타다'],
  ['To be confused', '헷갈리다'],
  ['App (smartphone application)', '앱'],
  ['To install', '깔다'],
  ['Window, a seat or place by a window', '창가'],
  ['Finally', '드디어'],
  ['Traveling overseas, international trip', '해외여행'],
  ['In-flight meal', '기내식'],
  ['To wear, to put on one's shoes', '신다'],
  ['For a long time', '오랫동안'],
  ['To fall', '넘어지다'],
  ['10 million won', '천만 원'],
  ['To feel uncomfortable (doing/with something)', '부담스럽다']
  ]