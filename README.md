# Projeto RPG API - NestJS

API construída com **NestJS**, **TypeScript** e **Mongoose**, com foco na criação e gerenciamento de **personagens** e **itens mágicos**, seguindo regras específicas de validação.

## Tecnologias

- **NestJS**
- **TypeScript**
- **Mongoose**
- **class-validator** (validações customizadas)
- **MongoDB**

## Estrutura de Entidades

### 📌 Personagem

```ts
class CreatePersonagemDto {
  name: string;
  name_adventure: string;
  class: ClasseEnum; // GUERREIRO, MAGO, ARQUEIRO, LADINO, BARDO
  level: number;
  itensMagic: string[]; 
  atribute_force: number; 
  atribute_defense: number;
}
```

### 📌 Itens

```ts
class CreateItensDto {
  name: string;
  tipoItem: TipoItemEnum; // ARMA, ARMADURA, AMULETO
  forca: number;
  defesa: number;
}
```

**Validações importantes:**

- Armas só podem ter força, e **nenhuma defesa**
- Armaduras só podem ter defesa, e **nenhuma força**
- Amuletos são limitados a **1 por personagem**

## Rotas Personagem
| POST   | `/personagem/create`                    | Criar novo personagem               |
| GET    | `/personagem/find`                      | Listar todos personagens            |
| GET    | `/personagem/find/:id`                  | Buscar personagem por ID            |
| DELETE | `/personagem/delete/:id`                | Deletar personagem                  |
| PUT    | `/personagem/update-name/:id`           | Atualizar nome                      |
| POST   | `/personagem/insertion-itens/:id`       | Inserir itens no personagem         |
| GET    | `/personagem/find-itens/:id`            | Buscar itens do personagem          |
| PUT    | `/personagem/delete-itens-character/:id`| Remover todos itens do personagem   |
| GET    | `/personagem/find-amuleto/:id`          | Verificar se possui amuleto         |

## Rotas Itens
| POST   | `/itens/create`                   | Criar novo item               |
| GET    | `/itens/find`                     | Listar todos os itens         |
| GET    | `/itens/find/:id`                 | Buscar item por ID            |
| GET    | `/itens/find-name/:name`          | Buscar item por nome          |
| DELETE | `/itens/delete/:id`               | Deletar item                  |
| PUT    | `/itens/update/:id`               | Atualizar dados do item       |