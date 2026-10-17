
"use strict";

// 조선 후기의 사회 변동 퀴즈
// 10문제 × 10점 = 100점

const questions = [
  {
    category: "농업의 발달",
    question: "조선 후기 모내기법이 널리 보급되면서 나타난 변화로 가장 적절한 것은?",
    options: [
      "벼농사에 필요한 노동력이 크게 늘어났다.",
      "논농사가 사라지고 밭농사만 이루어졌다.",
      "농업 생산성이 높아지고 일부 농민이 부농으로 성장했다.",
      "모든 농민이 국가로부터 토지를 균등하게 받았다.",
      "농민들이 농사를 그만두고 상업에만 종사했다."
    ],
    answer: 2,
    explanation: "모내기법은 잡초 제거에 필요한 노동력을 줄이고 농업 생산성을 높이는 데 유리했다. 일부 농민은 넓은 토지를 경작하며 부농으로 성장했지만, 모든 농민의 생활이 좋아진 것은 아니었다."
  },
  {
    category: "농업 경영의 변화",
    question: "조선 후기 농민들이 인삼, 담배 등의 상품 작물을 재배한 주된 이유는?",
    options: [
      "국가가 모든 농민에게 상품 작물 재배를 의무화했기 때문이다.",
      "시장에 판매하여 이익을 얻으려는 경향이 커졌기 때문이다.",
      "쌀과 보리의 재배가 법으로 금지되었기 때문이다.",
      "농촌의 장시가 사라져 농산물을 판매할 수 없었기 때문이다.",
      "화폐 사용이 금지되어 물물교환만 해야 했기 때문이다."
    ],
    answer: 1,
    explanation: "상품 화폐 경제가 발달하면서 시장에 물건을 팔아 이익을 얻으려는 농민이 늘어났다. 이에 인삼, 담배, 면화 등 상품 작물의 재배가 확대되었다."
  },
  {
    category: "상업의 발달",
    question: "조선 후기 장시와 사상의 발달에 대한 설명으로 옳은 것은?",
    options: [
      "장시는 관청 안에서만 열려 일반 백성의 이용이 금지되었다.",
      "사상은 국가가 운영하는 관영 상점만을 가리켰다.",
      "장시는 농촌의 정기 시장으로 발달했고 사상은 다양한 상업 활동을 펼쳤다.",
      "사상의 성장으로 지역 간 상품 유통이 중단되었다.",
      "조선 후기에는 국가가 모든 상업 활동을 직접 운영했다."
    ],
    answer: 2,
    explanation: "장시는 농촌에서 정기적으로 열리는 시장으로 성장했다. 사상은 시전 상인 이외의 상인들을 가리키며, 이들의 활동이 활발해지면서 상품 유통과 상업이 발달했다."
  },
  {
    category: "화폐 경제",
    question: "조선 후기 상평통보의 유통이 확대되면서 나타난 변화로 가장 적절한 것은?",
    options: [
      "상품 거래에서 화폐의 사용이 줄어들었다.",
      "모든 거래가 물물교환으로 바뀌었다.",
      "국가가 모든 상품의 가격을 동일하게 정했다.",
      "상품 거래와 경제 활동에서 화폐의 활용이 늘어났다.",
      "농촌의 장시와 도시 상업이 모두 사라졌다."
    ],
    answer: 3,
    explanation: "상평통보는 조선 후기에 널리 유통된 화폐이다. 화폐 사용이 확대되면서 상품을 사고파는 활동이 편리해졌고 상품 화폐 경제가 더욱 발달했다."
  },
  {
    category: "신분제의 동요",
    question: "조선 후기 양반의 수가 증가한 배경으로 가장 적절한 것은?",
    options: [
      "양반 이외의 모든 신분이 법적으로 사라졌다.",
      "경제력을 갖춘 일부 상민이 납속이나 공명첩 등을 통해 신분 상승을 꾀했다.",
      "정부가 모든 농민을 양반으로 바꾸는 법을 시행했다.",
      "양반에게만 허용되던 농업이 금지되었다.",
      "모든 노비가 과거 시험에 합격하여 양반이 되었다."
    ],
    answer: 1,
    explanation: "조선 후기에는 경제력을 갖춘 일부 상민이 납속이나 공명첩 등을 통해 신분 상승을 꾀했다. 이러한 현상은 양반의 수가 증가하고 신분제가 동요하는 배경이 되었다."
  },
  {
    category: "신분제의 동요",
    question: "조선 후기 노비의 수가 감소하는 데 영향을 준 요인으로 보기 어려운 것은?",
    options: [
      "노비가 도망하거나 신분 상승을 꾀하는 현상",
      "전쟁 이후 사회·경제적 질서의 변화",
      "국가의 노비 관련 정책 변화",
      "노비 제도와 관련된 법과 제도의 변화",
      "모든 백성을 노비 신분으로 강제 편입하는 정책"
    ],
    answer: 4,
    explanation: "노비의 도망, 신분 상승 움직임, 국가 정책과 제도의 변화 등은 노비 수 감소에 영향을 주었다. 모든 백성을 노비로 편입하는 정책이 시행된 것은 아니다."
  },
  {
    category: "실학의 등장",
    question: "조선 후기 실학의 등장 배경과 성격을 가장 잘 설명한 것은?",
    options: [
      "현실 사회의 문제를 해결하고 백성의 생활을 개선하려는 학문적 움직임이었다.",
      "현실 문제를 연구하지 않고 성리학의 해석만을 반복하려는 움직임이었다.",
      "조선의 전통과 문화를 모두 폐지하려는 운동이었다.",
      "농업과 상업의 발달을 막고 신분제를 강화하려는 학문이었다.",
      "왕실의 의례와 제사만을 연구 대상으로 삼은 학문이었다."
    ],
    answer: 0,
    explanation: "실학은 조선 후기 사회의 여러 문제를 현실적으로 해결하려는 학문적 흐름이었다. 토지 제도, 농업, 상공업, 국토와 역사 등 다양한 분야에서 개혁 방안을 연구했다."
  },
  {
    category: "실학자와 개혁론",
    question: "『반계수록』을 저술하고 토지 제도 개혁을 주장한 실학자는 누구인가?",
    options: [
      "박지원",
      "홍대용",
      "정약용",
      "유형원",
      "김정희"
    ],
    answer: 3,
    explanation: "유형원은 『반계수록』에서 토지 제도와 국가 운영의 개혁 방안을 제시했다. 그는 토지를 고르게 분배하는 방향의 균전론을 주장한 대표적인 중농학파 실학자이다."
  },
  {
    category: "서민 문화",
    question: "조선 후기 풍속화와 판소리의 발달이 보여 주는 문화적 특징으로 가장 적절한 것은?",
    options: [
      "양반의 생활만이 예술의 유일한 소재가 되었다.",
      "성리학 경전만이 대중문화의 소재로 사용되었다.",
      "서민의 생활과 감정, 현실의 모습이 문화에 반영되었다.",
      "그림과 공연을 통한 문화 활동이 모두 금지되었다.",
      "조선의 현실은 다루지 않고 외국 문화만 모방했다."
    ],
    answer: 2,
    explanation: "조선 후기에는 김홍도와 신윤복 등의 풍속화가 사람들의 생활 모습을 표현했고, 판소리와 탈춤 등도 발달했다. 이는 서민의 생활과 감정이 문화의 중요한 소재가 되었음을 보여 준다."
  },
  {
    category: "서민 문화와 사회 변화",
    question: "조선 후기 한글 소설과 판소리 등이 널리 향유된 현상의 의미로 가장 적절한 것은?",
    options: [
      "문화 활동이 양반 남성만의 영역으로 완전히 고정되었다.",
      "한글 사용이 금지되면서 한문 문화만 발전했다.",
      "다양한 계층이 문학과 공연을 즐기며 사회 현실과 인간의 감정을 표현했다.",
      "국가가 모든 문학 작품의 내용을 동일하게 통제했다.",
      "서민 문화의 발달과 동시에 신분 차별이 완전히 사라졌다."
    ],
    answer: 2,
    explanation: "한글 소설과 판소리 등은 다양한 계층이 즐기면서 사회 현실과 인간의 감정을 표현하는 데 기여했다. 다만 서민 문화가 발달했다고 해서 신분 차별이 즉시 완전히 사라진 것은 아니다."
  }
];

// 화면 요소
const $ = (id) => document.getElementById(id);

const startScreen = $("start-screen");
const quizScreen = $("quiz-screen");
const resultScreen = $("result-screen");

const startBtn = $("start-btn");
const nextBtn = $("next-btn");
const retryBtn = $("retry-btn");

const questionCounter = $("question-counter");
const scoreDisplay = $("score-display");
const progressTrack = $("progress-track");
const progressFill = $("progress-fill");
const questionCategory = $("question-category");
const questionText = $("question-text");
const optionsContainer = $("options-container");

const feedbackBox = $("feedback-box");
const feedbackHeading = $("feedback-heading");
const feedbackText = $("feedback-text");
const answeredCount = $("answered-count");

const resultIcon = $("result-icon");
const resultTitle = $("result-title");
const resultMessage = $("result-message");
const finalScore = $("final-score");
const resultProgressFill = $("result-progress-fill");
const resultCorrectCount = $("result-correct-count");
const wrongAnswersSection = $("wrong-answers-section");
const wrongAnswersList = $("wrong-answers-list");

// 퀴즈 상태
let currentIndex = 0;
let score = 0;
let hasAnswered = false;
let answerHistory = [];

function showScreen(target) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    screen.classList.add("hidden");
  });
  target.classList.remove("hidden");
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  hasAnswered = false;
  answerHistory = [];

  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentIndex];
  hasAnswered = false;

  questionCounter.textContent =
    `QUESTION ${String(currentIndex + 1).padStart(2, "0")} / ${questions.length}`;

  scoreDisplay.textContent = `⭐ ${score}점`;

  const progress = (currentIndex / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentIndex));

  questionCategory.textContent = question.category;
  questionText.textContent = question.question;

  optionsContainer.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.setAttribute("aria-pressed", "false");

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const label = document.createElement("span");
    label.className = "option-label";
    label.textContent = option;

    button.append(letter, label);
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });

  feedbackBox.className = "feedback hidden";
  feedbackHeading.textContent = "";
  feedbackText.textContent = "";

  answeredCount.textContent = "정답을 하나 선택해 보세요.";
  nextBtn.disabled = true;
  nextBtn.textContent = "정답을 선택하세요";

  questionText.focus({ preventScroll: true });
}

function selectAnswer(index) {
  if (hasAnswered) return;

  hasAnswered = true;

  const question = questions[currentIndex];
  const isCorrect = index === question.answer;

  if (isCorrect) score += 10;

  answerHistory.push({
    questionIndex: currentIndex,
    selectedAnswer: index,
    correct: isCorrect
  });

  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    button.setAttribute("aria-pressed", String(buttonIndex === index));

    if (buttonIndex === question.answer) {
      button.classList.add("correct");
    } else if (buttonIndex === index) {
      button.classList.add("incorrect");
    }
  });

  feedbackBox.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  feedbackHeading.textContent = isCorrect
    ? "🎉 정답입니다! +10점"
    : "📖 아쉬워요! 해설을 확인해 보세요.";
  feedbackText.textContent = question.explanation;

  scoreDisplay.textContent = `⭐ ${score}점`;
  answeredCount.textContent = isCorrect
    ? "정답을 맞혔어요!"
    : "해설을 읽고 핵심 내용을 기억해 보세요.";

  progressFill.style.width =
    `${((currentIndex + 1) / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentIndex + 1));

  nextBtn.disabled = false;
  nextBtn.textContent = currentIndex === questions.length - 1
    ? "최종 결과 확인하기 →"
    : "다음 문제 →";
}

function goToNextQuestion() {
  if (!hasAnswered) return;

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  showScreen(resultScreen);

  const correctCount = answerHistory.filter((item) => item.correct).length;
  const percentage = Math.round((correctCount / questions.length) * 100);

  finalScore.textContent = String(score);
  resultProgressFill.style.width = `${percentage}%`;
  resultCorrectCount.textContent =
    `${questions.length}문제 중 ${correctCount}문제 정답`;

  if (percentage === 100) {
    resultIcon.textContent = "🏆";
    resultTitle.textContent = "완벽한 역사 탐험!";
    resultMessage.textContent =
      "모든 문제를 맞혔어요. 조선 후기의 사회 변동을 훌륭하게 이해했네요!";
  } else if (percentage >= 80) {
    resultIcon.textContent = "🥇";
    resultTitle.textContent = "훌륭해요!";
    resultMessage.textContent =
      "핵심 개념을 잘 이해하고 있어요. 틀린 문제까지 복습해 보세요.";
  } else if (percentage >= 60) {
    resultIcon.textContent = "📚";
    resultTitle.textContent = "좋은 출발이에요!";
    resultMessage.textContent =
      "핵심 개념을 조금 더 복습한 뒤 다시 도전해 보세요.";
  } else {
    resultIcon.textContent = "🌱";
    resultTitle.textContent = "다시 도전해 봐요!";
    resultMessage.textContent =
      "해설을 읽으며 핵심 개념을 익히고 다시 풀어 보세요.";
  }

  renderWrongAnswers();
}

function renderWrongAnswers() {
  const wrongItems = answerHistory.filter((item) => !item.correct);
  wrongAnswersList.replaceChildren();

  if (wrongItems.length === 0) {
    wrongAnswersSection.classList.add("hidden");
    return;
  }

  wrongAnswersSection.classList.remove("hidden");

  wrongItems.forEach((item) => {
    const question = questions[item.questionIndex];

    const card = document.createElement("article");
    card.className = "wrong-answer-item";

    const title = document.createElement("strong");
    title.textContent = `${item.questionIndex + 1}번. ${question.question}`;

    const selected = document.createElement("p");
    selected.textContent =
      `내가 선택한 답: ${question.options[item.selectedAnswer]}`;

    const correct = document.createElement("p");
    correct.className = "review-correct";
    correct.textContent = `정답: ${question.options[question.answer]}`;

    const explanation = document.createElement("p");
    explanation.textContent = `해설: ${question.explanation}`;

    card.append(title, selected, correct, explanation);
    wrongAnswersList.append(title.parentElement || card);
    card.replaceChildren(title, selected, correct, explanation);
    wrongAnswersList.appendChild(card);
  });
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);
retryBtn.addEventListener("click", startQuiz);
