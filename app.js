// ===================================
// QUIZ PLATFORM - APPLICATION LOGIC
// منصة الاختبارات الشاملة
// ===================================

// --- APP STATE ---
let mcqQuizzes = [];
let essayQuizzes = [];
let currentQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = [];
let quizType = 'mcq'; // 'mcq' or 'essay'
let essayMode = 'keyword'; // 'keyword' or 'self'

// Multi-select state
let selectedOptions = new Set();
let isMultiSelect = false;

// --- DOM ELEMENTS ---
const views = {
    dashboard: null,
    quiz: null,
    results: null
};

// --- INITIALIZATION ---
function init() {
    // Cache DOM elements
    views.dashboard = document.getElementById('dashboardView');
    views.quiz = document.getElementById('quizView');
    views.results = document.getElementById('resultsView');
    
    // Load questions
    loadQuestions();
    
    // Setup event listeners
    setupEventListeners();
    
    // Render dashboard
    renderDashboard();
}

function loadQuestions() {
    try {
        // Load MCQ questions from global variable (defined in mcq-questions-data.js)
        mcqQuizzes = MCQ_QUESTIONS_DATA;
        
        // Load Essay questions from global variable (defined in essay-questions-data.js)
        essayQuizzes = ESSAY_QUESTIONS_DATA.chapters;
    } catch (error) {
        console.error('Error loading questions:', error);
    }
}

function setupEventListeners() {
    // Sidebar toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
    
    // Quiz type tabs
    document.querySelectorAll('.quiz-type-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.quiz-type-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            quizType = tab.dataset.type;
            renderDashboard();
        });
    });
}

// --- DASHBOARD ---
function renderDashboard() {
    const grid = document.getElementById('quizGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const quizzes = quizType === 'mcq' ? mcqQuizzes : essayQuizzes;
    
    quizzes.forEach((quiz, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between transition hover:shadow-lg hover:-translate-y-1 cursor-pointer group';
        card.onclick = () => startQuiz(index);
        
        const title = quizType === 'mcq' ? quiz.titleAr : quiz.chapter_titleAr;
        const titleEn = quizType === 'mcq' ? quiz.title : quiz.chapter_title;
        const qCount = quizType === 'mcq' ? quiz.questions.length : quiz.questions.length;
        const desc = quizType === 'mcq' ? quiz.description : `${qCount} سؤال مقالي`;
        const chNum = quizType === 'mcq' ? quiz.id : quiz.chapter_number;
        
        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        ${quizType === 'mcq' ? 'اختيار من متعدد' : 'مقالي'}
                    </span>
                    <span class="text-slate-400 text-xs font-bold tracking-wider">CH ${chNum}</span>
                </div>
                <h3 class="text-lg font-bold text-slate-800 mb-2 leading-tight">${title}</h3>
                <p class="text-sm text-slate-500 mb-4 line-clamp-2">${desc}</p>
            </div>
            <div class="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span class="text-xs text-slate-400 font-semibold">${qCount} سؤال</span>
                <span class="text-indigo-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">
                    ابدأ الآن
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- QUIZ LOGIC ---
function startQuiz(index) {
    const quizzes = quizType === 'mcq' ? mcqQuizzes : essayQuizzes;
    currentQuiz = quizzes[index];
    currentQIndex = 0;
    score = 0;
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    
    switchView('quiz');
    
    // Enable quiz mode on body
    document.body.classList.add('quiz-mode');
    document.getElementById('homeBtn').classList.remove('hidden');
    
    const title = quizType === 'mcq' ? currentQuiz.titleAr : currentQuiz.chapter_titleAr;
    const titleShort = quizType === 'mcq' ? currentQuiz.title : currentQuiz.chapter_title;
    
    // Update header with quiz info
    const headerQuizTitle = document.getElementById('headerQuizTitle');
    if (headerQuizTitle) {
        headerQuizTitle.innerText = titleShort.length > 20 ? titleShort.substring(0, 20) + '...' : titleShort;
    }
    
    // Show/hide essay mode selector
    const essayModeSelector = document.getElementById('essayModeSelector');
    if (essayModeSelector) {
        essayModeSelector.classList.toggle('hidden', quizType === 'mcq');
    }
    
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuiz.questions[currentQIndex];
    
    // Update UI State
    const scoreText = score.toString();
    
    // Update header elements
    const headerQuestionNum = document.getElementById('headerQuestionNum');
    if (headerQuestionNum) {
        headerQuestionNum.innerText = `سؤال ${currentQIndex + 1} من ${currentQuiz.questions.length}`;
    }
    
    const headerScore = document.getElementById('headerScore');
    if (headerScore) {
        headerScore.innerText = scoreText;
    }
    
    // Update question badge
    const qNumBadge = document.getElementById('qNumBadge');
    if (qNumBadge) {
        qNumBadge.innerText = `Q${currentQIndex + 1}`;
    }
    
    const progress = ((currentQIndex) / currentQuiz.questions.length) * 100;
    
    // Update both progress bars
    const progressBar = document.getElementById('progressBar');
    if (progressBar) progressBar.style.width = `${progress}%`;
    
    const headerProgressFill = document.getElementById('headerProgressFill');
    if (headerProgressFill) headerProgressFill.style.width = `${progress}%`;
    
    if (quizType === 'mcq') {
        renderMCQQuestion(q);
    } else {
        renderEssayQuestion(q);
    }
}

function renderMCQQuestion(q) {
    // Show MCQ container, hide Essay container
    document.getElementById('mcqContainer').classList.remove('hidden');
    document.getElementById('essayContainer').classList.add('hidden');
    
    // Reset state
    selectedOptions.clear();
    const correctAnswers = Array.isArray(q.correct) ? q.correct : [q.correct];
    isMultiSelect = correctAnswers.length > 1;
    
    // Render Question Text
    document.getElementById('questionEn').innerText = q.qEn;
    
    // Arabic translation - hidden initially
    const arEl = document.getElementById('questionAr');
    arEl.innerText = q.qAr;
    arEl.classList.add('translation-hidden');
    arEl.classList.remove('translation-revealed');
    
    // Reset Feedback
    document.getElementById('feedbackArea').classList.add('hidden');
    
    // Insert/Update Hint for Multi-select
    let hintEl = document.getElementById('mcqMultiHint');
    if (!hintEl) {
        hintEl = document.createElement('div');
        hintEl.id = 'mcqMultiHint';
        hintEl.className = 'bg-amber-50 border border-amber-200 text-amber-800 text-sm font-bold p-3 rounded-lg mb-4 flex items-center gap-2 hidden';
        hintEl.innerHTML = `
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>يوجد أكثر من إجابة صحيحة لهذا السؤال. الرجاء اختيار جميع الإجابات الصحيحة.</span>
        `;
        // Insert after English question
        document.getElementById('questionEn').parentNode.appendChild(hintEl);
    }
    
    if (isMultiSelect) {
        hintEl.classList.remove('hidden');
    } else {
        hintEl.classList.add('hidden');
    }
    
    // Render Options
    const optsContainer = document.getElementById('optionsContainer');
    optsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-card stagger-item w-full bg-white border-2 border-slate-100 p-4 rounded-2xl flex flex-row-reverse items-center gap-4 group hover:border-indigo-400 hover:bg-gradient-to-l hover:from-indigo-50 hover:to-white hover:shadow-lg transition-all duration-300';
        btn.id = `opt-${opt.k}`;
        btn.style.animationDelay = `${index * 0.08}s`;
        btn.style.opacity = '0';
        
        // Animate in
        setTimeout(() => {
            btn.style.opacity = '1';
        }, 50);
        
        // Define click behavior based on mode
        if (isMultiSelect) {
            btn.onclick = () => toggleMCQOption(opt.k, btn);
        } else {
            btn.onclick = () => checkMCQAnswer(opt.k, btn);
        }
        
        btn.innerHTML = `
            <div class="h-7 w-7 rounded-full border-2 border-slate-300 group-hover:border-indigo-500 group-hover:shadow-md flex items-center justify-center transition-all duration-300 flex-shrink-0 bg-white">
                <div class="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 scale-0 transition-all duration-300 check-mark"></div>
            </div>
            <div class="flex-1 text-right">
                <div class="text-slate-800 font-semibold en-text mb-1 text-base text-left leading-relaxed" dir="ltr">${opt.e}</div>
                <div class="text-slate-400 text-sm font-medium translation-hidden text-right leading-relaxed" dir="rtl">${opt.a}</div>
            </div>
        `;
        optsContainer.appendChild(btn);
    });

    // Create/Show Submit Button for Multi-select
    let submitBtn = document.getElementById('mcqSubmitBtn');
    if (!submitBtn) {
        submitBtn = document.createElement('button');
        submitBtn.id = 'mcqSubmitBtn';
        submitBtn.className = 'w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition transform active:scale-[0.98] hidden flex items-center justify-center gap-2';
        submitBtn.innerHTML = `
            <span>تأكيد الإجابة</span>
            <svg class="h-5 w-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        `;
        submitBtn.onclick = submitMultiMCQ;
        optsContainer.after(submitBtn);
    }
    
    if (isMultiSelect) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
}

function toggleMCQOption(key, btn) {
    // Prevent interaction if already submitted
    if (!document.getElementById('feedbackArea').classList.contains('hidden')) return;

    const checkMark = btn.querySelector('.check-mark');
    
    if (selectedOptions.has(key)) {
        selectedOptions.delete(key);
        btn.classList.remove('border-indigo-500', 'bg-gradient-to-l', 'from-indigo-50', 'to-white', 'shadow-md', 'selected');
        btn.classList.add('border-slate-100');
        checkMark.classList.remove('opacity-100', 'scale-100');
        checkMark.classList.add('opacity-0', 'scale-0');
    } else {
        selectedOptions.add(key);
        btn.classList.remove('border-slate-100');
        btn.classList.add('border-indigo-500', 'bg-gradient-to-l', 'from-indigo-50', 'to-white', 'shadow-md', 'selected');
        checkMark.classList.remove('opacity-0', 'scale-0');
        checkMark.classList.add('opacity-100', 'scale-100');
        
        // Add pulse effect
        btn.style.transform = 'scale(1.02)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
}

function submitMultiMCQ() {
    if (selectedOptions.size === 0) {
        alert('الرجاء اختيار إجابة واحدة على الأقل');
        return;
    }
    
    // Hide submit button
    document.getElementById('mcqSubmitBtn').classList.add('hidden');
    
    const q = currentQuiz.questions[currentQIndex];
    const correctKeys = Array.isArray(q.correct) ? q.correct : [q.correct];
    
    // Reveal Translations
    revealTranslations();
    
    // Validate
    const sortedSelected = Array.from(selectedOptions).sort();
    const sortedCorrect = [...correctKeys].sort();
    
    // Simple deep equal check for arrays
    const isWin = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    
    // Logic for partial feedback could go here, but strict equality is usually best for testing
    
    // Update UI
    // Disable all options
    document.querySelectorAll('.option-card').forEach(b => {
        b.onclick = null;
        b.classList.add('cursor-default');
    });
    
    // Highlight Answers
    // 1. Mark selected correct ones Green
    // 2. Mark selected wrong ones Red
    // 3. Mark missed correct ones Green (outline)
    
    document.querySelectorAll('.option-card').forEach(btn => {
        const key = btn.id.replace('opt-', '');
        const isSelected = selectedOptions.has(key);
        const isCorrect = correctKeys.includes(key);
        
        btn.classList.remove('group', 'hover:border-indigo-300', 'hover:bg-indigo-50/30'); // Remove hover effects
        
        if (isSelected && isCorrect) {
            btn.classList.add('border-green-500', 'bg-green-50');
            btn.querySelector('.check-mark').classList.add('opacity-100', 'bg-green-500');
        } else if (isSelected && !isCorrect) {
            btn.classList.add('border-red-500', 'bg-red-50');
            btn.querySelector('.check-mark').classList.add('opacity-100', 'bg-red-500');
        } else if (!isSelected && isCorrect) {
            // Missed correct answer
            btn.classList.add('border-green-500', 'border-dashed');
            btn.querySelector('.check-mark').classList.add('opacity-50', 'bg-green-500');
        } else {
            btn.classList.add('opacity-50');
        }
    });

    if (isWin) {
        if (!userAnswers[currentQIndex]) score++;
        showFeedback(true, q.explanation);
    } else {
        showFeedback(false, q.explanation);
    }
    
    const scoreEl1 = document.getElementById('headerScore');
    if (scoreEl1) scoreEl1.innerText = score;
    userAnswers[currentQIndex] = isWin;
}

function checkMCQAnswer(selectedKey, btnElement) {
    // Prevent multiple clicks
    if (!document.getElementById('feedbackArea').classList.contains('hidden')) return;
    
    const q = currentQuiz.questions[currentQIndex];
    const correctKeys = Array.isArray(q.correct) ? q.correct : [q.correct];
    
    // Reveal Translations
    revealTranslations();
    
    // Check if correct
    let isWin = correctKeys.includes(selectedKey);
    
    // Disable all options with fade effect
    const allBtns = document.querySelectorAll('.option-card');
    allBtns.forEach(b => {
        b.classList.add('disabled', 'cursor-default');
        b.classList.remove('hover:border-indigo-400', 'hover:bg-gradient-to-l', 'hover:from-indigo-50', 'hover:to-white', 'hover:shadow-lg');
        b.onclick = null;
        b.style.opacity = '0.6';
        b.style.transform = 'scale(0.98)';
    });
    
    // Highlight Selected
    btnElement.style.opacity = '1';
    btnElement.style.transform = 'scale(1)';
    
    const checkMark = btnElement.querySelector('.check-mark');
    
    if (isWin) {
        // Correct answer animation
        btnElement.classList.remove('border-slate-100');
        btnElement.classList.add('border-green-500', 'bg-gradient-to-l', 'from-green-50', 'to-white', 'shadow-lg', 'correct');
        checkMark.classList.remove('bg-gradient-to-br', 'from-indigo-500', 'to-purple-500', 'opacity-0', 'scale-0');
        checkMark.classList.add('opacity-100', 'scale-100', 'bg-green-500');
        
        if (!userAnswers[currentQIndex]) {
            score++;
            // Animate score
            const scoreEl = document.getElementById('headerScore');
            if (scoreEl) {
                scoreEl.innerText = score;
                scoreEl.classList.add('bump');
                setTimeout(() => scoreEl.classList.remove('bump'), 500);
            }
        }
        showFeedback(true, q.explanation);
    } else {
        // Wrong answer animation
        btnElement.classList.remove('border-slate-100');
        btnElement.classList.add('border-red-500', 'bg-gradient-to-l', 'from-red-50', 'to-white', 'shadow-lg', 'wrong');
        checkMark.classList.remove('bg-gradient-to-br', 'from-indigo-500', 'to-purple-500', 'opacity-0', 'scale-0');
        checkMark.classList.add('opacity-100', 'scale-100', 'bg-red-500');
        
        // Highlight correct one(s) with delay
        setTimeout(() => {
            correctKeys.forEach(k => {
                const correctBtn = document.getElementById(`opt-${k}`);
                if (correctBtn) {
                    correctBtn.style.opacity = '1';
                    correctBtn.style.transform = 'scale(1.02)';
                    correctBtn.classList.remove('border-slate-100');
                    correctBtn.classList.add('border-green-500', 'bg-gradient-to-l', 'from-green-50', 'to-white', 'shadow-lg');
                    const correctCheckMark = correctBtn.querySelector('.check-mark');
                    correctCheckMark.classList.remove('opacity-0', 'scale-0');
                    correctCheckMark.classList.add('opacity-100', 'scale-100', 'bg-green-500');
                }
            });
        }, 300);
        
        showFeedback(false, q.explanation);
    }
    userAnswers[currentQIndex] = isWin;
    const scoreEl2 = document.getElementById('headerScore');
    if (scoreEl2) scoreEl2.innerText = score;
}

function revealTranslations() {
    document.getElementById('questionAr').classList.remove('translation-hidden');
    document.getElementById('questionAr').classList.add('translation-revealed');
    document.querySelectorAll('#optionsContainer .translation-hidden').forEach(el => {
        el.classList.remove('translation-hidden');
        el.classList.add('translation-revealed');
    });
}

function renderEssayQuestion(q) {
    // Hide MCQ container, show Essay container
    document.getElementById('mcqContainer').classList.add('hidden');
    document.getElementById('essayContainer').classList.remove('hidden');
    
    // Render question
    document.getElementById('essayQuestionEn').innerText = q.question;
    
    const arEl = document.getElementById('essayQuestionAr');
    arEl.innerText = q.questionAr;
    arEl.classList.add('translation-hidden');
    arEl.classList.remove('translation-revealed');
    
    // Clear textarea
    document.getElementById('essayAnswer').value = '';
    
    // Hide feedback areas
    document.getElementById('essayFeedbackArea').classList.add('hidden');
    document.getElementById('essayCheckBtn').classList.remove('hidden');
}

function checkEssayAnswer() {
    const q = currentQuiz.questions[currentQIndex];
    const userAnswer = document.getElementById('essayAnswer').value.trim();
    
    if (!userAnswer) {
        alert('الرجاء كتابة إجابتك أولاً');
        return;
    }
    
    // Reveal Arabic translation
    document.getElementById('essayQuestionAr').classList.remove('translation-hidden');
    document.getElementById('essayQuestionAr').classList.add('translation-revealed');
    
    // Hide check button
    document.getElementById('essayCheckBtn').classList.add('hidden');
    
    // Show feedback area
    const feedbackArea = document.getElementById('essayFeedbackArea');
    feedbackArea.classList.remove('hidden');
    feedbackArea.classList.add('fade-in');
    
    if (essayMode === 'keyword') {
        showKeywordResult(q, userAnswer);
    } else {
        showSelfEvaluation(q);
    }
}

function showKeywordResult(q, userAnswer) {
    const result = checkKeywords(userAnswer, q.keywords);
    
    const keywordResultEl = document.getElementById('keywordResult');
    const selfEvalEl = document.getElementById('selfEvaluation');
    
    keywordResultEl.classList.remove('hidden');
    selfEvalEl.classList.add('hidden');
    
    // Show score
    const scoreEl = document.getElementById('keywordScore');
    const percentage = Math.round((result.matchedCount / result.totalRequired) * 100);
    scoreEl.innerText = `${result.matchedCount}/${result.totalRequired}`;
    
    scoreEl.className = 'keyword-score';
    if (percentage >= 70) {
        scoreEl.classList.add('good');
    } else if (percentage >= 40) {
        scoreEl.classList.add('medium');
    } else {
        scoreEl.classList.add('bad');
    }
    
    // Show model answer with highlights
    renderModelAnswer(q, result);
    
    // Update score
    if (result.isCorrect && !userAnswers[currentQIndex]) {
        score++;
        document.getElementById('currentScore').innerText = score;
    }
    userAnswers[currentQIndex] = result.isCorrect;
}

function showSelfEvaluation(q) {
    const keywordResultEl = document.getElementById('keywordResult');
    const selfEvalEl = document.getElementById('selfEvaluation');
    
    keywordResultEl.classList.add('hidden');
    selfEvalEl.classList.remove('hidden');
    
    // Render model answer
    renderModelAnswer(q, null);
}

function renderModelAnswer(q, keywordResult) {
    const modelAnswerList = document.getElementById('modelAnswerList');
    modelAnswerList.innerHTML = '';
    
    q.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center';
        
        const answerAr = q.answersAr ? q.answersAr[index] : '';
        
        let matchClass = '';
        if (keywordResult) {
            // Check if this answer's keywords were matched
            const answerKeywords = answer.toLowerCase().split(/\s+/);
            const isMatched = answerKeywords.some(kw => 
                keywordResult.matched.some(mk => mk.toLowerCase().includes(kw) || kw.includes(mk.toLowerCase()))
            );
            matchClass = isMatched ? 'keyword-match' : 'keyword-miss';
        }
        
        li.innerHTML = `
            <div class="p-3 rounded-lg flex-1 ${matchClass}" style="margin-bottom: 6px;">
                <div class="en-text font-medium text-slate-800">${answer}</div>
                ${answerAr ? `<div class="text-slate-600 text-sm mt-1">${answerAr}</div>` : ''}
            </div>
        `;
        modelAnswerList.appendChild(li);
    });
    
    // Show explanation
    const explanationEl = document.getElementById('essayExplanation');
    if (q.explanation) {
        explanationEl.classList.remove('hidden');
        document.getElementById('explanationTextEn').innerText = q.explanation;
        document.getElementById('explanationTextAr').innerText = q.explanationAr || '';
    } else {
        explanationEl.classList.add('hidden');
    }
}

function checkKeywords(userAnswer, requiredKeywords) {
    const normalizedAnswer = userAnswer.toLowerCase();
    let matchedKeywords = [];
    let missingKeywords = [];
    
    requiredKeywords.forEach(keyword => {
        if (normalizedAnswer.includes(keyword.toLowerCase())) {
            matchedKeywords.push(keyword);
        } else {
            missingKeywords.push(keyword);
        }
    });
    
    return {
        matchedCount: matchedKeywords.length,
        totalRequired: requiredKeywords.length,
        matched: matchedKeywords,
        missing: missingKeywords,
        isCorrect: matchedKeywords.length >= Math.ceil(requiredKeywords.length * 0.5)
    };
}

function selfEvalCorrect() {
    if (!userAnswers[currentQIndex]) {
        score++;
        const scoreEl = document.getElementById('headerScore');
        if (scoreEl) scoreEl.innerText = score;
    }
    userAnswers[currentQIndex] = true;
    nextQuestion();
}

function selfEvalIncorrect() {
    userAnswers[currentQIndex] = false;
    nextQuestion();
}

function showFeedback(isCorrect, text) {
    const area = document.getElementById('feedbackArea');
    const status = document.getElementById('feedbackStatus');
    const msg = document.getElementById('feedbackText');
    
    area.classList.remove('hidden');
    area.classList.add('fade-in');
    
    if (isCorrect) {
        status.innerHTML = `<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-green-700">إجابة صحيحة!</span>`;
        area.className = "bg-green-50 p-6 border-t border-green-100 fade-in";
    } else {
        status.innerHTML = `<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-red-700">إجابة خاطئة</span>`;
        area.className = "bg-red-50 p-6 border-t border-red-100 fade-in";
    }
    
    msg.innerText = text;
}

function nextQuestion() {
    if (currentQIndex < currentQuiz.questions.length - 1) {
        currentQIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    switchView('results');
    const total = currentQuiz.questions.length;
    const percent = Math.round((score / total) * 100);
    
    document.getElementById('finalScore').innerText = `${score}/${total}`;
    document.getElementById('finalPercent').innerText = `${percent}%`;
    
    let grade = '';
    let color = '';
    if (percent >= 90) { grade = 'ممتاز (Excellent)'; color = 'text-green-600'; }
    else if (percent >= 80) { grade = 'جيد جداً (Very Good)'; color = 'text-blue-600'; }
    else if (percent >= 60) { grade = 'جيد (Good)'; color = 'text-yellow-600'; }
    else { grade = 'حاول مرة أخرى (Try Again)'; color = 'text-red-600'; }
    
    const gradeEl = document.getElementById('finalGrade');
    gradeEl.innerText = grade;
    gradeEl.className = `text-xl font-black ${color}`;
}

// --- NAVIGATION ---
function switchView(viewName) {
    Object.values(views).forEach(el => {
        if (el) el.classList.add('hidden');
    });
    if (views[viewName]) {
        views[viewName].classList.remove('hidden');
    }
    window.scrollTo(0, 0);
}

function goHome() {
    switchView('dashboard');
    document.getElementById('homeBtn').classList.add('hidden');
    currentQuiz = null;
    
    // Remove quiz mode from body
    document.body.classList.remove('quiz-mode');
    
    // Close sidebar if open
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('open');
    if (menuToggle) menuToggle.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function resetQuiz() {
    if (currentQuiz) {
        const index = (quizType === 'mcq' ? mcqQuizzes : essayQuizzes).indexOf(currentQuiz);
        startQuiz(index);
    }
}

function setEssayMode(mode) {
    essayMode = mode;
    // Update ALL essay mode buttons (both in sidebar and dashboard)
    document.querySelectorAll('.essay-mode-btn').forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
