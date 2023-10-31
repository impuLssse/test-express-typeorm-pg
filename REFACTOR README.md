- Удалил body-parser - так как он уже в express (bodyParser was added back to Express in release 4.16.0)
- Установил @types/node @types/express ts-node typescript в DevDepends
- Сделаем npx tsc --init
- Законтрактил маршруты с помощью libs/router.contract.ts
- Сделал DTO
- Включим возможность использования декораторов
- Конфиг окружения настривается внутри .env.dev || .env.prod (пример .env.example)

* Бизнес модели лежат src/business
* Маршруты лежат src/routes
* Модели БД лежат src/models
* Конфиг приложения express лежит в контракте libs/contracts/RouterContract
* При создание order раньше нужно было указывать id, но это неправильно, поскольку orderId будет сам генерироваться при создании
* Put лучше чем Patch, потому что мы обновляем запись, тем самым приносим обновленную запись
* Техдолгом будет написать юнит тесты на функции и интеграционные на эндпоинты
* В будущем по метрикам можно прикрутить трейс логгер - ZIPKIN, логгер - WINSTON, метрики - Grafana
* Swagger, eslint нужны!
* В будущем хотелось бы вынести все в сервисы (уровни: контроллер, сервис, репозиторий)
* Если помечтать то можно намечтать Dependency Injection
