import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('configContainer') configContainer!: ElementRef;
  @ViewChild('quizContainer') quizContainer!: ElementRef;
  @ViewChild('resultContainer') resultContainer!: ElementRef;
  @ViewChild('nextQuestionBtn') nextQuestionBtn!: ElementRef;
  @ViewChild('timerDisplay', { read: ElementRef }) timerDisplay!: ElementRef;

  QUIZ_TIME_LIMIT = 30;
  currentTime = this.QUIZ_TIME_LIMIT;
  timer: any = null;
  quizCategory = 'regiões';
  numberOfQuestions = 10;
  quizQuestions: QuizQuestion[] = [];
  currentQuestionIndex = 0;
  currentQuestion: QuizQuestion | null = null;
  questionIndexHistory: number[] = [];
  correctAnswerCount = 0;
  hasAnswered = false;
  selectedAnswerIndex: number | null = null;
  correctAnswerIndex: number | null = null;

  constructor(private questionsService: QuestionsService) {}

  ngAfterViewInit(): void {
    this.setupEventListeners();
  }

  setupEventListeners(): void {
    const categoryOptions = this.configContainer.nativeElement.querySelectorAll('.category-option');
    categoryOptions.forEach((option: HTMLElement) => {
      option.addEventListener('click', () => {
        categoryOptions.forEach((opt: HTMLElement) => opt.classList.remove('active'));
        option.classList.add('active');
        this.quizCategory = option.getAttribute('data-value') || 'regiões';
      });
    });

    const questionOptions = this.configContainer.nativeElement.querySelectorAll('.question-option');
    questionOptions.forEach((option: HTMLElement) => {
      option.addEventListener('click', () => {
        questionOptions.forEach((opt: HTMLElement) => opt.classList.remove('active'));
        option.classList.add('active');
        this.numberOfQuestions = parseInt(option.textContent || '10');
      });
    });

    const startBtn = this.configContainer.nativeElement.querySelector('.start-quiz-btn');
    const tryAgainBtn = this.resultContainer.nativeElement.querySelector('.try-again-btn');
    
    startBtn?.addEventListener('click', () => this.startQuiz());
    tryAgainBtn?.addEventListener('click', () => this.resetQuiz());
    this.nextQuestionBtn.nativeElement.addEventListener('click', () => this.nextQuestion());
  }

  startQuiz(): void {
    this.questionsService.resetUsedQuestions(this.quizCategory);
    this.quizQuestions = this.questionsService.getQuestions(this.quizCategory, this.numberOfQuestions) ?? [];
    this.currentQuestionIndex = 0;
    this.questionIndexHistory = [];
    this.correctAnswerCount = 0;
    this.hasAnswered = false;
    this.selectedAnswerIndex = null;
    this.correctAnswerIndex = null;

    if (!this.quizQuestions.length) {
      this.showQuizResult();
      return;
    }

    this.configContainer.nativeElement.style.display = 'none';
    this.quizContainer.nativeElement.style.display = 'block';
    this.resultContainer.nativeElement.style.display = 'none';
    this.renderQuestion();
  }

  resetQuiz(): void {
    this.resetTimer();
    this.correctAnswerCount = 0;
    this.questionIndexHistory = [];
    this.quizQuestions = [];
    this.currentQuestionIndex = 0;
    this.currentQuestion = null;
    this.hasAnswered = false;
    this.selectedAnswerIndex = null;
    this.correctAnswerIndex = null;
    this.configContainer.nativeElement.style.display = 'block';
    this.quizContainer.nativeElement.style.display = 'none';
    this.resultContainer.nativeElement.style.display = 'none';
  }

  renderQuestion(): void {
    this.hasAnswered = false;
    this.selectedAnswerIndex = null;
    this.correctAnswerIndex = null;
    this.resetTimer();

    this.currentQuestion = this.quizQuestions[this.currentQuestionIndex] ?? null;
    if (!this.currentQuestion) return;

    this.questionIndexHistory.push(this.currentQuestionIndex);

    this.startTimer();
    this.nextQuestionBtn.nativeElement.style.visibility = 'hidden';
    
    const timerElement = this.quizContainer.nativeElement.querySelector('.quiz-timer');
    if (timerElement) {
      timerElement.setAttribute('style', 'background: #32313c');
    }
  }

  selectAnswer(answerIndex: number): void {
    if (this.hasAnswered) return;
    
    this.hasAnswered = true;
    this.selectedAnswerIndex = answerIndex;
    this.correctAnswerIndex = this.currentQuestion?.correctAnswer ?? null;
    
    clearInterval(this.timer);

    if (answerIndex === this.currentQuestion?.correctAnswer) {
      this.correctAnswerCount++;
    }

    this.nextQuestionBtn.nativeElement.style.visibility = 'visible';
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.quizQuestions.length) {
      this.showQuizResult();
      return;
    }

    this.renderQuestion();
  }

  showQuizResult(): void {
    this.quizContainer.nativeElement.style.display = 'none';
    this.resultContainer.nativeElement.style.display = 'block';
  
    const resultElement = this.resultContainer.nativeElement.querySelector('.result-message');
  
    let message = "Bela tentativa!";
  
    const totalQuestions = this.quizQuestions.length || this.numberOfQuestions;
    const percentageCorrect = totalQuestions > 0 ? (this.correctAnswerCount / totalQuestions) * 100 : 0;
  
    if (percentageCorrect >= 60) {
      message = "Parabéns!";
    }
  
    if (resultElement) {
      resultElement.innerHTML = `Você respondeu <b>${this.correctAnswerCount}</b> de <b>${totalQuestions}</b> questões corretas. ${message}`;
    }
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.currentTime--;
      this.updateTimerDisplay();

      if (this.currentTime <= 0) {
        this.handleTimeExpired();
      }
    }, 1000);
  }

  updateTimerDisplay(): void {
    if (this.timerDisplay && this.timerDisplay.nativeElement) {
      this.timerDisplay.nativeElement.textContent = `${this.currentTime}s`;
    }
  }

  handleTimeExpired(): void {
    clearInterval(this.timer);
    this.hasAnswered = true;
    this.correctAnswerIndex = this.currentQuestion?.correctAnswer ?? null;
    
    this.nextQuestionBtn.nativeElement.style.visibility = 'visible';
    
    const timerElement = this.quizContainer.nativeElement.querySelector('.quiz-timer');
    if (timerElement) {
      timerElement.setAttribute('style', 'background: #c31402');
    }
  }

  resetTimer(): void {
    clearInterval(this.timer);
    this.currentTime = this.QUIZ_TIME_LIMIT;
    this.updateTimerDisplay();
  }
}