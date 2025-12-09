import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [achievements, setAchievements] = useState([
    "Глубокий анализ целевой аудитории и конкурентов",
    "Разработка уникальной контент-стратегии",
    "Таргетированная реклама с А/Б тестированием",
    "Постоянная оптимизация на основе аналитики",
    "Построение активного комьюнити вокруг бренда"
  ]);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditValue(achievements[index]);
  };

  const handleSave = (index: number) => {
    const newAchievements = [...achievements];
    newAchievements[index] = editValue;
    setAchievements(newAchievements);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SMM Portfolio
          </h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('results')} className="text-sm font-medium hover:text-primary transition-colors">
              Результаты
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                <Icon name="Sparkles" size={16} className="mr-1" />
                5 лет опыта
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Ваш бизнес
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  растёт ×2
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                SMM-менеджер, который превращает ваши соцсети в мощный инструмент продаж. 
                Благодаря моей работе выручка удваивается, а охваты растут постоянно.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('results')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Результаты
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/files/пор1.jpg" 
                alt="SMM Manager"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-slide-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">×2</p>
                    <p className="text-sm text-muted-foreground">выручка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">
              <Icon name="User" size={16} className="mr-1" />
              Обо мне
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Экспертиза, которой доверяют</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              5 лет превращаю социальные сети в источник стабильного роста для бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Target",
                title: "Стратегия роста",
                description: "Разрабатываю индивидуальные стратегии продвижения, которые приводят к реальным результатам"
              },
              {
                icon: "BarChart3",
                title: "Аналитика данных",
                description: "Глубокий анализ метрик и оптимизация каждой кампании для максимальной эффективности"
              },
              {
                icon: "Zap",
                title: "Контент, который продаёт",
                description: "Создаю контент, который не просто набирает лайки, а конвертирует аудиторию в клиентов"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
              <Icon name="Award" size={16} className="mr-1" />
              Результаты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цифры говорят сами за себя</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Измеримые достижения, которые влияют на ваш бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "TrendingUp", value: "×2", label: "Рост выручки", color: "from-primary to-secondary" },
              { icon: "Users", value: "+350%", label: "Охваты", color: "from-secondary to-accent" },
              { icon: "Heart", value: "+500%", label: "Вовлечённость", color: "from-accent to-primary" },
              { icon: "Target", value: "98%", label: "Точность таргета", color: "from-primary to-accent" }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon name={stat.icon} size={40} className="text-white" />
                </div>
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>

          <Card className="p-12 bg-white animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Как я достигаю результатов</h3>
                <ul className="space-y-4">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={16} className="text-primary" />
                      </div>
                      {editingIndex === index ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="flex-1 text-lg border-2 border-primary rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSave(index)}
                            className="px-3 py-1 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <Icon name="Check" size={18} />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                          >
                            <Icon name="X" size={18} />
                          </button>
                        </div>
                      ) : (
                        <span
                          className="text-lg cursor-pointer hover:text-primary transition-colors flex-1 relative"
                          onClick={() => handleEdit(index)}
                        >
                          {item}
                          <Icon
                            name="Edit2"
                            size={16}
                            className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                          />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl"></div>
                <div className="relative p-8">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">Instagram</span>
                        <Icon name="Instagram" size={24} className="text-secondary" />
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-[95%] animate-gradient bg-[length:200%_auto]"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">95% достижение целей</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">VK</span>
                        <Icon name="MessageCircle" size={24} className="text-primary" />
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-accent w-[88%] animate-gradient bg-[length:200%_auto]"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">88% достижение целей</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">Telegram</span>
                        <Icon name="Send" size={24} className="text-accent" />
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-primary w-[92%] animate-gradient bg-[length:200%_auto]"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">92% достижение целей</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-0">
              <Icon name="Briefcase" size={16} className="mr-1" />
              Портфолио
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Примеры работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные кейсы с измеримыми результатами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Косметология — Карина Коростылева",
                industry: "Красота и здоровье",
                metrics: [
                  { label: "Рост продаж", value: "×2.5", icon: "TrendingUp" },
                  { label: "Подписчики", value: "+450%", icon: "Users" },
                  { label: "Охваты", value: "+380%", icon: "Eye" }
                ],
                description: "Комплексное продвижение косметологического кабинета в Instagram и VK. Разработка контент-стратегии, таргетированная реклама, работа с блогерами.",
                tags: ["Instagram", "VK", "Таргет"],
                color: "from-pink-500 to-purple-500"
              },
              {
                title: "Мебель под заказ — Дмитрий Коробёв",
                industry: "Производство",
                metrics: [
                  { label: "Заявки", value: "+320%", icon: "MessageSquare" },
                  { label: "Средний чек", value: "+45%", icon: "DollarSign" },
                  { label: "Повторные заказы", value: "+180%", icon: "RefreshCw" }
                ],
                description: "Построение бренда мебельной мастерской с нуля. Запуск рекламных кампаний, создание визуального контента, воронка продаж через соцсети.",
                tags: ["Instagram", "Telegram", "Контент"],
                color: "from-amber-500 to-orange-500"
              },
              {
                title: "Автомойка — Виталий Рыбяков",
                industry: "Автосервис",
                metrics: [
                  { label: "Новые клиенты", value: "+250%", icon: "UserPlus" },
                  { label: "Выручка", value: "×2", icon: "TrendingUp" },
                  { label: "Лояльность", value: "+90%", icon: "Heart" }
                ],
                description: "SMM-стратегия для автомойки: геотаргетинг, система лояльности через соцсети, UGC-контент от клиентов, акции и конкурсы.",
                tags: ["VK", "Instagram", "Геотаргет"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Онлайн-школа иностранных языков",
                industry: "Образование",
                metrics: [
                  { label: "Студенты", value: "+400%", icon: "GraduationCap" },
                  { label: "Конверсия", value: "+65%", icon: "Target" },
                  { label: "ROI рекламы", value: "×4.2", icon: "BarChart3" }
                ],
                description: "Масштабирование онлайн-школы: запуск воронок продаж, вебинары, email-маркетинг через соцсети, партнёрские программы с блогерами.",
                tags: ["Instagram", "YouTube", "Вебинары"],
                color: "from-emerald-500 to-teal-500"
              }
            ].map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.industry}
                      </Badge>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <Icon name="Sparkles" size={24} className="text-white" />
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={metric.icon} size={20} className="text-primary" />
                        </div>
                        <p className="text-xl font-bold text-primary mb-1">{metric.value}</p>
                        <p className="text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
              onClick={() => scrollToSection('contact')}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Обсудить ваш проект
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-0">
              <Icon name="MessageSquare" size={16} className="mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории успеха от довольных партнёров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Карина Коростылева",
                role: "косметолог",
                text: "За 6 месяцев работы продажи выросли в 2.5 раза! Профессиональный подход к стратегии и внимание к деталям впечатлили. Рекомендую всем, кто хочет реальных результатов.",
                rating: 5
              },
              {
                name: "Дмитрий Короблёв",
                role: "мебель под заказ",
                text: "Наконец-то Instagram начал работать на нас! Запись клиентов увеличилась на 80%, охваты растут каждую неделю. Спасибо за качественную работу и регулярную аналитику.",
                rating: 5
              },
              {
                name: "Виталий Рыбяков",
                role: "автомойка",
                text: "Пришли с полностью мёртвыми соцсетями. Через 4 месяца — активное комьюнити, постоянный поток заявок и рост узнаваемости бренда. Результат превзошёл все ожидания!",
                rating: 5
              }
            ].map((review, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed text-muted-foreground italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto max-w-4xl text-center text-white animate-fade-in">
          <Icon name="Rocket" size={64} className="mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Готовы удвоить свою выручку?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Давайте обсудим, как я могу помочь вашему бизнесу расти через социальные сети
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
              asChild
            >
              <a href="https://vk.com/id330256589" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={24} className="mr-2" />
                @id330256589
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+79009717308">
                <Icon name="Phone" size={24} className="mr-2" />
                +7 (900) 971-73-08
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://vk.com/id330256589"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <Icon name="MessageCircle" size={24} />
            </a>
            <a
              href="tel:+79009717308"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              <Icon name="Phone" size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-sm opacity-70">
          © 2024 SMM Portfolio. Все права защищены.
        </p>
      </footer>
    </div>
  );
};

export default Index;