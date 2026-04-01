export const projectTranslations = {
  en: {
    vcloud: {
      title: "VCloud",
      short: "Cloud storage platform with user authentication, file management, and admin controls",
      description: [
        "VCloud is a cloud storage application that allows users to upload, organize and manage files through a web interface.",
        "The platform includes authentication, role-based access and an administrative interface for managing users and their data.",
        "The project demonstrates a full-stack architecture with a REST API backend and a React SPA frontend communicating through HTTP requests.",
      ],
      highlights: [
        "JWT authentication and access control",
        "File upload and storage workflow ",
        "Role-based permissions (user / admin)",
        "Admin tools for managing user accounts and their files",
      ],
    },
    estore: {
      title: "E-commerce Store",
      short: "Single-page e-commerce application with product catalog, shopping cart and order workflow",
      description: [
      "Internet Store is a single-page e-commerce application for browsing products, managing a shopping cart and placing orders through a web interface.",
      "The application implements client-side routing, global state management and asynchronous API communication for loading products, categories and order data.",
      "The project demonstrates a typical front-end architecture for an online store, including product catalog browsing, search functionality and cart management with persistent storage."
      ],
      highlights: [
      "Product catalog with categories and search",
      "Client-side routing with React Router",
      "Global state management using Redux / Thunk",
      "Shopping cart with LocalStorage persistence",
      "Order submission through API requests",
      "Loading states and error handling for network requests"
      ]
    },
    helpdesk: {
      title: "HelpDesk",
      short: "Task management application with REST API integration for creating, updating and tracking support tickets",
      description: [
      "HelpDesk is a simplified ticket management system designed to manage tasks through a web interface.",
      "The application communicates with a backend server to fetch, create, update and delete tickets using REST API requests.",
      "The interface supports modal forms for editing tasks, status tracking and interactive updates of ticket state."
      ],
      highlights: [
      "Fetching and displaying tickets from a backend server",
      "Creating, editing and deleting tickets via REST API",
      "Viewing full ticket descriptions on demand",
      "Task completion tracking with visual status indicators",
      "Modal dialogs for editing and confirmation actions",
      "Client-server interaction with asynchronous requests",
      "Loading states and error handling for network requests"
      ]
    },
    cardvalidator: {
      title: "Credit Card Validator",
      short: "Interactive widget for validating credit card numbers using the Luhn algorithm with card type detection",
      description: [
      "Credit Card Validator is a JavaScript widget that validates bank card numbers using the Luhn algorithm and identifies the payment system based on card number prefixes.",
      "The interface highlights the corresponding card brand icon and provides feedback for valid, invalid, or incorrectly formatted input.",
      "The UI is generated dynamically through JavaScript without static HTML markup."
      ],
      highlights: [
      "Luhn algorithm implementation for card number validation",
      "Payment system detection by card number prefix",
      "Dynamic UI feedback and card brand highlighting",
      "Validation for incorrect characters and card length",
      "Modular architecture separating validation logic and UI",
      "Unit testing of validation logic with Jest",
      "E2E testing of user interaction using Puppeteer"
      ]
    },
    goblingame: {
      title: "Goblin Game",
      short: "Interactive browser game where players eliminate a goblin appearing randomly on the grid",
      description: [
      "Goblin Game is a small browser-based reaction game where the player must hit a goblin that appears in random cells on a 4×4 grid.",
      "The game logic manages dynamic rendering of the board, random goblin movement, score tracking and win/lose conditions.",
      "A custom hammer cursor and click animation create a simple interactive game experience."
      ],
      highlights: [
      "Dynamic 4×4 game board generation",
      "Random goblin movement across grid cells",
      "Score tracking for hits and misses",
      "Game state management with win/lose conditions",
      "Custom hammer cursor and click animation",
      "Interactive UI updates based on player actions"
      ]
    },
    worldclock: {
      title: "World Clocks",
      short: "Interactive React application for displaying and managing clocks for multiple time zones",
      description: [
      "World Clocks is a React application that allows users to add and display clocks for different cities around the world.",
      "Each clock is created using a custom time zone offset relative to Greenwich (UTC) and updates in real time.",
      "The interface supports dynamic creation and removal of clocks, with proper cleanup of timers to prevent memory leaks."
      ],
      highlights: [
      "Dynamic creation of clocks with custom UTC offsets",
      "Real-time clock updates using timer-based state updates",
      "Adding and removing clocks through interactive UI controls",
      "Automatic cleanup of timers when components are removed",
      "Responsive layout built with CSS Grid and Flexbox",
      "Reusable React components for clock management"
      ]
    },
    kanban: {
      title: "Kanban Board",
      short: "Interactive task management board with drag-and-drop cards and persistent client-side state",
      description: [
      "Kanban Board is a lightweight task management application inspired by kanban workflow systems.",
      "The interface consists of three workflow columns where tasks can be created, moved between stages and removed using drag-and-drop interactions.",
      "The application manages its state on the client side and persists board data in LocalStorage, allowing tasks and their positions to remain after page reload."
      ],
      highlights: [
      "Drag-and-drop task movement between workflow columns",
      "Dynamic creation and deletion of task cards",
      "Visual placeholder during drag operations",
      "Client-side state management with LocalStorage persistence",
      "Board rebuilt from state after page reload",
      "Interactive kanban-style workflow interface"
      ],
    },
    fileAPI: {
      title: "RBAC File Storage API",
      short: "Backend service for file storage with role-based access control and dynamic permission management.",
      description: [
      "RBAC File Storage API is a backend service for managing user files with a flexible role-based access control system.",
      "The application provides authentication, file management operations and storage statistics, while enforcing access rules at both resource and object levels.",
      "The access control system is implemented through database-driven rules, allowing dynamic permission changes without code modifications."
      ],
      highlights: [
      "Role-Based Access Control (RBAC) with dynamic permission management",
      "Access validation on both resource and object levels",
      "File operations: upload, delete, rename, download",
      "User management and role assignment via API",
      "Storage statistics (file count and total size)",
      "Database-driven permissions without code changes",
      "Secure authentication using sessions and CSRF protection"
      ],
    }
  },

  ru: {
    vcloud: {
      title: "VCloud",
      short: "Облачное хранилище файлов с авторизацией, управлением файлами и администрированием пользователей",
      description: [
        "VCloud - облачное хранилище файлов с веб-интерфейсом для загрузки, организации и управления файлами.",
        "Платформа включает аутентификацию, ролевую модель доступа и административный интерфейс для управления пользователями.",
        "Система построена по full-stack архитектуре: REST API backend и React SPA frontend , взаимодействующие через HTTP API.",
      ],
      highlights: [
        "JWT-аутентификация и контроль доступа",
        "Загрузка и управление файлами",
        "Роли пользователей (user / admin)",
        "Административная панель для управления пользователями и их файлами",
      ],
    },
    estore: {
      title: "E-commerce Store",
      short: "SPA-приложение интернет-магазина с каталогом товаров, корзиной и оформлением заказа",
      description: [
        "Internet Store - это SPA-приложение интернет-магазина для просмотра каталога товаров, управления корзиной и оформления заказов через веб-интерфейс.",
        "В приложении реализованы клиентский роутинг, глобальное состояние и асинхронные сетевые запросы для загрузки товаров, категорий и отправки заказа.",
        "Проект отражает типичную архитектуру фронтенда интернет-магазина: каталог товаров, поиск, страница товара и корзина с сохранением состояния."
      ],
      highlights: [
        "Каталог товаров с категориями и поиском",
        "Клиентский роутинг с использованием React Router",
        "Глобальное состояние приложения на Redux / Thunk",
        "Корзина с сохранением данных в LocalStorage",
        "Оформление заказа через REST API",
        "Индикаторы загрузки и обработка сетевых ошибок",
        "Loading indicators and error handling",
      ]
    },
    cardvalidator: {
      title: "Credit Card Validator",
      short: "Виджет проверки номеров банковских карт по алгоритму Луна с определением платёжной системы",
      description: [
      "Credit Card Validator - это JavaScript-виджет для проверки номеров банковских карт по алгоритму Луна и определения платёжной системы по префиксу номера.",
      "Интерфейс автоматически подсвечивает соответствующую иконку платёжной системы и отображает сообщения об успешной проверке или ошибке ввода.",
      "Пользовательский интерфейс полностью создаётся через JavaScript без статической HTML-разметки."
      ],
      highlights: [
      "Реализация алгоритма Луна для проверки номеров карт",
      "Определение платёжной системы по префиксу номера",
      "Динамическая подсветка иконок платёжных систем",
      "Валидация длины номера и недопустимых символов",
      "Модульная архитектура с разделением логики валидации и UI",
      "Юнит-тестирование логики с использованием Jest",
      "E2E-тестирование пользовательского интерфейса с Puppeteer"
      ]
    },
    goblingame: {
      title: "Goblin Game",
      short: "Интерактивная браузерная игра, в которой нужно ударить гоблина, появляющегося в случайных клетках поля",
      description: [
      "Goblin Game - это небольшая браузерная игра на реакцию, в которой игрок должен ударить гоблина, появляющегося в случайных клетках игрового поля 4×4.",
      "Игровая логика управляет динамической генерацией поля, случайным перемещением гоблина, подсчётом попаданий и промахов, а также условиями победы и поражения.",
      "Кастомный курсор в виде молотка и анимация удара создают простой интерактивный игровой интерфейс."
      ],
      highlights: [
      "Динамическая генерация игрового поля 4×4",
      "Случайное перемещение гоблина по клеткам",
      "Подсчёт попаданий и промахов игрока",
      "Логика завершения игры (победа или поражение)",
      "Кастомный курсор-молоток и анимация удара",
      "Интерактивное обновление интерфейса в процессе игры"
      ]
    },
    helpdesk: {
      title: "HelpDesk",
      short: "Веб-приложение управления задачами с REST API для создания, редактирования и отслеживания тикетов",
      description: [
      "HelpDesk - это упрощённая система управления тикетами, позволяющая работать с задачами через веб-интерфейс.",
      "Приложение взаимодействует с сервером через REST API для получения, создания, редактирования и удаления тикетов.",
      "Интерфейс поддерживает модальные формы, просмотр полного описания задач и интерактивное обновление их статуса."
      ],
      highlights: [
      "Получение и отображение тикетов с сервера",
      "Создание, редактирование и удаление тикетов через REST API",
      "Просмотр полного описания тикета по клику",
      "Отслеживание статуса выполнения задачи",
      "Модальные окна для редактирования и подтверждения действий",
      "Асинхронное взаимодействие клиента с сервером"
      ]
    },
    worldclock: {
      title: "Мировые часы",
      short: "React-приложение для отображения и управления часами в разных часовых поясах",
      description: [
      "«Мировые часы» - это React-приложение, позволяющее добавлять и отображать часы для различных городов мира.",
      "Каждые часы создаются на основе смещения часового пояса относительно Гринвича (UTC) и обновляются в режиме реального времени.",
      "Интерфейс поддерживает динамическое добавление и удаление часов с корректной очисткой таймеров для предотвращения утечек памяти."
      ],
      highlights: [
      "Динамическое создание часов с указанием смещения UTC",
      "Обновление времени в реальном времени",
      "Добавление и удаление часов через интерфейс",
      "Очистка таймеров при удалении компонентов",
      "Адаптивная верстка с использованием CSS Grid и Flexbox",
      "Переиспользуемые React-компоненты"
      ]
    },
    kanban: {
      title: "Kanban-доска",
      short: "Интерактивная доска управления задачами с drag-and-drop карточками и сохранением состояния",
      description: [
      "Kanban-доска - это лёгкое приложение для управления задачами, реализующее канбан-подход к организации рабочего процесса.",
      "Интерфейс состоит из трёх колонок этапов работы, между которыми можно перемещать карточки задач с помощью drag-and-drop.",
      "Состояние доски управляется на стороне клиента и сохраняется в LocalStorage, благодаря чему задачи и их позиции сохраняются после обновления страницы."
      ],
      highlights: [
      "Перемещение карточек между колонками с помощью drag-and-drop",
      "Динамическое создание и удаление карточек задач",
      "Отображение placeholder во время перетаскивания",
      "Хранение состояния доски в LocalStorage",
      "Восстановление интерфейса из состояния после перезагрузки",
      "Интерактивный интерфейс в стиле канбан"
      ],
    },
    fileAPI: {
      title: "RBAC API облачного хранилища",
      short: "Backend-сервис для работы с файлами с реализованной системой разграничения доступа (RBAC).",
      description: [
      "RBAC API облачного хранилища - это backend-сервис для управления файлами пользователей с гибкой системой разграничения доступа на основе ролей.",
      "Приложение реализует аутентификацию, операции с файлами и подсчёт статистики, а также проверку прав доступа на уровне ресурса и конкретного объекта.",
      "Система прав доступа построена на основе данных в базе, что позволяет изменять права динамически без изменения кода."
      ],
      highlights: [
      "Система разграничения доступа (RBAC) с динамическим управлением правами",
      "Проверка доступа на уровне ресурса и конкретного объекта",
      "Операции с файлами: загрузка, удаление, переименование, скачивание",
      "Управление пользователями и ролями через API",
      "Подсчёт статистики хранилища (количество файлов, размер)",
      "Хранение правил доступа в базе данных без изменения кода",
      "Безопасная аутентификация через session + CSRF"
      ]
    }
  },
};