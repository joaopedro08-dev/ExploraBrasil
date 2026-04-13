import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface CategoryQuestions {
  category: string;
  questions: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private quizQuestions: CategoryQuestions[] = [
    {
      "category": "estados",
      "questions": [
        {
          "question": "Qual estado brasileiro possui o maior número de municípios e qual é esse número aproximado?",
          "options": ["Minas Gerais", "São Paulo", "Rio Grande do Sul", "Bahia"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado se encontra o Vale do Jequitinhonha, conhecido como 'Vale da Pobreza'?",
          "options": ["Bahia", "Minas Gerais", "Pernambuco", "Ceará"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro possui o único deserto do mundo com lençóis freáticos?",
          "options": ["Rio Grande do Norte", "Bahia", "Piauí", "Maranhão"],
          "correctAnswer": 3
        },
        {
          "question": "O Arquipélago de Fernando de Noronha pertence a qual unidade federativa?",
          "options": ["Sergipe", "Pernambuco", "Rio Grande do Norte", "Alagoas"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado possui a maior costa litorânea do Brasil?",
          "options": ["Bahia", "Maranhão", "Rio de Janeiro", "Santa Catarina"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado está localizado o Pico da Neblina, ponto mais alto do Brasil?",
          "options": ["Amazonas", "Roraima", "Pará", "Acre"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro tem o maior IDH (Índice de Desenvolvimento Humano)?",
          "options": ["São Paulo", "Santa Catarina", "Distrito Federal", "Rio Grande do Sul"],
          "correctAnswer": 2
        },
        {
          "question": "O Complexo Industrial Portuário de Suape, um dos maiores do Brasil, está localizado em qual estado?",
          "options": ["Bahia", "Pernambuco", "Espírito Santo", "Rio de Janeiro"],
          "correctAnswer": 0
        },
        {
          "question": "Qual estado possui o maior rebanho bovino do Brasil?",
          "options": ["Mato Grosso", "Mato Grosso do Sul", "Goiás", "Minas Gerais"],
          "correctAnswer": 0
        },
        {
          "question": "O Projeto Radam, importante estudo de levantamento de recursos naturais, teve início em qual estado?",
          "options": ["Amazonas", "Pará", "Rondônia", "Acre"],
          "correctAnswer": 0
        },
        {
          "question": "Qual estado brasileiro possui o menor índice de urbanização?",
          "options": ["Tocantins", "Piauí", "Maranhão", "Roraima"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual estado está localizada a Usina Hidrelétrica de Tucuruí, uma das maiores do Brasil?",
          "options": ["Amazonas", "Rondônia", "Pará", "Amapá"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado possui o maior número de espécies endêmicas de aves no Brasil?",
          "options": ["Bahia", "Amazonas", "São Paulo", "Paraná"],
          "correctAnswer": 2
        },
        {
          "question": "O Polo Petroquímico de Camaçari, o maior complexo industrial integrado do Hemisfério Sul, está em qual estado?",
          "options": ["Rio de Janeiro", "São Paulo", "Bahia", "Espírito Santo"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado brasileiro possui o maior número de quilombos reconhecidos?",
          "options": ["Bahia", "Amazonas", "Pará", "Minas Gerais"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional do Jaú, o maior do Brasil em floresta tropical úmida intacta?",
          "options": ["Amazonas", "Acre", "Roraima", "Amapá"],
          "correctAnswer": 0
        },
        {
          "question": "Qual estado possui a maior produção de cacau do Brasil?",
          "options": ["Bahia", "Pará", "Espírito Santo", "Rondônia"],
          "correctAnswer": 0
        },
        {
          "question": "O Porto de Itaqui, um dos mais profundos do mundo, está localizado em qual estado?",
          "options": ["Pernambuco", "Pará", "Maranhão", "Bahia"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado brasileiro possui o maior número de reservas extrativistas?",
          "options": ["Acre", "Amazonas", "Amapá", "Pará"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual estado está localizado o Complexo Industrial Portuário do Pecém?",
          "options": ["Rio Grande do Norte", "Alagoas", "Piauí", "Maranhão"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado possui o maior número de cavernas registradas no Brasil?",
          "options": ["Minas Gerais", "Bahia", "São Paulo", "Goiás"],
          "correctAnswer": 0
        },
        {
          "question": "O Projeto Grande Carajás, importante polo mineral, abrange principalmente qual estado?",
          "options": ["Amazonas", "Rondônia", "Pará", "Mato Grosso"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado brasileiro possui a maior área de manguezais?",
          "options": ["Maranhão", "Pará", "Bahia", "Pernambuco"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional do Viruá, conhecido como 'Pantanal Amazônico'?",
          "options": ["Amazonas", "Roraima", "Acre", "Rondônia"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado possui o maior número de municípios acima de 1.000m de altitude?",
          "options": ["Minas Gerais", "Rio Grande do Sul", "Santa Catarina", "São Paulo"],
          "correctAnswer": 0
        },
        {
          "question": "O Aquífero Alter do Chão, considerado o maior reservatório de água doce do mundo, está localizado principalmente em qual estado?",
          "options": ["Amazonas", "Pará", "Amapá", "Roraima"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro possui a maior produção de energia eólica?",
          "options": ["Rio Grande do Norte", "Bahia", "Ceará", "Rio Grande do Sul"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado está localizada a Serra das Confusões, área com importantes sítios arqueológicos?",
          "options": ["Piauí", "Ceará", "Bahia", "Pernambuco"],
          "correctAnswer": 0
        },
        {
          "question": "Qual estado possui o maior número de espécies de peixes descritas na Bacia Amazônica?",
          "options": ["Amazonas", "Acre", "Rondônia", "Mato Grosso"],
          "correctAnswer": 0
        },
        {
          "question": "O Porto Central do Açu, um dos maiores projetos portuários do Brasil, está localizado em qual estado?",
          "options": ["Espírito Santo", "Rio de Janeiro", "São Paulo", "Bahia"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro possui o maior número de comunidades indígenas?",
          "options": ["Roraima", "Mato Grosso", "Amazonas", "Pará"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional da Serra do Divisor, na fronteira com o Peru?",
          "options": ["Acre", "Amazonas", "Rondônia", "Roraima"],
          "correctAnswer": 0
        },
        {
          "question": "Qual estado possui o maior número de espécies de primatas do Brasil?",
          "options": ["Pará", "Amazonas", "Mato Grosso", "Rondônia"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro possui a maior produção de nióbio do mundo?",
          "options": ["Minas Gerais", "Goiás", "Amazonas", "Pará"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional Montanhas do Tumucumaque, a maior área protegida de floresta tropical do mundo?",
          "options": ["Amazonas", "Pará", "Amapá", "Roraima"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado possui o maior número de sítios arqueológicos registrados?",
          "options": ["Piauí", "Bahia", "Minas Gerais", "Rio Grande do Sul"],
          "correctAnswer": 0
        },
        {
          "question": "O Projeto Calha Norte, importante iniciativa de proteção das fronteiras, abrange principalmente qual estado?",
          "options": ["Amazonas", "Pará", "Amapá", "Roraima"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro possui a maior produção de celulose?",
          "options": ["Paraná", "Minas Gerais", "Espírito Santo", "Mato Grosso do Sul"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual estado está localizada a Serra do Cipó, importante centro de biodiversidade e endemismo?",
          "options": ["Bahia", "Minas Gerais", "Goiás", "São Paulo"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado possui o maior número de espécies de anfíbios do Brasil?",
          "options": ["Amazonas", "Bahia", "Paraná", "Santa Catarina"],
          "correctAnswer": 0
        },
        {
          "question": "O Porto de São Luís, importante para exportação de minérios, está localizado em qual estado?",
          "options": ["Píaui", "Pará", "Maranhão", "Ceará"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado brasileiro possui a maior área de cerrado preservado?",
          "options": ["Tocantins", "Mato Grosso", "Goiás", "Maranhão"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional da Chapada Diamantina?",
          "options": ["Minas Gerais", "Bahia", "Goiás", "Piauí"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado possui o maior número de espécies de borboletas registradas?",
          "options": ["Amazonas", "Mato Grosso", "Rondônia", "Acre"],
          "correctAnswer": 0
        },
        {
          "question": "O Complexo Eólico de Osório, um dos maiores da América Latina, está localizado em qual estado?",
          "options": ["Santa Catarina", "Paraná", "Rio Grande do Sul", "Bahia"],
          "correctAnswer": 2
        },
        {
          "question": "Qual estado brasileiro possui a maior produção de soja?",
          "options": ["Mato Grosso", "Paraná", "Rio Grande do Sul", "Goiás"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional do Monte Pascoal, onde teria sido avistado o primeiro pedaço de terra do Brasil por Cabral?",
          "options": ["Sergipe", "Espírito Santo", "Rio de Janeiro", "Bahia"],
          "correctAnswer": 3
        },
        {
          "question": "Qual estado possui o maior número de espécies de répteis do Brasil?",
          "options": ["Amazonas", "Pará", "Mato Grosso", "Rondônia"],
          "correctAnswer": 0
        },
        {
          "question": "O Porto de Paranaguá, importante para exportação de commodities agrícolas, está localizado em qual estado?",
          "options": ["Santa Catarina", "Paraná", "São Paulo", "Rio Grande do Sul"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado brasileiro possui a maior produção de café?",
          "options": ["Espírito Santo", "São Paulo", "Minas Gerais", "Bahia"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual estado está localizado o Parque Nacional do Pantanal Matogrossense?",
          "options": ["Mato Grosso", "Mato Grosso do Sul", "Goiás", "Minas Gerais"],
          "correctAnswer": 1
        },
        {
          "question": "Qual estado possui o maior número de espécies de mamíferos do Brasil?",
          "options": ["Amazonas", "Pará", "Mato Grosso", "Rondônia"],
          "correctAnswer": 0
        },
        {
          "question": "O Porto de Vitória, importante para exportação de minério de ferro, está localizado em qual estado?",
          "options": ["Rio de Janeiro", "São Paulo", "Espírito Santo", "Bahia"],
          "correctAnswer": 2
        }
      ]
    },
    {
      "category": "cidades",
      "questions": [
        {
          "question": "Qual cidade brasileira foi a primeira capital do país?",
          "options": ["Rio de Janeiro", "Salvador", "Olinda", "São Vicente"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade de Minas Gerais se encontra o Museu de Arte Contemporânea Inhotim?",
          "options": ["Belo Horizonte", "Ouro Preto", "Brumadinho", "Tiradentes"],
          "correctAnswer": 2
        },
        {
          "question": "Qual cidade é conhecida por sediar a maior festa junina do Brasil?",
          "options": ["Campina Grande", "Caruaru", "Mossoró", "São Luís"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade pernambucana se localiza o Instituto Ricardo Brennand, conhecido por seu acervo de armas e arte?",
          "options": ["Recife", "Olinda", "Jaboatão dos Guararapes", "Caruaru"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade da Bahia abriga o Farol da Barra, um dos cartões postais do estado?",
          "options": ["Ilhéus", "Porto Seguro", "Salvador", "Lençóis"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual cidade do Rio Grande do Sul ocorre anualmente a Festa da Uva?",
          "options": ["Gramado", "Canela", "Bento Gonçalves", "Caxias do Sul"],
          "correctAnswer": 3
        },
        {
          "question": "Qual cidade de São Paulo é famosa por seus arranha-céus e pela Avenida Paulista?",
          "options": ["Campinas", "Santos", "Guarulhos", "São Paulo"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade catarinense de colonização alemã se realiza a Oktoberfest?",
          "options": ["Joinville", "Blumenau", "Florianópolis", "Brusque"],
          "correctAnswer": 1
        },
        {
          "question": "Qual cidade do Amazonas é um importante polo do ecoturismo e porta de entrada para a Amazônia?",
          "options": ["Manaus", "Parintins", "Tefé", "Manacapuru"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade serrana do estado do Rio de Janeiro se realiza a Bauernfest, a festa do colono alemão?",
          "options": ["Petrópolis", "Teresópolis", "Nova Friburgo", "Visconde de Mauá"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade do Pará é conhecida pela tradicional festa do Círio de Nazaré?",
          "options": ["Santarém", "Belém", "Marabá", "Castanhal"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade mineira se encontra a Igreja de São Francisco de Assis, com obras de Aleijadinho?",
          "options": ["Congonhas", "Mariana", "Ouro Preto", "Diamantina"],
          "correctAnswer": 2
        },
        {
          "question": "Qual cidade do Paraná é conhecida por seu planejamento urbano e pelo Jardim Botânico?",
          "options": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade gaúcha se localiza o Parque Estadual de Aparados da Serra, com o famoso cânion Itaimbezinho?",
          "options": ["Porto Alegre", "Gramado", "Canela", "Cambará do Sul"],
          "correctAnswer": 3
        },
        {
          "question": "Qual cidade do interior de São Paulo é conhecida pela produção de calçados?",
          "options": ["Campinas", "Ribeirão Preto", "Franca", "Sorocaba"],
          "correctAnswer": 2
        },
        {
          "question": "Qual cidade do Ceará é famosa por suas praias e pelo Centro Dragão do Mar de Arte e Cultura?",
          "options": ["Fortaleza", "Jericoacoara", "Canoa Quebrada", "Juazeiro do Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade de Pernambuco se localiza o Alto da Sé, com a Igreja da Sé e o Observatório Astronômico?",
          "options": ["Recife", "Olinda", "Caruaru", "Garanhuns"],
          "correctAnswer": 1
        },
        {
          "question": "Qual cidade de São Paulo é conhecida pela produção de móveis de madeira?",
          "options": ["Embu das Artes", "Brotas", "Lençóis Paulista", "Ribeirão Preto"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade do Mato Grosso se encontra o Parque Nacional da Chapada dos Guimarães?",
          "options": ["Cuiabá", "Rondonópolis", "Sinop", "Chapada dos Guimarães"],
          "correctAnswer": 3
        },
        {
          "question": "Qual cidade mineira é Patrimônio Cultural da UNESCO devido ao seu conjunto arquitetônico barroco?",
          "options": ["Ouro Preto", "Belo Horizonte", "Tiradentes", "Congonhas"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade de Pernambuco é famosa por seus bonecos gigantes durante o Carnaval?",
          "options": ["Recife", "Olinda", "Igarassu", "Garanhuns"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade do Paraná se localizam as Cataratas do Iguaçu?",
          "options": ["Curitiba", "Foz do Iguaçu", "Cascavel", "Ponta Grossa"],
          "correctAnswer": 1
        },
        {
          "question": "Qual cidade do Rio Grande do Sul é conhecida por sua arquitetura em estilo enxaimel?",
          "options": ["Porto Alegre", "Gramado", "Canela", "Nova Petrópolis"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade paulista se realiza anualmente a Bienal Internacional de Arte?",
          "options": ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Agronegócio'?",
          "options": ["Ribeirão Preto", "Uberaba", "Lucas do Rio Verde", "Sorriso"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade está localizado o maior porto da América Latina?",
          "options": ["Santos", "Rio de Janeiro", "Paranaguá", "Itajaí"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é considerada a capital brasileira do vinho?",
          "options": ["Bento Gonçalves", "Garibaldi", "Caxias do Sul", "Farroupilha"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade está localizado o Memorial da América Latina?",
          "options": ["São Paulo", "Brasília", "Rio de Janeiro", "Curitiba"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Terra da Garoa'?",
          "options": ["São Paulo", "Curitiba", "Belo Horizonte", "Porto Alegre"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade está localizada a Universidade Federal de Viçosa, importante centro de estudos agrícolas?",
          "options": ["Viçosa", "Lavras", "Uberlândia", "Juiz de Fora"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional da Cachaça'?",
          "options": ["Salinas", "Paraty", "Piratininga", "Areia"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade está localizado o Parque Tecnológico de São José dos Campos?",
          "options": ["São José dos Campos", "Campinas", "São Carlos", "Taubaté"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Trigo'?",
          "options": ["Castro", "Ponta Grossa", "Guarapuava", "Palmas"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade está localizado o Instituto Butantan?",
          "options": ["São Paulo", "Campinas", "Ribeirão Preto", "Sorocaba"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade está localizado o Centro Histórico de Paraty, Patrimônio Mundial da UNESCO?",
          "options": ["Paraty", "Angra dos Reis", "Ubatuba", "Ilhabela"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional da Soja'?",
          "options": ["Lucas do Rio Verde", "Sorriso", "Rondonópolis", "Dourados"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade está localizado o Museu do Amanhã?",
          "options": ["Rio de Janeiro", "São Paulo", "Belo Horizonte", "Curitiba"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual cidade está localizado o Parque Nacional da Tijuca?",
          "options": ["Rio de Janeiro", "Niterói", "Petrópolis", "Teresópolis"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional da Cerâmica'?",
          "options": ["Pedreira", "Santa Gertrudes", "Porto Ferreira", "Cordeirópolis"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade está localizado o Museu Oscar Niemeyer?",
          "options": ["Curitiba", "Brasília", "São Paulo", "Rio de Janeiro"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Mel'?",
          "options": ["Pindamonhangaba", "Itapetininga", "Arapoti", "Prudentópolis"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade está localizado o Parque das Aves, importante atrativo turístico de Foz do Iguaçu?",
          "options": ["Foz do Iguaçu", "Curitiba", "Gramado", "Campos do Jordão"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional da Uva'?",
          "options": ["Caxias do Sul", "Bento Gonçalves", "Farroupilha", "Garibaldi"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual cidade está localizado o Teatro Amazonas?",
          "options": ["Manaus", "Belém", "Porto Velho", "Rio Branco"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Alho'?",
          "options": ["Itápolis", "São José do Rio Pardo", "Mococa", "Santa Cruz do Rio Pardo"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade está localizado o Museu da Língua Portuguesa?",
          "options": ["São Paulo", "Lisboa", "Rio de Janeiro", "Salvador"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Queijo'?",
          "options": ["Jaguariúna", "Itapira", "Monte Alegre do Sul", "Serro"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade está localizado o Parque Nacional da Serra dos Órgãos?",
          "options": ["Teresópolis", "Petrópolis", "Nova Friburgo", "Guapimirim"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Trator'?",
          "options": ["Ribeirão Preto", "Piracicaba", "São Carlos", "Jaboticabal"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual cidade está localizado o Museu de Ciências e Tecnologia da PUCRS?",
          "options": ["Porto Alegre", "Curitiba", "Florianópolis", "São Leopoldo"],
          "correctAnswer": 0
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Frio'?",
          "options": ["Campos do Jordão", "Urubici", "Bom Jardim da Serra", "São Joaquim"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual cidade está localizado o Parque Nacional de Brasília?",
          "options": ["Goiânia", "Brasília", "Cuiabá", "Palmas"],
          "correctAnswer": 1
        },
        {
          "question": "Qual cidade é conhecida como 'Capital Nacional do Basquete'?",
          "options": ["Franca", "Bauru", "São José dos Campos", "Rio Claro"],
          "correctAnswer": 0
        }
      ]
    },
    {
      "category": "biomas",
      "questions": [
        {
          "question": "Qual bioma brasileiro possui a maior bacia hidrográfica do mundo?",
          "options": ["Mata Atlântica", "Cerrado", "Amazônia", "Pantanal"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma é considerado um 'hotspot' de biodiversidade mundial, apesar de sua área reduzida?",
          "options": ["Pampa", "Pantanal", "Mata Atlântica", "Caatinga"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma apresenta adaptações como folhas pequenas e raízes profundas para sobreviver em condições de seca?",
          "options": ["Amazônia", "Caatinga", "Pampa", "Cerrado"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma é influenciado pelo ciclo de cheias e secas dos rios, criando um ambiente único para a fauna e flora?",
          "options": ["Cerrado", "Pantanal", "Mata Atlântica", "Pampa"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma brasileiro tem solos geralmente pobres em nutrientes e ácidos, com adaptações vegetais para essa condição?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Caatinga"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma é caracterizado pela presença de gramíneas, herbáceas e arbustos baixos, com ocorrência de invernos frios?",
          "options": ["Pantanal", "Pampa", "Cerrado", "Mata Atlântica"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma abriga a maior concentração de espécies endêmicas de primatas no Brasil?",
          "options": ["Amazônia", "Cerrado", "Mata Atlântica", "Pantanal"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma brasileiro possui uma grande variedade de formações savânicas?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Caatinga"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma apresenta um período seco bem definido, com incêndios naturais que fazem parte de sua dinâmica ecológica?",
          "options": ["Pampa", "Pantanal", "Cerrado", "Mata Atlântica"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma é conhecido por suas formações rochosas e vegetação adaptada a solos rasos e pedregosos?",
          "options": ["Amazônia", "Mata Atlântica", "Caatinga", "Pampa"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma desempenha um papel crucial na manutenção do equilíbrio hídrico de importantes bacias hidrográficas do Brasil?",
          "options": ["Caatinga", "Amazônia", "Pampa", "Cerrado"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma tem sido historicamente muito explorado devido à fertilidade de seus solos para a agricultura?",
          "options": ["Pantanal", "Pampa", "Cerrado", "Mata Atlântica"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma abriga o tatu-canastra, um dos maiores tatus do mundo?",
          "options": ["Amazônia", "Cerrado", "Pantanal", "Mata Atlântica"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma é caracterizado pela presença de pinheiros-brasileiros?",
          "options": ["Mata Atlântica", "Pampa", "Cerrado", "Mata de Araucárias"],
          "correctAnswer": 3
        },
        {
          "question": "Qual bioma tem sofrido intensa fragmentação devido à urbanização e à agricultura, ameaçando sua biodiversidade?",
          "options": ["Caatinga", "Amazônia", "Mata Atlântica", "Pampa"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma apresenta uma grande diversidade de orquídeas e bromélias?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Caatinga"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma é marcado por longos períodos de estiagem e rios intermitentes?",
          "options": ["Pampa", "Pantanal", "Cerrado", "Caatinga"],
          "correctAnswer": 3
        },
        {
          "question": "Qual bioma é o habitat de diversas espécies de felinos, como a onça-parda e o gato-maracajá?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pampa"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma apresenta uma grande variedade de espécies de aves, muitas delas migratórias?",
          "options": ["Caatinga", "Cerrado", "Pampa", "Mata Atlântica"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma é fundamental para a proteção de nascentes e a qualidade da água em várias regiões do Brasil?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pampa"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma possui a maior área contínua de floresta tropical do planeta?",
          "options": ["Caatinga", "Amazônia", "Mata Atlântica", "Pantanal"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma apresenta solos ricos em alumínio, o que influencia a vegetação local?",
          "options": ["Pampa", "Pantanal", "Cerrado", "Caatinga"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma é o lar de diversas espécies de peixes pulmonados?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
          "correctAnswer": 3
        },
        {
          "question": "Qual bioma apresenta uma grande variedade de adaptações vegetais para resistir a longos períodos de alagamento?",
          "options": ["Caatinga", "Cerrado", "Pampa", "Pantanal"],
          "correctAnswer": 3
        },
        {
          "question": "Qual bioma tem sofrido grande pressão devido à expansão da pecuária e ao desmatamento, alterando sua biodiversidade original?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pampa"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma possui a maior diversidade de espécies de árvores por hectare no mundo?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se encontra o maior sistema de cavernas quartzíticas do mundo?",
          "options": ["Cerrado", "Caatinga", "Amazônia", "Pampa"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma possui formações vegetais conhecidas como 'murundus'?",
          "options": ["Pantanal", "Cerrado", "Amazônia", "Caatinga"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma apresenta a maior diversidade de peixes de água doce do planeta?",
          "options": ["Pantanal", "Amazônia", "Mata Atlântica", "Cerrado"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies de plantas lenhosas por área?",
          "options": ["Amazônia", "Caatinga", "Cerrado", "Mata Atlântica"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma possui a maior extensão de manguezais do Brasil?",
          "options": ["Amazônia", "Mata Atlântica", "Pantanal", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se desenvolve a vegetação conhecida como 'carrasco'?",
          "options": ["Cerrado", "Caatinga", "Pampa", "Amazônia"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma possui a maior diversidade de abelhas do mundo?",
          "options": ["Cerrado", "Amazônia", "Mata Atlântica", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies endêmicas de anfíbios?",
          "options": ["Pantanal", "Amazônia", "Cerrado", "Mata Atlântica"],
          "correctAnswer": 3
        },
        {
          "question": "Qual bioma possui formações vegetais conhecidas como 'veredas'?",
          "options": ["Pampa", "Pantanal", "Caatinga", "Cerrado"],
          "correctAnswer": 3
        },
        {
          "question": "Em qual bioma se desenvolve a vegetação conhecida como 'restinga'?",
          "options": ["Cerrado", "Amazônia", "Mata Atlântica", "Pantanal"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma possui a maior diversidade de borboletas do Brasil?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies endêmicas de aves?",
          "options": ["Mata Atlântica", "Amazônia", "Cerrado", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma possui formações vegetais conhecidas como 'candeais'?",
          "options": ["Cerrado", "Caatinga", "Pampa", "Pantanal"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual bioma se desenvolve a vegetação conhecida como 'campo rupestre'?",
          "options": ["Cerrado", "Amazônia", "Mata Atlântica", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma possui a maior diversidade de morcegos do mundo?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies endêmicas de répteis?",
          "options": ["Caatinga", "Amazônia", "Cerrado", "Mata Atlântica"],
          "correctAnswer": 3
        },
        {
          "question": "Qual bioma possui formações vegetais conhecidas como 'tabuleiros'?",
          "options": ["Caatinga", "Cerrado", "Mata Atlântica", "Pampa"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual bioma se desenvolve a vegetação conhecida como 'floresta ombrófila'?",
          "options": ["Mata Atlântica", "Amazônia", "Cerrado", "Pantanal"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma possui a maior diversidade de peixes endêmicos do Brasil?",
          "options": ["Mata Atlântica", "Amazônia", "Cerrado", "Pantanal"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies endêmicas de mamíferos?",
          "options": ["Mata Atlântica", "Amazônia", "Cerrado", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma possui formações vegetais conhecidas como 'brejos de altitude'?",
          "options": ["Caatinga", "Cerrado", "Mata Atlântica", "Pampa"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual bioma se desenvolve a vegetação conhecida como 'floresta estacional'?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
          "correctAnswer": 2
        },
        {
          "question": "Qual bioma possui a maior diversidade de formigas do mundo?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies endêmicas de peixes?",
          "options": ["Mata Atlântica", "Amazônia", "Cerrado", "Pantanal"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual bioma se desenvolve a vegetação conhecida como 'floresta de galeria'?",
          "options": ["Cerrado", "Amazônia", "Mata Atlântica", "Caatinga"],
          "correctAnswer": 0
        },
        {
          "question": "Qual bioma possui a maior diversidade de aranhas do mundo?",
          "options": ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual bioma se encontra o maior número de espécies endêmicas de insetos?",
          "options": ["Mata Atlântica", "Amazônia", "Cerrado", "Caatinga"],
          "correctAnswer": 1
        },
        {
          "question": "Qual bioma possui formações vegetais conhecidas como 'campos de murundus'?",
          "options": ["Pampa", "Pantanal", "Caatinga", "Cerrado"],
          "correctAnswer": 3
        }
      ]
    },
    {
      "category": "regiões",
      "questions": [
        {
          "question": "Qual região brasileira foi palco de importantes movimentos de resistência durante o período colonial, como a Confederação do Equador?",
          "options": ["Nordeste", "Sudeste", "Norte", "Sul"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região concentra a maior parte das reservas indígenas do Brasil?",
          "options": ["Nordeste", "Sudeste", "Norte", "Centro-Oeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira possui a menor taxa de analfabetismo?",
          "options": ["Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região é conhecida por suas missões jesuíticas, importantes sítios históricos reconhecidos pela UNESCO?",
          "options": ["Sul", "Sudeste", "Centro-Oeste", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região abriga a maior ilha fluvial do mundo, a Ilha do Bananal?",
          "options": ["Norte", "Nordeste", "Centro-Oeste", "Sudeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira apresenta a maior diversidade de ecossistemas, incluindo a Mata dos Cocais e a Zona da Mata?",
          "options": ["Sul", "Sudeste", "Nordeste", "Centro-Oeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual a região que historicamente recebeu o maior número de imigrantes europeus no Brasil?",
          "options": ["Norte", "Nordeste", "Sudeste", "Sul"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região concentra os maiores polos tecnológicos e de pesquisa do país?",
          "options": ["Norte", "Nordeste", "Sudeste", "Sul"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira possui a maior influência da cultura africana em sua culinária, música e religião?",
          "options": ["Sul", "Sudeste", "Norte", "Nordeste"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região concentra a maior produção de energia hidrelétrica do Brasil?",
          "options": ["Nordeste", "Sudeste", "Sul", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região brasileira é um importante corredor ecológico, ligando a Amazônia ao Pantanal?",
          "options": ["Norte", "Nordeste", "Centro-Oeste", "Sul"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região é conhecida por suas festas religiosas como o Círio de Nazaré?",
          "options": ["Sul", "Sudeste", "Nordeste", "Norte"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região apresenta a maior área de conservação ambiental do Brasil?",
          "options": ["Nordeste", "Sudeste", "Norte", "Sul"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira possui a menor participação no Produto Interno Bruto (PIB) do país?",
          "options": ["Norte", "Nordeste", "Sul", "Centro-Oeste"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região é conhecida pela produção de erva-mate?",
          "options": ["Nordeste", "Sudeste", "Sul", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira apresenta os maiores desafios em relação à segurança alimentar e acesso à água?",
          "options": ["Norte", "Nordeste", "Sudeste", "Sul"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região é um importante centro de produção de minério de ferro e outros recursos minerais?",
          "options": ["Nordeste", "Sudeste", "Centro-Oeste", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região é conhecida por suas tradições juninas, com destaque para o Bumba Meu Boi?",
          "options": ["Sul", "Sudeste", "Nordeste", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira abriga a maior parte do Aquífero Guarani?",
          "options": ["Norte", "Nordeste", "Centro-Oeste", "Sul"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região tem como um de seus estilos musicais tradicionais o maracatu?",
          "options": ["Sul", "Sudeste", "Nordeste", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira possui o maior número de municípios?",
          "options": ["Norte", "Nordeste", "Sudeste", "Sul"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região é conhecida pela produção de maçã e uva de mesa?",
          "options": ["Nordeste", "Sudeste", "Sul", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região brasileira apresenta a menor temperatura média anual?",
          "options": ["Norte", "Nordeste", "Sul", "Centro-Oeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região tem como um de seus importantes rios o Tocantins?",
          "options": ["Sul", "Sudeste", "Norte", "Nordeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região concentra a maior parte da população rural do país?",
          "options": ["Norte", "Nordeste", "Sudeste", "Sul"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região possui o maior IDH (Índice de Desenvolvimento Humano) do Brasil?",
          "options": ["Sudeste", "Sul", "Centro-Oeste", "Nordeste"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual região está localizado o Parque Nacional da Chapada Diamantina?",
          "options": ["Norte", "Sudeste", "Centro-Oeste", "Nordeste"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região é a maior produtora de petróleo do Brasil?",
          "options": ["Sul", "Nordeste", "Norte", "Sudeste"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região possui o maior rebanho bovino do país?",
          "options": ["Nordeste", "Norte", "Centro-Oeste", "Sudeste"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual região está localizada a maior parte do bioma Caatinga?",
          "options": ["Nordeste", "Norte", "Sudeste", "Centro-Oeste"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região possui a maior densidade demográfica do Brasil?",
          "options": ["Sul", "Sudeste", "Nordeste", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual região está localizado o Distrito Federal?",
          "options": ["Sudeste", "Centro-Oeste", "Nordeste", "Sul"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região é a maior produtora de soja do Brasil?",
          "options": ["Sudeste", "Sul", "Centro-Oeste", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual região está localizado o maior porto da América Latina?",
          "options": ["Sudeste", "Sul", "Nordeste", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região possui o maior número de universidades federais?",
          "options": ["Nordeste", "Sudeste", "Sul", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual região está localizada a maior parte do bioma Pantanal?",
          "options": ["Sudeste", "Norte", "Nordeste", "Centro-Oeste"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região possui a maior extensão litorânea do Brasil?",
          "options": ["Sul", "Sudeste", "Nordeste", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual região está localizada a maior parte do bioma Cerrado?",
          "options": ["Nordeste", "Centro-Oeste", "Sudeste", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região possui o maior número de capitais estaduais litorâneas?",
          "options": ["Nordeste", "Sudeste", "Sul", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual região está localizada a maior parte do bioma Mata Atlântica?",
          "options": ["Sudeste", "Sul", "Nordeste", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região possui o maior número de estados?",
          "options": ["Sudeste", "Norte", "Nordeste", "Sul"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual região está localizada a maior parte do bioma Pampa?",
          "options": ["Centro-Oeste", "Sudeste", "Sul", "Nordeste"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região possui a maior produção de energia eólica do Brasil?",
          "options": ["Sul", "Nordeste", "Sudeste", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual região está localizado o maior parque industrial do país?",
          "options": ["Centro-Oeste", "Sul", "Nordeste", "Sudeste"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região possui o maior número de municípios com mais de 500 mil habitantes?",
          "options": ["Sudeste", "Nordeste", "Sul", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual região está localizada a maior parte da Floresta Amazônica brasileira?",
          "options": ["Nordeste", "Norte", "Centro-Oeste", "Sudeste"],
          "correctAnswer": 1
        },
        {
          "question": "Qual região possui o maior número de aeroportos internacionais?",
          "options": ["Sudeste", "Nordeste", "Sul", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Em qual região está localizada a maior parte da produção de café do Brasil?",
          "options": ["Centro-Oeste", "Nordeste", "Sudeste", "Sul"],
          "correctAnswer": 2
        },
        {
          "question": "Qual região possui o maior número de rodovias federais?",
          "options": ["Sul", "Nordeste", "Sudeste", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual região está localizada a maior parte da produção de cana-de-açúcar do Brasil?",
          "options": ["Sul", "Nordeste", "Centro-Oeste", "Sudeste"],
          "correctAnswer": 3
        },
        {
          "question": "Qual região possui o maior número de portos marítimos?",
          "options": ["Sudeste", "Nordeste", "Sul", "Norte"],
          "correctAnswer": 1
        },
        {
          "question": "Em qual região está localizada a maior parte da produção de laranja do Brasil?",
          "options": ["Sudeste", "Nordeste", "Sul", "Centro-Oeste"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região possui o maior número de usinas hidrelétricas?",
          "options": ["Sudeste", "Nordeste", "Sul", "Norte"],
          "correctAnswer": 2
        },
        {
          "question": "Em qual região está localizada a maior parte da produção de carne bovina do Brasil?",
          "options": ["Centro-Oeste", "Sudeste", "Sul", "Norte"],
          "correctAnswer": 0
        },
        {
          "question": "Qual região possui o maior número de linhas de metrô?",
          "options": ["Sudeste", "Nordeste", "Sul", "Norte"],
          "correctAnswer": 0
        }
      ]
    }
  ];

  private usedQuestions: Map<string, Set<number>> = new Map();

  constructor() {
    this.getAllCategories().forEach(category => {
      this.usedQuestions.set(category.toLowerCase(), new Set());
    });
  }

  getQuestions(category: string, numQuestions: number): Question[] | undefined {
    const lowerCategory = category.toLowerCase();
    const categoryData = this.quizQuestions.find(cat => cat.category === lowerCategory);

    if (!categoryData) return undefined;
 
    const usedQuestionsSet = this.usedQuestions.get(lowerCategory) || new Set();

    const availableQuestions = categoryData.questions.filter(
      (_, index) => !usedQuestionsSet.has(index)
    );

    if (availableQuestions.length < numQuestions) {
      usedQuestionsSet.clear();
      return this.getQuestions(category, numQuestions); 
    }

    const shuffled = this.shuffle([...availableQuestions]);
    const selectedQuestions = shuffled.slice(0, numQuestions);

    selectedQuestions.forEach(question => {
      const questionIndex = categoryData.questions.indexOf(question);
      if (questionIndex !== -1) {
        usedQuestionsSet.add(questionIndex);
      }
    });

    return selectedQuestions;
  }

  resetUsedQuestions(category?: string): void {
    if (category) {
      const lowerCategory = category.toLowerCase();
      this.usedQuestions.get(lowerCategory)?.clear();
    } else {
      this.usedQuestions.forEach(set => set.clear());
    }
  }

  private shuffle(array: Question[]): Question[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getAllCategories(): string[] {
    return this.quizQuestions.map(cat => cat.category);
  }

}