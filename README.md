Project Idea: Advanced Diary Application

**Overview**
Develop an advanced diary application that allows users to create, and manage their diary entries. The platform will feature user authentication, categorized notes, archiving, commenting on public diaries, and user management functionalities such as reporting and blocking users.

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

**Backend:**

- NestJS (Node.js framework)
- TypeScript (Type safety)
- Prisma (ORM for PostgreSQL)
- Passport.js (Authentication)

**Database:**

- PostgreSQL (Relational database)

**Other Tools:**

- Docker (Containerization)
- Swagger (API documentation)

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

## License

Nest is [MIT licensed](LICENSE).
