import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput } from '@ionic/angular';
import { GeminiService } from '../services/gemini.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  @ViewChild('mensagemInput', { static: false }) mensagemInput!: IonInput;

  mensagens: { texto?: string; imagem?: string; tipo: 'recebida' | 'enviada' }[] = [];
  mensagemDigitada: string = '';
  usuarioDigitando: boolean = false

  constructor(private geminiService: GeminiService) {}

  ngOnInit() {
    this.adicionarMensagem(this.removerAsteriscos('Olá! Eu sou GuIA, a inteligência artificial do Explora Brasil'), 'recebida');
  }

  removerAsteriscos(texto: string): string {
    return texto.replace(/\*/g, '');
  }

  adicionarMensagem(texto: string, tipo: 'recebida' | 'enviada') {
    this.mensagens.push({ texto, tipo });
    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }

  adicionarMensagemImagem(imagem: string, tipo: 'recebida' | 'enviada') {
    this.mensagens.push({ imagem, tipo });
    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }
  

  enviarMensagem() {
    if (this.mensagemDigitada.trim() !== '') {
      this.adicionarMensagem(this.mensagemDigitada, 'enviada');
      const mensagemParaIA = this.mensagemDigitada;
      this.mensagemDigitada = '';
      this.usuarioDigitando = true;

      this.geminiService.sendMessage(mensagemParaIA).subscribe({
        next: (resposta: string) => {
          this.usuarioDigitando = false;
          this.adicionarMensagem(this.removerAsteriscos(resposta), 'recebida');
        },
        error: (erro: any) => {
          this.usuarioDigitando = false;
          console.error('Erro ao obter resposta da GuIA:', erro);
          this.adicionarMensagem(
            'Desculpe, não consegui obter uma resposta agora.',
            'recebida'
          );
        },
      });
      
    }
  }

  enviarArquivo(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    const mensagemParaIA = this.mensagemDigitada.trim() || 'Descreva esta imagem em português.';
  
    if (this.mensagemDigitada.trim() !== '') {
      this.adicionarMensagem(mensagemParaIA, 'enviada');
      this.mensagemDigitada = ''; 
    }
  
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.mensagens.push({ imagem: base64, tipo: 'enviada' });
      this.usuarioDigitando = true;
  
      this.geminiService.sendImage(base64, mensagemParaIA).subscribe({
        next: (resposta) => {
          this.usuarioDigitando = false;
          this.mensagens.push({ texto: resposta, tipo: 'recebida' });
        },
        error: () => {
          this.usuarioDigitando = false;
          this.mensagens.push({ texto: 'Erro ao analisar a imagem.', tipo: 'recebida' });
        },
      });
    };
    reader.readAsDataURL(file);
  }
  
  
}