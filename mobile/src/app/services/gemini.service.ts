import { Injectable } from '@angular/core';
import { GoogleGenerativeAI, GenerativeModel, ChatSession } from '@google/generative-ai';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI | null = null;
  private model: GenerativeModel | null = null;
  private chat: ChatSession | null = null;
  private readonly apiKey: string = environment.geminiApiKey?.trim() ?? '';

  constructor() {
    if (!this.apiKey) {
      return;
    }

    this.genAI = new GoogleGenerativeAI(this.apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
              text: `Você se chama GuIA, a inteligência artificial do ExploraBrasil, e está aqui para guiar pelo fascinante e vibrante universo do Brasil, tudo dentro deste aplicativo! Conte comigo para descobrir detalhes sobre turismo, cultura, transporte, eventos e uma variedade de serviços que o Brasil tem a oferecer. Minha abordagem é sempre educada, clara, profissional, acolhedora e prestativa, buscando tornar sua experiência informativa e agradável.

Se você quiser fazer alguma brincadeira, fique à vontade! Adoro uma descontração, mas meu foco principal é te ajudar com informações relevantes sobre o Brasil.

Ah, e uma dica importante: como não guardamos o histórico da nossa conversa, se você sair do aplicativo, nosso papo se encerra por aqui, tá bom? Assim garantimos sua privacidade.

Se por acaso surgir alguma pergunta ou comentário fora do contexto, pode deixar comigo! Com um toque de humor, como um "Ô loco, vai com calma que aqui é turismo, não é novela mexicana!" ou um divertido "Tá perdido? Quer uma carona de volta pro assunto?", a gente retoma o foco no que realmente interessa: o Brasil!

E pode ter certeza, no que depender de informações sobre o Brasil, atuarei como as outras IAs que você conhece, com atenção e profissionalismo.`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7, 
        maxOutputTokens: 500 
      }
    });
  }

  sendMessage(mensagem: string): Observable<string> {
    if (!this.chat) {
      return new Observable<string>(subscriber => {
        subscriber.next('A chave da API do Gemini não está configurada.');
        subscriber.complete();
      });
    }

    return from(this.chat.sendMessage(mensagem)).pipe(
      map((result: any) => {
        const responseText = result?.response?.text();
        if (responseText) {
          return responseText;
        } else {
          console.error('Resposta da GuIA mal formatada:', result);
          throw new Error('Resposta da GuIA mal formatada ou vazia.');
        }
      }),
      catchError(error => {
        console.error('Erro ao gerar resposta:', error.message || error);
        return new Observable<string>(subscriber => {
          subscriber.next('Ops! Ocorreu um erro ao tentar se comunicar com a GuIA. Verifique sua conexão ou tente novamente mais tarde.');
          subscriber.complete();
        });
      })
    );
  }

  sendImage(base64Image: string, mensagemTexto: string = ''): Observable<string> {
    if (!this.chat) {
      return new Observable<string>(subscriber => {
        subscriber.next('A chave da API do Gemini não está configurada.');
        subscriber.complete();
      });
    }

    const imagePart = {
      inlineData: {
        data: base64Image.split(',')[1], 
        mimeType: base64Image.match(/data:(image\/[a-z]+);/)?.[1] || 'image/png' 
      }
    };

    const defaultMessage = `Estou aqui para ajudar a explorar o Brasil através desta imagem! Por favor, descreva os elementos principais de forma objetiva e detalhada, como paisagens, monumentos, cores ou qualquer aspecto que remeta à cultura e turismo brasileiros. Se precisar de mais detalhes ou quiser uma análise mais profunda, é só pedir! Meu objetivo é oferecer informações precisas e úteis, com um toque acolhedor. Se quiser uma abordagem descontraída, sinta-se à vontade!`;

    return from(
      this.chat.sendMessage([
        { text: mensagemTexto || defaultMessage },
        imagePart
      ])
    ).pipe(
      map((result: any) => {
        const responseText = result?.response?.text();
        if (responseText) {
          return responseText;
        } else {
          console.error('Resposta da GuIA mal formatada:', result);
          throw new Error('Não consegui processar a análise da imagem.');
        }
      }),
      catchError(error => {
        console.error('Erro ao enviar imagem com mensagem:', error.message || error);
        return new Observable<string>(subscriber => {
          subscriber.next('Desculpe, não consegui analisar a imagem. Verifique o formato ou tente novamente.');
          subscriber.complete();
        });
      })
    );
  }

  resetChat(): void {
    if (!this.model) {
      return;
    }

    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
              text: `Você se chama GuIA, a inteligência artificial do ExploraBrasil, e está aqui para guiar pelo fascinante e vibrante universo do Brasil, tudo dentro deste aplicativo! Conte comigo para descobrir detalhes sobre turismo, cultura, transporte, eventos e uma variedade de serviços que o Brasil tem a oferecer. Minha abordagem é sempre educada, clara, profissional, acolhedora e prestativa, buscando tornar sua experiência informativa e agradável.

Se você quiser fazer alguma brincadeira, fique à vontade! Adoro uma descontração, mas meu foco principal é te ajudar com informações relevantes sobre o Brasil.

Ah, e uma dica importante: como não guardamos o histórico da nossa conversa, se você sair do aplicativo, nosso papo se encerra por aqui, tá bom? Assim garantimos sua privacidade.

Se por acaso surgir alguma pergunta ou comentário fora do contexto, pode deixar comigo! Com um toque de humor, como um "Ô loco, vai com calma que aqui é turismo, não é novela mexicana!" ou um divertido "Tá perdido? Quer uma carona de volta pro assunto?", a gente retoma o foco no que realmente interessa: o Brasil!

E pode ter certeza, no que depender de informações sobre o Brasil, atuarei como as outras IAs que você conhece, com atenção e profissionalismo.`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500
      }
    });
  }
}