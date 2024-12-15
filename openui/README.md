
前置：
1. 开启ollama Docker服务
2. 设置OPENAI_API_KEY
```
docker run --rm --name openui -p 7878:7878 -e OPENAI_API_KEY -e OLLAMA_HOST=http://host.docker.internal:11434 ghcr.io/wandb/openui
```

## 访问
- http://localhost:7878/

