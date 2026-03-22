// Grandparent English Learning App

// 100 Common English Phrases for Daily Life
const commonPhrases = [
    // Greetings 问候 (1-10)
    { id: 1, chinese: '你好', english: 'Hello', category: '问候' },
    { id: 2, chinese: '早上好', english: 'Good morning', category: '问候' },
    { id: 3, chinese: '下午好', english: 'Good afternoon', category: '问候' },
    { id: 4, chinese: '晚上好', english: 'Good evening', category: '问候' },
    { id: 5, chinese: '你好吗？', english: 'How are you?', category: '问候' },
    { id: 6, chinese: '我很好', english: 'I am fine', category: '问候' },
    { id: 7, chinese: '谢谢', english: 'Thank you', category: '问候' },
    { id: 8, chinese: '不客气', english: 'You are welcome', category: '问候' },
    { id: 9, chinese: '对不起', english: 'I am sorry', category: '问候' },
    { id: 10, chinese: '没关系', english: 'It is okay', category: '问候' },
    
    // Self Introduction 自我介绍 (11-20)
    { id: 11, chinese: '我叫...', english: 'My name is...', category: '自我介绍' },
    { id: 12, chinese: '我是中国人', english: 'I am Chinese', category: '自我介绍' },
    { id: 13, chinese: '我今年...岁', english: 'I am ... years old', category: '自我介绍' },
    { id: 14, chinese: '我住在...', english: 'I live in...', category: '自我介绍' },
    { id: 15, chinese: '我有一个家庭', english: 'I have a family', category: '自我介绍' },
    { id: 16, chinese: '我是退休的', english: 'I am retired', category: '自我介绍' },
    { id: 17, chinese: '我喜欢...', english: 'I like...', category: '自我介绍' },
    { id: 18, chinese: '我不懂英语', english: 'I do not understand English', category: '自我介绍' },
    { id: 19, chinese: '请说慢一点', english: 'Please speak slowly', category: '自我介绍' },
    { id: 20, chinese: '很高兴认识你', english: 'Nice to meet you', category: '自我介绍' },
    
    // Daily Life 日常生活 (21-35)
    { id: 21, chinese: '我饿了', english: 'I am hungry', category: '日常生活' },
    { id: 22, chinese: '我渴了', english: 'I am thirsty', category: '日常生活' },
    { id: 23, chinese: '我累了', english: 'I am tired', category: '日常生活' },
    { id: 24, chinese: '我想睡觉', english: 'I want to sleep', category: '日常生活' },
    { id: 25, chinese: '我起床了', english: 'I got up', category: '日常生活' },
    { id: 26, chinese: '我去睡觉', english: 'I go to bed', category: '日常生活' },
    { id: 27, chinese: '我洗澡', english: 'I take a bath', category: '日常生活' },
    { id: 28, chinese: '我穿衣服', english: 'I get dressed', category: '日常生活' },
    { id: 29, chinese: '我刷牙', english: 'I brush my teeth', category: '日常生活' },
    { id: 30, chinese: '我洗脸', english: 'I wash my face', category: '日常生活' },
    { id: 31, chinese: '我吃早餐', english: 'I eat breakfast', category: '日常生活' },
    { id: 32, chinese: '我吃午餐', english: 'I eat lunch', category: '日常生活' },
    { id: 33, chinese: '我吃晚餐', english: 'I eat dinner', category: '日常生活' },
    { id: 34, chinese: '我散步', english: 'I take a walk', category: '日常生活' },
    { id: 35, chinese: '我休息', english: 'I take a rest', category: '日常生活' },
    
    // Shopping 购物 (36-50)
    { id: 36, chinese: '这个多少钱？', english: 'How much is this?', category: '购物' },
    { id: 37, chinese: '太贵了', english: 'It is too expensive', category: '购物' },
    { id: 38, chinese: '便宜一点', english: 'A little cheaper please', category: '购物' },
    { id: 39, chinese: '我要买这个', english: 'I want to buy this', category: '购物' },
    { id: 40, chinese: '我不要', english: 'I do not want it', category: '购物' },
    { id: 41, chinese: '有折扣吗？', english: 'Is there a discount?', category: '购物' },
    { id: 42, chinese: '可以刷卡吗？', english: 'Can I pay by card?', category: '购物' },
    { id: 43, chinese: '我用现金', english: 'I pay with cash', category: '购物' },
    { id: 44, chinese: '给我收据', english: 'Give me a receipt', category: '购物' },
    { id: 45, chinese: '有别的颜色吗？', english: 'Do you have other colors?', category: '购物' },
    { id: 46, chinese: '有别的尺寸吗？', english: 'Do you have other sizes?', category: '购物' },
    { id: 47, chinese: '我试试', english: 'Let me try it', category: '购物' },
    { id: 48, chinese: '这个适合我', english: 'This fits me', category: '购物' },
    { id: 49, chinese: '这个不适合我', english: 'This does not fit me', category: '购物' },
    { id: 50, chinese: '我下次再来', english: 'I will come back next time', category: '购物' },
    
    // Health 健康 (51-65)
    { id: 51, chinese: '我不舒服', english: 'I do not feel well', category: '健康' },
    { id: 52, chinese: '我头痛', english: 'I have a headache', category: '健康' },
    { id: 53, chinese: '我发烧', english: 'I have a fever', category: '健康' },
    { id: 54, chinese: '我咳嗽', english: 'I have a cough', category: '健康' },
    { id: 55, chinese: '我胃痛', english: 'I have a stomachache', category: '健康' },
    { id: 56, chinese: '我需要医生', english: 'I need a doctor', category: '健康' },
    { id: 57, chinese: '我要吃药', english: 'I need to take medicine', category: '健康' },
    { id: 58, chinese: '医院在哪里？', english: 'Where is the hospital?', category: '健康' },
    { id: 59, chinese: '药店在哪里？', english: 'Where is the pharmacy?', category: '健康' },
    { id: 60, chinese: '救命！', english: 'Help!', category: '健康' },
    { id: 61, chinese: '叫救护车', english: 'Call an ambulance', category: '健康' },
    { id: 62, chinese: '我过敏', english: 'I have an allergy', category: '健康' },
    { id: 63, chinese: '我有高血压', english: 'I have high blood pressure', category: '健康' },
    { id: 64, chinese: '我有糖尿病', english: 'I have diabetes', category: '健康' },
    { id: 65, chinese: '我很好', english: 'I am okay', category: '健康' },
    
    // Directions 问路 (66-80)
    { id: 66, chinese: '在哪里？', english: 'Where is it?', category: '问路' },
    { id: 67, chinese: '怎么去...？', english: 'How do I get to...?', category: '问路' },
    { id: 68, chinese: '直走', english: 'Go straight', category: '问路' },
    { id: 69, chinese: '左转', english: 'Turn left', category: '问路' },
    { id: 70, chinese: '右转', english: 'Turn right', category: '问路' },
    { id: 71, chinese: '在这里', english: 'It is here', category: '问路' },
    { id: 72, chinese: '在那里', english: 'It is there', category: '问路' },
    { id: 73, chinese: '很近', english: 'It is very near', category: '问路' },
    { id: 74, chinese: '很远', english: 'It is very far', category: '问路' },
    { id: 75, chinese: '走路几分钟？', english: 'How many minutes to walk?', category: '问路' },
    { id: 76, chinese: '厕所在哪里？', english: 'Where is the toilet?', category: '问路' },
    { id: 77, chinese: '车站在哪里？', english: 'Where is the station?', category: '问路' },
    { id: 78, chinese: '超市在哪里？', english: 'Where is the supermarket?', category: '问路' },
    { id: 79, chinese: '公园在哪里？', english: 'Where is the park?', category: '问路' },
    { id: 80, chinese: '我迷路了', english: 'I am lost', category: '问路' },
    
    // Emergency 紧急 (81-90)
    { id: 81, chinese: '帮助我！', english: 'Help me!', category: '紧急' },
    { id: 82, chinese: '着火了！', english: 'Fire!', category: '紧急' },
    { id: 83, chinese: '小偷！', english: 'Thief!', category: '紧急' },
    { id: 84, chinese: '小心！', english: 'Be careful!', category: '紧急' },
    { id: 85, chinese: '危险！', english: 'Danger!', category: '紧急' },
    { id: 86, chinese: '不要动！', english: 'Do not move!', category: '紧急' },
    { id: 87, chinese: '等一下', english: 'Wait a moment', category: '紧急' },
    { id: 88, chinese: '慢慢来', english: 'Take your time', category: '紧急' },
    { id: 89, chinese: '注意安全', english: 'Be safe', category: '紧急' },
    { id: 90, chinese: '保重', english: 'Take care', category: '紧急' },
    
    // Polite Phrases 礼貌用语 (91-100)
    { id: 91, chinese: '请', english: 'Please', category: '礼貌用语' },
    { id: 92, chinese: '谢谢', english: 'Thank you very much', category: '礼貌用语' },
    { id: 93, chinese: '非常感谢', english: 'Thank you so much', category: '礼貌用语' },
    { id: 94, chinese: '不好意思', english: 'Excuse me', category: '礼貌用语' },
    { id: 95, chinese: '抱歉', english: 'I apologize', category: '礼貌用语' },
    { id: 96, chinese: '没问题', english: 'No problem', category: '礼貌用语' },
    { id: 97, chinese: '当然', english: 'Of course', category: '礼貌用语' },
    { id: 98, chinese: '好的', english: 'Okay', category: '礼貌用语' },
    { id: 99, chinese: '再见', english: 'Goodbye', category: '礼貌用语' },
    { id: 100, chinese: '明天见', english: 'See you tomorrow', category: '礼貌用语' }
];

// Lesson Data - Carefully curated for seniors
const lessons = [
    {
        id: 0,
        emoji: '👨‍👩‍👧',
        title: '家庭 Family',
        titleChinese: '家庭',
        description: '学习家庭成员的称呼 | Learn family member names',
        words: [
            { english: 'Father', chinese: '父亲 / 爸爸', pronunciation: '/ˈfɑːðər/', emoji: '👨' },
            { english: 'Mother', chinese: '母亲 / 妈妈', pronunciation: '/ˈmʌðər/', emoji: '👩' },
            { english: 'Son', chinese: '儿子', pronunciation: '/sʌn/', emoji: '👦' },
            { english: 'Daughter', chinese: '女儿', pronunciation: '/ˈdɔːtər/', emoji: '👧' },
            { english: 'Grandfather', chinese: '爷爷 / 外公', pronunciation: '/ˈɡrænfɑːðər/', emoji: '👴' },
            { english: 'Grandmother', chinese: '奶奶 / 外婆', pronunciation: '/ˈɡrænmʌðər/', emoji: '👵' },
            { english: 'Brother', chinese: '兄弟', pronunciation: '/ˈbrʌðər/', emoji: '👬' },
            { english: 'Sister', chinese: '姐妹', pronunciation: '/ˈsɪstər/', emoji: '👭' },
            { english: 'Husband', chinese: '丈夫', pronunciation: '/ˈhʌzbənd/', emoji: '👨‍💼' },
            { english: 'Wife', chinese: '妻子', pronunciation: '/waɪf/', emoji: '👩‍💼' }
        ]
    },
    {
        id: 1,
        emoji: '🍎',
        title: '食物 Food',
        titleChinese: '食物',
        description: '日常食物和饮料 | Daily food and drinks',
        words: [
            { english: 'Rice', chinese: '米饭', pronunciation: '/raɪs/', emoji: '🍚' },
            { english: 'Noodles', chinese: '面条', pronunciation: '/ˈnuːdlz/', emoji: '🍜' },
            { english: 'Bread', chinese: '面包', pronunciation: '/bred/', emoji: '🍞' },
            { english: 'Apple', chinese: '苹果', pronunciation: '/ˈæpl/', emoji: '🍎' },
            { english: 'Banana', chinese: '香蕉', pronunciation: '/bəˈnænə/', emoji: '🍌' },
            { english: 'Orange', chinese: '橙子', pronunciation: '/ˈɔːrɪndʒ/', emoji: '🍊' },
            { english: 'Water', chinese: '水', pronunciation: '/ˈwɔːtər/', emoji: '💧' },
            { english: 'Tea', chinese: '茶', pronunciation: '/tiː/', emoji: '🍵' },
            { english: 'Milk', chinese: '牛奶', pronunciation: '/mɪlk/', emoji: '🥛' },
            { english: 'Vegetables', chinese: '蔬菜', pronunciation: '/ˈvedʒtəblz/', emoji: '🥬' }
        ]
    },
    {
        id: 2,
        emoji: '🏥',
        title: '健康 Health',
        titleChinese: '健康',
        description: '健康相关词汇 | Health-related vocabulary',
        words: [
            { english: 'Doctor', chinese: '医生', pronunciation: '/ˈdɒktər/', emoji: '👨‍⚕️' },
            { english: 'Hospital', chinese: '医院', pronunciation: '/ˈhɒspɪtl/', emoji: '🏥' },
            { english: 'Medicine', chinese: '药', pronunciation: '/ˈmedsn/', emoji: '💊' },
            { english: 'Healthy', chinese: '健康的', pronunciation: '/ˈhelθi/', emoji: '💪' },
            { english: 'Exercise', chinese: '运动', pronunciation: '/ˈeksəsaɪz/', emoji: '🏃' },
            { english: 'Sleep', chinese: '睡觉', pronunciation: '/sliːp/', emoji: '😴' },
            { english: 'Headache', chinese: '头痛', pronunciation: '/ˈhedeɪk/', emoji: '🤕' },
            { english: 'Fever', chinese: '发烧', pronunciation: '/ˈfiːvər/', emoji: '🤒' },
            { english: 'Blood Pressure', chinese: '血压', pronunciation: '/blʌd ˈpreʃər/', emoji: '🩺' },
            { english: 'Rest', chinese: '休息', pronunciation: '/rest/', emoji: '🛌' }
        ]
    },
    {
        id: 3,
        emoji: '🛒',
        title: '购物 Shopping',
        titleChinese: '购物',
        description: '购物常用语 | Common shopping phrases',
        words: [
            { english: 'Supermarket', chinese: '超市', pronunciation: '/ˈsuːpəmɑːrkɪt/', emoji: '🛒' },
            { english: 'Market', chinese: '市场', pronunciation: '/ˈmɑːrkɪt/', emoji: '🏪' },
            { english: 'Money', chinese: '钱', pronunciation: '/ˈmʌni/', emoji: '💰' },
            { english: 'Price', chinese: '价格', pronunciation: '/praɪs/', emoji: '🏷️' },
            { english: 'Buy', chinese: '买', pronunciation: '/baɪ/', emoji: '🛍️' },
            { english: 'Sell', chinese: '卖', pronunciation: '/sel/', emoji: '💵' },
            { english: 'Expensive', chinese: '贵的', pronunciation: '/ɪkˈspensɪv/', emoji: '💸' },
            { english: 'Cheap', chinese: '便宜的', pronunciation: '/tʃiːp/', emoji: '✅' },
            { english: 'How much?', chinese: '多少钱？', pronunciation: '/haʊ mʌtʃ/', emoji: '❓' },
            { english: 'Thank you', chinese: '谢谢', pronunciation: '/θæŋk juː/', emoji: '🙏' }
        ]
    },
    {
        id: 4,
        emoji: '🚌',
        title: '交通 Transportation',
        titleChinese: '交通',
        description: '交通工具和出行 | Transportation and travel',
        words: [
            { english: 'Bus', chinese: '公共汽车', pronunciation: '/bʌs/', emoji: '🚌' },
            { english: 'Taxi', chinese: '出租车', pronunciation: '/ˈtæksi/', emoji: '🚕' },
            { english: 'Car', chinese: '汽车', pronunciation: '/kɑːr/', emoji: '🚗' },
            { english: 'Train', chinese: '火车', pronunciation: '/treɪn/', emoji: '🚂' },
            { english: 'Bicycle', chinese: '自行车', pronunciation: '/ˈbaɪsɪkl/', emoji: '🚲' },
            { english: 'Walk', chinese: '走路', pronunciation: '/wɔːk/', emoji: '🚶' },
            { english: 'Station', chinese: '车站', pronunciation: '/ˈsteɪʃn/', emoji: '🚉' },
            { english: 'Ticket', chinese: '票', pronunciation: '/ˈtɪkɪt/', emoji: '🎫' },
            { english: 'Airport', chinese: '机场', pronunciation: '/ˈerpɔːrt/', emoji: '✈️' },
            { english: 'Home', chinese: '家', pronunciation: '/hoʊm/', emoji: '🏠' }
        ]
    },
    {
        id: 5,
        emoji: '🌤️',
        title: '天气 Weather',
        titleChinese: '天气',
        description: '天气相关词汇 | Weather vocabulary',
        words: [
            { english: 'Sunny', chinese: '晴朗的', pronunciation: '/ˈsʌni/', emoji: '☀️' },
            { english: 'Cloudy', chinese: '多云的', pronunciation: '/ˈklaʊdi/', emoji: '☁️' },
            { english: 'Rainy', chinese: '下雨的', pronunciation: '/ˈreɪni/', emoji: '🌧️' },
            { english: 'Windy', chinese: '有风的', pronunciation: '/ˈwɪndi/', emoji: '💨' },
            { english: 'Hot', chinese: '热的', pronunciation: '/hɒt/', emoji: '🥵' },
            { english: 'Cold', chinese: '冷的', pronunciation: '/koʊld/', emoji: '🥶' },
            { english: 'Warm', chinese: '温暖的', pronunciation: '/wɔːrm/', emoji: '🌡️' },
            { english: 'Cool', chinese: '凉爽的', pronunciation: '/kuːl/', emoji: '😌' },
            { english: 'Snow', chinese: '雪', pronunciation: '/snoʊ/', emoji: '❄️' },
            { english: 'Temperature', chinese: '温度', pronunciation: '/ˈtemprətʃər/', emoji: '🌡️' }
        ]
    },
    {
        id: 6,
        emoji: '🎉',
        title: '节日 Holidays',
        titleChinese: '节日',
        description: '节日和庆祝活动 | Holidays and celebrations',
        words: [
            { english: 'New Year', chinese: '新年', pronunciation: '/nuː jɪr/', emoji: '🎊' },
            { english: 'Birthday', chinese: '生日', pronunciation: '/ˈbɜːrθdeɪ/', emoji: '🎂' },
            { english: 'Christmas', chinese: '圣诞节', pronunciation: '/ˈkrɪsməs/', emoji: '🎄' },
            { english: 'Gift', chinese: '礼物', pronunciation: '/ɡɪft/', emoji: '🎁' },
            { english: 'Cake', chinese: '蛋糕', pronunciation: '/keɪk/', emoji: '🍰' },
            { english: 'Party', chinese: '聚会', pronunciation: '/ˈpɑːrti/', emoji: '🎉' },
            { english: 'Family', chinese: '家人', pronunciation: '/ˈfæməli/', emoji: '👨‍👩‍👧‍👦' },
            { english: 'Happy', chinese: '快乐的', pronunciation: '/ˈhæpi/', emoji: '😊' },
            { english: 'Celebrate', chinese: '庆祝', pronunciation: '/ˈselɪbreɪt/', emoji: '🥳' },
            { english: 'Memory', chinese: '回忆', pronunciation: '/ˈmeməri/', emoji: '💭' }
        ]
    },
    {
        id: 7,
        emoji: '🌺',
        title: '自然 Nature',
        titleChinese: '自然',
        description: '大自然相关词汇 | Nature vocabulary',
        words: [
            { english: 'Flower', chinese: '花', pronunciation: '/ˈflaʊər/', emoji: '🌺' },
            { english: 'Tree', chinese: '树', pronunciation: '/triː/', emoji: '🌳' },
            { english: 'Grass', chinese: '草', pronunciation: '/ɡræs/', emoji: '🌿' },
            { english: 'Sun', chinese: '太阳', pronunciation: '/sʌn/', emoji: '☀️' },
            { english: 'Moon', chinese: '月亮', pronunciation: '/muːn/', emoji: '🌙' },
            { english: 'Star', chinese: '星星', pronunciation: '/stɑːr/', emoji: '⭐' },
            { english: 'Sky', chinese: '天空', pronunciation: '/skaɪ/', emoji: '🌌' },
            { english: 'Garden', chinese: '花园', pronunciation: '/ˈɡɑːrdn/', emoji: '🏡' },
            { english: 'Park', chinese: '公园', pronunciation: '/pɑːrk/', emoji: '🌳' },
            { english: 'Bird', chinese: '鸟', pronunciation: '/bɜːrd/', emoji: '🐦' }
        ]
    }
];

// Daily quotes
const dailyQuotes = [
    { english: "Every day is a new beginning.", chinese: "每一天都是新的开始。" },
    { english: "Practice makes perfect.", chinese: "熟能生巧。" },
    { english: "Never too old to learn.", chinese: "活到老，学到老。" },
    { english: "Health is wealth.", chinese: "健康就是财富。" },
    { english: "Family is everything.", chinese: "家庭是一切。" },
    { english: "Smile and the world smiles with you.", chinese: "你笑，世界也对你笑。" },
    { english: "Take your time.", chinese: "慢慢来。" },
    { english: "You can do it!", chinese: "你能做到的！" }
];

// Game State
let currentLesson = 0;
let practiceQuestions = [];
let practiceIndex = 0;
let practiceScore = 0;
let userProgress = {
    lessonsCompleted: [],
    wordsLearned: [],
    practiceScore: 0,
    phrasesLearned: []
};

// Audio Learning Mode State
let audioLearningInterval = null;
let audioLearningTimer = null;
let audioLearningTimeLeft = 600; // 10 minutes in seconds
let audioLearningIsPlaying = false;
let currentPhraseIndex = 0;
let audioPatternStep = 0; // 0=Chinese, 1=English, 2=English repeat

// Initialize App
function initApp() {
    loadProgress();
    showSection('home');
    renderLessonsList();
    renderPhrases();
    populatePhraseSelect();
    updateStats();
    setDailyQuote();
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('grandpaEnglishProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('grandpaEnglishProgress', JSON.stringify(userProgress));
}

// Show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set active nav button
    const navMap = {
        'home': 0,
        'phrases': 1,
        'lessons': 2,
        'practice': 3,
        'review': 4
    };
    
    if (navMap[sectionId] !== undefined) {
        document.querySelectorAll('.nav-btn')[navMap[sectionId]].classList.add('active');
    }
    
    // Section-specific initialization
    if (sectionId === 'phrases') {
        renderPhrases();
        populatePhraseSelect();
    } else if (sectionId === 'practice') {
        startPractice();
    } else if (sectionId === 'review') {
        renderReview();
    }
}

// Set daily quote
function setDailyQuote() {
    const today = new Date().getDay();
    const quote = dailyQuotes[today % dailyQuotes.length];
    document.getElementById('dailyQuote').textContent = `"${quote.english}"`;
    document.querySelector('.quote-chinese').textContent = `"${quote.chinese}"`;
}

// Speak quote
function speakQuote() {
    const text = document.getElementById('dailyQuote').textContent.replace(/"/g, '');
    speakText(text);
}

// Text-to-speech function
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // Slower for seniors
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    } else {
        alert('抱歉，您的浏览器不支持语音功能。\nSorry, your browser does not support speech synthesis.');
    }
}

// Render lessons list
function renderLessonsList() {
    const container = document.getElementById('lessonsList');
    container.innerHTML = '';
    
    lessons.forEach(lesson => {
        const isCompleted = userProgress.lessonsCompleted.includes(lesson.id);
        const lessonDiv = document.createElement('div');
        lessonDiv.className = `lesson-item ${isCompleted ? 'completed' : ''}`;
        lessonDiv.onclick = () => openLesson(lesson.id);
        lessonDiv.innerHTML = `
            <div class="lesson-header">
                <span class="lesson-emoji">${lesson.emoji}</span>
                <div class="lesson-info">
                    <h3>${lesson.title}</h3>
                    <span class="lesson-count">${lesson.words.length} 个单词 | ${lesson.words.length} words</span>
                </div>
            </div>
            <p class="lesson-description">${lesson.description}</p>
            ${isCompleted ? '<p style="color: #4ade80; font-weight: 600; margin-top: 10px;">✅ 已完成 | Completed</p>' : ''}
        `;
        container.appendChild(lessonDiv);
    });
}

// Open lesson
function openLesson(lessonId) {
    currentLesson = lessonId;
    const lesson = lessons[lessonId];
    
    document.getElementById('lessonTitle').textContent = `${lesson.emoji} ${lesson.title} | ${lesson.titleChinese}`;
    
    const wordsGrid = document.getElementById('wordsGrid');
    wordsGrid.innerHTML = '';
    
    lesson.words.forEach((word, index) => {
        const isLearned = userProgress.wordsLearned.includes(`${lessonId}-${index}`);
        const wordCard = document.createElement('div');
        wordCard.className = 'word-card';
        wordCard.innerHTML = `
            <span class="word-card-emoji">${word.emoji}</span>
            <div class="word-card-content">
                <span class="word-card-english">${word.english}</span>
                <span class="word-card-chinese">${word.chinese}</span>
                <span class="word-card-pronunciation">${word.pronunciation}</span>
            </div>
            <button class="word-speak-btn" onclick="speakWord('${word.english}')">🔊 发音</button>
        `;
        wordsGrid.appendChild(wordCard);
    });
    
    showSection('lessonContent');
}

// Start lesson from quick start
function startLesson(lessonId) {
    openLesson(lessonId);
}

// Speak word
function speakWord(word) {
    speakText(word);
    
    // Mark as learned
    const wordId = `${currentLesson}-${lessons[currentLesson].words.findIndex(w => w.english === word)}`;
    if (!userProgress.wordsLearned.includes(wordId)) {
        userProgress.wordsLearned.push(wordId);
        saveProgress();
        updateStats();
        updateProgressBar();
    }
}

// Navigate lessons
function previousLesson() {
    if (currentLesson > 0) {
        openLesson(currentLesson - 1);
    }
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        openLesson(currentLesson + 1);
        
        // Mark lesson as completed if all words are learned
        const lesson = lessons[currentLesson];
        const allWordsLearned = lesson.words.every((_, index) => 
            userProgress.wordsLearned.includes(`${currentLesson}-${index}`)
        );
        
        if (allWordsLearned && !userProgress.lessonsCompleted.includes(currentLesson)) {
            userProgress.lessonsCompleted.push(currentLesson);
            saveProgress();
            renderLessonsList();
        }
    }
}

// Update stats
function updateStats() {
    document.getElementById('lessonsCompleted').textContent = userProgress.lessonsCompleted.length;
    document.getElementById('wordsLearned').textContent = userProgress.wordsLearned.length;
    document.getElementById('phrasesLearned').textContent = userProgress.phrasesLearned.length;
    document.getElementById('practiceScore').textContent = userProgress.practiceScore;
    updateProgressBar();
}

// Update progress bar
function updateProgressBar() {
    const totalWords = lessons.reduce((sum, lesson) => sum + lesson.words.length, 0);
    const percentage = Math.round((userProgress.wordsLearned.length / totalWords) * 100);
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${percentage}%`;
}

// Start practice
function startPractice() {
    practiceIndex = 0;
    practiceScore = 0;
    practiceQuestions = generatePracticeQuestions();
    showPracticeQuestion();
}

// Generate practice questions
function generatePracticeQuestions() {
    const questions = [];
    const allWords = [];
    
    // Collect all learned words
    lessons.forEach((lesson, lessonIndex) => {
        lesson.words.forEach((word, wordIndex) => {
            if (userProgress.wordsLearned.includes(`${lessonIndex}-${wordIndex}`)) {
                allWords.push({ ...word, lessonId: lessonIndex, wordId: wordIndex });
            }
        });
    });
    
    // If not enough learned words, add some from first lessons
    if (allWords.length < 5) {
        lessons.slice(0, 2).forEach((lesson, lessonIndex) => {
            lesson.words.forEach((word, wordIndex) => {
                allWords.push({ ...word, lessonId: lessonIndex, wordId: wordIndex });
            });
        });
    }
    
    // Generate 10 questions
    for (let i = 0; i < Math.min(10, allWords.length); i++) {
        const correctWord = allWords[Math.floor(Math.random() * allWords.length)];
        const wrongAnswers = [];
        
        // Get 3 wrong answers
        while (wrongAnswers.length < 3) {
            const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
            if (randomWord.english !== correctWord.english && 
                !wrongAnswers.find(w => w.english === randomWord.english)) {
                wrongAnswers.push(randomWord);
            }
        }
        
        // Shuffle answers
        const answers = [correctWord, ...wrongAnswers].sort(() => Math.random() - 0.5);
        
        questions.push({
            correctWord,
            answers
        });
    }
    
    return questions;
}

// Show practice question
function showPracticeQuestion() {
    if (practiceIndex >= practiceQuestions.length) {
        endPractice();
        return;
    }
    
    const question = practiceQuestions[practiceIndex];
    const word = question.correctWord;
    
    document.getElementById('practiceEmoji').textContent = word.emoji;
    document.getElementById('practiceWord').textContent = word.english;
    document.getElementById('practiceScoreDisplay').textContent = practiceScore;
    document.getElementById('practiceTotal').textContent = practiceQuestions.length;
    
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';
    
    question.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.chinese;
        btn.onclick = () => checkAnswer(answer, word, btn);
        answersGrid.appendChild(btn);
    });
    
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('nextPracticeBtn').style.display = 'none';
}

// Check answer
function checkAnswer(selected, correct, btn) {
    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(b => {
        b.disabled = true;
    });
    
    const feedback = document.getElementById('feedback');
    
    if (selected.english === correct.english) {
        btn.classList.add('correct');
        feedback.textContent = '✅ 正确！Correct!';
        feedback.className = 'feedback show correct';
        practiceScore++;
        speakText('Correct!');
    } else {
        btn.classList.add('wrong');
        feedback.textContent = `❌ 正确答案是：${correct.chinese}\nCorrect answer: ${correct.english}`;
        feedback.className = 'feedback show wrong';
        speakText('Try again next time');
    }
    
    document.getElementById('practiceScoreDisplay').textContent = practiceScore;
    document.getElementById('nextPracticeBtn').style.display = 'inline-block';
}

// Next practice question
function nextPracticeQuestion() {
    practiceIndex++;
    showPracticeQuestion();
}

// End practice
function endPractice() {
    userProgress.practiceScore = practiceScore;
    saveProgress();
    updateStats();
    
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `
        🎉 练习完成！Practice Complete!<br>
        得分 Score: ${practiceScore} / ${practiceQuestions.length}
    `;
    feedback.className = 'feedback show correct';
    feedback.style.display = 'block';
    
    document.getElementById('answersGrid').innerHTML = '';
    document.getElementById('practiceEmoji').textContent = '🎉';
    document.getElementById('practiceWord').textContent = 'Done!';
    document.getElementById('nextPracticeBtn').style.display = 'none';
}

// Speak practice word
function speakPracticeWord() {
    const word = document.getElementById('practiceWord').textContent;
    speakText(word);
}

// Render review
function renderReview() {
    const container = document.getElementById('reviewGrid');
    container.innerHTML = '';
    
    if (userProgress.wordsLearned.length === 0) {
        container.innerHTML = '<p style="text-align: center; font-size: 1.5rem; color: #666; padding: 40px;">还没有学习的单词<br>No words learned yet. Start with a lesson!</p>';
        return;
    }
    
    lessons.forEach((lesson, lessonIndex) => {
        lesson.words.forEach((word, wordIndex) => {
            if (userProgress.wordsLearned.includes(`${lessonIndex}-${wordIndex}`)) {
                const card = document.createElement('div');
                card.className = 'review-card';
                card.innerHTML = `
                    <span class="review-emoji">${word.emoji}</span>
                    <span class="review-english">${word.english}</span>
                    <span class="review-chinese">${word.chinese}</span>
                `;
                container.appendChild(card);
            }
        });
    });
}

// Reset progress
function resetProgress() {
    if (confirm('确定要重置所有学习进度吗？\nAre you sure you want to reset all progress?')) {
        userProgress = {
            lessonsCompleted: [],
            wordsLearned: [],
            practiceScore: 0
        };
        saveProgress();
        updateStats();
        renderLessonsList();
        alert('进度已重置！\nProgress has been reset!');
    }
}

// ============ PHRASES SECTION FUNCTIONS ============

// Render all phrases
function renderPhrases(category = 'all') {
    const container = document.getElementById('phrasesGrid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredPhrases = category === 'all' 
        ? commonPhrases 
        : commonPhrases.filter(p => p.category === category);
    
    filteredPhrases.forEach((phrase, index) => {
        const isLearned = userProgress.phrasesLearned.includes(phrase.id);
        const card = document.createElement('div');
        card.className = `phrase-card ${isLearned ? 'learned' : ''}`;
        card.onclick = () => selectPhraseForLearning(phrase.id);
        card.innerHTML = `
            <span class="phrase-category">${phrase.category}</span>
            <span class="phrase-chinese">${phrase.chinese}</span>
            <span class="phrase-english">${phrase.english}</span>
            <button class="phrase-speak-btn" onclick="event.stopPropagation(); speakPhrase(${phrase.id})">🔊 朗读</button>
        `;
        container.appendChild(card);
    });
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(category) || (category === 'all' && btn.textContent.includes('全部'))) {
            btn.classList.add('active');
        }
    });
}

// Filter phrases by category
function filterPhrases(category) {
    renderPhrases(category);
}

// Populate phrase selector dropdown
function populatePhraseSelect() {
    const select = document.getElementById('phraseSelect');
    if (!select) return;
    
    select.innerHTML = '';
    
    // Group by category
    const categories = [...new Set(commonPhrases.map(p => p.category))];
    
    categories.forEach(cat => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = cat;
        
        commonPhrases.filter(p => p.category === cat).forEach(phrase => {
            const option = document.createElement('option');
            option.value = phrase.id;
            option.textContent = `${phrase.chinese} - ${phrase.english}`;
            optgroup.appendChild(option);
        });
        
        select.appendChild(optgroup);
    });
}

// Update phrase display when selection changes
function updatePhraseDisplay() {
    const select = document.getElementById('phraseSelect');
    const phraseId = parseInt(select.value);
    const phrase = commonPhrases.find(p => p.id === phraseId);
    
    if (phrase) {
        document.getElementById('currentChinese').textContent = phrase.chinese;
        document.getElementById('currentEnglish').textContent = phrase.english;
        currentPhraseIndex = phraseId - 1;
    }
}

// Select phrase for learning
function selectPhraseForLearning(phraseId) {
    const select = document.getElementById('phraseSelect');
    select.value = phraseId;
    updatePhraseDisplay();
    
    // Scroll to audio mode
    document.querySelector('.audio-mode-card').scrollIntoView({ behavior: 'smooth' });
}

// Speak a single phrase
function speakPhrase(phraseId) {
    const phrase = commonPhrases.find(p => p.id === phraseId);
    if (phrase) {
        speakText(phrase.chinese);
        setTimeout(() => {
            speakText(phrase.english);
            setTimeout(() => {
                speakText(phrase.english);
            }, 2000);
        }, 2000);
        
        // Mark as learned
        if (!userProgress.phrasesLearned.includes(phraseId)) {
            userProgress.phrasesLearned.push(phraseId);
            saveProgress();
            renderPhrases();
        }
    }
}

// ============ AUDIO LEARNING MODE FUNCTIONS ============

// Start audio learning (10 minutes per phrase)
function startAudioLearning() {
    if (audioLearningIsPlaying) return;
    
    const select = document.getElementById('phraseSelect');
    const phraseId = parseInt(select.value);
    const phrase = commonPhrases.find(p => p.id === phraseId);
    
    if (!phrase) {
        alert('请先选择一个短语！\nPlease select a phrase first!');
        return;
    }
    
    audioLearningIsPlaying = true;
    audioPatternStep = 0;
    
    // Start the audio pattern
    playAudioPattern(phrase);
    
    // Start timer
    audioLearningTimer = setInterval(() => {
        audioLearningTimeLeft--;
        updateTimerDisplay();
        
        if (audioLearningTimeLeft <= 0) {
            stopAudioLearning();
            speakText('Learning session complete! Great job!');
            alert('学习完成！太棒了！\nLearning session complete! Great job!');
        }
    }, 1000);
}

// Play the audio pattern: Chinese → English → English
function playAudioPattern(phrase) {
    if (!audioLearningIsPlaying) return;
    
    switch (audioPatternStep) {
        case 0: // Chinese
            document.getElementById('currentChinese').style.color = '#667eea';
            document.getElementById('currentEnglish').style.color = '#999';
            speakText(phrase.chinese);
            audioPatternStep = 1;
            setTimeout(() => playAudioPattern(phrase), 2000);
            break;
            
        case 1: // English first time
            document.getElementById('currentChinese').style.color = '#999';
            document.getElementById('currentEnglish').style.color = '#667eea';
            speakText(phrase.english);
            audioPatternStep = 2;
            setTimeout(() => playAudioPattern(phrase), 2000);
            break;
            
        case 2: // English second time
            document.getElementById('currentEnglish').style.color = '#667eea';
            speakText(phrase.english);
            audioPatternStep = 0;
            setTimeout(() => playAudioPattern(phrase), 3000);
            break;
    }
}

// Pause audio learning
function pauseAudioLearning() {
    if (!audioLearningIsPlaying) return;
    
    audioLearningIsPlaying = false;
    clearInterval(audioLearningTimer);
    clearTimeout(audioLearningInterval);
}

// Stop audio learning
function stopAudioLearning() {
    audioLearningIsPlaying = false;
    audioLearningTimeLeft = 600; // Reset to 10 minutes
    clearInterval(audioLearningTimer);
    clearTimeout(audioLearningInterval);
    updateTimerDisplay();
    
    // Reset colors
    document.getElementById('currentChinese').style.color = '#667eea';
    document.getElementById('currentEnglish').style.color = '#666';
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(audioLearningTimeLeft / 60);
    const seconds = audioLearningTimeLeft % 60;
    document.getElementById('timerDisplay').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ============ END AUDIO LEARNING MODE ============

// Initialize on load
window.addEventListener('DOMContentLoaded', initApp);
