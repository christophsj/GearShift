# Report

## Frontend

### Technologies and Libraries
- **Angular with TypeScript**. Not much explanation needed here.
- **ngQuery**: A data-fetching and state management library for Angular (similar to React Query).

### Structure
The frontend is organized by feature and core components:

- `app/feature/`: Feature-specific components (e.g., `clients` for client-related functionality).
- `app/core/`: Common functionality shared across the application.

### Justification
1. **Angular with TypeScript**: 
   - Strong typing to prevent runtime errors
   - Many built-in tools for routing, forms, dependency injection, change detection etc.
   - Reusable components.

2. **ngQuery**:
   - Allows to implement query and mutation logic and manage its state seperate of components.
   - Helps with error/loading states, infinite paginated queries, side effects, retries, caching etc. 
   - Allows to share state between components (prevents fetching the same query multiple times in different components).

3. **Feature-based Structure**:
   - Improves code organization and makes it easier to maintain and extend features.

## Backend

### Technologies and Libraries
- **Spring Boot**
- **Lombok**
- **MapStruct**
- **Docker Compose**
- **PostgreSQL**
- **JPA**

### Structure
The backend follows the Onion Architecture, organized by:

- Services
- Entities
- Repositories
- Dtos
- Endpoints

### Justification
1. **Spring Boot**:
   - Offers easy configuration using annotations.

2. **Lombok**:
   - Automatically generates getters, setters, constructors, etc. to reduce boilerplate

3. **MapStruct**:
   - Generates mapping code at compile-time, reducing boilerplate code. Mostly for mapping dtos and entities.

4. **Docker Compose**:
   - Simplifies application deployment and environment consistency.
   - Easily integrates with spring boot without managing or configuring a database connection.

5. **PostgreSQL**:
   - Allows for complex and performant queries if the schema was normalized
   - New features requiring new queries can easily be added (in contrast when using a noSQL database with a denormalized schema, this can be harder).

6. **JPA**:
   - Simple database creation, querying and mapping to Java Objects.

7. **Onion Architecture**:
   - Promotes separation of concerns and modularity.
   - Allows for easy swapping of components or technologies if needed by providing interfaces for service and repository classes.
