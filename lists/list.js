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

const list = [
  ['I, me', '저'],
  ['Company employee', '회사원'],
  ['Too, very', '너무'],
  ['To be busy', '바쁘다'],
  ['We, our', '우리'],
  ['Usually, usual, regular', '보통'],
  ['Weekend', '주말'],
  ['To meet', '만나다'],
  ['Movie', '영화'],
  ['Cafe', '카페'],
  ['Every day', '매일'],
  ['Early', '일찍'],
  ['To get up, to wake up', '일어나다'],
  ['Water', '물'],
  ['To drink', '마시다'],
  ["Washing one's face", '세수'],
  ['Clothes', '옷'],
  ['To wear, to put on', '입다'],
  ['Make-up', '화장'],
  ['Company', '회사'],
  ['Test, exam', '시험'],
  ['Chair', '의자'],
  ['Desk', '책상'],
  ['To be dirty', '더럽다'],
  ['Up, top', '위'],
  ['Cleaning', '청소'],
  ['To be clean', '깨끗하다'],
  ['Notebook', '공책'],
  ['Pencil case', '필통'],
  ['To begin, to start', '시작하다'],
  ['To be hungry', '배고프다'],
  ['Earlier', '아까'],
  ['Bread', '빵'],
  ['Beverage', '음료수'],
  ['To give', '주다'],
  ['Now', '지금'],
  ['To be full (opposite of hungry)', '배부르다'],
  ['To doze', '졸다'],
  ['Teacher', '선생님'],
  ['To be scary, to be scared', '무섭다'],
  ['Child', '어린이'],
  ['School', '학교'],
  ['Family', '가족'],
  ['Park', '공원'],
  ['To be a lot, to be numerous', '많다'],
  ['Adult, grown-up', '어른'],
  ['Baby', '아기'],
  ['To be few, to be little', '적다'],
  ['To be interesting, to be fascinating', '신기하다'],
  ['How', '어떻게'],
  ['Winter', '겨울'],
  ['School vacation', '방학'],
  ['Grandmother', '할머니'],
  ['To go', '가다'],
  ['Bus', '버스'],
  ['Subway', '지하철'],
  ['To ride', '타다'],
  ['Cat', '고양이'],
  ['Animal', '동물'],
  ['To hang out, to play', '놀다'],
  ['Vacation, leave', '휴가'],
  ['Man', '남자'],
  ['Woman', '여자'],
  ['Shampoo', '샴푸'],
  ['Hair conditioner', '린스'],
  ['Underwear', '속옷'],
  ['Socks', '양말'],
  ['Hairdryer', '드라이기'],
  ['Pants', '바지'],
  ['T-shirt', '티셔츠'],
  ['Older sister (for a boy)', '누나'],
  ['Television', '텔레비전'],
  ['TV drama', '드라마'],
  ['News', '뉴스'],
  ['To fight, to argue', '싸우다'],
  ['To lose', '지다'],
  ['Room', '방'],
  ['To close', '닫다'],
  ['Music', '음악'],
  ['To listen, to hear', '듣다'],
  ['Dog', '개'],
  ['To exist, to have, to be (at a place)', '있다'],
  ['Name', '이름'],
  ['Time', '시간'],
  ['To live', '살다'],
  ['To die', '죽다'],
  ['To be sad', '슬프다'],
  ['Younger sibling', '동생'],
  ['To cry', '울다'],
  ['Tear', '눈물'],
  ['Swimming', '수영'],
  ['Towel', '수건'],
  ['Store', '가게'],
  ['Money', '돈'],
  ['To borrow, to rent', '빌리다'],
  ['Soap', '비누'],
  ['To be cold', '차갑다'],
  ['Shoulder', '어깨'],
  ['Strength, power', '힘'],
  ['To teach', '가르치다'],
  ['Tomorrow', '내일'],
  ['To be close (with someone)', '친하다'],
  ['To write, to use, to be bitter', '쓰다'],
  ['To receive', '받다'],
  ['To be glad, to be happy', '기쁘다'],
  ['Present, gift', '선물'],
  ['What', '무엇'],
  ['To be good', '좋다'],
  ['Earrings', '귀고리'],
  ['Necklace', '목걸이'], 
  ['Today', '오늘'],
  ['Birthday', '생일'],
  ['Classroom', '교실'],
  ['To eat', '먹다'],
  ['Friend', '친구'],
  ['Song', '노래'],
  ['Dance', '춤'],
  ['To congratulate, to celebrate', '축하하다'],
  ['To be fun', '재미있다'],
  ['Day, one day', '하루'],
  ['Dad', '아빠'],
  ['Sea, ocean', '바다'],
  ['To walk', '걷다'],
  ['Restaurant', '식당'],
  ['To be delicious', '맛있다'],
  ['Food', '음식'],
  ['Coffee', '커피'], 
  ['Star', '별'],
  ['To see, to watch, to meet, to read', '보다'],
  ['To be happy', '행복하다'],
  ['Summer', '여름'],
  ['To dislike, to hate', '싫어하다'],
  ['To be hot (weather)', '덥다'],
  ['Outside', '밖'],
  ['To go out', '나가다'], 
  ['House, home', '집'],
  ['Air conditioner', '에어컨'], 
  ['To turn on', '켜다'],
  ['To be cool (temperature)', '시원하다'],
  ['Ice', '얼음'],
  ['Already', '벌써'], 
  ['Night', '밤'],
  ['Bed', '침대'],
  ['To lie down', '눕다'],
  ['Sleep', '잠'],
  ['Bathroom', '화장실'],
  ['Book', '책'],
  ['To read', '읽다'],
  ['Refrigerator', '냉장고'],
  ['Milk', '우유'],
  ['Cup', '컵'],
  ['To be hot (temperature)', '뜨겁다'],
  ['Computer', '컴퓨터'],
  ['Email', '이메일'],
  ['Laptop computer', '노트북'],
  ['To charge', '충전하다'],
  ['To be important', '중요하다'],  
  ['Mirror', '거울'],
  ['Make-up product', '화장품'],
  ['To apply, to put on', '바르다'],
  ['Side, next to', '옆'],
  ['Married couple', '부부'],
  ['Invitation', '초대'],
  ['Afternoon', '오후'],
  ['Arrival', '도착'],
  ['Daughter', '딸'],
  ['Age', '나이'],
  ['To be the same, to be like', '같다'],
  ['Kindergarten', '유치원'],
  ['Relationship, relation', '사이'],
  ['Son', '아들'],
  ['Game', '게임'], 
  ['Day of the week', '요일'],
  ['Morning', '아침'],
  ['Lunch', '점심'],
  ['Rice, food, meal', '밥'],
  ['To feel angry, to get angry', '화나다'],
  ['Worry, concern', '걱정'],
  ['Why', '왜'],
  ['Study', '공부'],
  ['Feeling', '느낌'],
  ['Calendar', '달력'],
  ['Date', '날짜'],
  ['Shape', '모양'],
  ['Down, below', '아래'],
  ['Phone number', '전화번호'],
  ['To forget', '잊어버리다'],
  ['Fast, quickly', '빨리'], 
  ['Reservation', '예약'],
  ['To depart', '출발하다'],
  ['Countryside', '시골'],
  ['City', '도시'],
  ['To be noisy', '시끄럽다'],
  ['To be quiet', '조용하다'],
  ['Hiking', '등산'],
  ['To be high', '높다'],
  ['To be low', '낮다'], 
  ['The sun', '해'],
  ['To be dark', '어둡다'],
  ['To go down', '내려가다'],
  ['Entertainer, celebrity', '연예인'],
  ['Who', '누구'],
  ["One's height", '키'],
  ['To be big', '크다'],
  ['To laugh, to smile', '웃다'],
  ['Face', '얼굴'],
  ['To be cute', '귀엽다'],
  ['Eye', '눈'],
  ['Leg', '다리'],
  ['To be long', '길다'],
  ['Older sister (for a girl)', '언니'],
  ['Together', '같이'], 
  ['Travel', '여행'],
  ['Airplane', '비행기'],
  ['Beginning, for the first time', '처음'], 
  ['Window', '창문'],
  ['To sit', '앉다'],
  ['Later', '이따가'],
  ['Sky', '하늘'],
  ['Cloud', '구름'],
  ['Contact, contacting', '연락'],
  ['To help', '도와주다'], 
  ['Floor', '층'],
  ['Elevator', '엘리베이터'],
  ['To be heavy', '무겁다'],
  ['Box', '상자'],
  ['To lift, to carry', '들다'],
  ['To put in', '넣다'],
  ['To be narrow', '좁다'],
  ['To take out, to pull out', '빼다'],
  ['Moving', '이사'],
  ['Alone', '혼자'],
  ['To be cool, to be awesome', '멋있다'],
  ['Living room', '거실'],
  ['Wall', '벽'],
  ['Painting, drawing, picture', '그림'],
  ['Clock', '시계'],
  ['Kitchen', '부엌'],
  ['To make', '만들다'],
  ['To use', '쓰다'],
  ['To erase, to wash off', '지우다'],
  ['To wash', '씻다'],
  ['Mushroom', '버섯'],
  ['Carrot', '당근'],
  ['To call', '부르다'],
  ['All, every', '다'],
  ['Walk', '산책'],
  ['To be bright', '밝다'],
  ['To be comfortable', '편하다'],
  ['Gratitude', '감사'],
  ['Dream', '꿈'],
  ['Photo', '사진'],
  ['To learn', '배우다'],
  ['Camera', '카메라'],
  ['Price', '가격'],
  ['To be expensive', '비싸다'],
  ['Mobile phone, cell phone', '휴대폰'],
  ['To take, to film', '찍다'],
  ['To practice', '연습하다'],
  ['To be famous', '유명하다'],
  ['Spring', '봄'],
  ['To come', '오다'],
  ['Weather', '날씨'],
  ['To be warm', '따뜻하다'], 
  ['To be pretty', '예쁘다'], 
  ['Flower', '꽃'], 
  ['Strawberry', '딸기'],
  ['Red', '빨간색'],
  ['To like', '좋아하다'],
  ['Fruit', '과일'],
  ['To wait', '기다리다'],
  ['Snow', '눈'],
  ['Wind', '바람'],
  ['To be cold', '춥다'],
  ['Often', '자주'],
  ['Inside', '안'],
  ['To call, to telephone', '전화하다'],
  ['To know', '알다'],
  ['Glove', '장갑'],
  ['Scarf', '목도리'],
  ['To do well, to be good at something, to be skillful', '잘하다'],
  ['Taste', '맛'],
  ['To not do well, to be bad at something, to be unskillful', '못하다'],
  ['Love', '사랑'],
  ['Onion', '양파'],
  ['Potato', '감자'],
  ['Knife', '칼'],
  ['To chop, to cut', '썰다'],
  ['Finger', '손가락'],
  ['Delivery', '배달'],
  ['Guest', '손님'],
  ['Laundry', '빨래'],
  ['Doing the dishes', '설거지'],
  ['Blanket', '이불'],
  ['Pillow', '베개'],
  ['Trash', '쓰레기'],
  ['To throw away', '버리다'],
  ['Market', '시장'],
  ['Snack', '과자'],
  ['To prepare', '준비하다'],
  ['Internet', '인터넷'],
  ['Skirt', '치마'],
  ['To order', '주문하다'],
  ['Failure', '실패'],
  ['To be small', '작다'],
  ['Shopping', '쇼핑'],
  ['To be difficult, to be hard', '어렵다'],
  ['Success', '성공'],
  ['Next', '다음'],
  ['Hat, cap', '모자'],
  ['Promise, plan, appointment', '약속'],
  ['To be late', '늦다'],
  ['Taxi, cab', '택시'],
  ['Motorcycle', '오토바이'],
  ['Accident', '사고'],
  ['Police', '경찰'],
  ['Text message', '문자'],
  ['To send, to spend', '보내다'],
  ["Lower back, waist, the small of one's back", '허리'],
  ['A little bit', '조금'],
  ['Singer', '가수'],
  ['Popularity', '인기'],
  ['Country, nation', '나라'],
  ['Korean', '한국어'],
  ['To need, to be necessary', '필요하다'],
  ['Word', '단어'],
  ['Ear', '귀'],
  ['Map', '지도'],
  ['Address', '주소'],
  ['To be curious', '궁금하다'],
  ['Door', '문'],
  ['To open', '열다'],
  ['Cold', '감기'],
  ['Fever', '열'],
  ['Nose', '코'],
  ['To come out', '나오다'],
  ['Pharmacy', '약국'],
  ['Medicine', '약'],
  ['Tea', '차'],
  ['Health', '건강'],
  ['Apple', '사과'],
  ['Banana', '바나나'], 
  ['To work', '일하다'],
  ['Cucumber', '오이'],
  ['Tomato', '토마토'],
  ['Belly, stomach', '배'],
  ['Mind, heart', '마음'],
  ['To be weak', '약하다'],
  ["Body weight, one's weight", '몸무게'],
  ['Absolutely', '절대'],
  ['Yesterday', '이제'],
  ['Exercise', '운동'],
  ['To fall down', '넘어지다'],
  ['Hand', '손'],
  ['To get hurt', '다치다'],
  ['To be sick, to hurt', '아쁘다'],
  ['Hospital', '병원'],
  ['Doctor', '의사'],
  ['To rest', '쉬다'],
  ['To be difficult, to be tiring, to be hard', '힘들다'],
  ['Student', '학생'],
  ['Bicycle', '자전거'],
  ['To attend, to go to (regularly)', '다니다'],
  ['Rain', '비'], 
  ['Umbrella', '우산'],
  ['To not have, to not be, to not exist', '없다'],
  ['Shoe', '신발'],
  ['To take off (clothing)', '벗다'],
  ['Foot', '발'],
  ['Bath', '목욕'],
  ['Older brother (for a girl)', '오빠'],
  ['Sometimes', '가끔'],
  ['Lie', '거짓말'],
  ['Frustration, anger, irritation', '짜증'],
  ['Morning, before noon', '오전'],
  ['Head, hair', '머리'],
  ['Bug, worm', '벌레'],
  ['To be surprised', '놀라다'],
  ['To hate, to dislike, to be displeasing', '싫다'],
  ['To be strange, to be weird', '이상하다'],
  ['Evening', '저녁'],
  ['Mom', '엄마'],
  ['Supermarket', '마트'],
  ['Meat', '고기'],
  ['To buy', '사다'],
  ['Fish', '생선'],
  ['Vegetable', '채소'],
  ['To talk, to speak', '말하다'],
  ['Egg', '달걀'],
  ['Cooking, food, dish', '요리'],
  ['Grandfather, old man', '할아버지'],
  ['Mountain', '산'],
  ['To go up', '올라가다'],
  ['To trust, to believe', '믿다'],
  ['Person, people', '사람'],
  ['Bird', '새'],
  ['Tree, wood', '나무'],
  ['Smell', '냄새'],
  ['Body', '몸'],
  ['To move', '움직이다'],
  ['Airport', '공항'],
  ['To be spacious, to be wide', '넓다'],
  ['Road, street', '길'],
  ['To lose, to misplace', '잃어버리다'],
  ['Here', '여기'],
  ['Where', '어디'],
  ['Bookstore', '서점'],
  ['To enter', '들어가다'],
  ['To ask', '물어보다'],
  ['To find', '찾다'],
  ['University, college', '대학교'],
  ['Station', '역'], 
  ['To be close', '가깝다'],
  ['Right side, right-hand side', '오른쪽'],
  ['Bank', '은행'],
  ['Left side, left-hand side', '왼쪽'],
  ['Convenience store', '편의점'],
  ['Front', '앞'],
  ['To cross', '건너다'],
  ['Again', '다시'],
  ['Color', '색깔'],
  ['Black', '검은색'],
  ['Wallet', '지갑'],
  ['Car', '자동차'],
  ['Bag', '가방'],
  ['When', '언제'],
  ['To not know', '모르다'],
  ['Older brother (for a boy)', '형'],
  ['White', '하얀색'],
  ['To be different', '다르다'],
  ['To be nice, to be kind-hearted', '착하다'],
  ['Problem, matter', '문제'],
  ['Pencil', '연필'],
  ['To lend', '빌려주다'],
  ['Pen', '펜'],
  ['Again', '또'],
  ['Reason', '이유'],
  ['To be crazy, to go crazy', '미치다'],
  ['To be bad', '나쁘다'],
  ['To not be', '아니다'],
  ['Marriage, wedding', '결혼'],
  ['Plant', '식물'],
  ['Card', '카드'],
  ['To decide, to choose', '정하다'],
  ['To be cheap, to be inexpensive', '싸다'],
  ['To boil', '끓이다'],
  ['To be sweet', '달다'],
  ['Disappointment', '실망'], 
  ['Plan', '계획']
  ]
