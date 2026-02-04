# CRUD inside containers

## Important commands

### Build and start the backend container
```bash
docker compose up --build
```

### Build and start in background (detached mode)
```bash
docker compose up -d --build
```

### View logs (follow mode)
```bash
docker compose logs -f
```

### View logs for specific service
```bash
docker compose logs -f backend
```

### View latest logs
```bash
docker compose logs --tail=50
```

### Access Django shell with auto-imports
```bash
docker compose exec backend python manage.py shell_plus
```

### Create superuser
```bash
docker compose exec backend python manage.py createsuperuser
```

### Make migrations
```bash
docker compose exec backend python manage.py makemigrations
```

### Apply migrations
```bash
docker compose exec backend python manage.py migrate
```

### Show pending migrations
```bash
docker compose exec backend python manage.py showmigrations
```

### Execute commands in container
```bash
# Access bash shell
docker compose exec backend bash

# Access sh shell
docker compose exec backend sh
```