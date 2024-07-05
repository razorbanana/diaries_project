Project Idea: Advanced Diary Application

**Overview**
Develop an advanced diary application that allows users to create, categorize, and manage their diary entries. The platform will feature user authentication, categorized notes, archiving, commenting on public diaries, and user management functionalities such as reporting and blocking users.

**Key Features**
User Authentication and Authorization: Implement user registration, login, and role-based access control (e.g., user, admin).
Categorized Notes: Users can create and manage notes in different categories (e.g., personal, work, travel).
Archiving: Users can archive notes to keep their diary organized.
Public Diaries and Comments: Users can make certain diary entries public and allow other users to comment on them.
User Reporting: Users can report inappropriate content or behavior.
User Blocking: Users can block other users to prevent interaction.
Notifications: Implement notifications for comments, reports, and other relevant activities.

## Tech Stack

**Frontend:**

- React (UI library)
- TypeScript (Type safety)
- Redux (State management)
- Material-UI (UI components)

**Backend:**

- NestJS (Node.js framework)
- TypeScript (Type safety)
- TypeORM (ORM for PostgreSQL)
- Redis (Caching and session management)
- GraphQL (API query language)
- Passport.js (Authentication)

**Database:**

- PostgreSQL (Relational database)

**Other Tools:**

- Docker (Containerization)
- Jest (Testing framework)
- Swagger (API documentation)
- Socket.IO (Real-time communication)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
