# 使用Docker跑起ollama服务

相当于在本地跑起ollama服务，然后通过api访问。用Docker

# 启动ollama基础服务
```
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

# 拉取模型
```
docker exec -it ollama /bin/bash
ollama pull llama3

```

# 启动服务
```
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Why is the sky blue?"
}'
```

# 查看镜像内模型
```
docker exec -it <container_id> ollama list
```